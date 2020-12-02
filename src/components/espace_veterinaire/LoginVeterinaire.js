import React, { useContext, useState } from 'react'
import { Center, Button, Stack, Input, Heading, FormControl, Box, SimpleGrid, VStack, FormLabel } from '@chakra-ui/core'
// import { Link } from 'react-router-dom';
import Nav from '../Nav'
import Footer from '../Footer'
import { NoeContext } from '../../App'

function LoginVeterinaire() {

  const noe = useContext(NoeContext)

  const [inputValueAdress, setInputValueAdress] = useState(null)
  const [inputValueName, setInputValueName] = useState(null)
  const [inputValuePhoneNumber, setInputValuePhoneNumber] = useState(null)


  const handleOnClickCreateVeterinary = async () => {
    const CVTX1 = await noe.createVeterinary(inputValueAdress, inputValueAdress, inputValuePhoneNumber)
  }

  // const handleOnClickConnectionVeterinary = async () => {
  //   const CVTX2 = await noe.connectionVeterinary(inputValue)
  // }

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
                <Stack>
                  <FormLabel htmlFor="ETH" pt={5}>ETH</FormLabel >
                  <Input id='ETH'
                    value={inputValueAdress} onChange={(e) => { setInputValueAdress(e.currentTarget.value) }}
                    variant="filled" placeholder="Adresse ETH" aria-label="Adresse ETH" />

                  <FormLabel htmlFor="nom" pt={5}>Nom</FormLabel >
                  <Input id="nom"
                    value={inputValueName} onChange={(e) => { setInputValueName(e.currentTarget.value) }}
                    variant="filled" placeholder="Nom" />

                  <FormLabel htmlFor="mobile" pt={5}>Mobile</FormLabel >
                  <Input id="mobile"
                    value={inputValuePhoneNumber} onChange={(e) => { setInputValuePhoneNumber(e.currentTarget.value) }}
                    variant="filled" placeholder="Mobile" aria-label="Mobile" />

                  <Button name="button" _hover={{
                    bg: "teal.500",
                    color: "white",
                  }} bg="brand.900" color="white" textTransform='uppercase' onClick={handleOnClickCreateVeterinary}>Inscription</Button>
                </Stack>
              </FormControl >

            </Box>

            {/* <Box borderWidth="1px" p={50} borderRadius={5}>

              <Center>
                <Heading mb={10}>Connexion</Heading>
              </Center>

              <FormControl isRequired>
                <Stack spacing={50} >

                  <Input variant="filled" id="fname" placeholder="Adresse ETH" />

                  <Input variant="filled" id="fname" placeholder="Nom" />

                  <Button name="button" textTransform='uppercase' colorScheme="teal" onClick={handleOnClickConnectionVeterinary}><Link to="/profil_veterinaire">Connexion</Link></Button>
                </Stack>
              </FormControl >

            </Box> */}
          </SimpleGrid>
        </Box>
      </VStack>
      <Footer />
    </>
  )
}

export default LoginVeterinaire
