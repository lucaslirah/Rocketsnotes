import { useState } from 'react'
import { useAuth } from '../../hooks/auth'

import { Container, Form, Avatar } from "./styles"
import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from "react-icons/fi"
import { Button } from "../../components/Button"
import { Input } from "../../components/Input"
import { Link } from 'react-router-dom'

export function Profile(){

    const { user } = useAuth()

    const [name, setName] = useState(user.name)
    const [email, setEmail] = useState(user.email)
    const [passwordOld, setPasswordOld] = useState()
    const [passwordNew, setPasswordNew] = useState()

    return(
        <Container>
            <header>
                <Link to="/">
                    <FiArrowLeft/>
                </Link>
            </header>

            <Form>
                <Avatar>
                    <img src="https://github.com/lucaslirah.png" alt="user's image"/>

                    <label htmlFor="avatar">
                        <FiCamera/>
                        <input id="avatar" type="file"/>
                    </label>
                </Avatar>
                
                <Input
                type="text"
                placeholder="Name"
                icon={FiUser}
                onChange={e => setName(e.targe.value)}
                value={name}
                />
                <Input
                type="text"
                placeholder="E-mail"
                icon={FiMail}
                onChange={e => setEmail(e.targe.value)}
                value={email}
                />
                <Input
                type="password"
                placeholder="Current Password"
                icon={FiLock}
                onChange={e => setPasswordOld(e.targe.value)}
                />
                <Input
                type="password"
                placeholder="New Password"
                icon={FiLock}
                onChange={e => setPasswordNew(e.targe.value)}
                />

                <Button title="Save"/>
            </Form>
        </Container>
    )
}