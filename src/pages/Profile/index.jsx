import { Container, Form } from "./styles"
import { FiArrowLeft, FiUser, FiMail, FiLock } from "react-icons/fi"
import { Button } from "../../components/Button"
import { Input } from "../../components/Input"

export function Profile(){
    return(
        <Container>
            <header>
                <a href="/">
                    <FiArrowLeft/>
                </a>
            </header>

            <Form>
                <Input
                type="text"
                placeholder="Name"
                icon={FiUser}
                />
                <Input
                type="text"
                placeholder="E-mail"
                icon={FiMail}
                />
                <Input
                type="password"
                placeholder="Old Password"
                icon={FiLock}
                />
                <Input
                type="password"
                placeholder="Current Password"
                icon={FiLock}
                />

                <Button title="Save"/>
            </Form>
        </Container>
    )
}