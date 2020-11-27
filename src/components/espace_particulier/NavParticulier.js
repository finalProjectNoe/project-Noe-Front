import React from 'react'
import { Button, Box, Flex, Divider, Image, Spacer } from '@chakra-ui/core'
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.png'

function NavParticulier() {

  return (
    <>
      <Flex fontFamily="Montserrat">
        <Box py={3}>
          <Link to="/profil_particulier">
            <Image boxSize="100px" objectFit="cover" src={Logo} />
          </Link>
        </Box>
        <Spacer />
        <Box py={10}>
          <Button mr={5} colorScheme="teal" textTransform='uppercase' variant="link">
            <Link to="/profil_particulier">Mon espace</Link>
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

export default NavParticulier
