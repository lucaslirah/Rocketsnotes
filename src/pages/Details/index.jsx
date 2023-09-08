import { Container } from "./styles.js"
import { Button } from "../../components/Button/index.jsx"
export function Details() {
  
  return (
    <Container>
      <h1>Hello, world!</h1>
      <span>Lucas Lira</span>

      <Button title="Login" loading/>
      <Button title="Return"/>
      <Button title="Home"/>
    </Container>
  )
}