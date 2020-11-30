import React from 'react'
import ReactDOM from 'react-dom'
import reportWebVitals from './reportWebVitals'
import { ChakraProvider } from '@chakra-ui/core'
import 'focus-visible/dist/focus-visible'
import App from './App'
import { Web3Provider } from './hooks/useWeb3'
import { extendTheme, GlobalStyle } from "@chakra-ui/react"

const theme = extendTheme({
  colors: {
    brand: {
      100: '#246A73',
      900: '#368F8B'
    },
    bad: {
      100: '#F3DFC1',
    },
    purple: {
      100: '#0B2027',
    },
  },

  style: {
    fontFamily: 'Montserrat, sans-serif',
  }
})

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme} resetCSS={true}>
      <GlobalStyle style={theme} />
      <Web3Provider>
        <App />
      </Web3Provider>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
