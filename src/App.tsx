import React, { useEffect } from "react";
import logo from "./logo.svg";
import styled, {
  createGlobalStyle,
} from "styled-components";

const App: React.FC = () => {
  const nonce = "k6qh9SVevOtp0fPj9A==";

  useEffect(() => {
    const styleTags = document.querySelectorAll("style[data-styled]");
    styleTags.forEach((styleTag) => {
      styleTag.setAttribute("nonce", nonce);
    });
  }, [nonce]);

  return (
    <AppContainer>
      <GlobalStyle nonce={nonce} />
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <MyParagraph>
            Edit <code>src/App.tsx</code> and save to reload.
          </MyParagraph>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </AppContainer>
  );
};

const AppContainer = styled.div`
  font-size: 36px;
`;

const GlobalStyle = createGlobalStyle<{ nonce?: string }>`
  body {
    background-color: #f1f1f1;
    font-family: Arial, sans-serif;
    font-size: 36px;
  }
`;

const MyParagraph = styled.p`
  font-size: 14px;
  color: wheat;
`

export default App;
