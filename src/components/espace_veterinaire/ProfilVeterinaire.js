import React from 'react'
import { Heading, Text, Box, VStack, SimpleGrid, Image, Center } from '@chakra-ui/core'
import Footer from '../Footer'
import NavVeteinaire from './NavVeterinaire'
import Woman from '../../assets/girl.svg'

function Profilveterinaire() {

  return (
    <>
      <NavVeteinaire />
      <Center>
        <Heading fontFamily="Montserrat" pt={10} as="h2">Mon espace</Heading>
      </Center>
      <Box py={20} px={250} fontFamily="Montserrat" mb={150}>
        <SimpleGrid columns={[1, 1, 3]} spacing="40px" p={20} fontFamily="Montserrat" borderWidth="1px" bg='brand.900' color='white'>
          <Box>
            <Image borderRadius="full" boxSize="100px" objectFit="cover" src={Woman} alt="avatar" />
          </Box>
          <Box>
            <Text fontWeight="bold" pb={10}>Nom: </Text>
            <Text fontWeight="bold" >Téléphone:</Text>
          </Box>
          <Box>
            <Text pb={10} fontWeight="bold">Adresse ETH:</Text>
            <Text fontWeight="bold">Diplome:</Text>
          </Box>
        </SimpleGrid>
      </Box>
      <Footer />
    </>
  )
}

export default Profilveterinaire
