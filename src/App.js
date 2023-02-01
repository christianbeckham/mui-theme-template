import { Box, Container } from "@mui/material";
import NavBar from "./components/NavBar/NavBar";

const App = () => {
	return (
		<Box sx={{ display: "flex", flexDirection: "column", height: "100vh" }}>
			<NavBar />
			<Box component={"main"} sx={{ flex: 1 }}>
				<Container
					maxWidth="xl"
					sx={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100%" }}
				>
					Content area
				</Container>
			</Box>
		</Box>
	);
};

export default App;
