import React, { useContext, useState } from 'react'
import { Button, Input, FormControl, Center, Box, SimpleGrid, VStack, Stack, Heading, Text, FormLabel } from '@chakra-ui/core'
import Nav from "./Nav"
import Footer from './Footer'
import { NoeContext } from '../App'


function Admin() {

  const noe = useContext(NoeContext)

  const [inputValueAdressVet, setInputValueAdressVet] = useState(null)
  const [inputValueVetApproval, setInputValueVetApproval] = useState(null)
  const [getName, setGetName] = useState(null)
  const [getSymbole, setGetSymbole] = useState(null)
  const [getAnimalCount, setGetAnimalCount] = useState(null)
  const [getVetApproval, setGetVetApproval] = useState(null)

  const handleOnClickApproveVet = async () => {
    const APVTX = await noe.approveVeterinary(inputValueAdressVet)
  }

  const handleOnClickGetName = async () => {
    try {
      const res = await noe.name()
      setGetName(res.toString())
    } catch (e) {
    }
  }

  const handleOnClickGetSymbole = async () => {
    try {
      const res = await noe.symbol()
      setGetSymbole(res.toString())
    } catch (e) {
    }
  }

  const handleOnClickGetAnimalCount = async () => {
    try {
      const res = await noe.animalsCount()
      setGetAnimalCount(res.toString())
    } catch (e) {
    }
  }

  const handleOnClickGetVetApproval = async () => {
    try {
      const res = await noe.veterinary(inputValueVetApproval)
      console.log(res)
      setGetVetApproval(res.toString())
    } catch (e) {
    }
  }

  return (
    <>
      <Nav />
      <VStack py={20} fontFamily="Montserrat">
        <Box my={10}>
          <SimpleGrid columns={[1, 1, 2]} spacing="40px">
            <Box borderWidth="1px" p={50} borderRadius={5}>
              <Center>
                <Heading fontFamily="Montserrat" mb={10}>Approuvre vétérinaire</Heading>
              </Center>

              <Center>
                <FormControl>
                  <Stack my={10} >
                    <FormLabel htmlFor="approuve"></FormLabel>
                    <Input id="approuve" value={inputValueAdressVet} onChange={(e) => { setInputValueAdressVet(e.currentTarget.value) }}
                      type="text" placeholder="Approuve vétérinaire" variant="filled" aria-label="approuve vétérinaire" />
                    <Button name="button" _hover={{
                      bg: "teal.500",
                      color: "white",
                    }} bg="brand.900" color="white" onClick={handleOnClickApproveVet} my={10} textTransform='uppercase'>Approuve</Button>
                  </Stack>
                </FormControl >
              </Center>
            </Box>

            <Box borderWidth="1px" p={50} borderRadius={5}>
              <Center>
                <Heading fontFamily="Montserrat" mb={10}>Liste</Heading>
              </Center>
              <Box>
                <Button onClick={handleOnClickGetName} my={5} _hover={{
                  bg: "teal.500",
                  color: "white",
                }} bg="brand.100" color="white" textTransform='uppercase'>Name</Button>
                <Text>{getName}</Text>
              </Box>
              <Box>
                <Button onClick={handleOnClickGetSymbole} my={5} _hover={{
                  bg: "teal.500",
                  color: "white",
                }} bg="brand.100" color="white" textTransform='uppercase'>Symbole</Button>
                <Text>{getSymbole}</Text>
              </Box>
              <Box>
                <Button onClick={handleOnClickGetAnimalCount} my={5} _hover={{
                  bg: "teal.500",
                  color: "white",
                }} bg="brand.100" color="white" textTransform='uppercase'>Animal count</Button>
                <Text>{getAnimalCount}</Text>
              </Box>
              <Box>
                <Input value={inputValueVetApproval} onChange={(e) => { setInputValueVetApproval(e.currentTarget.value) }}
                  type="text" placeholder="Adresse ETH" variant="filled" aria-label="adresse ETH" />
                <Button onClick={handleOnClickGetVetApproval} my={5} _hover={{
                  bg: "teal.500",
                  color: "white",
                }} bg="brand.100" color="white" textTransform='uppercase'>Veterinary Check Approval</Button>
                <Text>{getVetApproval}</Text>
              </Box>
            </Box>
          </SimpleGrid>
        </Box>
      </VStack>
      <Footer />
    </>
  )
}

export default Admin
