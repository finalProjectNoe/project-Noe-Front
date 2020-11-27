import { React, useEffect, useState } from 'react'
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


function LoginParticulier() {

  const [web3State, login] = useState(Web3Context)
  const [noe, setNoe] = useState(null)
  const [inputValue, setInputValue] = useState(0)

  const handleOnClickCreateMember = async () => {
    const CMTX1 = await noe.createMember(inputValue)
  }
  const handleOnClickConnectionMember = async () => {
    const CMTX2 = await noe.connectionMember(inputValue)
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

                  <Input variant="filled" id="fname" placeholder="Adresse ETH" />

                  <Input variant="filled" id="fname" placeholder="Nom" />

                  <Input variant="filled" id="fname" placeholder="Téléphone" />



                  <Button onClick={handleOnClickCreateMember} textTransform='uppercase' colorScheme="teal">Inscription</Button>

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

                  <Button onClick={handleOnClickConnectionMember} textTransform='uppercase' colorScheme="teal">
                    <Link to="/profil_particulier">Connexion</Link>
                  </Button>
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

export default LoginParticulier
