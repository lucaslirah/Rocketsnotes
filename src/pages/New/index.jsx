import { useState } from 'react'
import { NoteItem } from '../../components/NoteItem'
import { Textarea } from '../../components/Textarea'
import { Section } from '../../components/Section'
import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { Container, Form } from './styles'
import { Link } from 'react-router-dom'

import { api } from '../../services/api'
import { useNavigate } from 'react-router-dom'

export function New() {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    const [links, setLinks] = useState([])
    const [newLink, setNewLink] = useState("")

    const [tags, setTags] = useState([])
    const [newTag, setNewTag] = useState("")

    const navigate = useNavigate()

    function handleAddLink(){
        setLinks(prevState => [...prevState, newLink])
        setNewLink("")
    }
    function handleRemoveLink(deleted){
        setLinks(prevState => prevState.filter(link => link !== deleted))
    }

    function handleAddTag(){
        setTags(prevState => [...prevState, newTag])
        setNewTag("")
    }
    function handleRemoveTag(deleted){
        setTags(prevState => prevState.filter(tag => tag !== deleted))
    }

    async function handleNewNote(){
        await api.post("/notes", {
            title,
            description,
            tags,
            links
        })
        
        alert("Nota criada com sucesso!")

        navigate("/")
    }

    return(
        <Container>
            <Header />

            <main>
                <Form>
                    <header>
                        <h1>Create note</h1>
                        <Link to="/">Back</Link>
                    </header>

                    <Input 
                    placeholder="Title"
                    onChange={e => setTitle(e.target.value)}
                    />

                    <Textarea 
                    placeholder="Comments"
                    onChange={e => setDescription(e.target.value)}
                    />

                    <Section title="Usefull Links">
                        {
                            links.map((link, index) => (
                                <NoteItem
                                key={String(index)}
                                value={link}
                                onClick={() => {handleRemoveLink(link)}}
                                />
                            ))
                        }
                        <NoteItem 
                        $isnew
                        placeholder="New link"
                        value={newLink}
                        onChange={e => setNewLink(e.target.value)}
                        onClick={handleAddLink}
                        />
                    </Section>

                    <Section title="Markers">
                        <div className="tags">
                            {
                                tags.map((tag, index) => (
                                    <NoteItem
                                    $tagItem
                                    key={index}
                                    value={tag}
                                    onClick={() => {handleRemoveTag(tag)}} 
                                    />
                                ))
                            }

                            <NoteItem 
                            $tagItem
                            $isnew 
                            placeholder="New tag"
                            value={newTag}
                            onChange={e => setNewTag(e.target.value)}
                            onClick={handleAddTag}
                            />
                        </div>
                    </Section>

                    <Button 
                    title="Save"
                    onClick={handleNewNote}
                    />
                </Form>
            </main>
        </Container>
    )
}