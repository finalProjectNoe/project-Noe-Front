import React from 'react'
import { Button, Input, FormControl, Center, Box, SimpleGrid, VStack, Stack, Heading, FormLabel } from '@chakra-ui/core'
import Nav from "./Nav"
import Footer from './Footer'


function Admin() {

  return (
    <>
      <Nav />
      <VStack py={20} fontFamily="Montserrat">
        <Box my={10}>
          <SimpleGrid columns={[1, 1, 2]} spacing="40px">
            <Box borderWidth="1px" p={50} borderRadius={5}>
              <Center>
                <Heading fontFamily="Montserrat" mb={10}>Approuvre vétérinaire</Heading>
              </Center>
              <FormControl>
                <Stack my={10} >
                  <FormLabel htmlFor="approuve"></FormLabel>
                  <Input id="approuve" type="text" placeholder="Approuve vétérinaire" variant="filled" aria-label="approuve vétérinaire" />

                </Stack>
              </FormControl >
              <Center>
                <Button name="button" _hover={{
                  bg: "teal.500",
                  color: "white",
                }} bg="brand.900" color="white" my={10} textTransform='uppercase'>Approuve</Button>
              </Center>
            </Box>

            <Box borderWidth="1px" p={50} borderRadius={5}>
              <Center>
                <Heading fontFamily="Montserrat" mb={10}>Liste</Heading>
              </Center>
              <Box>
                <Button name="button" my={5} _hover={{
                  bg: "teal.500",
                  color: "white",
                }} bg="brand.100" color="white" textTransform='uppercase'>Name</Button>
              </Box>
              <Box>
                <Button name="button" my={5} _hover={{
                  bg: "teal.500",
                  color: "white",
                }} bg="brand.100" color="white" textTransform='uppercase'>Symbole</Button>
              </Box>
              <Box>
                <Button name="button" my={5} _hover={{
                  bg: "teal.500",
                  color: "white",
                }} bg="brand.100" color="white" textTransform='uppercase'>Animal count</Button>
              </Box>
            </Box>
          </SimpleGrid>
        </Box>
      </VStack>
      <Footer />
    </>
  )
}

export default Admin