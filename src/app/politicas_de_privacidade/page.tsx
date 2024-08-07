'use client';
import { Flex, Heading, ChakraProvider, Box } from '@chakra-ui/react';
import termos from './terms.json';
import { Navbar } from '~/components/Navbar';

interface TTermo {
  id: string;
  titulo: string;
  descricao: string;
  artigos: string[];
}

const Termos = () => {
  return (
    <ChakraProvider>
      <Flex flexDir='column' align='center'>
        <Flex
          p='0 40px'
          marginTop='48px'
          maxW='1300px'
          flexDir='column'
          gap='24px'
        >
          {' '}
          <Heading>Políticas de privacidade</Heading>
          {termos.map((termo: TTermo) => (
            <div key={termo.id}>
              <Flex gap='8px'>
                {' '}
                <Heading size='md'>{termo.id}</Heading>{' '}
                <Heading size='md'>{termo.titulo}</Heading>
              </Flex>
              <p>{termo.descricao}</p>
              {termo.artigos.length > 0 && (
                <Box>
                  {termo.artigos.map((value) => (
                    <p key={value}>{value}</p>
                  ))}
                </Box>
              )}
            </div>
          ))}
        </Flex>
      </Flex>
    </ChakraProvider>
  );
};
export default Termos;
