import { useState } from 'react';
import {
  QASectionItem,
  QASectionItemButton,
  QASectionItemTitle,
  QASectionItemDescription,
} from './styles';

import MinesIcon from '~/assets/mines.svg';
import PlusIcon from '~/assets/plus.svg';

interface QAItemProps {
  id: number;
  title: string;
  description: string;
}

export const QAItem = ({ description, title }: QAItemProps) => {
  const [show, setShow] = useState(false);

  return (
    <QASectionItem>
      <div>
        <QASectionItemButton onClick={() => setShow(!show)}>
          {show ? <MinesIcon /> : <PlusIcon />}
        </QASectionItemButton>
      </div>
      <div>
        <QASectionItemTitle>{title}</QASectionItemTitle>

        <QASectionItemDescription
          style={{
            height: show ? 'auto' : 0,
            opacity: show ? 1 : 0,
            marginTop: show ? 22 : 0,
          }}
          dangerouslySetInnerHTML={{ __html: description }}
        ></QASectionItemDescription>
      </div>
    </QASectionItem>
  );
};
