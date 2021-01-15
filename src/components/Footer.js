import React from 'react'
import { Text, Center, Box, Image, Flex } from '@chakra-ui/core'
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.png'
import Facebook from '../assets/facebook.svg'
import Twitter from '../assets/twitter.svg'
import Linkedin from '../assets/linkedin.svg'

function Footer() {
  return (

    <Box py={10} bg="brand.900" fontFamily="Montserrat, sans-serif">
      <Center>
        <Link to="/">
          <Image borderRadius="full" boxSize="100px" src={Logo} alt="logo" />
        </Link>
      </Center>
      <Flex justifyContent="center" p={5} fontFamily="Montserrat, sans-serif">
        <Box>
          <Image mx={5} borderRadius="full" boxSize="32px" objectFit="cover" src={Facebook} alt="Facebook" />
        </Box>
        <Box>
          <Image mx={5} borderRadius="full" boxSize="32px" objectFit="cover" src={Twitter} alt="Twitter" />
        </Box>
        <Box>
          <Image mx={5} borderRadius="full" boxSize="32px" objectFit="cover" src={Linkedin} alt="Linkedin" />
        </Box>
      </Flex>
      <Text textAlign="center" color="white" >© 2020 - NOE | Dev by Theo, Micka, Nico, Streed |   All right reserved</Text>
    </Box>


  )
}

export default Footer
