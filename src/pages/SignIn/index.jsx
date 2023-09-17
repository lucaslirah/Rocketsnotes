import { Container, Form } from './styles'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { FiMail, FiLock } from 'react-icons/fi'

export function SignIn(){
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

                <a href="#">
                    Create an account
                </a>
            </Form>
        </Container>
    )
}