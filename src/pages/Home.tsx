import Preview from '../components/Preview';
import Console from '../components/console/Console';
import styled from 'styled-components';

export default function Home() {
  return (
    <Wrapper>
      <Preview />
      <Console />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  gap: 100px;
  align-items: center;
  padding: 40px 60px;
  background-color: #f5f3f3;
  overflow: auto;
`;
