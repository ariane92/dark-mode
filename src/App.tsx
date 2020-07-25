import React, {useState, useEffect} from 'react';
import {ThemeProvider} from 'styled-components';

import {darkTheme, lightTheme} from './theme';
import { Container, SwitchButton, Title, User, Subtitle } from './styles'

const App: React.FC = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    if(theme === 'light'){
      localStorage.setItem("theme", "dark");
      setTheme("dark")
    }else {
      localStorage.setItem("theme", "light");
      setTheme("light");
    }

    
  };

  useEffect(() => {
    const localTheme = localStorage.getItem("theme");
    localTheme && setTheme(localTheme);
  }, []);

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <Container>
        <Title>{theme} mode</Title>
        <SwitchButton onClick={() => toggleTheme()}>
          {theme === 'dark' ? (
            <img src="./src/assets/sun.svg" />
          ) :( <img src="./src/assets/moon.svg" />)}
        </SwitchButton>
        <Subtitle className="mt4"> by: <User href="" target="_black" className="ml2">@arianemateus

        </User>

        </Subtitle>
      </Container>
    </ThemeProvider>
  );
}

export default App;
