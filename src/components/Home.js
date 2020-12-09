import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { Heading, Text, Button, HStack, Box, Image, SimpleGrid, Container } from '@chakra-ui/core'
import Nav from './Nav'
import ChiffreCles from './ChiffresCles';
import CommentçaMarche from './CommentçaMarche';
import Temoignage from './Temoignage'
import Contact from './Contact'
import Footer from './Footer'
import Animaux from '../assets/animaux.jpg'
import { NoeContext } from '../App'
import { Web3Context } from '../hooks/useWeb3'




function Home() {

  const noe = useContext(NoeContext)
  const [web3State] = useContext(Web3Context)
  return (
    <>
      <Nav />
      <Box fontFamily="Montserrat" py={20}>
        <SimpleGrid columns={[1, 1, 2]} spacing="40px" >
          <Box>
            <Container>
              <Heading fontFamily="Montserrat" textAlign="center" size="3xl" my={10} as='h1'>Référencez votre NOE</Heading>

              <Text pt={10} mb={10} textAlign="center">
                Grâce à Noe, vous gardez contact avec votre animal où qu’il soit. Nous œuvrons pour vous et vos petites boules de poils afin qu’elles ne soient jamais loin de vous, en sécurité et en bonne santé mais également identifiables même à distance.
            </Text>
              {noe !== null && web3State.chain_id === 4 && (
                <HStack spacing='24px' justifyContent='center'>
                  <SimpleGrid columns={[1, 1, 2]} spacing="40px" p={10}>
                    <Button name="button" _hover={{
                      bg: "teal.500",
                      color: "white",
                    }} bg="brand.900" color="white" textTransform='uppercase'>
                      <Link to="/register">espace particulier</Link>
                    </Button>
                    <Button name="button" _hover={{
                      bg: "teal.500",
                      color: "white",
                    }} bg="brand.100" color="white" textTransform='uppercase'>
                      <Link to="/register">espace vétérinaire</Link>
                    </Button>
                  </SimpleGrid>
                </HStack>
              )}
            </Container>
          </Box>
          <Box >
            <Container>
              <Image pt={20} src={Animaux} alt='animaux' />
            </Container>
          </Box>
        </SimpleGrid>
      </Box>
      <ChiffreCles />
      <CommentçaMarche />
      <Temoignage />
      <Contact />
      <Footer />
    </>
  )
}

export default Home
