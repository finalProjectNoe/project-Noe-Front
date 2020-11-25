import React from 'react'
import { Heading, Text, Button, HStack, VStack, Center } from '@chakra-ui/core'
import { Input, FormControl } from '@chakra-ui/core'
import { Grid, GridItem, Textarea } from "@chakra-ui/react"




function Contact() {


  return (
    <>
      <Center>
        <Heading my={10}>Contact</Heading>
      </Center>
      <VStack>
        <HStack>
          <Grid

            templateRows="repeat(1, 1fr)"
            templateColumns="repeat(12, 1fr)"
            gap={30}
          >
            <GridItem colStart={5} colSpan={4} py={10} mx={5}>
              <FormControl>
                <Input type="email" placeholder="Email" />
              </FormControl >
              <Textarea rows="5" cols="50" borderWidth="1px" my={10} placeholder="Message" />
              <Center>
                <Button my={10} colorScheme="teal" textTransform='uppercase' variant="outline">Envoyer</Button>
              </Center>
              <Text textAlign="center" mb={10}>info@form.com</Text>

            </GridItem>
          </Grid>
        </HStack >
      </VStack >
    </>
  )
}

export default Contact
