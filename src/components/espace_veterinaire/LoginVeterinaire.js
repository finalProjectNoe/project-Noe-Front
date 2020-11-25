import React from 'react'
import { Center, Button, VStack, HStack, Input, Heading, FormControl, Box } from '@chakra-ui/core'
import { Grid, GridItem } from "@chakra-ui/react"
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem
} from "@chakra-ui/react"
import Nav from '../Nav'


function LoginVeterinaire() {

  return (
    <>
      <Nav />
      <Box my={10} mx={5}>
        <Grid m='auto' templateColumns="repeat(12, 1fr)" templateRows="repeat(3, 1fr)" gap={30}>

          <GridItem colSpan={3} rowSpan={3}>
            <VStack>
              <Center>
                <Heading mb={10}>Register</Heading>
              </Center>
              <HStack>
                <FormControl isRequired>
                  <HStack>
                    <VStack>

                      <Input variant="filled" id="fname" placeholder="Adresse ETH" />

                      <Input variant="filled" id="fname" placeholder="Nom-Prénom" />

                      <Input variant="filled" id="fname" placeholder="Adresse" />

                      <Input variant="filled" id="fname" placeholder="Code postal" />

                      <Input variant="filled" id="fname" placeholder="Ville" />

                      <Menu>
                        <MenuButton
                          px={4}
                          py={2}
                          transition="all 0.2s"
                          borderRadius="md"
                          borderWidth="1px"
                          _hover={{ bg: "gray.100" }}
                          _expanded={{ bg: "red.200" }}
                          _focus={{ outline: 0, boxShadow: "outline" }}
                        >
                          Diplome
                        </MenuButton>
                        <MenuList>
                          <MenuItem>Open...</MenuItem>
                        </MenuList>
                      </Menu>

                      <Button>Inscription</Button>
                    </VStack>
                  </HStack>
                </FormControl >
              </HStack >
            </VStack >
          </GridItem>
        </Grid>
      </Box>
    </>
  )
}

export default LoginVeterinaire
