import React, { useContext, useState } from 'react'
import { Center, Button, Stack, Input, Heading, FormControl, Box, SimpleGrid, VStack } from '@chakra-ui/core'
// import { Link } from 'react-router-dom';
import Nav from '../Nav'
import Footer from '../Footer'
import { NoeContext } from '../../App'

function LoginVeterinaire() {

  const noe = useContext(NoeContext)

  const [inputValueName, setInputValueName] = useState(null)
  const [inputValuePhoneNumber, setInputValuePhoneNumber] = useState(null)


  const handleOnClickCreateVeterinary = async () => {
    const CVTX1 = await noe.createVeterinary(inputValueName, inputValuePhoneNumber)
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
                <Heading mb={10}>Inscription Vétérinaires</Heading>
              </Center>

              <FormControl isRequired>
                <Stack spacing={8} >

                  <Input
                    value={inputValueName} onChange={(e) => { setInputValueName(e.currentTarget.value) }}
                    variant="filled" id="fname" placeholder="Nom" />

                  <Input
                    value={inputValuePhoneNumber} onChange={(e) => { setInputValuePhoneNumber(e.currentTarget.value) }}
                    variant="filled" id="fname" placeholder="Mobile" />

                  <Button textTransform='uppercase' colorScheme="teal" onClick={handleOnClickCreateVeterinary}>Inscription</Button>
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

                  <Button textTransform='uppercase' colorScheme="teal" onClick={handleOnClickConnectionVeterinary}><Link to="/profil_veterinaire">Connexion</Link></Button>
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
