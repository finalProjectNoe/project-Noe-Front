import React from 'react'
import { Heading, Text, Button, HStack, VStack, Center, Box, SimpleGrid, Textarea, Input, FormControl, FormLabel } from '@chakra-ui/core'

function Contact() {

  return (
    <>
      <Box py={20} fontFamily="Montserrat, sans-serif">
        <Center>
          <Heading fontFamily="Montserrat, sans-serif" mb={10}>Contact</Heading>
        </Center>
        <VStack>
          <HStack>
            <SimpleGrid columns={1} spacing="20px" fontFamily="Montserrat, sans-serif">
              <FormControl isRequired>
                <FormLabel ml={5} htmlFor="email">Email</FormLabel>
                <Input id="email" type="email" placeholder="Email" variant="filled" aria-label="email" />
                <FormLabel mt={10} ml={5} htmlFor="message">Message</FormLabel>
                <Textarea id="message" rows="5" cols="50" borderWidth="1px" placeholder="Message" variant="filled" aria-label="Message" />
              </FormControl >
              <Center>
                <Button _hover={{
                  bg: "teal.500",
                  color: "white",
                }} bg="brand.900" color="white" name="button" my={5} textTransform='uppercase'>Envoyer</Button>
              </Center>
              <Text textAlign="center" mb={5}>info@form.com</Text>
            </SimpleGrid>
          </HStack >
        </VStack >
      </Box>
    </>
  )
}

export default Contact
