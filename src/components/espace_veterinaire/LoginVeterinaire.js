import React from 'react'
import { Center, Button, Stack, Input, Heading, FormControl, Box } from '@chakra-ui/core'
import { Grid, GridItem } from "@chakra-ui/react"
import { Link } from 'react-router-dom';
import Nav from '../Nav'
import Footer from '../Footer'


function LoginVeterinaire() {

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

                <Input variant="filled" id="fname" placeholder="Adresse ETH" />

                <Input variant="filled" id="fname" placeholder="Nom" />

                <Input variant="filled" id="fname" placeholder="Téléphone" />

                <Input variant="filled" id="fname" placeholder="Diplome" />

                <Button textTransform='uppercase' colorScheme="teal">Inscription</Button>
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

                <Button textTransform='uppercase' colorScheme="teal"><Link to="/profil_veterinaire">Connexion</Link></Button>
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
