import React from 'react'
import { Heading, Text, Box, SimpleGrid, VStack, useColorModeValue } from '@chakra-ui/core'




function ChiffreCles() {

  const bg = useColorModeValue("beige.100", "beige.100")
  const color = useColorModeValue("Black", "Black")

  return (
    <Box fontFamily="Montserrat, sans-serif">
      <SimpleGrid columns={[1, 1, 4]} spacing="40px" p={20} bg={bg} color={color}>
        <Heading textAlign='center' fontFamily="Montserrat, sans-serif" as="h2">Chiffres-clés</Heading>
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
