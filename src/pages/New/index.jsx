import { NoteItem } from '../../components/NoteItem'
import { Textarea } from '../../components/Textarea'
import { Section } from '../../components/Section'
import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { Container, Form } from './styles'
import { Link } from 'react-router-dom'

export function New() {
    return(
        <Container>
            <Header />

            <main>
                <Form>
                    <header>
                        <h1>Create note</h1>
                        <Link to="/">Back</Link>
                    </header>

                    <Input placeholder="Title" />

                    <Textarea placeholder="Comments"/>

                    <Section title="Usefull Links">
                        <NoteItem value="http://github.com/lucaslirah"/>
                        <NoteItem isNew placeholder="New link"/>
                    </Section>

                    <Section title="Markers">
                        <div className="tags">
                            <NoteItem value="react"/>
                            <NoteItem isNew placeholder="New tag"/>
                        </div>
                    </Section>

                    <Button title="Save"/>
                </Form>
            </main>
        </Container>
    )
}