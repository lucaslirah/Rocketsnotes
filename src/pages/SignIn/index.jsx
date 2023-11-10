import { Container, Form, Background } from './styles'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { FiMail, FiLock } from 'react-icons/fi'
import { Link } from 'react-router-dom'

import { useContext } from 'react'
import { MyContext } from '../../myContext'

export function SignIn(){

    const data = useContext(MyContext)
    console.log("Meu contexto =>", data)

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
                />
                <Input 
                type="password"
                placeholder='Password'
                icon={FiLock} 
                />

                <Button title="Login"/>

                    <Link to="/register">
                        Create an account
                    </Link>
            </Form>

            <Background/>
        </Container>
    )
}