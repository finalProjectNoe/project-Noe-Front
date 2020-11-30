import React from 'react'
import { Text, Center, Box, Image, Flex, Spacer } from '@chakra-ui/core'
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.png'
import Facebook from '../assets/facebook.svg'
import Twitter from '../assets/twitter.svg'
import Linkedin from '../assets/linkedin.svg'

function Footer() {
  return (

    <Box py={20} bg="teal.500" fontFamily="Montserrat" mb={150}>
      <Flex alignContent='center' p={20} fontFamily="Montserrat">
        <Box>
          <Image borderRadius="full" boxSize="25px" objectFit="cover" src={Facebook} />
        </Box>
        <Spacer />
        <Box>
          <Image borderRadius="full" boxSize="25px" objectFit="cover" src={Twitter} />
        </Box>
        <Spacer />
        <Box>
          <Image borderRadius="full" boxSize="25px" objectFit="cover" src={Linkedin} />
        </Box>
      </Flex>
    </Box>


  )
}

export default Footer
