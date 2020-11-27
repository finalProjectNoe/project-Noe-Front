import React from 'react'
import { Heading, Text, Box, VStack, SimpleGrid, Image, Center } from '@chakra-ui/core'
import Footer from '../Footer'
import NavVeteinaire from './NavVeterinaire'
import Woman from '../../assets/woman.svg'

function Profilveterinaire() {

  return (
    <>
      <NavVeteinaire />

      <Center>
        <Heading fontFamily="Montserrat" pt={10} as="h2">Mon espace</Heading>
      </Center>
      <Box p={20} fontFamily="Montserrat" mb={150}>
        <SimpleGrid columns={[1, 2, 3]} spacing="40px" p={20} fontFamily="Montserrat" borderWidth="1px">

          <Box>
            <VStack>
              <Image borderRadius="full" boxSize="100px" objectFit="cover" src={Woman} />
            </VStack>
          </Box>
          <Box>
            <VStack>
              <Text>Nom</Text>
              <Text >Téléphone</Text>
            </VStack>
          </Box>
          <Box>
            <VStack>
              <Text>Adresse ETH</Text>
              <Text>Diplome</Text>
            </VStack>
          </Box>
        </SimpleGrid>
      </Box>
      <Footer />
    </>
  )
}

export default Profilveterinaire
