import { Container, Brand, Search, Menu, NewNote, Content } from './styles'
import { ButtonText } from '../../components/ButtonText'
import { Section } from '../../components/Section'
import { FiPlus, FiSearch } from 'react-icons/fi'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { Note } from '../../components/Note'

import { useState, useEffect } from 'react'
import { api } from '../../services/api'

export function Home(){
    const [tags, setTags] = useState([])

    useEffect(() =>{
        async function fetchTags(){
            const response = await api.get("/tags", tags)
            setTags(response.data)
        }
        fetchTags()
    }, [])

    return(
        <Container>
            <Brand>
                <h1>Rocketnotes</h1>
            </Brand>

            <Header/>
   
            <Menu>
                <li>
                    <ButtonText title="Todos" $isactive/>
                </li>
                
                {
                    tags && tags.map(tag => (
                        <li key={tag.id}>
                            <ButtonText title={tag.name}/>
                        </li>
                    ))
                }
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