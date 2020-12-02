import React from 'react'
import { Center, Button, Stack, Input, Heading, FormControl, Box, SimpleGrid, VStack, FormLabel } from '@chakra-ui/core'
// import { Link } from 'react-router-dom';
import Nav from '../Nav'
import Footer from '../Footer'


function ModificationAnimal() {

  return (
    <>
      <Nav />
      <VStack py={20}>
        <Box my={10}>
          <SimpleGrid columns={[1, 1, 2]} spacing="40px">

            <Box borderWidth="1px" p={50} borderRadius={5}>

              <Center>
                <Heading mb={10}>Nom</Heading>
              </Center>

              <FormControl>
                <Stack >
                  <FormLabel htmlFor="id" pt={5}>Id</FormLabel>
                  <Input id='id' variant="filled" placeholder="Id" aria-label="Id" />
                  <FormLabel htmlFor="ETH" pt={5}>ETH</FormLabel>
                  <Input id='ETH' variant="filled" placeholder="Adresse ETH" />
                  <FormLabel htmlFor="sexe" pt={5}>Sexe</FormLabel>
                  <Input id='sexe' variant="filled" placeholder="Sexe" aria-label="Sexe" />
                  <FormLabel htmlFor="date-de-naissance" pt={5}>Date de naissance</FormLabel>
                  <Input id='date-de-naissance' variant="filled" placeholder="Date de naissance" aria-label="Date de naissance" />
                  <FormLabel htmlFor="type" pt={5}>Type</FormLabel>
                  <Input id='type' variant="filled" placeholder="Type" aria-label="Type" />

                  <Button _hover={{
                    bg: "teal.500",
                    color: "white",
                  }} bg="brand.900" color="white" name="button" textTransform='uppercase'>Modfier</Button>
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

export default ModificationAnimal
