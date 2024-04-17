'use client';

import { ChakraProvider, Text, Flex, Image } from '@chakra-ui/react';
import styles from './styles.module.css';
import React from 'react';

const PARTNERS_FOLDER_BASE_URL = '/partners';
const partners = [
  {
    id: 1,
    name: 'candando',
    description: '',
    url: '',
    file: '',
  },
  {
    id: 2,
    name: 'kero',
    description: '',
    url: '',
    file: '',
  },
  {
    id: 3,
    name: 'kibabo',
    description: '',
    url: '',
    file: '',
  },
  {
    id: 4,
    name: 'maxi',
    description: '',
    url: '',
    file: '',
  },
  {
    id: 5,
    name: 'shoprite',
    description: '',
    url: '',
    file: '',
  },
];

export const Partners = () => {
  return (
    <ChakraProvider>
      <Flex
        width='100%'
        minH='200px'
        boxSizing='border-box'
        justify='center'
        align='center'
        padding='26px'
        
      >
        <Flex
          maxW='1280px'
          width='100%'
          gap='26px'
          className={styles.partnersContainer}
        >
          <Text color='#1a1c19' maxW='300px'>
            Informamos os preços dos principais supermercados Nacionais:
          </Text>
          <Flex
            width='100%'
            gap='26px'
            align='center'
            justify='flex-end'
            paddingRight='20px'
            className={styles.imagesContainer}
          >
            {partners.map((parter) => {
              return (
                <Image
                  _hover={{
                    filter: 'grayscale(0)',
                  }}
                  transition='all ease-in-out .4s'
                  cursor='pointer'
                  filter='grayscale(.8)'
                  maxH='32px'
                  key={parter.id}
                  src={PARTNERS_FOLDER_BASE_URL + '/' + parter.name + '.png'}
                  alt={'Logotipi do supermercado ' + ' ' + parter.name}
                />
              );
            })}
          </Flex>
        </Flex>
      </Flex>
    </ChakraProvider>
  );
};
