import { useContext } from "react";
import { useTheme } from "@mui/material/styles";
import { IconButton } from "@mui/material";
import { Brightness4, Brightness7 } from "@mui/icons-material";

import { ThemeContext } from "../../context/ThemeContext";

const ToggleThemeSwitch = () => {
	const theme = useTheme();
	const { toggleColorMode } = useContext(ThemeContext);

	return (
		<>
			<IconButton onClick={toggleColorMode} color="inherit">
				{theme.palette.mode === "dark" ? <Brightness7 /> : <Brightness4 />}
			</IconButton>
		</>
	);
};

export default ToggleThemeSwitch;
