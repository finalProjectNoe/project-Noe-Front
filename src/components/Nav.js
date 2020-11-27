import React from 'react'
import { Button, Box, Flex, Divider, Image, Spacer } from '@chakra-ui/core'
import { } from "@chakra-ui/react"
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.png'


function Nav() {


  return (
    <>

      <Flex fontFamily="Montserrat">
        <Box py={3}>

          <Link to="/">
            <Image boxSize="100px" objectFit="cover" src={Logo} />
          </Link>
        </Box>
        <Spacer />
        <Box py={10}>

          <Button colorScheme="teal" textTransform='uppercase' mr={5} variant="outline">
            <Link to="/particulier">espace particulier</Link>

          </Button>

          <Button colorScheme="teal" textTransform='uppercase' mr={5} variant="outline">
            <Link to="/veterinaire">espace vétérinaire</Link>
          </Button>

        </Box>
      </Flex>
      <Divider borderWidth="1px" />

    </>
  )
}

export default Nav
