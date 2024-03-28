import React from 'react';
import styled from 'styled-components';
import { useProperty } from '../../context/PropertyContext';

export default function CustomApt() {
  const { property, setProperty } = useProperty();

  const handleCustom = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setProperty({ ...property, [id]: value });
  };

  return (
    <Wrapper>
      <Box>
        <Label htmlFor='apt'>단지명</Label>
        <Input type='text' id='apt' onChange={handleCustom} />
      </Box>
      <Box>
        <Label htmlFor='supplyArea'>공급면적</Label>
        <Input type='text' id='supplyArea' onChange={handleCustom} />
      </Box>
      <Box>
        <Label htmlFor='exclusiveArea'>전용면적</Label>
        <Input type='text' id='exclusiveArea' onChange={handleCustom} />
      </Box>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 20px;
`;

const Box = styled.div`
  display: flex;
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  width: 120px;
  font-size: 23px;
  font-weight: 700;
  color: #7c7c7c;
  cursor: pointer;
`;

const Input = styled.input`
  width: 450px;
  padding: 20px;
  font-size: 23px;
  font-weight: 700;
  border: 0;
  border-radius: 8px;
  outline: 0;
  color: #7c7c7c;
  cursor: pointer;

  &:focus {
    box-shadow: 0px 20px 50px rgba(0, 0, 0, 0.1);
  }
`;
