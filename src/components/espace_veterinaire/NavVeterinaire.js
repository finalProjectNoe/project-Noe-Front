import React from 'react'
import { Button, Box, Divider, Input, FormControl, Image, Flex, Center, Spacer, InputGroup, SimpleGrid } from '@chakra-ui/core'
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.png'
import Burger from '../../assets/menu.svg'
import Loupe from '../../assets/loupe.svg'
import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerBody,
  DrawerCloseButton,
  useDisclosure,
} from "@chakra-ui/core"

function NavVeteinaire() {

  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

  return (
    <>
      <Flex fontFamily="Montserrat">
        <Box py={3}>
          <Link to="/">
            <Image boxSize="100px" objectFit="cover" src={Logo} />
          </Link>
        </Box>
        <Spacer />

        <Button variant="link" ref={btnRef} onClick={onOpen} size="sm" py={10} mr={10} >
          <Image boxSize="25px" src={Burger} />
        </Button>

        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay>
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerBody>
                <Box py={10}>

                  <SimpleGrid py={5} mb={10}>
                    <FormControl>
                      <InputGroup>
                        <Input size="md" type="search" variant="outline" placeholder="Recherche animaux" />
                        <Center>
                          <Button _hover={{
                            bg: "teal.500",
                            fill: "white",
                          }} bg="brand.100" fill="white">
                            <Image boxSize="35px" src={Loupe} />
                          </Button>
                        </Center>
                      </InputGroup>
                    </FormControl>
                  </SimpleGrid>

                  <Spacer />
                  <Divider borderWidth="1px" />
                  <Box my={10}>

                    <Button mr={5} colorScheme="teal" textTransform='uppercase' variant="link">
                      <Link to="/profil_veterinaire">Mon espace</Link>
                    </Button>

                    <Button mr={5} colorScheme="teal" textTransform='uppercase' variant="link">
                      <Link to="/">Deconnexion</Link>
                    </Button>
                  </Box>
                </Box>
              </DrawerBody>
            </DrawerContent>
          </DrawerOverlay>
        </Drawer>
      </Flex>
      <Divider borderWidth="1px" />
    </>
  )
}

export default NavVeteinaire


