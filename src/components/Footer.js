import React from 'react'
import { Text, Center, Box, Image } from '@chakra-ui/core'
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.png'

function Footer() {
  return (

    <Box py={10} bg="teal.500" fontFamily="Montserrat" >
      <Center>

        <Text>Dev by Streed, Micka, Nicolas, Théo</Text>
      </Center>
    </Box>


  )
}

export default Footer
