import { Container, Profile, Logout } from './styles'
import { RiShutDownLine } from 'react-icons/ri'

import { useAuth } from '../../hooks/auth'

export function Header(){

    const { signOut } = useAuth()

    return(
        <Container>
            <Profile to="/profile">
                <img src="https://github.com/lucaslirah.png"
                alt="User's photo."/>
                <div>
                    <span>Welcome</span>
                    <strong>Lucas Lira</strong>
                </div>
            </Profile>
            <Logout>
                <RiShutDownLine onClick={signOut}/>
            </Logout>
        </Container>
    )
}