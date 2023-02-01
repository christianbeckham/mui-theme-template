import { useState } from "react";
import { AppBar, Box, Toolbar, IconButton, Typography, Menu, Container, Button, MenuItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import ToggleThemeSwitch from "../ToggleThemeSwitch/ToggleThemeSwitch";

const links = ["Link One", "Link Two", "Link Three"];

const NavBar = () => {
	const [anchorElNav, setAnchorElNav] = useState(null);

	const handleOpenNavMenu = (e) => {
		setAnchorElNav(e.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	return (
		<AppBar position="static">
			<Container maxWidth="xl">
				<Toolbar component={"header"} disableGutters>
					<Typography
						variant="h6"
						noWrap
						component="a"
						href="/"
						sx={{
							mr: 2,
							display: { xs: "none", md: "flex" },
							fontWeight: 700,
							color: "inherit",
							textDecoration: "none",
						}}
					>
						Logo
					</Typography>
					<Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
						<IconButton
							size="large"
							aria-label="account of current user"
							aria-controls="menu-appbar"
							aria-haspopup="true"
							onClick={handleOpenNavMenu}
							color="inherit"
						>
							<MenuIcon />
						</IconButton>
						<Menu
							id="menu-appbar"
							anchorEl={anchorElNav}
							anchorOrigin={{
								vertical: "bottom",
								horizontal: "left",
							}}
							keepMounted
							transformOrigin={{
								vertical: "top",
								horizontal: "left",
							}}
							open={Boolean(anchorElNav)}
							onClose={handleCloseNavMenu}
							sx={{
								display: { xs: "block", md: "none" },
							}}
						>
							{links.map((page) => (
								<MenuItem key={page} onClick={handleCloseNavMenu}>
									<Typography textAlign="center">{page}</Typography>
								</MenuItem>
							))}
						</Menu>
					</Box>
					<Typography
						variant="h5"
						noWrap
						component="a"
						href=""
						sx={{
							mr: 2,
							display: { xs: "flex", md: "none" },
							flexGrow: 1,
							fontWeight: 700,
							color: "inherit",
							textDecoration: "none",
						}}
					>
						Logo
					</Typography>
					<Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
						{links.map((page) => (
							<Button key={page} onClick={handleCloseNavMenu} sx={{ my: 2, color: "white", display: "block" }}>
								{page}
							</Button>
						))}
					</Box>
					<Box sx={{ flexGrow: 0 }}>
						<ToggleThemeSwitch />
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
};
export default NavBar;
