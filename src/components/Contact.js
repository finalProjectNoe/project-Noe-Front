import React from 'react'
import { Heading, Text, Button, HStack, VStack, Center, Box, SimpleGrid, Textarea, Input, FormControl } from '@chakra-ui/core'






function Contact() {


  return (
    <>
      <Box py={20} fontFamily="Montserrat">
        <Center>
          <Heading fontFamily="Montserrat" mb={10}>Contact</Heading>
        </Center>
        <VStack>
          <HStack>
            <SimpleGrid columns={1} spacing="20px" fontFamily="Montserrat">

              <FormControl>
                <Input type="email" placeholder="Email" variant="filled" />
              </FormControl >
              <Textarea rows="5" cols="50" borderWidth="1px" my={5} placeholder="Message" variant="filled" />
              <Center>
                <Button my={5} colorScheme="teal" textTransform='uppercase'>Envoyer</Button>
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
