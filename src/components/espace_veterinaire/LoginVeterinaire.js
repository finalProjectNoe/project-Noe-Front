import React, { useContext, useState, useEffect } from 'react'
import { Center, Button, Stack, Input, Heading, FormControl, Box, SimpleGrid, VStack } from '@chakra-ui/core'
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
      <VStack py={20}>
        <Box my={10}>
          <SimpleGrid columns={[1, 1, 2]} spacing="40px">

            <Box borderWidth="1px" p={50} borderRadius={5}>

              <Center>
                <Heading mb={10}>Inscription</Heading>
              </Center>

              <FormControl isRequired>
                <Stack spacing={8} >

                  <Input
                    value={inputValueAdress} onChange={(e) => { setInputValueAdress(e.currentTarget.value) }}
                    variant="filled" id="fname" placeholder="Adresse ETH" />

                  <Input
                    value={inputValueName} onChange={(e) => { setInputValueName(e.currentTarget.value) }}
                    variant="filled" id="fname" placeholder="Nom" />

                  <Input
                    value={inputValuePhoneNumber} onChange={(e) => { setInputValuePhoneNumber(e.currentTarget.value) }}
                    variant="filled" id="fname" placeholder="Mobile" />

                  <Input variant="filled" id="fname" placeholder="Diplome" />

                  <Button textTransform='uppercase' colorScheme="teal" onClick={handleOnClickCreateVeterinary}>Inscription</Button>
                </Stack>
              </FormControl >

            </Box>

            <Box borderWidth="1px" p={50} borderRadius={5}>

              <Center>
                <Heading mb={10}>Connexion</Heading>
              </Center>

              <FormControl isRequired>
                <Stack spacing={50} >

                  <Input variant="filled" id="fname" placeholder="Adresse ETH" />

                  <Input variant="filled" id="fname" placeholder="Nom" />

                  <Button textTransform='uppercase' colorScheme="teal" onClick={handleOnClickConnectionVeterinary}><Link to="/profil_veterinaire">Connexion</Link></Button>
                </Stack>
              </FormControl >

            </Box>
          </SimpleGrid>
        </Box>
      </VStack>
      <Footer />
    </>
  )
}

export default LoginVeterinaire
