import React from 'react'
import { Button, Box } from '@chakra-ui/core'
import { Grid, GridItem, Divider, Image } from "@chakra-ui/react"
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.png'

function NavParticulier() {

  return (
    <>
      <Box py={3} px={150} fontFamily="Montserrat">
        <Grid templateColumns="repeat(2, 1fr)" gap={6}>
          <GridItem>
            <Link to="/profil_particulier">
              <Image boxSize="100px" objectFit="cover" src={Logo} />
            </Link>
          </GridItem>
          <GridItem textTransform='uppercase' py={8} ml='auto'>
            <Button mr={10} colorScheme="teal" textTransform='uppercase' variant="link">
              <Link to="/profil_particulier">Mon espace</Link>
            </Button>
            <Button colorScheme="teal" textTransform='uppercase' variant="link">
              <Link to="/">Deconnexion</Link>
            </Button>
          </GridItem>
        </Grid>
      </Box>
      <Divider borderWidth="1px" />
    </>
  )
}

export default NavParticulier
