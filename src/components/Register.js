import React, { useContext, useState, } from 'react'
import { Center, Button, Stack, Input, Heading, FormControl, Box, SimpleGrid, VStack, FormLabel } from '@chakra-ui/core'
// import { Link } from 'react-router-dom';
import Nav from './Nav'
import Footer from './Footer'
import { NoeContext } from '../App'


function Register() {

  const noe = useContext(NoeContext)

  const [inputValueName, setInputValueName] = useState(null)
  const [inputValuePhoneNumber, setInputValuePhoneNumber] = useState(null)
  const [inputValueNameMember, setInputValueNameMember] = useState(null)
  const [inputValuePhoneMember, setInputValuePhoneMember] = useState(null)


  const handleOnClickCreateMember = async () => {
    const CMTX1 = await noe.createMember(inputValueNameMember, inputValuePhoneMember)
  }

  const handleOnClickCreateVeterinary = async () => {
    const CVTX1 = await noe.createVeterinary(inputValueName, inputValuePhoneNumber)
  }

  return (
    <>
      <Nav />
      <VStack py={20} fontFamily="Montserrat">
        <Box my={10} >
          <SimpleGrid columns={[1, 1, 2]} spacing="40px">
            <Box borderWidth="1px" p={50} borderRadius={5}>
              <Center>
                <Heading fontFamily="Montserrat" mb={10}>Inscription Vétérinaires</Heading>
              </Center>
              <FormControl isRequired>
                <Stack>
                  <FormLabel pt={10} htmlFor="nom">Nom</FormLabel >
                  <Input id="nom"
                    value={inputValueName} onChange={(e) => { setInputValueName(e.currentTarget.value) }}
                    variant="filled" placeholder="Nom" />
                  <FormLabel pt={10} htmlFor="mobile">Mobile</FormLabel >
                  <Input mb={20} id="mobile"
                    value={inputValuePhoneNumber} onChange={(e) => { setInputValuePhoneNumber(e.currentTarget.value) }}
                    variant="filled" placeholder="Mobile" aria-label="Mobile" />
                  <Button name="button" _hover={{
                    bg: "teal.500",
                    color: "white",
                  }} bg="brand.900" color="white" textTransform='uppercase' onClick={handleOnClickCreateVeterinary}>Inscription</Button>
                </Stack>
              </FormControl >
            </Box>
            <Box borderWidth="1px" p={50} borderRadius={5}>
              <Center>
                <Heading fontFamily="Montserrat" mb={10}>Inscription Particuliers</Heading>
              </Center>
              <FormControl isRequired >
                <Stack >
                  <FormLabel htmlFor="nom" pt={10}>Nom</FormLabel>
                  <Input id="nom" value={inputValueNameMember} onChange={(e) => { setInputValueNameMember(e.currentTarget.value) }}
                    variant="filled" placeholder="Nom" aria-label="Nom" />
                  <FormLabel htmlFor="mobile" pt={10}>Mobile</FormLabel>
                  <Input mb={20} id="mobile" value={inputValuePhoneMember} onChange={(e) => { setInputValuePhoneMember(e.currentTarget.value) }}
                    variant="filled" placeholder="Mobile" aria-label="Mobile" />
                  <Button name="button" _hover={{
                    bg: "teal.500",
                    color: "white",
                  }} bg="brand.900" color="white" onClick={handleOnClickCreateMember} textTransform='uppercase' >Inscription</Button>
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

export default Register
