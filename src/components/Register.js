import React, { useContext, useState } from 'react'
import { Center, Button, Stack, Input, Heading, FormControl, Box, SimpleGrid, VStack, FormLabel } from '@chakra-ui/core'
import Nav from './Nav'
import Footer from './Footer'
import { NoeContext } from '../App'
import { Web3Context } from "web3-hooks"
import { useHistory } from "react-router-dom"



function Register() {

  const [web3State, login] = useContext(Web3Context);
  const noe = useContext(NoeContext)
  // const toast = useToast()
  const history = useHistory()

  const [inputValueName, setInputValueName] = useState(null)
  const [inputValuePhoneNumber, setInputValuePhoneNumber] = useState(null)
  const [inputValueNameMember, setInputValueNameMember] = useState(null)
  const [inputValuePhoneMember, setInputValuePhoneMember] = useState(null)


  const handleOnClickCreateMember = async () => {
    try {
      const CMTX1 = await noe.createMember(inputValueNameMember, inputValuePhoneMember)
      const cb = () => {
        history.push("/profil_particulier")

      }
      const filter = noe.filters.MemberCreated(web3State.account)
      noe.once(filter, cb)
    } catch (e) {

    }
  }

  const handleOnClickCreateVeterinary = async () => {
    try {
      const CVTX1 = await noe.createVeterinary(inputValueName, inputValuePhoneNumber)
      const cb = () => {
        history.push("/profil_veterinaire")

      }
      const filter = noe.filters.VeterinaryCreated(web3State.account)
      noe.once(filter, cb)
    } catch (e) {

    }
  }


  // useEffect(() => {
  //   if (noe) {
  //     const cb = (_address) => {
  //       toast({
  //         position: 'bottom',
  //         title: `SET`,
  //         description: `send by ${_address}`,
  //         status: 'success',
  //         duration: 10000,
  //         isClosable: true,
  //       })
  //     }
  //     console.log('USEEFFECT CALLED FOR TOAST')
  //     noe.on('MemberCreated', cb)
  //     return () => {
  //       console.log('USEEFFECT CLEANUP FOR TOAST')
  //       noe.off('MemberCreated', cb)
  //     }
  //   }
  // }, [noe, toast])

  return (
    <>
      <Nav />
      <VStack py={20} fontFamily="Montserrat, sans-serif">
        <Box my={10} >
          <SimpleGrid columns={[1, 1, 2]} spacing="40px">
            <Box borderWidth="1px" p={50} borderRadius={5}>
              <Center>
                <Heading fontFamily="Montserrat, sans-serif" mb={10}>Inscription Vétérinaires</Heading>
              </Center>
              <FormControl isRequired>
                <Stack>
                  <FormLabel pt={10} htmlFor="nom">Nom</FormLabel >
                  <Input id="nom"
                    value={inputValueName} onChange={(e) => { setInputValueName(e.currentTarget.value) }}
                    variant="filled" placeholder="Nom" aria-label="nom" />
                  <FormLabel pt={10} htmlFor="mobile">Mobile</FormLabel >
                  <Input mb={20} id="mobile"
                    value={inputValuePhoneNumber} onChange={(e) => { setInputValuePhoneNumber(e.currentTarget.value) }}
                    variant="filled" placeholder="Mobile" aria-label="mobile" />
                  <Button name="button" _hover={{
                    bg: "teal.500",
                    color: "white",
                  }} bg="brand.900" color="white" textTransform='uppercase' onClick={handleOnClickCreateVeterinary}>Inscription</Button>
                </Stack>
              </FormControl >
            </Box>
            <Box borderWidth="1px" p={50} borderRadius={5}>
              <Center>
                <Heading fontFamily="Montserrat, sans-serif" mb={10}>Inscription Particuliers</Heading>
              </Center>
              <FormControl isRequired >
                <Stack >
                  <FormLabel htmlFor="name" pt={10}>Nom</FormLabel>
                  <Input id="name" value={inputValueNameMember} onChange={(e) => { setInputValueNameMember(e.currentTarget.value) }}
                    variant="filled" placeholder="Nom" aria-label="name" />
                  <FormLabel htmlFor="tel" pt={10}>Mobile</FormLabel>
                  <Input mb={20} id="tel" value={inputValuePhoneMember} onChange={(e) => { setInputValuePhoneMember(e.currentTarget.value) }}
                    variant="filled" placeholder="Mobile" aria-label="tel" />
                  <Button name="button" _hover={{
                    bg: "teal.500",
                    color: "white",
                  }} bg="brand.900" color="white" onClick={handleOnClickCreateMember} textTransform='uppercase' >Inscription</Button>
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

export default Register
