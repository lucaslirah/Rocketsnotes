import { Container, Brand, Search, Menu, NewNote, Content } from './styles'
import { Header } from '../../components/Header'

export function Home(){
    return(
        <Container>
            <Brand>
                <h1>Rocketnotes</h1>
            </Brand>

            <Header/>
   
            <Menu>
            </Menu>

            <Search>
            </Search>
                   
            <Content>
            </Content>

            <NewNote>
            </NewNote>        
        </Container>
    )
}