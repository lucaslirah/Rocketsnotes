import { Container, Form, Background } from './styles'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { FiMail, FiLock, FiUser } from 'react-icons/fi'

export function SignUp(){
    return(
        <Container>
            <Background/>

            <Form>
                <h1>Rocketnotes</h1>
                <p>Application to save and manage your useful links.</p>

                <h2>Create your account</h2>

                <Input 
                type="text"
                placeholder='Name'
                icon={FiUser} 
                />
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

                <Button title="Register"/>

                <a href="#">
                    Back to login
                </a>
            </Form>
        </Container>
    )
}