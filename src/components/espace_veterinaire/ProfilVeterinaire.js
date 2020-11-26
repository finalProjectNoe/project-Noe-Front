import React from 'react'
import { Heading, Text, Box, VStack } from '@chakra-ui/core'
import { Grid, GridItem, Image } from "@chakra-ui/react"
import Footer from '../Footer'
import NavVeteinaire from './NavVeterinaire'
import Woman from '../../assets/woman.png'

function Profilveterinaire() {

  return (
    <>
      <NavVeteinaire />
      <Box p={20} fontFamily="Montserrat">

        <Heading fontFamily="Montserrat" mb={10} as="h2">Mon espace</Heading>

        <Grid templateColumns="repeat(12, 1fr)" templateRows="repeat(3, 1fr)" gap={30} spacing={10}>

          <GridItem colSpan={12} rowSpan={3} shadow="md" borderWidth="1px" >
            <VStack p={10}>
              <Grid templateColumns="repeat(12, 1fr)" templateRows="repeat(2, 1fr)" gap={30} spacing={10}>
                <GridItem p={21} colStart={1} colSpan={2} rowSpan={2} >
                  <VStack>
                    <Image borderRadius="full" boxSize="100px" objectFit="cover" src={Woman} />
                  </VStack>
                </GridItem>
                <GridItem p={21} colStart={4} colSpan={1} rowSpan={2} >
                  <VStack>
                    <Text>Nom</Text>
                    <Text >Adresse</Text>
                  </VStack>
                </GridItem>
                <GridItem p={21} colStart={6} colSpan={2} rowSpan={2}>
                  <VStack>
                    <Text>Prénom</Text>
                    <Text>Code postal</Text>
                  </VStack>
                </GridItem>
                <GridItem p={21} colStart={8} colSpan={2} rowSpan={2}>
                  <VStack>
                    <Text>Adresse ETH</Text>
                    <Text>Ville</Text>
                  </VStack>
                </GridItem>
                <GridItem p={21} colStart={10} colSpan={2} rowSpan={2}>
                  <VStack>
                    <Text>Diplome</Text>
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

export default Profilveterinaire
