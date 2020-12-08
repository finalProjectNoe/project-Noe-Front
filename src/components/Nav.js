import React, { useContext, useState } from 'react'
import { Button, Box, Flex, Divider, Image, Spacer, Input, FormControl, Center, SimpleGrid, InputGroup, Text } from '@chakra-ui/core'
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.png'
import Burger from '../assets/menu.svg'
//import { ethers } from 'ethers'
import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerBody,
  DrawerCloseButton,
  useDisclosure,
  Icon,
} from "@chakra-ui/core"
import { NoeContext } from '../App'
import { Web3Context } from '../hooks/useWeb3'
var Web3 = require('web3');




function Nav() {

  const wallet = new Web3(Web3.givenProvider)
  console.log(Web3.givenProvider)

  const noe = useContext(NoeContext)
  const [web3State, login] = useContext(Web3Context)

  const [inputAnimalById, setInputAnimalById] = useState(null)
  const [getValueAnimalById, setGetValueAnimalById] = useState(null)

  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

  const handleOnClickGetAnimalByID = async () => {
    try {
      const res = await noe.getAnimalById(inputAnimalById)
      console.log(res)
      setGetValueAnimalById(res.toString())
    } catch (e) {
    }
  }


  return (
    <>
      <Flex fontFamily="Montserrat ">
        <Box py={3}>
          <Link to="/">
            <Image boxSize="100px" objectFit="cover" src={Logo} alt="logo noé" />
          </Link>
        </Box>
        <Spacer />
        <Box my={12} mx={6} as="samp" fontSize="12px">
          {web3State.is_logged ? `✅ Connected wallet: ${web3State.is_metamask}`  : `🛑 Locked wallet: ${web3State.is_metamask}`}
          {!web3State.is_logged && (
            <>
              <Button name="button" _hover={{
                bg: "teal.500",
                color: "white",
              }} bg="brand.100" color="white" textTransform='uppercase' mr={5} onClick={login}>Start</Button>
            </>
          )}
        </Box>
        <Button name="button" variant="link" ref={btnRef} onClick={onOpen} size="sm" py={10} mr={10} >
          <Image boxSize="25px" src={Burger} alt="menu burger" />
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
                        <Input _hover={{
                          color: "brand.900",
                        }} borderColor="brand.100" value={inputAnimalById} onChange={(e) => { setInputAnimalById(e.currentTarget.value) }}
                          size="md" type="search" variant="outline" placeholder="Recherche animaux" />
                        <Center>
                          <Button onClick={handleOnClickGetAnimalByID}
                            _hover={{
                              bg: "teal.500",
                              fill: "white",
                            }} bg="brand.100">
                            <Icon viewBox="0 0 512.005 512.005" fill="white" >
                              <path d="M505.749,475.587l-145.6-145.6c28.203-34.837,45.184-79.104,45.184-127.317c0-111.744-90.923-202.667-202.667-202.667
			S0,90.925,0,202.669s90.923,202.667,202.667,202.667c48.213,0,92.48-16.981,127.317-45.184l145.6,145.6
			c4.16,4.16,9.621,6.251,15.083,6.251s10.923-2.091,15.083-6.251C514.091,497.411,514.091,483.928,505.749,475.587z
			 M202.667,362.669c-88.235,0-160-71.765-160-160s71.765-160,160-160s160,71.765,160,160S290.901,362.669,202.667,362.669z"/>
                            </Icon>
                          </Button>
                        </Center>
                      </InputGroup>
                    </FormControl>
                  </SimpleGrid>
                  <Text>{getValueAnimalById}</Text>
                  <Spacer />
                  <Box my={10} fontFamily="Montserrat">
                    <Button name="button" _hover={{
                      bg: "brand.100",
                      color: "white",
                    }} color="brand.100" borderColor="brand.100" textTransform='uppercase' mr={5} mb={5} variant="outline">
                      <Link to="/particulier">espace particulier</Link>
                    </Button>
                    <Button _hover={{
                      bg: "brand.100",
                      color: "white",
                    }} color="brand.100" borderColor="brand.100" name="button" textTransform='uppercase' mr={5} variant="outline">
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
