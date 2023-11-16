import { Container, Links, Content} from "./styles.js"
import { Header } from "../../components/Header"
import { Section } from "../../components/Section"
import { Button } from "../../components/Button"
import { Tag } from "../../components/Tag"
import { ButtonText } from "../../components/ButtonText"

import { api } from '../../services/api.js'
import { useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'

export function Details() {

  const navigate = useNavigate()
  const params = useParams()

  const [data, setData] = useState(null)
  
  async function handleRemove(){
    const confirm = window.confirm("Quer realemente excluir a nota?")
    
    if(confirm){
      await api.delete(`/notes/${params.id}`)
      navigate('/')
    }
  }

  function handleBack(){
    navigate(-1)
  }

  useEffect(() => {
    async function fetchNote(){
      const response = await api.get(`/notes/${params.id}`)
      setData(response.data)
    }
    fetchNote()
  }, [])

  return (
    <Container>
      <Header/>

    {data &&   
        <main>
        <Content>
          <ButtonText
          title="Excluir"
          onClick={handleRemove}
          />

          <h1>{data.title}</h1>

          <p>{data.description}</p>

          {
            data.links &&
            <Section title="Links úteis">
              {
                data.links.map(link => (
                  <Links>
                    <li key={link.id}>
                      <a 
                      href={link.url}
                      target='_blank'
                      >
                        {link.url}
                      </a>
                    </li>
                  </Links>
                ))
              }
            </Section>
          }
          {
            data.tags &&
            <Section title="Marcadores">
              {
                data.tags.map( tag => (
                  <Tag 
                  title={tag.name}
                  />
                ))
              }
            </Section>
          }

          <Button 
          title="Voltar"
          onClick={handleBack}
          />
        </Content>
      </main>
      
      }   
    </Container>
  )
}