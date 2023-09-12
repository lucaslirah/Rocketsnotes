import { RiShutDownLine } from 'react-icons/ri'
import { Container, Profile, Logout } from './styles'

export function Header(){
    return(
        <Container>
            <Profile>
                <img src="https://github.com/lucaslirah.png"
                alt="User's photo."/>
                <div>
                    <span>Welcome</span>
                    <strong>Lucas Lira</strong>
                </div>
            </Profile>
            <Logout>
                <RiShutDownLine/>
            </Logout>
        </Container>
    )
}