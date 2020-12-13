import React from 'react'
import { Heading, Text, Box, Input, SimpleGrid, Image, Center } from '@chakra-ui/core'
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
      <Box fontFamily="Montserrat" mb={150}>
        <SimpleGrid my={20} mx={20} columns={[1, 1, 3]} spacing="40px" p={30} fontFamily="Montserrat" borderWidth="1px" bg='brand.900' color='white' borderRadius={5}>
          <Box>
            <Image mb={10} borderRadius="full" boxSize="100px" objectFit="cover" src={Woman} alt="avatar" />
          </Box>
          <Box>
            <Text fontWeight="bold">Nom :</Text>
            <Input mb={20} />
            <Text fontWeight="bold">Téléphone :</Text>
            <Input />
          </Box>
          <Box>
            <Text fontWeight="bold">Adresse ETH :</Text>
            <Input mb={20} />
            <Text fontWeight="bold">Diplome :</Text>
            <Input />
          </Box>
        </SimpleGrid>
      </Box>
      <Footer />
    </>
  )
}

export default Profilveterinaire
