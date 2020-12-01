import { React, useState, useContext } from 'react'
import { Center, Button, Stack, Input, Heading, FormControl, Box, SimpleGrid, VStack } from '@chakra-ui/core'
// import { Link } from 'react-router-dom';
import Nav from '../Nav'
import Footer from '../Footer'
import { NoeContext } from '../../App'


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
      <VStack py={20}>
        <Box my={10}>
          <SimpleGrid columns={[1, 1, 2]} spacing="40px">

            <Box borderWidth="1px" p={50} borderRadius={5}>

              <Center>
                <Heading mb={10}>Inscription Particuliers</Heading>
              </Center>

              <FormControl isRequired>
                <Stack spacing={8} >

                  <Input value={inputValueNameMember} onChange={(e) => { setInputValueNameMember(e.currentTarget.value) }}
                    variant="filled" id="fname" placeholder="Nom" />

                  <Input value={inputValuePhoneMember} onChange={(e) => { setInputValuePhoneMember(e.currentTarget.value) }}
                    variant="filled" id="fname" placeholder="Mobile" />

                  <Button onClick={handleOnClickCreateMember} textTransform='uppercase' colorScheme="teal">Inscription</Button>

                </Stack>
              </FormControl >

            </Box>

            <Box borderWidth="1px" p={50} borderRadius={5}>

              <Center>
                <Heading mb={10}>Connexion</Heading>
              </Center>

              <FormControl isRequired>
                <Stack spacing={50} >

                <Input value={inputValueAdressMember} onChange={(e) => { setInputValueAdressMember(e.currentTarget.value) }}
                 variant="filled" id="fname" placeholder="Adresse ETH" />

                <Input value={inputValueNameCoMember} onChange={(e) => { setInputValueNameCoMember(e.currentTarget.value) }}
                  variant="filled" id="fname" placeholder="Nom" />

                  <Button onClick={handleOnClickConnectionMember} textTransform='uppercase' colorScheme="teal">Connexion</Button>

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
