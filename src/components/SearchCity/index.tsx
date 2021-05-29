import React from 'react';
import { FiSearch } from 'react-icons/fi';

import { Input, InputWrapper } from './styles';

export default function SearchCity({
  value,
  setValue,
  onClick,
}: {
  value: string;
  setValue: (city: string) => void;
  onClick: () => void;
}) {
  return (
    <InputWrapper>
      <Input
        type="text"
        value={value}
        placeholder="Type city and state"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setValue(e.target.value)
        }
      />
      <FiSearch size="1.4rem" onClick={onClick} title="SearchIcon" />
    </InputWrapper>
  );
}
