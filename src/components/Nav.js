import React, { useContext } from 'react'
import { Button, Box, Text } from '@chakra-ui/core'
import { Grid, GridItem } from "@chakra-ui/react"
import { Link } from 'react-router-dom';
import { ethers } from 'ethers'
import { Web3Context } from '../hooks/useWeb3'


function Nav() {

  const [web3State, login] = useContext(Web3Context)

  return (
    <Box py={3} px={150} >
      <Grid templateColumns="repeat(2, 1fr)" gap={6}>
        <GridItem>
          <Button variant="outline">
            <Link to="/">Logo</Link>
          </Button>
        </GridItem>
        <GridItem ml='auto' >
          <Text>{web3State.is_logged ? '' : ''}</Text>
{!web3State.is_logged && (
  <>
    <Button bg="brand.100" color="white" textTransform='uppercase' mr={5} onClick={login}>Start</Button>
  </>
)}
          <Button colorScheme="teal" textTransform='uppercase' mr={5} variant="outline">
            <Link to="/particulier">espace particulier</Link>

          </Button>

          <Button colorScheme="teal" textTransform='uppercase' variant="outline">
            <Link to="/veterinaire">espace vétérinaire</Link>
            
          </Button>
        </GridItem>
      </Grid>
    </Box>
  )
}

export default Nav
