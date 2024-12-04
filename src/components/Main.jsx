import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { bottom, card, card1, home, people, phone } from '../assets'

export default function Main() {
    return (
        <Box>
            {/* hero  */}
            <Box px={{ xl: '70px', md: '40px', base: '10px' }} display='flex' alignItems='center' justifyContent='center' flexDir='column' mt={{ md: '180px', base: '100px' }}>
                <Text fontWeight='500' cursor='pointer' fontSize='40px'>Design Inspires</Text>
                <Text color='gray' fontSize='18px'>Build your dream workspace, so you can get your best work done.</Text>
                <Text fontWeight='400' cursor='pointer' fontSize='20px'>GET STARTED</Text>
                <Box display='flex' flexWrap='wrap' alignItems='center' justifyContent='center'>
                    <Image src={card} />
                    <Image src={card1} />
                </Box>
            </Box>
            {/* hero bottom  */}
            <Box px={{ xl: '70px', md: '40px', base: '10px' }} display='flex' alignItems='center' justifyContent='center' flexDir='column' mt={{ md: '180px', base: '100px' }}>
                <Text fontWeight='500' cursor='pointer' fontSize='40px'>Featured Products</Text>
                <Text color='gray' fontSize='18px'>See What’s Trending Right Now</Text>
                <Box display='flex' flexWrap='wrap' alignItems='center' justifyContent='center'>
                    <Image src={phone} width='100%' />
                </Box>
            </Box>

            {/* hero bottom bottom  */}
            <Box mt={{ md: '180px', base: '100px' }}>
                <Image src={bottom} width='100%' />
            </Box>

            {/* bottom bottom  */}
            <Box px={{ xl: '70px', md: '40px', base: '10px' }} display='flex' alignItems='center' justifyContent='center' flexDir='column' mt={{ md: '180px', base: '100px' }} gap='20px'>
                <Text fontWeight='500' cursor='pointer' fontSize='40px' textAlign='center'>Made The Hard Way</Text>
                <Text color='gray' fontSize='18px' width={{ md: '50%', base: '100%' }} textAlign='center'>Our signature craftsmanship has been honed over a decade of manufacturing innovation here in Portland, Oregon. We combine the skills of our small in-house team with the collective strength of collaborators throughout the US to deliver quality products worth investing in.</Text>
                <Box display='flex' flexWrap='wrap' alignItems='center' justifyContent='center'>
                    <Image src={home} width='100%' />
                </Box>
            </Box>

            {/* make bottom  */}
            <Box px={{ xl: '70px', md: '40px', base: '10px' }} display='flex' alignItems='center' justifyContent='center' flexDir='column' mt={{ md: '180px', base: '100px' }} gap='20px'>
                <Text fontWeight='500' cursor='pointer' fontSize='40px' textAlign='center'>Make Work Meaningful</Text>
                <Text color='gray' fontSize='18px' width={{ md: '50%', base: '100%' }} textAlign='center'>We're here because we believe that your work deserves the best. A team that loves working together is the magic that makes it all happen.</Text>
                <Box display='flex' flexWrap='wrap' alignItems='center' justifyContent='center'>
                    <Image src={people} width='100%' />
                </Box>
            </Box>
        </Box>
    )
}
