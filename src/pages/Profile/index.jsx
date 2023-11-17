import { useState } from 'react'
import { useAuth } from '../../hooks/auth'
import { api } from '../../services/api'

import avatarPlaceholder from '../../assets/avatar_placeholder.svg'

import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from "react-icons/fi"
import { Container, Form, Avatar } from "./styles"
import { Button } from "../../components/Button"
import { Input } from "../../components/Input"
import { useNavigate } from 'react-router-dom'

export function Profile(){

    const { user, updateProfile } = useAuth()
    
    const [name, setName] = useState(user.name)
    const [email, setEmail] = useState(user.email)
    const [passwordOld, setPasswordOld] = useState("")
    const [passwordNew, setPasswordNew] = useState("")

    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder

    const [avatar, setAvatar] = useState(avatarUrl)
    const [avatarFile, setAvatarFile] = useState(null)

    const navigate = useNavigate()

    async function handleUpdate(){
        const updated = {
            name,
            email,
            password: passwordNew,
            old_password: passwordOld
        }
        const userUpdated = Object.assign(user, updated)
        console.log(userUpdated)
        await updateProfile({ user: userUpdated, avatarFile })
    }

    function handleChangeAvatar(event){
        const file = event.target.files[0]
        setAvatarFile(file)

        const imagePreview = URL.createObjectURL(file)
        setAvatar(imagePreview)
    }

    function handleBack(){
        navigate(-1)
    }
    return(
        <Container>
            <header>
                <button
                type='button'
                onClick={handleBack}
                >
                    <FiArrowLeft size={24}/>
                </button>
            </header>

            <Form>
                <Avatar>
                    <img src={avatar} alt="imagem do usuário"/>

                    <label htmlFor="avatar">
                        <FiCamera/>
                        <input 
                        id="avatar" 
                        type="file"
                        onChange={handleChangeAvatar}
                        />
                    </label>
                </Avatar>
                
                <Input
                type="text"
                placeholder="Nome"
                icon={FiUser}
                onChange={e => setName(e.target.value)}
                value={name}
                />
                <Input
                type="text"
                placeholder="E-mail"
                icon={FiMail}
                onChange={e => setEmail(e.target.value)}
                value={email}
                />
                <Input
                type="password"
                placeholder="Senha atual"
                icon={FiLock}
                onChange={e => setPasswordOld(e.target.value)}
                />
                <Input
                type="password"
                placeholder="Nova senha"
                icon={FiLock}
                onChange={e => setPasswordNew(e.target.value)}
                />

                <Button title="Salvar" onClick={handleUpdate}/>
            </Form>
        </Container>
    )
}