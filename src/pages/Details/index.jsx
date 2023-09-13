import { Container, Links} from "./styles.js"
import { Header } from "../../components/Header"
import { Section } from "../../components/Section"
import { Button } from "../../components/Button"
import { Tag } from "../../components/Tag"

export function Details() {
  
  return (
    <Container>
      <Header/>
      <Section title="Useful Links">
        <Links>
          <li><a href="#">https://www.rocketseat.com.br/</a></li>
          <li><a href="#">https://www.rocketseat.com.br/</a></li>
        </Links>
      </Section>
      <Section title="Markers">
        <Tag title="nodejs"/>
        <Tag title="express"/>
      </Section>
      <Button title="Return"/>
    </Container>
  )
}