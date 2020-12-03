import React from 'react'
import { Center, Button, Stack, Input, Heading, FormControl, Box, SimpleGrid, VStack, FormLabel, Select } from '@chakra-ui/core'
import Footer from '../Footer'
import NavVeteinaire from './NavVeterinaire'


function AjoutAnimal() {

  return (
    <>
      <NavVeteinaire />
      <VStack py={20}>
        <Box my={10}>
          <SimpleGrid columns={[1]} spacing="40px">

            <Box borderWidth="1px" p={50} borderRadius={5}>

              <Center>
                <Heading mb={10}>Ajouter un Animal</Heading>
              </Center>

              <FormControl>
                <Stack >
                  <FormLabel htmlFor="ETH" pt={5}>ETH</FormLabel>
                  <Input id='ETH' variant="filled" placeholder="Adresse ETH" aria-label="ETH" />
                  <FormLabel htmlFor="ETH" pt={5}>Nom</FormLabel>
                  <Input id='ETH' variant="filled" placeholder="nom" aria-label="nom" />
                  <FormLabel htmlFor="sexe" pt={5}>Sexe</FormLabel>
                  <Input id='sexe' variant="filled" placeholder="Sexe" aria-label="Sexe" />
                  <FormLabel htmlFor="date-de-naissance" pt={5}>Date de naissance</FormLabel>
                  <Input id='date-de-naissance' variant="filled" placeholder="Date de naissance" aria-label="Date de naissance" />
                  <FormLabel htmlFor="type" pt={5}>Type</FormLabel>
                  <Select mb={20} id='type' variant="filled" placeholder="Sélectionner le type" aria-label="Type" >
                    <option>Chat</option>
                    <option>Chien</option>
                    <option>Furet</option>
                  </Select>
                  <Button _hover={{
                    bg: "teal.500",
                    color: "white",
                  }} bg="brand.900" color="white" name="button" textTransform='uppercase'>Ajouter</Button>
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

export default AjoutAnimal
