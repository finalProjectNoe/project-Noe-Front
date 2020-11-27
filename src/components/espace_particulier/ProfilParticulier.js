import React from 'react'
import { Heading, Text, Box, VStack } from '@chakra-ui/core'
import { Grid, GridItem, Image } from "@chakra-ui/react"
import NavParticulier from './NavParticulier'
import Footer from '../Footer'
import Man from '../../assets/man.svg'
import cat_profil from '../../assets/cat_profil.svg'

function ProfilParticulier() {

  return (
    <>
      <NavParticulier />
      <Box p={20} fontFamily="Montserrat">

        <Heading fontFamily="Montserrat" mb={10} as="h2">Mon espace</Heading>

        <Grid templateColumns="repeat(12, 1fr)" templateRows="repeat(3, 1fr)" gap={30} spacing={10}>
          <GridItem colSpan={12} rowSpan={3} shadow="md" borderWidth="1px" >
            <VStack p={10}>
              <Grid templateColumns="repeat(12, 1fr)" templateRows="repeat(2, 1fr)" gap={30} spacing={10}>
                <GridItem p={21} colStart={1} colSpan={2} rowSpan={2} >
                  <VStack>
                    <Image borderRadius="full" boxSize="100px" objectFit="cover" src={Man} />
                  </VStack>
                </GridItem>
                <GridItem p={21} colStart={4} colSpan={1} rowSpan={2} >
                  <VStack>
                    <Text>Nom</Text>
                    <Text >Téléphone</Text>
                  </VStack>
                </GridItem>

                <GridItem p={21} colStart={8} colSpan={2} rowSpan={2}>
                  <VStack>
                    <Text>Adresse ETH</Text>
                  </VStack>
                </GridItem>
              </Grid>
            </VStack>
          </GridItem>
        </Grid>

        <Heading pt={20} fontFamily="Montserrat" mb={10} as="h2">Mes animaux</Heading>

        <Grid templateColumns="repeat(12, 1fr)" templateRows="repeat(3, 1fr)" gap={30} spacing={10}>
          <GridItem colSpan={12} rowSpan={3} shadow="md" borderWidth="1px" >
            <VStack p={10}>
              <Grid templateColumns="repeat(12, 1fr)" templateRows="repeat(2, 1fr)" gap={30} spacing={10}>
                <GridItem p={21} colStart={1} colSpan={2} rowSpan={2} >
                  <VStack>
                    <Image borderRadius="full" boxSize="100px" objectFit="cover" src={cat_profil} />
                    <Text>Nom</Text>
                  </VStack>
                </GridItem>
                <GridItem p={21} colStart={3} colSpan={2} rowSpan={2}>
                  <VStack>
                    <Text>ID</Text>
                    <Text>Sexe</Text>
                  </VStack>
                </GridItem>
                <GridItem p={21} colStart={7} colSpan={2} rowSpan={2}>
                  <VStack>
                    <Text>Date de naissance</Text>
                    <Text>Vaccin</Text>
                  </VStack>
                </GridItem>
              </Grid>
            </VStack>
          </GridItem>
        </Grid>
      </Box>
      <Footer />
    </>
  )
}

export default ProfilParticulier
