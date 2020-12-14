import React from 'react'
import { Heading, Text, Box, Input, SimpleGrid, Image, Center, Button } from '@chakra-ui/core'
import { Link } from 'react-router-dom';
import Footer from '../Footer'
import NavVeteinaire from './NavVeterinaire'
import Woman from '../../assets/girl.svg'

function Profilveterinaire() {

  return (
    <>
      <NavVeteinaire />
      <SimpleGrid columns={[1, 1, 2]} spacing="40px" mt={20} pt={10}>
        <Box >
          <Center>
            <Heading fontFamily="Montserrat" as="h2">Mon espace</Heading>
          </Center>
        </Box>
        <Box fontFamily="Montserrat">
          <Center>
            <Button name="button" _hover={{
              bg: "brand.100",
              color: "white",
            }} color="brand.100" borderColor="brand.100" variant="outline" textTransform='uppercase'>
              <Link to="/ajout_animal">Ajouter</Link>
            </Button>
          </Center>
        </Box>
      </SimpleGrid>
      <Box fontFamily="Montserrat" mb={150}>
        <SimpleGrid my={20} mx={20} columns={[1, 1, 3]} spacing="40px" p={30} fontFamily="Montserrat" borderWidth="1px" bg='brand.900' color='white' borderRadius={5}>
          <Box>
            <Image mb={10} borderRadius="full" boxSize="100px" objectFit="cover" src={Woman} alt="avatar" />
          </Box>
          <Box>
            <Text fontWeight="bold">Nom :</Text>
            <Input id="nom" aria-label="nom" isDisabled mb={20} variant="unstyled" />
            <Text fontWeight="bold">Téléphone :</Text>
            <Input id="tel" aria-label="tel" isDisabled variant="unstyled" />
          </Box>
          <Box>
            <Text fontWeight="bold">Adresse ETH :</Text>
            <Input id="ETH" aria-label="ETH" isDisabled mb={20} variant="unstyled" />
            <Text fontWeight="bold">Diplome :</Text>
            <Input id="diplome" aria-label="diplome" isDisabled variant="unstyled" />
          </Box>
        </SimpleGrid>
      </Box>
      <Footer />
    </>
  )
}

export default Profilveterinaire
