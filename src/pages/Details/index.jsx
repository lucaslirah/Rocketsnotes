import { Container, Links, Content} from "./styles.js"
import { Header } from "../../components/Header"
import { Section } from "../../components/Section"
import { Button } from "../../components/Button"
import { Tag } from "../../components/Tag"
import { ButtonText } from "../../components/ButtonText"


export function Details() {
  
  return (
    <Container>
      <Header/>
      <main>
        <Content>
          <ButtonText title="Delete note"/>

          <h1>React Introduction</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, optio! Aspernatur accusamus inventore assumenda amet provident qui eius voluptas! Voluptatum, temporibus enim in magni quisquam quaerat sint veritatis reiciendis sunt.
          </p>


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
        </Content>
      </main>   
    </Container>
  )
}