import React from 'react'
import { Heading, Text, Box, VStack, SimpleGrid, Image, Center } from '@chakra-ui/core'
import NavParticulier from './NavParticulier'
import Footer from '../Footer'
import Man from '../../assets/man.svg'
import cat_profil from '../../assets/cat_profil.svg'

function ProfilParticulier() {

  return (
    <>
      <NavParticulier />
      <Center>
        <Heading fontFamily="Montserrat" mt={10} as="h2">Mon espace</Heading>
      </Center>
      <Box p={20} fontFamily="Montserrat">

        <SimpleGrid columns={[1, 2, 3]} spacing="40px" p={20} fontFamily="Montserrat" borderWidth="1px">

          <Box>
            <VStack>
              <Image borderRadius="full" boxSize="100px" objectFit="cover" src={Man} />
            </VStack>
          </Box>

          <Box >
            <VStack>
              <Text>Nom</Text>
              <Text >Téléphone</Text>
            </VStack>
          </Box>

          <Box>
            <VStack>
              <Text>Adresse ETH</Text>
            </VStack>
          </Box>

        </SimpleGrid>
      </Box>
      <Center>
        <Heading pt={20} fontFamily="Montserrat" as="h2">Mes animaux</Heading>
      </Center>
      <Box p={20} fontFamily="Montserrat">

        <SimpleGrid columns={[1, 2, 3]} spacing="40px" p={20} fontFamily="Montserrat" borderWidth="1px">

          <Box>
            <VStack>
              <Image borderRadius="full" boxSize="100px" objectFit="cover" src={cat_profil} />
              <Text>Nom</Text>
            </VStack>
          </Box>

          <Box>
            <VStack>
              <Text>ID</Text>
              <Text>Sexe</Text>
            </VStack>
          </Box>

          <Box>
            <VStack>
              <Text>Date de naissance</Text>
              <Text>Vaccin</Text>
            </VStack>
          </Box>

        </SimpleGrid>

      </Box>

      <Footer />
    </>
  )
}

export default ProfilParticulier
