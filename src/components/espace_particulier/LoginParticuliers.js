import React from 'react'
import { Center, Button, VStack, HStack, Input, Heading, FormControl, FormLabel } from '@chakra-ui/core'
import Nav from '../Nav'

function RegisterParticuliers() {

  return (
    <>
      <Nav />
      <VStack>
        <Center>
          <Heading mb={10}>Register</Heading>
        </Center>
        <HStack>
          <FormControl isRequired>
            <HStack>
              <VStack>
                <FormLabel htmlFor="fname">Name</FormLabel>
                <Input variant="filled" id="fname" placeholder="Name" />

                <FormLabel htmlFor="fname">Age</FormLabel>
                <Input variant="filled" id="fname" placeholder="Age" />

                <FormLabel as="legend">Job</FormLabel>
                <Input variant="filled" id="fname" placeholder="Age" />

                <FormLabel htmlFor="fname">Adresse</FormLabel>
                <Input variant="filled" id="fname" placeholder="Adresse Wallet" />

                <Button>Register</Button>
              </VStack>
            </HStack>
          </FormControl >
        </HStack >
      </VStack >
    </>
  )
}

export default RegisterParticuliers
