import { Container, Brand, Search, Menu, NewNote, Content } from './styles'
import { ButtonText } from '../../components/ButtonText'
import { Section } from '../../components/Section'
import { FiPlus, FiSearch } from 'react-icons/fi'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { Note } from '../../components/Note'

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
                <Section title="My notes">
                    <Note data={{
                        title: "API concepts",
                        tags: [
                            {id: '1', name: 'NodeJS'},
                            {id: '2', name: 'Javascript'}
                        ]
                    }}/>
                </Section>
            </Content>

            <NewNote to="/new">
                <FiPlus/>
                Create note
            </NewNote>        
        </Container>
    )
}