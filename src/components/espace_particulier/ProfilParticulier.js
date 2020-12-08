import React from 'react'
import { Heading, Text, Box, SimpleGrid, Image, Center } from '@chakra-ui/core'
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
      <Box py={20} px={250} fontFamily="Montserrat">
        <SimpleGrid columns={[1, 1, 3]} spacing="40px" p={20} fontFamily="Montserrat" borderWidth="1px" bg='brand.900' color='white'>
          <Box>
            <Image borderRadius="full" boxSize="100px" objectFit="cover" src={Man} alt="avatar particulier" />
          </Box>
          <Box >
            <Text fontWeight="bold" pb={10}>Nom:</Text>
            <Text fontWeight="bold" >Téléphone:</Text>
          </Box>
          <Box>
            <Text fontWeight="bold">Adresse ETH:</Text>
          </Box>
        </SimpleGrid>
      </Box>
      <Center>
        <Heading mt={20} fontFamily="Montserrat" as="h2">Mes animaux</Heading>
      </Center>
      <Box py={20} px={250} fontFamily="Montserrat">
        <SimpleGrid columns={[1, 1, 4]} spacing="40px" p={20} fontFamily="Montserrat" borderWidth="1px" borderColor="brand.900" >
          <Box>
            <Image mb={10} borderRadius="full" boxSize="100px" objectFit="cover" src={cat_profil} alt="avatar animal" />
            <Text ml={7} fontWeight="bold">Nom:</Text>
          </Box>
          <Box>
            <Text fontWeight="bold" pb={10}>ID</Text>
            <Text fontWeight="bold">Sexe:</Text>
          </Box>
          <Box>
            <Text fontWeight="bold" pb={10}>Date de naissance:</Text>
            <Text fontWeight="bold">Type:</Text>
          </Box>
          <Box>
            <Text fontWeight="bold">Vaccin:</Text>
          </Box>
        </SimpleGrid>
      </Box>
      <Footer />
    </>
  )
}

export default ProfilParticulier
