import { ThemeProvider } from 'styled-components';

import { ToggleTheme } from './components';
import { useDarkMode } from './hooks';
import { GlobalStyle, GlobalFonts, lightTheme, darkTheme } from './styles';
import { AppRouter } from './router';

export const PodTunesApp = () => {
  const [theme, toggleTheme] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;
  return (
    <>
      <ThemeProvider theme={themeMode}>
        <GlobalFonts />
        <GlobalStyle />
        <AppRouter />
        <ToggleTheme theme={theme} toggleTheme={toggleTheme} />
      </ThemeProvider>
    </>
  );
};
