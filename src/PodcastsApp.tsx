import { ToggleTheme } from './components';
import { useDarkMode } from './hooks';
import { GlobalStyle, GlobalFonts, lightTheme, darkTheme } from './styles';
import { ThemeProvider } from 'styled-components';

export const PodcastsApp = () => {
  const [theme, toggleTheme] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;
  return (
    <>
      <ThemeProvider theme={themeMode}>
        <GlobalFonts />
        <GlobalStyle />

        <h1>Podcasts</h1>
        <ToggleTheme theme={theme} toggleTheme={toggleTheme} />
      </ThemeProvider>
    </>
  );
};
