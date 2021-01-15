import React from 'react'
import { Heading, Text, VStack, Center, SimpleGrid, Image, Box } from '@chakra-ui/core'
import Dog from '../assets/dog.svg'
import Cat from '../assets/cat.svg'
import Ferret from '../assets/ferret.svg'

function CommentçaMarche() {

  return (
    <Box py={20} fontFamily="Montserrat, sans-serif">
      <Heading textAlign='center' fontFamily="Montserrat, sans-serif" mb={10} as="h2">Comment ça marche ?</Heading>
      <SimpleGrid columns={[1, 1, 3]} spacing="40px" p={20} fontFamily="Montserrat, sans-serif">
        <Box>
          <VStack spacing={10}>
            <Image boxSize="100px" objectFit="cover" src={Dog} alt="dog" />
            <Text fontWeight="bold" fontSize="2xl">Inscription</Text>
            <Text textAlign={"center"}>Commencez par vous connecter à votre MetaMask avec le bouton start puis dirigez vous vers l'espace qui vous est dédié.</Text>
          </VStack>
        </Box>
        <Box>
          <VStack spacing={10}>
            <Image boxSize="100px" objectFit="cover" src={Cat} alt="cat" />
            <Text fontWeight="bold" textAlign={"center"} fontSize="2xl">Attribution de l’animal par votre vétérinaire</Text>
            <Text textAlign={"center"}>Votre vétérinaire se charge de vous associer à votre animal.</Text>
          </VStack>
        </Box>
        <Box>
          <VStack spacing={10}>
            <Image boxSize="100px" objectFit="cover" src={Ferret} alt="ferret" />
            <Text textAlign={"center"} fontWeight="bold" fontSize="2xl">Connexion à votre espace</Text>
            <Center>
              <Text textAlign={"center"}>En vous connectant à votre espace vous trouverez toutes les infos vous concernant vous et vos animaux.</Text>
            </Center>
          </VStack>
        </Box>
      </SimpleGrid>
    </Box>
  )
}

export default CommentçaMarche
