import styled from 'styled-components';

export default function Preview() {
  return <Wrapper>Preview</Wrapper>;
}

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 210mm;
  min-height: 296mm;
  padding-top: 70px;
  background-color: #ffffff;
  border-radius: 20px;
`;
