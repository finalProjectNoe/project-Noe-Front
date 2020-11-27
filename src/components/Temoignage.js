import React from 'react'
import { Heading, Text, VStack, Center, Box } from '@chakra-ui/core'
import { Grid, GridItem, Image } from "@chakra-ui/react"
import Man from '../assets/man.svg'
import Woman from '../assets/woman_1.svg'

function Temoignage() {

  return (
    <>
      <Box p={20} bg="bad.100" fontFamily="Montserrat">
        <Center>
          <Heading fontFamily="Montserrat" mb={10} as="h2">Témoignages</Heading>
        </Center>
        <Grid templateColumns="repeat(12, 1fr)" templateRows="repeat(3, 1fr)" gap={30} spacing={10}>
          <GridItem colSpan={4} rowSpan={3}>
            <VStack>
              <Image borderRadius="full" boxSize="100px" objectFit="cover" src={Woman} />
              <Text textAlign="center">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</Text>
              <Text fontWeight="bold">Alice DUPONT</Text>
            </VStack>
          </GridItem>
          <GridItem colSpan={4} rowSpan={3}>
            <VStack>
              <Image borderRadius="full" boxSize="100px" objectFit="cover" src={Man} />
              <Text textAlign="center">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</Text>
              <Text fontWeight="bold">Bob DUBOIS</Text>
            </VStack>
          </GridItem>
          <GridItem colSpan={4} rowSpan={3}>
            <VStack>
              <Image borderRadius="full" boxSize="100px" objectFit="cover" src={Man} />
              <Center>
                <Text textAlign="center">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</Text>
              </Center>
              <Text fontWeight="bold">Charlie MARTIN</Text>
            </VStack>
          </GridItem>
        </Grid>
      </Box>
    </>
  )
}

export default Temoignage
