import React from 'react'
import { Link } from 'react-router-dom';
import { Heading, Text, Button, HStack, VStack, Box } from '@chakra-ui/core'
import { Grid, GridItem, } from "@chakra-ui/react"
import Nav from './Nav'
import ChiffreCles from './ChiffresCles';
import CommentçaMarche from './CommentçaMarche';
import Temoignage from './Temoignage'
import Contact from './Contact'
import Footer from './Footer'




function Home() {


  return (
    <>
      <Nav />
      <Box p={20} fontFamily="Montserrat">
        <Grid
          templateRows="repeat(1, 1fr)"
          templateColumns="repeat(12, 1fr)"
          gap={30}
        >
          <GridItem colSpan={6} p={10}>
            <VStack>
              <Heading fontFamily="Montserrat" textAlign="center" size="3xl" my={10} as='h1'>Référencez votre NOE</Heading>

              <Text mb={10} textAlign="center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sollicitudin mauris sit amet dolor commodo, non faucibus est feugiat. Proin sit amet tortor id turpis lobortis placerat ac ut libero. Quisque dapibus ac leo a volutpat. Maecenas fringilla mi augue, eget pellentesque orci vestibulum vel. Nullam suscipit velit sit amet nisl dignissim nec.
            </Text>

              <HStack spacing='24px'>

                <Button colorScheme="teal" textTransform='uppercase'>
                  <Link to="/particulier">espace particulier</Link>
                </Button>

                <Button bg="brand.100" $_hover="brand.900" color="white" textTransform='uppercase' mx={5} >
                  <Link to="/veterinaire">espace vétérinaire</Link>
                </Button>

              </HStack>
            </VStack>
          </GridItem>
        </Grid>
      </Box>
      <ChiffreCles />
      <CommentçaMarche />
      <Temoignage />
      <Contact />
      <Footer />
    </>
  )
}

export default Home
