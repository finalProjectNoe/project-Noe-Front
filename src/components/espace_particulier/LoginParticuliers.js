import { React, useState, useContext } from 'react'
import { Center, Button, Stack, Input, Heading, FormControl, Box, SimpleGrid, VStack, FormLabel } from '@chakra-ui/core'
// import { Link } from 'react-router-dom';
import Nav from '../Nav'
import Footer from '../Footer'
import { NoeContext } from '../../App'


function LoginParticulier() {

  const noe = useContext(NoeContext)

  const [inputValueAdressMember, setInputValueAdressMember] = useState(null)
  const [inputValueNameMember, setInputValueNameMember] = useState(null)
  const [inputValuePhoneMember, setInputValuePhoneMember] = useState(null)

  const handleOnClickCreateMember = async () => {
    const CMTX1 = await noe.createMember(inputValueNameMember, inputValuePhoneMember)
  }

  // const handleOnClickConnectionMember = async () => {
  //   const CMTX2 = await noe.connectionMember(inputValue)
  // }


  return (
    <>
      <Nav />
      <VStack py={20}>
        <Box my={10}>
          <SimpleGrid columns={[1, 1, 2]} spacing="40px">

            <Box borderWidth="1px" p={50} borderRadius={5}>

              <Center>
                <Heading mb={10}>Inscription</Heading>
              </Center>

              <FormControl isRequired>
                <Stack >
                  <FormLabel htmlFor="ETH" pt={5}>ETH</FormLabel>
                  <Input id='ETH' value={inputValueAdressMember} onChange={(e) => { setInputValueAdressMember(e.currentTarget.value) }}
                    variant="filled" placeholder="Adresse ETH" aria-label="Adresse ETH" />

                  <FormLabel htmlFor="nom" pt={5}>Nom</FormLabel>
                  <Input id="nom" value={inputValueNameMember} onChange={(e) => { setInputValueNameMember(e.currentTarget.value) }}
                    variant="filled" placeholder="Nom" aria-label="Nom" />

                  <FormLabel htmlFor="mobile" pt={5}>Mobile</FormLabel>
                  <Input id="mobile" value={inputValuePhoneMember} onChange={(e) => { setInputValuePhoneMember(e.currentTarget.value) }}
                    variant="filled" placeholder="Mobile" aria-label="Mobile" />

                  <Button name="button" _hover={{
                    bg: "teal.500",
                    color: "white",
                  }} bg="brand.900" color="white" onClick={handleOnClickCreateMember} textTransform='uppercase' >Inscription</Button>

                </Stack>
              </FormControl >

            </Box>

            {/* <Box borderWidth="1px" p={50} borderRadius={5}>

              <Center>
                <Heading mb={10}>Connexion</Heading>
              </Center>

              <FormControl isRequired>
                <Stack spacing={50} >

                  <Input variant="filled" id="fname" placeholder="Adresse ETH" />

                  <Input variant="filled" id="fname" placeholder="Nom" />

                  <Button name="button" onClick={handleOnClickConnectionMember} textTransform='uppercase' colorScheme="teal">
                    <Link to="/profil_particulier">Connexion</Link>
                  </Button>
                </Stack>
              </FormControl >

            </Box> */}
          </SimpleGrid>
        </Box>
      </VStack>
      <Footer />
    </>
  )
}

export default LoginParticulier
