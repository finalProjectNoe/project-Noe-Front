import React from 'react'
import { Heading, Text, Center, Box, SimpleGrid, VStack, Divider } from '@chakra-ui/core'


function ChiffreCles() {

  return (
    <Box fontFamily="Montserrat">
      <SimpleGrid columns={[1, 1, 4]} spacing="40px" p={20} bg="bad.100">
        <Box>
          <Center>
            <Heading fontFamily="Montserrat" as="h2">Chiffres-clés</Heading>
          </Center>
        </Box>

        <Box >
          <VStack>
            <Text fontWeight="bold" fontSize="3xl">5000</Text>
            <Text textAlign="center">Animaux sont répertoriés</Text>
          </VStack>
        </Box>

        <Box>
          <VStack>
            <Text fontWeight="bold" fontSize="3xl">437</Text>
            <Text textAlign="center">Particuliers nous ont fait confiance</Text>
          </VStack>
        </Box>

        <Box >
          <VStack>
            <Text fontWeight="bold" fontSize="3xl">1850</Text>
            <Text textAlign="center">Animaux retrouvés grâce à notre plateforme</Text>
          </VStack>
        </Box>
      </SimpleGrid >
    </Box>
  )
}

export default ChiffreCles
