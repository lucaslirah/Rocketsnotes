import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from "styled-components"
import GlobalStyles from './styles/global'
import theme from './styles/theme'
import { Routes } from './routes'

import { MyContext } from './myContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={ theme }>
      <GlobalStyles/>
        <MyContext.Provider value={{email: "lucaslira@gmail.com"}}>
          <Routes/>
        </MyContext.Provider>
    </ThemeProvider>
  </React.StrictMode>,
)