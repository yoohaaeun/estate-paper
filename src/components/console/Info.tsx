import styled from 'styled-components';
import { useProperty } from '../../context/PropertyContext';

export default function Info() {
  const { property, setProperty } = useProperty();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setProperty({ ...property, [id]: value });
  };

  return (
    <Wrapper>
      <Box>
        <Label htmlFor='desc'>매물정보</Label>
        <Input type='text' id='desc' onChange={handleChange} />
      </Box>
      <Box>
        <Label htmlFor='price'>금액</Label>
        <Input type='text' id='price' onChange={handleChange} />
      </Box>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
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
