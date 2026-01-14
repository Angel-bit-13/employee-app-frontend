import { AppBar, Toolbar, Typography, IconButton } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import PersonAddIcon from "@mui/icons-material/Add";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <AppBar position="static" color="secondary">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Employee App
        </Typography>

        <IconButton
          color="inherit"
          component={Link}
          to="/"
          title="Home"
        >
          <HomeIcon />
        </IconButton>

        <IconButton
          color="inherit"
          component={Link}
          to="/add"
          title="Add Employee"
          sx={{
            bgcolor: "white",
            color: "purple",
            "&:hover": { bgcolor: "#f0f0f0" },
            ml: 3,
            width: 25,
            height: 25,
            borderRadius: 2,
          }}
        
        >
          <PersonAddIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
