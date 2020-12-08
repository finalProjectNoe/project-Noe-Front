import React, { useContext, useState } from 'react'
import { Center, Button, Stack, Input, Heading, FormControl, Box, SimpleGrid, VStack, FormLabel } from '@chakra-ui/core'
// import { Link } from 'react-router-dom';
import Nav from '../Nav'
import Footer from '../Footer'
import { NoeContext } from '../../App'

function LoginVeterinaire() {

  const noe = useContext(NoeContext)

  const [inputValueName, setInputValueName] = useState(null)
  const [inputValuePhoneNumber, setInputValuePhoneNumber] = useState(null)
  const [inputValueAdressVet, setInputValueAdressVet] = useState(null)
  const [inputValueNameCoVet, setInputValueNameCoVet] = useState(null)


  const handleOnClickCreateVeterinary = async () => {
    const CVTX1 = await noe.createVeterinary(inputValueName, inputValuePhoneNumber)
  }

  const handleOnClickConnectionVeterinary = async () => {
    const CVTX2 = await noe.connectionVeterinary(inputValueAdressVet, inputValueNameCoVet)
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
                <Heading fontFamily="Montserrat" mb={10}>Connexion</Heading>
              </Center>
              <FormControl isRequired>
                <Stack >
                  <FormLabel pt={10} htmlFor="adresse-ETH" >ETH</FormLabel>
                  <Input id="adresse-ETH" value={inputValueAdressVet} onChange={(e) => { setInputValueAdressVet(e.currentTarget.value) }}
                    variant="filled" placeholder="Adresse ETH" />
                  <FormLabel pt={10} htmlFor="Nom">Nom</FormLabel>
                  <Input mb={20} id="Nom" value={inputValueNameCoVet} onChange={(e) => { setInputValueNameCoVet(e.currentTarget.value) }}
                    variant="filled" placeholder="Nom" />
                  <Button _hover={{
                    bg: "teal.500",
                    color: "white",
                  }} bg="brand.900" color="white" name="button" textTransform='uppercase' onClick={handleOnClickConnectionVeterinary}>Connexion</Button>
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
