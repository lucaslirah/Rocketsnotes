import { Container, Brand, Search, Menu, NewNote, Content } from './styles'
import { Header } from '../../components/Header'
import { ButtonText } from '../../components/ButtonText'
import { FiPlus } from 'react-icons/fi'

export function Home(){
    return(
        <Container>
            <Brand>
                <h1>Rocketnotes</h1>
            </Brand>

            <Header/>
   
            <Menu>
                <li>
                    <ButtonText title="Sample" $isactive/>
                </li>
                <li>
                    <ButtonText title="Sample1"/>
                </li>
                <li>
                    <ButtonText title="Sample2"/>
                </li>
            </Menu>

            <Search>
            </Search>
                   
            <Content>
            </Content>

            <NewNote>
                <FiPlus/>
                Create note
            </NewNote>        
        </Container>
    )
}