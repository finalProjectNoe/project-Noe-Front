import React from 'react'
import { Heading, Text, Box, VStack, SimpleGrid, Image, Center, Button, Flex, Spacer } from '@chakra-ui/core'
import NavVeterinaire from './NavVeterinaire'
import Footer from '../Footer'
import cat_profil from '../../assets/cat_profil.svg'


function RechercheAnimal() {

  return (
    <>
      <NavVeterinaire />
      <Flex justifyContent="space-around">

        <Heading pt={20} fontFamily="Montserrat" as="h2">Tous les animaux</Heading>
        <Button fontFamily="Montserrat" mt={20} colorScheme="teal" variant="outline">Ajouter</Button>

      </Flex>
      <Box p={20} fontFamily="Montserrat">

        <SimpleGrid columns={[1, 1, 4]} spacing="40px" p={20} fontFamily="Montserrat" borderWidth="1px">
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
              <Text textAlign="center">Date de naissance</Text>
              <Text>Vaccin</Text>
            </VStack>
          </Box>
          <Box>
            <VStack>
              <Button colorScheme="teal" variant="outline">Modifier</Button>
            </VStack>
          </Box>

        </SimpleGrid>

      </Box>

      <Footer />
    </>
  )
}

export default RechercheAnimal
