import React, { forwardRef } from 'react';
import styled, { css } from 'styled-components';
import { useProperty } from '../context/PropertyContext';

const Preview = forwardRef<HTMLDivElement>((props, ref) => {
  const { property } = useProperty();

  return (
    <Wrapper ref={ref}>
      <Name>{property.apt}</Name>
      <Type type={property.type}>{property.type}</Type>
      <Area>
        {property.custom ? (
          <>
            {property.supplyArea && <span>공급 {property.supplyArea}㎡</span>}
            {property.exclusiveArea && (
              <span>전용 {property.exclusiveArea}㎡</span>
            )}
          </>
        ) : (
          <>
            <span>공급 {property.supplyArea}㎡</span>
            <span>전용 {property.exclusiveArea}㎡</span>
          </>
        )}
      </Area>
      <Description>{property.desc}</Description>
      <Price>{property.price}</Price>
      <Banner>
        <span>엑슬루공인중개사 사무소</span>
        <span>032-862-0007</span>
      </Banner>
      <Logo />
    </Wrapper>
  );
});

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

const Name = styled.h1`
  font-size: 85px;
`;

const Type = styled.span<{ type: string }>`
  font-size: 65px;
  font-weight: 600;
  padding: 0px 14px;
  margin-bottom: 65px;
  position: relative;
  top: 1px;

  ${(props) =>
    props.type === '매매' &&
    css`
      background-color: #98cdff;
    `}
  ${(props) =>
    props.type === '전세' &&
    css`
      background-color: #cdeb92;
    `}
  ${(props) =>
    props.type === '월세' &&
    css`
      background-color: #fbe6a3;
    `}
`;

const Area = styled.div`
  font-size: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: 600;
  margin-bottom: 18px;
  gap: 20px;
`;

const Description = styled.p`
  font-size: 35px;
  font-weight: 700;
  margin-bottom: 0;
`;

const Price = styled.p`
  font-size: 70px;
  font-weight: 700;
  line-height: 50px;
`;

const Banner = styled.div`
  position: absolute;
  bottom: 120px;
  display: flex;
  flex-direction: column;
  height: 140px;
  padding: 26px;
  justify-content: space-between;
  align-items: center;
  background-color: #edeadf;
  width: 100%;
  font-size: 32px;
  font-weight: 600;
`;

const Logo = styled.div`
  position: absolute;
  bottom: 48px;
  width: 200px;
  height: 40px;
  background-image: url('https://i.postimg.cc/2jcfgjnQ/estate-logo.png');
  background-size: cover;
  background-repeat: no-repeat;
`;

export default Preview;
