import React, { useContext, useState } from 'react'
import { Button, Box, Flex, Divider, Image, Spacer, Input, FormControl, Center, SimpleGrid, InputGroup, Text } from '@chakra-ui/core'
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.png'
import Burger from '../assets/menu.svg'
import Loupe from '../assets/loupe.svg'
//import { ethers } from 'ethers'
import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerBody,
  DrawerCloseButton,
  useDisclosure,
} from "@chakra-ui/core"
import { NoeContext } from '../App'
import { Web3Context } from '../hooks/useWeb3'




function Nav() {

  const noe = useContext(NoeContext)
  const [web3State, login] = useContext(Web3Context)

  const [getValue, setGetValue] = useState(null)

  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

  const handleOnClickGetAnimalByID = async () => {
    try {
      const res = await noe.getAnimalById()
      setGetValue(res.toString())
    } catch (e) {
      console.log(e.message)
    }
  }


  return (
    <>
      <Flex fontFamily="Montserrat">
        <Box py={3}>
          <Link to="/">
            <Image boxSize="100px" objectFit="cover" src={Logo} />
          </Link>
        </Box>
        <Spacer />
        <Box my={10}>
          {web3State.is_logged ? '' : ''}
          {!web3State.is_logged && (
            <>

              <Button _hover={{
                bg: "teal.500",
                color: "white",
              }} bg="brand.100" color="white" textTransform='uppercase' mr={5} onClick={login}>Start</Button>
            </>
          )}
        </Box>
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
                          <Button onClick={handleOnClickGetAnimalByID}
                          _hover={{
                            bg: "teal.500",
                            fill: "white",
                          }} bg="brand.100" fill="white">
                            <Text>{getValue}</Text>
                            <Image boxSize="35px" src={Loupe} />
                          </Button>
                        </Center>
                      </InputGroup>
                    </FormControl>
                  </SimpleGrid>

                  <Spacer />
                  <Divider borderWidth="1px" />
                  <Box my={10}>

                    <Button colorScheme="teal" textTransform='uppercase' mr={5} mb={5} variant="outline">
                      <Link to="/particulier">espace particulier</Link>
                    </Button>

                    <Button colorScheme="teal" textTransform='uppercase' mr={5} variant="outline">
                      <Link to="/veterinaire">espace vétérinaire</Link>
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

export default Nav
