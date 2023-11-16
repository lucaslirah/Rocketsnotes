import { Container, Brand, Search, Menu, NewNote, Content } from './styles'
import { ButtonText } from '../../components/ButtonText'
import { Section } from '../../components/Section'
import { FiPlus, FiSearch } from 'react-icons/fi'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { Note } from '../../components/Note'

import { useState, useEffect } from 'react'
import { api } from '../../services/api'

import { useNavigate } from 'react-router-dom'

export function Home(){
    const [tags, setTags] = useState([])
    const [tagsSelected, setTagsSelected] = useState([])

    const [search, setSearch] = useState("")
    const [notes, setNotes] = useState([])

    const navigate = useNavigate()

    function handleTagsSelected(tagName){
        const alreadyTagSelected = tagsSelected.includes(tagName)

        if(tagName === "all"){
            return setTagsSelected([])
        }

        if(alreadyTagSelected){
            const filteredTags = tagsSelected.filter(tag => tag !== tagName)
            setTagsSelected(filteredTags)
        }else{
            setTagsSelected(prevState => [...prevState, tagName])
        }
    }

    function handleDetails(id){
        navigate(`/details/${id}`)
    }

    useEffect(() =>{
        async function fetchTags(){
            const response = await api.get("/tags", tags)
            setTags(response.data)
        }
        fetchTags()
    }, [])

    useEffect(() =>{
        async function fetchNotes(){
            const response = await api.get(`/notes?title=${search}&tags=${tagsSelected}`)
            setNotes(response.data)
        }
        fetchNotes()
    }, [tagsSelected, search])

    return(
        <Container>
            <Brand>
                <h1>Rocketnotes</h1>
            </Brand>

            <Header/>
   
            <Menu>
                <li>
                    <ButtonText 
                    title="Todos" 
                    onClick={() => handleTagsSelected("all")}
                    $isactive={tagsSelected.length === 0}
                    />
                </li>

                {
                    tags && tags.map(tag => (
                        <li key={tag.id}>
                            <ButtonText 
                            title={tag.name}
                            onClick={() => handleTagsSelected(tag.name)}
                            $isactive={tagsSelected.includes(tag.name)}
                            />
                        </li>
                    ))
                }
            </Menu>

            <Search>
                <Input 
                placeholder="Procurar por título" 
                icon={FiSearch}
                onChange={e => setSearch(e.target.value)}
                />
            </Search>
                   
            <Content>
                <Section title="Minhas notas">
                    {
                        notes.map(note => (
                            <Note
                            key={String(note.id)}
                            data={note}
                            onClick={() =>{handleDetails(note.id)}}
                            />
                        ))
                    }
                    {/* 
                    <Note data={{
                        title: "API concepts",
                        tags: [
                            {id: '1', name: 'NodeJS'},
                            {id: '2', name: 'Javascript'}
                        ]
                    }}
                    />
                    */}
                </Section>
            </Content>

            <NewNote to="/new">
                <FiPlus/>
                Criar nota
            </NewNote>        
        </Container>
    )
}