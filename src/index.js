import React from 'react'
import ReactDOM from 'react-dom'
import reportWebVitals from './reportWebVitals'
import { ChakraProvider } from '@chakra-ui/core'
import 'focus-visible/dist/focus-visible'
import App from './App'
import { Web3Provider } from "web3-hooks"
import { extendTheme, GlobalStyle } from "@chakra-ui/react"

const theme = extendTheme({
  colors: {
    brand: {
      100: '#246A73',
      900: '#008485'
    },
    beige: {
      100: '#F3DFC1',
    },
  },

  style: {
    global: {
      "html, body": {
        fontFamily: 'Montserrat, sans-serif, sans-serif',
      },
    },
  },
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
