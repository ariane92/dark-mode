import React, {useState, useEffect} from 'react';
import {ThemeProvider} from 'styled-components';

import {darkTheme, lightTheme} from './theme';
import { Container, SwitchButton, Title, User, Subtitle } from './styles'

import lightOn from '../src/assets/lightOn.svg';
import lightOff from '../src/assets/lightOff.svg';

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
            <img src={lightOff} />
          ) :( <img src={lightOn} />)}
        </SwitchButton>
       <User href="https://www.linkedin.com/in/ariane-mateus/" target="_black" className="ml2">@arianemateus</User>    
      </Container>
    </ThemeProvider>
  );
}

export default App;
