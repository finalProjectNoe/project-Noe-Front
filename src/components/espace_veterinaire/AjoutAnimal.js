import React, { useContext, useState } from 'react'
import { Center, Button, Stack, Input, Heading, FormControl, Box, SimpleGrid, VStack, FormLabel, Select } from '@chakra-ui/core'
import Footer from '../Footer'
import NavVeteinaire from './NavVeterinaire'
import { NoeContext } from '../../App'


function AjoutAnimal() {

  const noe = useContext(NoeContext)

  const [inputValueAddAdress, setInputValueAddAdress] = useState(null)
  const [inputValueAddName, setInputValueAddName] = useState(null)
  const [inputValueAddSexe, setInputValueAddSexe] = useState(null)
  const [inputValueAddDate, setInputValueAddDate] = useState(null)
  const [inputValueAddType, setInputValueAddType] = useState(["Chien", "Chat", "Furet"])
  const [inputValueAddVaccin, setInputValueAddVaccin] = useState(null)


  const handleOnClickAddAnimal = async () => {
    const APVTX = await noe.animalToken(inputValueAddAdress, inputValueAddName, inputValueAddDate, inputValueAddSexe, inputValueAddVaccin, inputValueAddType)
  }


  return (
    <>
      <NavVeteinaire />
      <VStack py={20} fontFamily="Montserrat">
        <Box my={10}>
          <SimpleGrid columns={[1]} spacing="40px">
            <Box borderWidth="1px" p={50} borderRadius={5}>
              <Center>
                <Heading fontFamily="Montserrat" mb={10}>Ajouter un Animal</Heading>
              </Center>
              <FormControl>
                <Stack >
                  <FormLabel htmlFor="ETH" pt={5}>ETH</FormLabel>
                  <Input value={inputValueAddAdress} onChange={(e) => { setInputValueAddAdress(e.currentTarget.value) }}
                    id='ETH' variant="filled" placeholder="Adresse ETH" aria-label="ETH" />
                  <FormLabel htmlFor="ETH" pt={5}>Nom</FormLabel>
                  <Input value={inputValueAddName} onChange={(e) => { setInputValueAddName(e.currentTarget.value) }}
                    id='ETH' variant="filled" placeholder="nom" aria-label="nom" />
                  <FormLabel htmlFor="Date" pt={5}>Date de naissance</FormLabel>
                  <Input value={inputValueAddDate} onChange={(e) => { setInputValueAddDate(e.currentTarget.value) }}
                    id='sexe' variant="filled" placeholder="Date de naissance" aria-label="Date de naissance" />
                  <FormLabel htmlFor="date-de-naissance" pt={5}>Sexe</FormLabel>
                  <Input value={inputValueAddSexe} onChange={(e) => { setInputValueAddSexe(e.currentTarget.value) }}
                    id='date-de-naissance' variant="filled" placeholder="Sexe" aria-label="Sexe" />
                  <FormLabel htmlFor="type" pt={5}>Vaccin</FormLabel>
                  <Select value={inputValueAddVaccin} onChange={(e) => { setInputValueAddVaccin(e.currentTarget.value) }}
                    id='vaccin' variant="filled" placeholder="Est-il vacciné ?" aria-label="Vaccin" >
                    <option>Oui</option>
                    <option>Non</option>
                  </Select>
                  <FormLabel htmlFor="type" pt={5}>Type</FormLabel>
                  <Select value={inputValueAddType} onChange={(e) => { setInputValueAddType(e.currentTarget.value) }}
                    mb={20} id='type' variant="filled" placeholder="Sélectionner le type" aria-label="Type" >
                    <option value="0">Chien</option>
                    <option value="1">Chat</option>
                    <option value="2">Furet</option>
                  </Select>
                  <Button onClick={handleOnClickAddAnimal} _hover={{
                    bg: "teal.500",
                    color: "white",
                  }} bg="brand.900" color="white" name="button" textTransform='uppercase'>Ajouter</Button>
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

export default AjoutAnimal
