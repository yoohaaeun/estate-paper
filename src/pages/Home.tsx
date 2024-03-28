import Preview from '../components/Preview';
import Console from '../components/console/Console';
import styled from 'styled-components';
import { AiOutlinePrinter } from 'react-icons/ai';
import { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';

export default function Home() {
  const componentRef = useRef<HTMLDivElement>(null);

  const handlePrint = useReactToPrint({
    content: () => componentRef.current!,
  });

  return (
    <Wrapper>
      <Preview ref={componentRef} />
      <Console />
      <PrintBtn type='button' onClick={handlePrint}>
        <AiOutlinePrinter />
      </PrintBtn>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 40px 60px;
  background-color: #f5f3f3;
  overflow: auto;
`;

const PrintBtn = styled.button`
  position: fixed;
  bottom: 50px;
  right: 100px;
  width: 100px;
  height: 100px;
  border: 0;
  border-radius: 50%;
  font-size: 40px;
  padding-top: 10px;
  background-color: tomato;
  color: white;

  &:hover {
    background-color: white;
    color: tomato;
    cursor: pointer;
    box-shadow: 0px 5px 4px rgba(0, 0, 0, 0.1);
  }
`;
