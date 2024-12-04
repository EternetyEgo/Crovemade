import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { footer, footerTop } from '../assets'

export default function Footer() {
  return (
    <Box>
        {/* footer top  */}
           <Box  display='flex' alignItems='center' justifyContent='center' flexDir='column' mt={{ md: '180px', base: '100px' }}>
                <Text fontWeight='500' cursor='pointer' fontSize='40px'>We Hope You'll Join Us</Text>
                <Text fontSize='20px'>READ MORE ABOUT OUR STORY</Text>
                <Box display='flex' flexWrap='wrap' alignItems='center' justifyContent='center' mt='80px'>
                    <Image src={footerTop} width='100%' />
                </Box>
            </Box>

            <Image src={footer} width='100%' mt='110px'/>
    </Box>
  )
}
