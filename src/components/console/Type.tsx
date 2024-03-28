import styled, { css } from 'styled-components';
import { useProperty } from '../../context/PropertyContext';
import { Title } from '../CommonStyles';

const types = [
  { name: '매매', color: '#C1DDF7' },
  { name: '전세', color: '#CEE5CC' },
  { name: '월세', color: '#FCECB9' },
];

export default function Type() {
  const { property, setProperty } = useProperty();

  const handleType = (newType: string) => {
    setProperty((prevState) => ({
      ...prevState,
      type: newType,
    }));
  };

  return (
    <div>
      <Title>매물 타입</Title>
      <Buttons>
        {types.map((type, index) => (
          <Button
            key={index}
            onClick={() => handleType(type.name)}
            color={type.color}
            selected={property.type === type.name}
          >
            {type.name}
          </Button>
        ))}
      </Buttons>
    </div>
  );
}

const Buttons = styled.div`
  display: flex;
  gap: 30px;
`;

const Button = styled.button<{ selected: boolean }>`
  width: 160px;
  height: 60px;
  font-size: 25px;
  font-weight: 700;
  border: none;
  border-radius: 80px;
  color: #4b495c;
  cursor: pointer;

  ${(props) =>
    props.color &&
    css`
      background-color: ${props.color};
    `}

  ${(props) =>
    props.selected &&
    css`
      outline: none;
      border: 2px solid #4b495c;
      box-shadow: 0px 20px 50px rgba(0, 0, 0, 0.1);
      font-weight: 900;
    `}
    
  &:hover {
    box-shadow: 0px 20px 50px rgba(0, 0, 0, 0.1);
  }
`;
