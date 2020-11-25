import React from 'react'
import { Heading, Text, Box, VStack, Center } from '@chakra-ui/core'
import { Grid, GridItem, } from "@chakra-ui/react"

function CommentçaMarche() {

  return (
    <>
      <Box mx={5}>
        <Center>
          <Heading my={10} as="h2">Témoignages</Heading>
        </Center>
        <Grid templateColumns="repeat(12, 1fr)" templateRows="repeat(3, 1fr)" gap={30} spacing={10}>
          <GridItem colSpan={4} rowSpan={3} p={5} shadow="md" borderWidth="1px" >
            <VStack>
              <Text textAlign="center">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</Text>
              <Text>Alice DUPONT</Text>
            </VStack>
          </GridItem>
          <GridItem colSpan={4} rowSpan={3} p={5} shadow="md" borderWidth="1px">
            <VStack>
              <Text textAlign="center">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</Text>
              <Text>Bob DUBOIS</Text>
            </VStack>
          </GridItem>
          <GridItem colSpan={4} rowSpan={3} p={5} shadow="md" borderWidth="1px" >
            <VStack>
              <Center>
                <Text textAlign="center">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</Text>
              </Center>
              <Text>Charlie MARTIN</Text>
            </VStack>
          </GridItem>
        </Grid>
      </Box>
    </>
  )
}

export default CommentçaMarche
