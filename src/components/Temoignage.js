import React from 'react'
import { Heading, Text, VStack, Center, Box, SimpleGrid, Image } from '@chakra-ui/core'
import Man from '../assets/man.svg'
import Woman from '../assets/woman_1.svg'

function Temoignage() {

  return (

    <Box py={20} bg="beige.100" fontFamily="Montserrat">
      <Center>
        <Heading fontFamily="Montserrat" mb={10} as="h2">Témoignages</Heading>
      </Center>
      <SimpleGrid columns={[1, 1, 3]} spacing="40px" p={20} fontFamily="Montserrat">
        <Box>
          <VStack spacing={10}>
            <Image borderRadius="full" boxSize="100px" objectFit="cover" src={Woman} alt="Avatar" />
            <Text textAlign="center">Salut c'est moi Bughy cela fait 2 ans que je suis dans la famille NOÉ tout se passe très bien. Voilà pour les petites nouvelles, je vous en redonne tres vite.</Text>
            <Text fontWeight="bold">Alice DUPONT</Text>
          </VStack>
        </Box>
        <Box>
          <VStack spacing={10}>
            <Image borderRadius="full" boxSize="100px" objectFit="cover" src={Man} alt="Avatar" />
            <Text textAlign="center">Voilà déjà 10 mois que nous sommes dans la famille NOÉ. Nous sommes en pleine forme, heureux d'être là et aussi de faire des bêtises ... Nous embrassons tous les NOÉ !!!</Text>
            <Text fontWeight="bold">Bob DUBOIS</Text>
          </VStack>
        </Box>
        <Box>
          <VStack spacing={10}>
            <Image borderRadius="full" boxSize="100px" objectFit="cover" src={Man} alt="Avatar" />
            <Center>
              <Text textAlign="center">Quelques nouvelles de Slash le petit minou se porte très bien.</Text>
            </Center>
            <Text fontWeight="bold">Charlie MARTIN</Text>
          </VStack>
        </Box>
      </SimpleGrid>
    </Box>

  )
}

export default Temoignage
