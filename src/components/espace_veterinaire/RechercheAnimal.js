import React from 'react'
import { Heading, Text, Box, SimpleGrid, Image, Button, Flex } from '@chakra-ui/core'
import NavVeterinaire from './NavVeterinaire'
import Footer from '../Footer'
import cat_profil from '../../assets/cat_profil.svg'
import { Link } from 'react-router-dom';


function RechercheAnimal() {

  return (
    <>
      <NavVeterinaire />
      <Flex justifyContent="space-around" fontFamily="Montserrat, sans-serif">
        <Heading pt={20} fontFamily="Montserrat, sans-serif" as="h2">Tous les animaux</Heading>
        <Button name="button" mt={20} _hover={{
          bg: "brand.100",
          color: "white",
        }} color="brand.100" borderColor="brand.100" variant="outline">
          <Link to="/ajout_animal">Ajouter</Link>
        </Button>
      </Flex>
      <Box py={20} px={250} fontFamily="Montserrat, sans-serif">
        <SimpleGrid columns={[1, 1, 5]} spacing="40px" p={20} borderWidth="1px" borderRadius={5}>
          <Box>
            <Image mb={10} borderRadius="full" boxSize="100px" objectFit="cover" src={cat_profil} alt="avatar animal" />

          </Box>
          <Box>
            <Text fontWeight="bold" pb={10}>ID</Text>
            <Text fontWeight="bold">Nom:</Text>
          </Box>
          <Box>
            <Text fontWeight="bold" pb={10}>Date de naissance:</Text>
            <Text fontWeight="bold">Sexe:</Text>
          </Box>
          <Box>
            <Text pb={10} fontWeight="bold">Vaccin:</Text>
            <Text fontWeight="bold">Type:</Text>
          </Box>
          <Box>
            <Button name="button" _hover={{
              bg: "brand.100",
              color: "white",
            }} color="brand.100" borderColor="brand.100" variant="outline">
              <Link to="/modification_animal">Modifier</Link>
            </Button>
          </Box>
        </SimpleGrid>
      </Box>
      <Footer />
    </>
  )
}

export default RechercheAnimal
