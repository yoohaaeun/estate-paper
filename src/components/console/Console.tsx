import styled from 'styled-components';
import { useProperty } from '../../context/PropertyContext';
import Apt from './Apt';
import Area from './Area';
import Description from './Description';
import Price from './Price';
import Type from './Type';

export default function Console() {
  const { property, setProperty } = useProperty();

  return (
    <Wrapper>
      <Type />
      <Apt />
      <Area />
      <Description />
      <Price />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 210mm;
  min-height: 296mm;
  display: flex;
  flex-direction: column;
  gap: 20px;
  background-color: #fae2e2;
`;
