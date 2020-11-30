import React from 'react'
import {
  Noe_address,
  Noe_abi,
} from './contracts/NoeContract'
import { useContract } from './hooks/useContract'
import Dapp from './Dapp'

export const NoeContext = React.createContext(null)

function App() {
  const noe = useContract(Noe_address, Noe_abi)

  return (
    <NoeContext.Provider value={noe}>
      <Dapp />
    </NoeContext.Provider>
  )
}

export default App
