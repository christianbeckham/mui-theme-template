import React, { createContext, useMemo } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import useLocalStorage from "../hooks/useLocalStorage";

export const ThemeContext = createContext();

export const ThemeModeProvider = ({ children }) => {
	const [darkMode, setDarkMode] = useLocalStorage("darkTheme", useMediaQuery("(prefers-color-scheme: dark)"));

	const mode = useMemo(
		() => ({
			toggleColorMode: () => {
				setDarkMode(!darkMode);
			},
		}),
		[darkMode, setDarkMode]
	);

	const theme = useMemo(
		() =>
			createTheme({
				palette: {
					mode: darkMode ? "dark" : "light",
				},
			}),
		[darkMode]
	);

	return (
		<ThemeContext.Provider value={mode}>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				{children}
			</ThemeProvider>
		</ThemeContext.Provider>
	);
};
