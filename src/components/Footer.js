import React from 'react'
import { Text, Center, Box, Image, Flex } from '@chakra-ui/core'
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.png'
import Facebook from '../assets/facebook.svg'
import Twitter from '../assets/twitter.svg'
import Linkedin from '../assets/linkedin.svg'

function Footer() {
  return (

    <Box py={5} bg="teal.500" fontFamily="Montserrat">
      <Center>
        <Link to="/">
          <Image borderRadius="full" boxSize="100px" src={Logo} />
        </Link>
      </Center>
      <Flex justifyContent="center" p={5} fontFamily="Montserrat">
        <Box>
          <Image mx={10} borderRadius="full" boxSize="25px" objectFit="cover" src={Facebook} />
        </Box>
        <Box>
          <Image mx={10} borderRadius="full" boxSize="25px" objectFit="cover" src={Twitter} />
        </Box>
        <Box>
          <Image mx={10} borderRadius="full" boxSize="25px" objectFit="cover" src={Linkedin} />
        </Box>
      </Flex>
      <Text textAlign="center" color="white" >© 2020 - NOE | Dev by Theo, Micka, Nico, Streed |   All right reserved</Text>
    </Box>


  )
}

export default Footer
