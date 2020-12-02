import React from 'react'
import { Heading, Text, VStack, Center, SimpleGrid, Image, Box } from '@chakra-ui/core'
import Dog from '../assets/dog.svg'
import Cat from '../assets/cat.svg'
import Ferret from '../assets/ferret.svg'

function CommentçaMarche() {

  return (
    <Box py={20}>
      <Center>
        <Heading mb={10} as="h2">Comment ça marche ?</Heading>
      </Center>
      <SimpleGrid columns={[1, 1, 3]} spacing="40px" p={20} fontFamily="Montserrat">
        <Box>
          <VStack>
            <Image boxSize="100px" objectFit="cover" src={Dog} alt="dog" />
            <Text fontWeight="bold" fontSize="2xl">Inscription</Text>
            <Text textAlign={"center"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</Text>
          </VStack>
        </Box>

        <Box>
          <VStack>
            <Image boxSize="100px" objectFit="cover" src={Cat} alt="cat" />
            <Text fontWeight="bold" textAlign={"center"} fontSize="2xl">Attribution de l’animal par votre vétérinaire</Text>
            <Text textAlign={"center"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</Text>
          </VStack>
        </Box>

        <Box>
          <VStack>
            <Image boxSize="100px" objectFit="cover" src={Ferret} alt="ferret" />
            <Text textAlign={"center"} fontWeight="bold" fontSize="2xl">Connexion à votre espace</Text>
            <Center>
              <Text textAlign={"center"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</Text>
            </Center>
          </VStack>
        </Box>
      </SimpleGrid>
    </Box>
  )
}

export default CommentçaMarche
