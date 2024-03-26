import styled from 'styled-components';
import { useProperty } from '../context/PropertyContext';

export default function Preview() {
  const { property } = useProperty();

  return <Wrapper>{property.type}</Wrapper>;
}

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 210mm;
  min-height: 296mm;
  padding-top: 70px;
  background-color: #ffffff;
  border-radius: 20px;
  margin-right: 80px;
`;
