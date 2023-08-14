
import { Box } from '@chakra-ui/react'
import { Center, Square, Circle } from '@chakra-ui/react'
import { Container } from '@chakra-ui/react'
import { SimpleGrid } from '@chakra-ui/react'
import { Stack, HStack, VStack } from '@chakra-ui/react'

function App() {
  return (<>

    <Box bg='green' w='100%' p={50} color='yellow'>
      This is the Box
    </Box>

    <Center bg='tomato' h='100px' color='white'>
      This is the Center
    </Center>


    <Circle size='100px' bg='tomato' color='white'>
      Nitesh
    </Circle>
    <Square size='100px' bg='purple.700' color='white'>
      kumar
    </Square>
    <Container maxW='xl' bg='blue.800' color='cyan.100'>
      There are many benefits to a joint design and development system. Not only
      does it bring benefits to the design team, but it also brings benefits to
      engineering teams. It makes sure that our experiences have a consistent look
      and feel, not just in our design specs, but in production
      There are many benefits to a joint design and development system. Not only
      does it bring benefits to the design team, but it also brings benefits to
      engineering teams. It makes sure that our experiences have a consistent look
      and feel, not just in our design specs, but in production
      There are many benefits to a joint design and development system. Not only
      does it bring benefits to the design team, but it also brings benefits to
      engineering teams. It makes sure that our experiences have a consistent look
      and feel, not just in our design specs, but in production
    </Container>

    <SimpleGrid columns={{ base: 1, sm: 1, md: 2, lg: 3 }} spacing={10} >
      <Box bg={{ base: 'yellow', sm: 'red', md: 'blue', lg: 'cyan' }} height='80px'></Box>
      <Box bg={{ base: 'yellow', sm: 'red', md: 'blue', lg: 'cyan' }} height='80px'></Box>
      <Box bg={{ base: 'yellow', sm: 'red', md: 'blue', lg: 'cyan' }} height='80px'></Box>
      <Box bg={{ base: 'yellow', sm: 'red', md: 'blue', lg: 'cyan' }} height='80px'></Box>
      <Box bg={{ base: 'yellow', sm: 'red', md: 'blue', lg: 'cyan' }} height='80px'></Box>
      <Box bg={{ base: 'yellow', sm: 'red', md: 'blue', lg: 'cyan' }} height='80px'></Box>
      <Box bg={{ base: 'yellow', sm: 'red', md: 'blue', lg: 'cyan' }} height='80px'></Box>
      <Box bg={{ base: 'yellow', sm: 'red', md: 'blue', lg: 'cyan' }} height='80px'></Box>
      <Box bg={{ base: 'yellow', sm: 'red', md: 'blue', lg: 'cyan' }} height='80px'></Box>
      <Box bg={{ base: 'yellow', sm: 'red', md: 'blue', lg: 'cyan' }} height='80px'></Box>
      <Box bg={{ base: 'yellow', sm: 'red', md: 'blue', lg: 'cyan' }} height='80px'></Box>
      <Box bg={{ base: 'yellow', sm: 'red', md: 'blue', lg: 'cyan' }} height='80px'></Box>



    </SimpleGrid>


    <HStack spacing='24px'>
      <Box w='40px' h='40px' bg='yellow.200'>
        1
      </Box>
      <Box w='40px' h='40px' bg='tomato'>
        2
      </Box>
      <Box w='40px' h='40px' bg='pink.100'>
        3
      </Box>
    </HStack>

    <VStack spacing='100px'>
      <Box w='40px' h='40px' bg='yellow.200'>
        1
      </Box>
      <Box w='40px' h='40px' bg='tomato'>
        2
      </Box>
      <Box w='40px' h='40px' bg='pink.100'>
        3
      </Box>
    </VStack>

    <Stack direction={['column', 'row']} spacing='24px'>
      <Box w='40px' h='40px' bg='yellow.200'>
        1
      </Box>
      <Box w='40px' h='40px' bg='tomato'>
        2
      </Box>
      <Box w='40px' h='40px' bg='pink.100'>
        3
      </Box>
    </Stack>

  </>
  );
}

export default App;
