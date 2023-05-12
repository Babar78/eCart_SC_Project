import React, { useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Avatar from "@mui/material/Avatar";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import Tooltip from "@mui/material/Tooltip";
import Logout from "@mui/icons-material/Logout";
import CustomButton from "../CustomButton/CustomButton";

import Searchbar from "../Searchbar/Searchbar";
import logo from "../../assets/Logo/eCart-Logo.png";

const pages = ["Products", "About Us", "Contact Us", "Track Order"];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  //Show/hide Login Button

  const [username, setUsername] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [image, setImage] = React.useState(null);
  const [password, setPassword] = React.useState("");
  const [country, setCountry] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [userId, setUserId] = React.useState("");
  const [loggedIn, setLoggedIn] = React.useState(false);

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    const storedEmail = localStorage.getItem("email");
    const storedPassword = localStorage.getItem("password");
    const storedCountry = localStorage.getItem("country");
    const storedAddress = localStorage.getItem("address");
    const storedPhone = localStorage.getItem("phone");
    const storedUserId = localStorage.getItem("userId");
    const storedImage = localStorage.getItem("image");
    // Check if username and email exist in local storage
    if (storedUserId) {
      setUsername(storedUsername);
      setEmail(storedEmail);
      setPassword(storedPassword);
      setCountry(storedCountry);
      setAddress(storedAddress);
      setPhone(storedPhone);
      setUserId(storedUserId);
      setImage(storedImage);
      setLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    // Perform logout logic
    localStorage.removeItem("username");
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    localStorage.removeItem("country");
    localStorage.removeItem("address");
    localStorage.removeItem("phone");
    localStorage.removeItem("userId");
    localStorage.removeItem("image");
    window.location.reload();
    setLoggedIn(false);
  };

  // Profile Button
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar
      position="fixed"
      className={`py-2`}
      sx={{ backgroundColor: "#1F2937" }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <img src={logo} alt="Logo" className="md:flex hidden w-48 mr-4" />

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
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <div className="flex justify-center w-full">
            <img src={logo} alt="Logo" className="md:hidden flex w-48" />
          </div>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <div className="flex mr-20">
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    mr: 2,
                    color: "white",
                    display: "block",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    maxWidth: "100%",
                    "&:hover": {
                      color: "#F79015",
                    },
                  }}
                >
                  {page}
                </Button>
              ))}
            </div>
            <Searchbar />
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            {
              //If not logged in, show Login Button
              !loggedIn ? (
                <CustomButton />
              ) : (
                //If logged in, show Profile Box
                <React.Fragment>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      textAlign: "center",
                    }}
                  >
                    <Tooltip title="Account settings">
                      <IconButton
                        onClick={handleClick}
                        size="small"
                        sx={{ ml: 2 }}
                        aria-controls={open ? "account-menu" : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? "true" : undefined}
                      >
                        <img
                          src={image}
                          alt="Profile Picture"
                          className="rounded-full w-10 mr-4"
                        />
                      </IconButton>
                    </Tooltip>
                  </Box>
                  <Menu
                    anchorEl={anchorEl}
                    id="account-menu"
                    open={open}
                    onClose={handleClose}
                    onClick={handleClose}
                    PaperProps={{
                      elevation: 0,
                      sx: {
                        overflow: "visible",
                        filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                        mt: 1.5,
                        "& .MuiAvatar-root": {
                          width: 32,
                          height: 32,
                          ml: -0.5,
                          mr: 1,
                        },
                        "&:before": {
                          content: '""',
                          display: "block",
                          position: "absolute",
                          top: 0,
                          right: 14,
                          width: 10,
                          height: 10,
                          bgcolor: "background.paper",
                          transform: "translateY(-50%) rotate(45deg)",
                          zIndex: 0,
                        },
                      },
                    }}
                    transformOrigin={{ horizontal: "right", vertical: "top" }}
                    anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                  >
                    <div className="px-3">
                      <div className="flex items-center">
                        <img
                          src={image}
                          alt="Profile Picture"
                          className="rounded-full w-10 mr-4"
                        />
                        <p className="font-medium font-sans text-lg text-[#1F2937]">
                          {username}
                        </p>
                      </div>
                      <p className="text-gray-500">{email}</p>
                    </div>

                    <Divider />
                    <MenuItem onClick={handleClose}>
                      <Avatar /> Profile
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <Avatar /> My account
                    </MenuItem>
                    <MenuItem onClick={handleLogout}>
                      <ListItemIcon>
                        <Logout fontSize="small" />
                      </ListItemIcon>
                      Logout
                    </MenuItem>
                  </Menu>
                </React.Fragment>
              )
            }
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
