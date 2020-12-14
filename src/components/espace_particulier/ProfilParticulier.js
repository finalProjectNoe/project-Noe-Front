import React from 'react'
import { Heading, Text, Box, SimpleGrid, Image, Center, Input } from '@chakra-ui/core'
import NavParticulier from './NavParticulier'
import Footer from '../Footer'
import Man from '../../assets/man.svg'
import cat_profil from '../../assets/cat_profil.svg'


function ProfilParticulier() {


  return (
    <>
      <NavParticulier />
      <Center>
        <Heading fontFamily="Montserrat" mt={20} pt={10} as="h2">Mon espace</Heading>
      </Center>
      <Box fontFamily="Montserrat">
        <SimpleGrid my={20} mx={20} columns={[1, 1, 3]} spacing="40px" p={30} fontFamily="Montserrat" borderWidth="1px" bg='brand.900' color='white' borderRadius={5}>
          <Box>
            <Image mb={10} borderRadius="full" boxSize="100px" objectFit="cover" src={Man} alt="avatar" />
          </Box>
          <Box>
            <Text fontWeight="bold">Nom : </Text>
            <Input id="nom" aria-label="nom" isDisabled mb={20} variant="unstyled" />
            <Text fontWeight="bold">Téléphone :</Text>
            <Input id="tel" aria-label="tel" isDisabled variant="unstyled" />
          </Box>
          <Box>
            <Text fontWeight="bold">Adresse ETH :</Text>
            <Input id="ETH" aria-label="ETH" isDisabled mb={20} variant="unstyled" />
          </Box>
        </SimpleGrid>
      </Box>
      <Center>
        <Heading mt={20} fontFamily="Montserrat" as="h2">Mes animaux</Heading>
      </Center>
      <Box fontFamily="Montserrat" mb={200}>
        <SimpleGrid my={20} mx={20} columns={[1, 1, 4]} spacing="40px" p={30} fontFamily="Montserrat" borderWidth="1px" borderRadius={5}>
          <Box>
            <Image mb={10} borderRadius="full" boxSize="100px" objectFit="cover" src={cat_profil} alt="avatar animal" />
          </Box>
          <Box>
            <Text fontWeight="bold">ID</Text>
            <Input id="id" aria-label="id" isDisabled mb={20} variant="unstyled" />
            <Text fontWeight="bold">Nom:</Text>
            <Input id="name" aria-label="name" isDisabled variant="unstyled" />
          </Box>
          <Box>
            <Text fontWeight="bold">Date de naissance:</Text>
            <Input id="date" aria-label="date" isDisabled mb={20} variant="unstyled" />
            <Text fontWeight="bold">Sexe:</Text>
            <Input id="sex" aria-label="sex" isDisabled variant="unstyled" />
          </Box>
          <Box>
            <Text fontWeight="bold">Vaccin:</Text>
            <Input id="vaccin" aria-label="vaccin" isDisabled mb={20} variant="unstyled" />
            <Text fontWeight="bold">Type:</Text>
            <Input id="type" aria-label="type" isDisabled variant="unstyled" />
          </Box>
        </SimpleGrid>
      </Box>
      <Footer />
    </>
  )
}
export default ProfilParticulier
