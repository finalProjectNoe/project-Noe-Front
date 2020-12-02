import React from 'react'
import { Heading, Text, VStack, Center, Box, SimpleGrid, Image } from '@chakra-ui/core'
import Man from '../assets/man.svg'
import Woman from '../assets/woman_1.svg'

function Temoignage() {

  return (

    <Box py={20} bg="bad.100" fontFamily="Montserrat">
      <Center>
        <Heading fontFamily="Montserrat" mb={10} as="h2">Témoignages</Heading>
      </Center>
      <SimpleGrid columns={[1, 1, 3]} spacing="40px" p={20} fontFamily="Montserrat">
        <Box>
          <VStack>
            <Image borderRadius="full" boxSize="100px" objectFit="cover" src={Woman} alt="Avatar" />
            <Text textAlign="center">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</Text>
            <Text fontWeight="bold">Alice DUPONT</Text>
          </VStack>
        </Box>
        <Box>
          <VStack>
            <Image borderRadius="full" boxSize="100px" objectFit="cover" src={Man} alt="Avatar" />
            <Text textAlign="center">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</Text>
            <Text fontWeight="bold">Bob DUBOIS</Text>
          </VStack>
        </Box>
        <Box>
          <VStack>
            <Image borderRadius="full" boxSize="100px" objectFit="cover" src={Man} alt="Avatar" />
            <Center>
              <Text textAlign="center">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</Text>
            </Center>
            <Text fontWeight="bold">Charlie MARTIN</Text>
          </VStack>
        </Box>
      </SimpleGrid>
    </Box>

  )
}

export default Temoignage
