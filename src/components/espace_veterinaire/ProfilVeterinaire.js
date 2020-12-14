import React, { useState, useContext, useEffect } from 'react'
import { Heading, Text, Box, Input, SimpleGrid, Image, Center, Button } from '@chakra-ui/core'
import { Link } from 'react-router-dom';
import { NoeContext } from '../../App'
import Footer from '../Footer'
import NavVeteinaire from './NavVeterinaire'
import Woman from '../../assets/girl.svg'
import { Web3Context } from "web3-hooks"

function Profilveterinaire() {
  const noe = useContext(NoeContext)
  const [web3State, login] = useContext(Web3Context)
  
  const [name, setName] = useState();
  const [tel, setTel] = useState();
  const [diploma, setDiploma] = useState();

  useEffect(() => {
    (async() => {
      if(noe !== null) {
      const vetInfo = await noe.getVeterinary()
      setName(vetInfo[0])
      setTel(vetInfo[1])
      setDiploma(vetInfo[2])
      }
    })()
    
  }, [noe, web3State.account])

  return (
    <>
      <NavVeteinaire />
      <SimpleGrid columns={[1, 1, 2]} spacing="40px" mt={20} pt={10}>
        <Box >
          <Center>
            <Heading fontFamily="Montserrat" as="h2">Mon espace</Heading>
          </Center>
        </Box>
        <Box fontFamily="Montserrat">
          <Center>
            <Button name="button" _hover={{
              bg: "brand.100",
              color: "white",
            }} color="brand.100" borderColor="brand.100" variant="outline" textTransform='uppercase'>
              <Link to="/ajout_animal">Ajouter</Link>
            </Button>
          </Center>
        </Box>
      </SimpleGrid>
      <Box fontFamily="Montserrat" mb={150}>
        <SimpleGrid my={20} mx={20} columns={[1, 1, 3]} spacing="40px" p={30} fontFamily="Montserrat" borderWidth="1px" bg='brand.900' color='white' borderRadius={5}>
          <Box>
            <Image mb={10} borderRadius="full" boxSize="100px" objectFit="cover" src={Woman} alt="avatar" />
          </Box>
          <Box>
            <Text fontWeight="bold">Nom :</Text>
            <Input id="nom" aria-label="nom" isDisabled mb={20} variant="unstyled" value={name} />
            <Text fontWeight="bold">Téléphone :</Text>
            <Input id="tel" aria-label="tel" isDisabled variant="unstyled" value={tel}/>
          </Box>
          <Box>
            <Text fontWeight="bold">Adresse ETH :</Text>
            <Input id="ETH" aria-label="ETH" isDisabled mb={20} variant="unstyled" value={web3State.account}/>
            <Text fontWeight="bold">Diplome :</Text>
            <Input id="diplome" aria-label="diplome" isDisabled variant="unstyled" value={diploma} />
          </Box>
        </SimpleGrid>
      </Box>
      <Footer />
    </>
  )
}

export default Profilveterinaire
