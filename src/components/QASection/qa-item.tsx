import { useState } from 'react';
import {
  QASectionItem,
  QASectionItemButton,
  QASectionItemTitle,
  QASectionItemDescription,
} from './styles';

import MinesIcon from '~/assets/mines.svg';
import PlusIcon from '~/assets/plus.svg';
import {
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Box,
  Heading,
  Flex,
} from '@chakra-ui/react';

interface QAItemProps {
  id: number;
  title: string;
  description: string;
}

export const QAItem = ({ description, title, id }: QAItemProps) => {
  const [show, setShow] = useState(false);

  return (
    <AccordionItem
      border='1.5px solid #fff'
      borderRadius={'8px'}
      mt='10px'
      p={'6px 0'}
    >
      <h2>
        <AccordionButton _hover={{ bg: '#fff', color: '#29ba66' }}>
          <Flex align='center' width='100%' gap='20px'>
            <Heading fontSize={'18px'} color='#29ba66'>
              {'0' + id}
            </Heading>
            <Heading fontSize={'18px'}>{title}</Heading>
          </Flex>
          <AccordionIcon fontSize='1.5em' />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4}>{description}</AccordionPanel>
    </AccordionItem>
  );
};
