import { Container, Form } from './styles'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { Section } from '../../components/Section'
import { NoteItem } from '../../components/NoteItem'
import { Textarea } from '../../components/Textarea'

export function New() {
    return(
        <Container>
            <Header />

            <main>
                <Form>
                    <header>
                        <h1>Create note</h1>
                        <a href="/">Back</a>
                    </header>

                    <Input placeholder="Title" />

                    <Textarea placeholder="Comments"/>

                    <Section title="Usefull Links">
                        <NoteItem value="http://github.com/lucaslirah"/>
                        <NoteItem isNew placeholder="New link"/>
                    </Section>
                </Form>
            </main>
        </Container>
    )
}