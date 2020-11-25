import React from 'react'
import { Heading, Text, Box, VStack, Center } from '@chakra-ui/core'
import { Grid, GridItem, } from "@chakra-ui/react"

function ChiffreCles() {

  return (
    <>
      <Box my={10} mx={5}>
        <Grid m='auto' templateColumns="repeat(12, 1fr)" templateRows="repeat(3, 1fr)" gap={30}>

          <GridItem colSpan={3} rowSpan={3}>
            <Center>
              <Heading as="h2">Chiffre-clés</Heading>
            </Center>
          </GridItem>
          <GridItem colSpan={3} rowSpan={3} >
            <VStack>
              <Text>5000</Text>
              <Text>Animaux sont répertoriés</Text>
            </VStack>
          </GridItem>
          <GridItem colSpan={3} rowSpan={3}>
            <VStack>
              <Text>437</Text>
              <Text>Particuliers nous ont fait confiance</Text>
            </VStack>
          </GridItem>
          <GridItem colSpan={3} rowSpan={3} >
            <VStack>
              <Text>1850</Text>
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
