import React from 'react'
import { Center, Button, Stack, Input, Heading, FormControl, Box, SimpleGrid, VStack } from '@chakra-ui/core'
import { Link } from 'react-router-dom';
import Nav from '../Nav'
import Footer from '../Footer'


function LoginVeterinaire() {

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

                  <Input variant="filled" id="fname" placeholder="Diplome" />

                  <Button textTransform='uppercase' colorScheme="teal">Inscription</Button>
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

                  <Button textTransform='uppercase' colorScheme="teal"><Link to="/profil_veterinaire">Connexion</Link></Button>
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
