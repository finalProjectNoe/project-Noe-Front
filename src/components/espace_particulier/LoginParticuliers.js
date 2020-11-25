import React from 'react'
import { Center, Button, Stack, Input, Heading, FormControl, Box } from '@chakra-ui/core'
import { Grid, GridItem } from "@chakra-ui/react"
import Nav from '../Nav'
import Footer from '../Footer'


function LoginParticulier() {

  return (
    <>
      <Nav />
      <Box my={10} mx={5}>
        <Grid m='auto' templateColumns="repeat(12, 1fr)" templateRows="repeat(3, 1fr)" gap={30}>

          <GridItem colStart={2} colSpan={4} rowSpan={3}>

            <Center>
              <Heading mb={10}>Inscription</Heading>
            </Center>

            <FormControl isRequired>
              <Stack spacing={8} >

                <Input variant="filled" id="fname" placeholder="Adresse ETH" />

                <Input variant="filled" id="fname" placeholder="Nom-Prénom" />

                <Input variant="filled" id="fname" placeholder="Adresse" />

                <Input variant="filled" id="fname" placeholder="Code postal" />

                <Input variant="filled" id="fname" placeholder="Ville" />

                <Button textTransform='uppercase' colorScheme="teal">Inscription</Button>
              </Stack>
            </FormControl >

          </GridItem>

          <GridItem colStart={8} colSpan={4} rowSpan={3}>

            <Center>
              <Heading mb={10}>Connexion</Heading>
            </Center>

            <FormControl isRequired>
              <Stack spacing={50} >

                <Input variant="filled" id="fname" placeholder="Adresse ETH" />

                <Input variant="filled" id="fname" placeholder="Nom-Prénom" />

                <Button textTransform='uppercase' colorScheme="teal">Connexion</Button>
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
