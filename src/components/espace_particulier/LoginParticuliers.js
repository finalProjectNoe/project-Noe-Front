import { React, useState, useContext } from 'react'
import { Center, Button, Stack, Input, Heading, FormControl, Box, SimpleGrid, VStack, FormLabel } from '@chakra-ui/core'
import Nav from '../Nav'
import Footer from '../Footer'
import { NoeContext } from '../../App'
import { Link } from 'react-router-dom';


function LoginParticulier() {

  const noe = useContext(NoeContext)

  const [inputValueNameMember, setInputValueNameMember] = useState(null)
  const [inputValuePhoneMember, setInputValuePhoneMember] = useState(null)
  const [inputValueAdressMember, setInputValueAdressMember] = useState(null)
  const [inputValueNameCoMember, setInputValueNameCoMember] = useState(null)

  const handleOnClickCreateMember = async () => {
    const CMTX1 = await noe.createMember(inputValueNameMember, inputValuePhoneMember)
  }

  const handleOnClickConnectionMember = async () => {
    const CMTX2 = await noe.connectionMember(inputValueAdressMember, inputValueNameCoMember)
  }


  return (
    <>
      <Nav />
      <VStack py={20} fontFamily="Montserrat, sans-serif">
        <Box my={10}>
          <SimpleGrid columns={[1, 1, 2]} spacing="40px">
            <Box borderWidth="1px" p={50} borderRadius={5}>
              <Center>
                <Heading fontFamily="Montserrat, sans-serif">Inscription Particuliers</Heading>
              </Center>
              <FormControl isRequired >
                <Stack >
                  <FormLabel htmlFor="nom" pt={10}>Nom</FormLabel>
                  <Input id="nom" value={inputValueNameMember} onChange={(e) => { setInputValueNameMember(e.currentTarget.value) }}
                    variant="filled" placeholder="Nom" aria-label="Nom" />
                  <FormLabel htmlFor="mobile" pt={10}>Mobile</FormLabel>
                  <Input mb={20} id="mobile" value={inputValuePhoneMember} onChange={(e) => { setInputValuePhoneMember(e.currentTarget.value) }}
                    variant="filled" placeholder="Mobile" aria-label="Mobile" />
                  <Button name="button" _hover={{
                    bg: "teal.500",
                    color: "white",
                  }} bg="brand.900" color="white" onClick={handleOnClickCreateMember} textTransform='uppercase' >Inscription</Button>
                </Stack>
              </FormControl >
            </Box>
            <Box borderWidth="1px" p={50} borderRadius={5}>
              <Center>
                <Heading fontFamily="Montserrat, sans-serif">Connexion</Heading>
              </Center>
              <FormControl isRequired>
                <Stack >
                  <FormLabel pt={10} htmlFor="adresse-ETH" >ETH</FormLabel>
                  <Input id="adresse-ETH" value={inputValueAdressMember} onChange={(e) => { setInputValueAdressMember(e.currentTarget.value) }}
                    variant="filled" placeholder="Adresse ETH" />
                  <FormLabel pt={10} htmlFor="Nom">Nom</FormLabel>
                  <Input mb={20} id="Nom" value={inputValueNameCoMember} onChange={(e) => { setInputValueNameCoMember(e.currentTarget.value) }}
                    variant="filled" placeholder="Nom" />
                  <Button _hover={{
                    bg: "teal.500",
                    color: "white",
                  }} bg="brand.900" color="white" onClick={handleOnClickConnectionMember} textTransform='uppercase'><Link to="/profil_particulier">Connexion</Link></Button>
                </Stack>
              </FormControl >
            </Box>
          </SimpleGrid>
        </Box>
      </VStack>
      <Footer />
    </>
  )
}

export default LoginParticulier
