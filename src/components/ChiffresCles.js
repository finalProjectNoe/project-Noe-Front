import React from 'react'
import { Heading, Text, Box, VStack, Center } from '@chakra-ui/core'
import { Grid, GridItem, Divider } from "@chakra-ui/react"

function ChiffreCles() {

  return (
    <>
      <Box p={20} bg="beige.100" fontFamily="Montserrat">
        <Grid m='auto' templateColumns="repeat(12, 1fr)" templateRows="repeat(3, 1fr)" gap={30}>

          <GridItem colSpan={3} rowSpan={3}>
            <Center>
              <Heading fontFamily="Montserrat" as="h2">Chiffres-clés</Heading>
            </Center>
          </GridItem>
          <GridItem colSpan={3} rowSpan={3} >
            <VStack>
              <Text fontWeight="bold" fontSize="3xl">5000</Text>
              <Text>Animaux sont répertoriés</Text>
            </VStack>
          </GridItem>
          <GridItem colSpan={3} rowSpan={3}>
            <VStack h='110px' borderLeft="1px solid">
              <Text fontWeight="bold" fontSize="3xl">437</Text>
              <Text>Particuliers nous ont fait confiance</Text>
            </VStack>
          </GridItem>
          <GridItem colSpan={3} rowSpan={3} >
            <VStack h='110px' borderLeft="1px solid">
              <Text fontWeight="bold" fontSize="3xl">1850</Text>
              <Center>
                <Text textAlign="center">Animaux retrouvés grâce à notre plateforme</Text>
              </Center>
            </VStack>
          </GridItem>
        </Grid>
      </Box>
    </>
  )
}

export default ChiffreCles
