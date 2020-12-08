import { React, useState, useContext, useRef } from 'react'
import { Center, Button, Stack, Input, Heading, FormControl, Box, SimpleGrid, VStack, FormLabel } from '@chakra-ui/core'
//import Nav from '../Nav'
import Footer from '../Footer'
import { NoeContext } from '../../App'
//import { Link } from 'react-router-dom';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure
} from "@chakra-ui/core"


function LoginParticulier() {

  const noe = useContext(NoeContext)

  const [inputValueNameMember, setInputValueNameMember] = useState(null)
  const [inputValuePhoneMember, setInputValuePhoneMember] = useState(null)
  //const [inputValueAdressMember, setInputValueAdressMember] = useState(null)
  //const [inputValueNameCoMember, setInputValueNameCoMember] = useState(null)

  const handleOnClickCreateMember = async () => {
    const CMTX1 = await noe.createMember(inputValueNameMember, inputValuePhoneMember)
  }

  //const handleOnClickConnectionMember = async () => {
  //  const CMTX2 = await noe.connectionMember(inputValueAdressMember, inputValueNameCoMember)
  //}

  const { isOpen, onOpen, onClose } = useDisclosure()

  const initialRef = useRef()


  return (
    <>

      <Button onClick={onOpen}>
        Test
      </Button>
      <Modal
        initialFocusRef={initialRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent fontFamily="Montserrat">
          <ModalHeader>Inscription Particuliers</ModalHeader>
          <ModalBody pb={6}>
            <ModalCloseButton />
            <FormControl isRequired >
              <FormLabel htmlFor="nom" pt={10}>Nom</FormLabel>
              <Input ref={initialRef} id="nom" value={inputValueNameMember} onChange={(e) => { setInputValueNameMember(e.currentTarget.value) }}
                variant="filled" placeholder="Nom" aria-label="Nom" />
              <FormLabel htmlFor="mobile" pt={10}>Mobile</FormLabel>
              <Input mb={20} id="mobile" value={inputValuePhoneMember} onChange={(e) => { setInputValuePhoneMember(e.currentTarget.value) }}
                variant="filled" placeholder="Mobile" aria-label="Mobile" />
            </FormControl>
          </ModalBody>
          <Center>
            <ModalFooter>
              <Button name="button" _hover={{
                bg: "teal.500",
                color: "white",
              }} bg="brand.900" color="white" onClick={handleOnClickCreateMember} textTransform='uppercase' >Inscription</Button>
            </ModalFooter>
          </Center>
        </ModalContent>
      </Modal>

    </>
  )
}

export default LoginParticulier
