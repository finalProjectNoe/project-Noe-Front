import React, { useContext } from 'react'
import { Heading, Text, Box, SimpleGrid, Image, Center, Input } from '@chakra-ui/core'
import NavParticulier from './NavParticulier'
import Footer from '../Footer'
import Man from '../../assets/man.svg'
import cat_profil from '../../assets/cat_profil.svg'
import { NoeContext } from '../../App'





function ProfilParticulier() {

  const noe = useContext(NoeContext)

  return (
    <>
      <NavParticulier />
      <Center>
        <Heading fontFamily="Montserrat" mt={10} as="h2">Mon espace</Heading>
      </Center>
      <Box fontFamily="Montserrat">
        <SimpleGrid my={20} mx={20} columns={[1, 1, 3]} spacing="40px" p={30} fontFamily="Montserrat" borderWidth="1px" bg='brand.900' color='white' borderRadius={5}>
          <Box>
            <Image mb={10} borderRadius="full" boxSize="100px" objectFit="cover" src={Man} alt="avatar" />
          </Box>
          <Box>
            <Text fontWeight="bold">Nom :</Text>
            <Input isDisabled mb={20}></Input>
            <Text fontWeight="bold">Téléphone :</Text>
            <Input isDisabled />
          </Box>
          <Box>
            <Text fontWeight="bold">Adresse ETH :</Text>
            <Input isDisabled mb={20} />
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
            <Input isDisabled mb={20} />
            <Text fontWeight="bold">Nom:</Text>
            <Input isDisabled />
          </Box>
          <Box>
            <Text fontWeight="bold">Date de naissance:</Text>
            <Input isDisabled mb={20} />
            <Text fontWeight="bold">Sexe:</Text>
            <Input isDisabled />
          </Box>
          <Box>
            <Text fontWeight="bold">Vaccin:</Text>
            <Input isDisabled mb={20} />
            <Text fontWeight="bold">Type:</Text>
            <Input isDisabled />
          </Box>
        </SimpleGrid>
      </Box>
      <Footer />
    </>
  )
}

export default ProfilParticulier
