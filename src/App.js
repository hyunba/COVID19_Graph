import styled from "styled-components";
import Contents from "./components/Contents";
import Header from "./components/Header";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

function App() {
  return (
    <Wrapper>
      <Header />
      <Contents />
    </Wrapper>
  );
}

export default App;
