import styled, { css } from 'styled-components';
import { useProperty } from '../../context/PropertyContext';
import { Title } from '../CommonStyles';
import { aptData, IArea } from '../../aptData';
import CustomApt from './CustomApt';

export default function Area() {
  const { property, setProperty } = useProperty();

  const selectedApt = aptData.find((apt) => apt.name === property.apt);

  const handleAreaClick = (selectedArea: IArea) => {
    const { area, supply_area, exclusive_area } = selectedArea;

    setProperty({
      ...property,
      area,
      supplyArea: supply_area,
      exclusiveArea: exclusive_area,
    });
  };

  return (
    <div>
      {!property.custom && (
        <>
          <Title>면적</Title>
          <Buttons>
            {selectedApt?.areas.map((area) => (
              <Button
                key={area.area}
                onClick={() => handleAreaClick(area)}
                selected={property.area === area.area}
              >
                {area.area}
              </Button>
            ))}
          </Buttons>
        </>
      )}

      {property.custom && <CustomApt />}
    </div>
  );
}

const Buttons = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

const Button = styled.button<{ selected: boolean }>`
  width: 90px;
  height: 90px;
  border: 2px solid #c5c5c5;
  border-radius: 20px;
  font-size: 23px;
  font-weight: 600;
  color: #4b495c;
  background: #f6f7fb;

  ${(props) =>
    props.selected &&
    css`
      background: #fceec9;
      box-shadow: 0px 5px 4px rgba(0, 0, 0, 0.1);
    `}

  &:hover {
    background: #fceec9;
    box-shadow: 0px 5px 4px rgba(0, 0, 0, 0.1);
  }
`;
