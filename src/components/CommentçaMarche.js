import React from 'react'
import { Heading, Text, Box, VStack, Center } from '@chakra-ui/core'
import { Grid, GridItem, Image } from "@chakra-ui/react"
import Dog from '../assets/dog.svg'
import Cat from '../assets/cat.svg'
import Ferret from '../assets/ferret.svg'

function CommentçaMarche() {

  return (
    <>
      <Box p={20} fontFamily="Montserrat">
        <Center>
          <Heading fontFamily="Montserrat" mb={10} as="h2">Comment ça marche ?</Heading>
        </Center>
        <Grid templateColumns="repeat(12, 1fr)" templateRows="repeat(3, 1fr)" gap={30} spacing={10}>
          <GridItem colSpan={4} rowSpan={3} shadow="md" borderWidth="1px" >
            <VStack p={10}>
              <Image boxSize="100px" objectFit="cover" src={Dog} />
              <Text fontWeight="bold" fontSize="2xl">Inscription</Text>
              <Text textAlign={"center"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</Text>
            </VStack>
          </GridItem>
          <GridItem colSpan={4} rowSpan={3} p={5} shadow="md" borderWidth="1px">
            <VStack p={10}>
              <Image boxSize="100px" objectFit="cover" src={Cat} />
              <Text fontWeight="bold" textAlign={"center"} fontSize="2xl">Attribution de l’animal par votre vétérinaire</Text>
              <Text textAlign={"center"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</Text>
            </VStack>
          </GridItem>
          <GridItem colSpan={4} rowSpan={3} p={5} shadow="md" borderWidth="1px" >
            <VStack p={10}>
              <Image boxSize="100px" objectFit="cover" src={Ferret} />
              <Text textAlign={"center"} fontWeight="bold" fontSize="2xl">Connexion à votre espace</Text>
              <Center>
                <Text textAlign={"center"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</Text>
              </Center>
            </VStack>
          </GridItem>
        </Grid>
      </Box>
    </>
  )
}

export default CommentçaMarche
