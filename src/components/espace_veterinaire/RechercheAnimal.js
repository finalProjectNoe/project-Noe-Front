import React from 'react'
import { Heading, Text, Box, VStack, SimpleGrid, Image, Button, Flex } from '@chakra-ui/core'
import NavVeterinaire from './NavVeterinaire'
import Footer from '../Footer'
import cat_profil from '../../assets/cat_profil.svg'
import { Link } from 'react-router-dom';


function RechercheAnimal() {

  return (
    <>
      <NavVeterinaire />
      <Flex justifyContent="space-around">

        <Heading pt={20} fontFamily="Montserrat" as="h2">Tous les animaux</Heading>
        <Button name="button" fontFamily="Montserrat" mt={20} colorScheme="teal" variant="outline"><Link to="/ajout_animal">Ajouter</Link></Button>

      </Flex>
      <Box p={20} fontFamily="Montserrat">

        <SimpleGrid columns={[1, 1, 5]} spacing="40px" p={20} fontFamily="Montserrat" borderWidth="1px">
          <Box>
            <VStack>
              <Image borderRadius="full" boxSize="100px" objectFit="cover" src={cat_profil} alt="avatar animal" />
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
              <Text>Type</Text>
            </VStack>
          </Box>

          <Box>
            <VStack>
              <Text textAlign="center">Vaccin</Text>
            </VStack>
          </Box>
          <Box>
            <VStack>
              <Button name="button" colorScheme="teal" variant="outline">
                <Link to="/modification_animal">Modifier</Link></Button>
            </VStack>
          </Box>

        </SimpleGrid>

      </Box>

      <Footer />
    </>
  )
}

export default RechercheAnimal
