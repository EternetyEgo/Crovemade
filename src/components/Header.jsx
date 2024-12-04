import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { hero } from '../assets'

export default function Header() {
  return (
    <Box>
      {/* navbar  */}
      <Box display='flex' alignItems='center' justifyContent='space-between' pt='25px' px={{xl:'70px', md:'40px', base:'10px'}}>
        <Box display='flex' alignItems='center' gap='30px'>
          <Text fontWeight='500' cursor='pointer' fontSize='20px'>SHOP</Text>
          <Text fontWeight='500' cursor='pointer' fontSize='20px'>EXPLORE</Text>
        </Box>
        <Text fontWeight='500' cursor='pointer' fontSize='35px'>ROVEMADE</Text>
        <Text fontWeight='500' cursor='pointer' fontSize='20px'>MY CART</Text>
      </Box>

      {/* hero  */}
      <Box display='flex' alignItems='center' justifyContent='center' mt='70px'>
        <Image src={hero} width='100%' height='100%'/>
      </Box>
    </Box>
  )
}
