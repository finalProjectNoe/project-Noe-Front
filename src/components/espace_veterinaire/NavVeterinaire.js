import React from 'react'
import { Button, Box } from '@chakra-ui/core'
import { Grid, GridItem, Divider, Input, FormControl, Image } from "@chakra-ui/react"
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.png'

function NavVeteinaire() {

  return (
    <>
      <Box py={3} px={150} fontFamily="Montserrat">
        <Grid m='auto' templateColumns="repeat(12, 1fr)" gap={6}>

          <GridItem>
            <Link to="/profil_veterinaire">
              <Image boxSize="100px" objectFit="cover" src={Logo} />
            </Link>
          </GridItem>

          <GridItem colStart={3}  >
            <FormControl>
              <Input p={7} type="search" variant="outline" placeholder="Recherche animaux" />
              <Button colorScheme="teal" textTransform='uppercase'>
                Recherche
            </Button>
            </FormControl>
          </GridItem>
          <GridItem colStart={10} colSpan={3} textTransform='uppercase' py={8} ml='auto'>
            <Button mr={10} colorScheme="teal" textTransform='uppercase' variant="link">
              <Link to="/profil_veterinaire">Mon espace</Link>
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

export default NavVeteinaire
