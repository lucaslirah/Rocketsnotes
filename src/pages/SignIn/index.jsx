import { useState } from 'react'
import { Container, Form, Background } from './styles'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { FiMail, FiLock } from 'react-icons/fi'
import { Link } from 'react-router-dom'

import { useAuth } from '../../hooks/auth'

export function SignIn(){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const { signIn } = useAuth()

    function handleSignIn(){
        signIn({ email, password })
    }

    return(
        <Container>
            <Form>
                <h1>Rocketnotes</h1>
                <p>Application to save and manage your useful links.</p>

                <h2>Make your login</h2>

                <Input 
                type="text"
                placeholder='E-mail'
                icon={FiMail}
                onChange={e => setEmail(e.target.value)} 
                />
                <Input 
                type="password"
                placeholder='Password'
                icon={FiLock} 
                onChange={e => setPassword(e.target.value)}
                />

                <Button title="Login" onClick={handleSignIn}/>

                    <Link to="/register">
                        Create an account
                    </Link>
            </Form>

            <Background/>
        </Container>
    )
}