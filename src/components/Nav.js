import React, { useContext } from 'react'
import { Button, Box, Flex, Divider, Image, Spacer, Text } from '@chakra-ui/core'
import { } from "@chakra-ui/react"
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.png'
//import { ethers } from 'ethers'
//import { Web3Context } from '../hooks/useWeb3'


function Nav() {
  //const [web3State, login] = useContext(Web3Context)

  return (
    <>

      <Flex fontFamily="Montserrat">
        <Box py={3}>

          <Link to="/">
            <Image boxSize="100px" objectFit="cover" src={Logo} />
          </Link>
        </Box>
        <Spacer />

        {/* <Box>
          {web3State.is_logged ? '' : ''}
          {!web3State.is_logged && (
            <>
              <Button bg="brand.100" color="white" textTransform='uppercase' mr={5} onClick={login}>Start</Button>
            </>
          )}
          </Box>*/}
        <Box py={10}>

          <Button colorScheme="teal" textTransform='uppercase' mr={5} variant="outline">
            <Link to="/particulier">espace particulier</Link>
          </Button>

          <Button colorScheme="teal" textTransform='uppercase' mr={5} variant="outline">
            <Link to="/veterinaire">espace vétérinaire</Link>
          </Button>

        </Box>
      </Flex>
      <Divider borderWidth="1px" />

    </>
  )
}

export default Nav
