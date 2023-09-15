import { FiPlus, FiSearch } from 'react-icons/fi'

import { Container, Brand, Search, Menu, NewNote, Content } from './styles'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { ButtonText } from '../../components/ButtonText'

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
                <Input placeholder="Search by title" icon={FiSearch}/>
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