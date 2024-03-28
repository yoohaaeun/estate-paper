import { aptData, IApartment } from '../../aptData';
import { useProperty } from '../../context/PropertyContext';
import { Title } from '../CommonStyles';
import styled, { css } from 'styled-components';

export default function Apt(): JSX.Element {
  const { property, setProperty } = useProperty();

  const handleAptClick = (apt: IApartment): void => {
    const { name, areas } = apt;

    setProperty({
      ...property,
      apt: name,
      custom: false,
      area: areas[0].area,
      supplyArea: areas[0].supply_area,
      exclusiveArea: areas[0].exclusive_area,
    });
  };

  const handleCustomClick = () => {
    setProperty({
      ...property,
      apt: '',
      custom: true,
      supplyArea: '',
      exclusiveArea: '',
    });
  };

  return (
    <div>
      <Title>단지</Title>
      <Buttons>
        {aptData.map((apt) => (
          <Button
            key={apt.id}
            onClick={() => handleAptClick(apt)}
            selected={property.apt === apt.name}
          >
            {apt.name}
          </Button>
        ))}
        <Button onClick={handleCustomClick} selected={property.custom}>
          직접 입력
        </Button>
      </Buttons>
    </div>
  );
}

const Buttons = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

const Button = styled.button<{ selected: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 60px;
  background: #ffffff;
  border: none;
  border-radius: 21px;
  font-weight: 700;
  font-size: 25px;
  line-height: 75px;
  color: #4b495c;
  cursor: pointer;

  ${(props) =>
    props.selected &&
    css`
      border: 2px solid #4b495c;
      box-shadow: 0px 20px 50px rgba(0, 0, 0, 0.1);
      font-weight: 900;
    `}

  &:hover {
    box-shadow: 0px 20px 50px rgba(0, 0, 0, 0.1);
  }
`;
