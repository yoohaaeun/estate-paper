import styled from 'styled-components';
import Type from './Type';
import Apt from './Apt';
import Area from './Area';
import Info from './Info';

export default function Console() {
  return (
    <Wrapper>
      <Type />
      <Apt />
      <Area />
      <Info />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  min-width: 210mm;
  min-height: 296mm;
  display: flex;
  flex-direction: column;
  gap: 50px;
`;
