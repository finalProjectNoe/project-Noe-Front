import React from 'react'
import { Button, Box, Divider, Input, FormControl, Image, Flex, Center, Spacer } from '@chakra-ui/core'
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.png'

function NavVeteinaire() {

  return (
    <>
      <Flex fontFamily="Montserrat">
        <Box py={3}>
          <Link to="/profil_veterinaire">
            <Image boxSize="100px" objectFit="cover" src={Logo} />
          </Link>
        </Box>
        <Spacer />
        <Box py={3}>
          <FormControl>
            <Input p={7} type="search" variant="outline" placeholder="Recherche animaux" />
            <Center>
              <Button colorScheme="teal" textTransform='uppercase'>
                Recherche
            </Button>
            </Center>
          </FormControl>
        </Box>
        <Spacer />
        <Box py={10}>
          <Button mr={5} colorScheme="teal" textTransform='uppercase' variant="link">
            <Link to="/profil_veterinaire">Mon espace</Link>
          </Button>
          <Button mr={5} colorScheme="teal" textTransform='uppercase' variant="link">
            <Link to="/">Deconnexion</Link>
          </Button>
        </Box>
      </Flex>
      <Divider borderWidth="1px" />
    </>
  )
}

export default NavVeteinaire
