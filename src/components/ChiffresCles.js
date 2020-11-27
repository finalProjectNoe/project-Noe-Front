import React from 'react'
import { Heading, Text, Center, Box, SimpleGrid, VStack, Divider } from '@chakra-ui/core'


function ChiffreCles() {

  return (
    <SimpleGrid columns={[1, 4, 4]} spacing="40px" p={20} bg="bad.100" fontFamily="Montserrat">
      <Box>
        <Center>
          <Heading fontFamily="Montserrat" as="h2">Chiffres-clés</Heading>
        </Center>
      </Box>

      <Box >
        <VStack>
          <Text fontWeight="bold" fontSize="3xl">5000</Text>
          <Text>Animaux sont répertoriés</Text>
        </VStack>
      </Box>

      <Box >
        <VStack>
          <Divider orientation="vertical" />
          <Text fontWeight="bold" fontSize="3xl">437</Text>
          <Text>Particuliers nous ont fait confiance</Text>
        </VStack>
      </Box>

      <Box >
        <VStack>
          <Text fontWeight="bold" fontSize="3xl">1850</Text>
          <Text textAlign="center">Animaux retrouvés grâce à notre plateforme</Text>
        </VStack>
      </Box>
    </SimpleGrid >

  )
}

export default ChiffreCles
