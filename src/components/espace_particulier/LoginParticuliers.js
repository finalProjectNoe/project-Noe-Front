import { React, useEffect, useState } from 'react'
import { Center, Button, Stack, Input, Heading, FormControl, Box, } from '@chakra-ui/core'
import { Link } from 'react-router-dom';
import { Grid, GridItem } from "@chakra-ui/react"
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

  // const [inputValueAdressMember, setInputValueAdressMember] = useState(null)
  const [inputValueNameMember, setInputValueNameMember] = useState(null)
  const [inputValuePhoneMember, setInputValuePhoneMember] = useState(null)

  const handleOnClickCreateMember = async () => {
    const CMTX1 = await noe.createMember(inputValueNameMember, inputValuePhoneMember)
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
      <Box my={10} mx={5}>
        <Grid m='auto' templateColumns="repeat(12, 1fr)" templateRows="repeat(3, 1fr)" gap={30}>

          <GridItem borderWidth="1px" p={50} borderRadius={5} colStart={2} colSpan={4} rowSpan={3}>

            <Center>
              <Heading mb={10}>Inscription</Heading>
            </Center>

            <FormControl isRequired>
              <Stack spacing={8} >
{/* 
                <Input value={inputValueAdressMember} onChange={(e) => {setInputValueAdressMember(e.currentTarget.value)}}
                variant="filled" id="fname" placeholder="Adresse ETH" /> */}

                <Input value={inputValueNameMember} onChange={(e) => {setInputValueNameMember(e.currentTarget.value)}} 
                variant="filled" id="fname" placeholder="Nom" />

                <Input value={inputValuePhoneMember} onChange={(e) => {setInputValuePhoneMember(e.currentTarget.value)}} 
                variant="filled" id="fname" placeholder="Mobile" />

                {/* <Input variant="filled" id="fname" placeholder="Code postal" />

                <Input variant="filled" id="fname" placeholder="Ville" /> */}

                <Button textTransform='uppercase' colorScheme="teal" onClick={handleOnClickCreateMember}>Inscription</Button>

                <Button onClick={handleOnClickCreateMember} textTransform='uppercase' colorScheme="teal">Inscription</Button>

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

                <Input variant="filled" id="fname" placeholder="Nom" />

                <Button textTransform='uppercase' colorScheme="teal" onClick={handleOnClickConnectionMember}>Connexion</Button>
              </Stack>
            </FormControl >

          </GridItem>
        </Grid>
      </Box>
      <Footer />
    </>
  )
}

export default LoginParticulier
