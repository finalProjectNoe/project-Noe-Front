import React, { useContext, useState, useEffect } from 'react'
import { Center, Button, Stack, Input, Heading, FormControl, Box } from '@chakra-ui/core'
import { Grid, GridItem } from "@chakra-ui/react"
import { Link } from 'react-router-dom';
import Nav from '../Nav'
import Footer from '../Footer'
import { ethers } from 'ethers'
import { Web3Context } from '../../hooks/useWeb3'
import {
  Noe_address,
  Noe_abi,
} from '../../contracts/NoeContract'


function LoginVeterinaire() {

  const [web3State, login] = useContext(Web3Context)
  const [noe, setNoe] = useState(null)
  const [inputValue, setInputValue] = useState(0)
  const [inputValueAdress, setInputValueAdress] = useState(null)
  const [inputValueName, setInputValueName] = useState(null)
  const [inputValuePhoneNumber, setInputValuePhoneNumber] = useState(null)
  // const [inputValueAdressCode, setInputValuePostalCode] = useState()
  // const [inputValueCity, setInputValueCity] = useState()
  // const [inputValueDiploma, setInputValueDiploma] = useState()


  const handleOnClickCreateVeterinary = async () => {
    const CVTX1 = await noe.createVeterinary(inputValueAdress, inputValueAdress, inputValuePhoneNumber)
  }

  const handleOnClickConnectionVeterinary = async () => {
    const CVTX2 = await noe.connectionVeterinary(inputValue)
  }

  useEffect(() => {
    if (web3State.signer !== null) {
      setNoe(
        new ethers.Contract(
          Noe_address,
          Noe_abi,
          web3State.signer
        )
      )
    }
  }, [web3State.signer])

  return (
    <>
      <Nav />
      <Box my={10} mx={5} >
        <Grid m='auto' templateColumns="repeat(12, 1fr)" templateRows="repeat(3, 1fr)" gap={30}>

          <GridItem borderWidth="1px" borderRadius={5} p={50} colStart={2} colSpan={4} rowSpan={3}>

            <Center>
              <Heading mb={10}>Inscription</Heading>
            </Center>

            <FormControl isRequired>
              <Stack spacing={8} >

                <Input 
                value={inputValueAdress} onChange={(e) => {setInputValueAdress(e.currentTarget.value)}} 
                variant="filled" id="fname" placeholder="Adresse ETH" />  

                <Input 
                value={inputValueName} onChange={(e) => {setInputValueName(e.currentTarget.value)}} 
                variant="filled" id="fname" placeholder="Nom" />

                <Input 
                value={inputValuePhoneNumber} onChange={(e) => {setInputValuePhoneNumber(e.currentTarget.value)}} 
                variant="filled" id="fname" placeholder="Mobile" />


                {/* {<Input 
                value={inputValuePostalCode} onChange={(e) => {setInputValuePostalCode(e.currentTarget.value)}} 
                variant="filled" id="fname" placeholder="Adresse postal" />} */}

                {/* <Input 
                value={inputValuePostalCode} onChange={(e) => {setInputValuePostalCode(e.currentTarget.value)}} 
                variant="filled" id="fname" placeholder="Code postal" />

                <Input 
                value={inputValueCity} onChange={(e) => {setInputValueCity(e.currentTarget.value)}} 
                variant="filled" id="fname" placeholder="Ville" />

                <Input 
                value={inputValueDiploma} onChange={(e) => {setInputValueDiploma(e.currentTarget.value)}} 
                variant="filled" id="fname" placeholder="Diplome" /> */}

                <Button textTransform='uppercase' colorScheme="teal" onClick={handleOnClickCreateVeterinary}>Inscription</Button>
              </Stack>
            </FormControl >

          </GridItem>

          <GridItem borderWidth="1px" p={50} borderRadius={5} colStart={8} colSpan={4} rowSpan={3}>

            <Center>
              <Heading mb={10}>Connexion</Heading>
            </Center>

            <FormControl isRequired>
              <Stack spacing={50} >

                <Input variant="filled" id="fname" placeholder="Adresse ETH" />

                <Input variant="filled" id="fname" placeholder="Nom-Prénom" />

                <Button textTransform='uppercase' colorScheme="teal" onClick={handleOnClickConnectionVeterinary}>Connexion</Button>
              </Stack>
            </FormControl >

          </GridItem>
        </Grid>
      </Box>
      <Footer />

</>
  )
}

export default LoginVeterinaire
