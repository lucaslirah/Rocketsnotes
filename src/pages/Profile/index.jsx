import { Container, Form, Avatar } from "./styles"
import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from "react-icons/fi"
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