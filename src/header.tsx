import * as React from "react";
  
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
  
export default function Header(props: { setMenu: (arg0: any) => void; }) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (item: any) => {
    props.setMenu(item);
    setAnchorEl(null);
  };

  return (
      <AppBar position="static">
        <Toolbar>
          <IconButton
            onClick={handleClick}
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Menu
          id="demo-positioned-menu"
          aria-labelledby="demo-positioned-button"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
        >
          <MenuItem onClick={() => handleClose('Expresso')}>Expresso </MenuItem>
          <MenuItem onClick={() => handleClose("Frappuccino's")}>Frappuccino's</MenuItem>
          <MenuItem onClick={() => handleClose('Mocha')}>Mocha</MenuItem>
        </Menu>
          <Typography variant="h6" 
            component="div" sx={{ flexGrow: 1 }}>
            Café da tia Rosa
          </Typography>
        </Toolbar>
      </AppBar>
  );
}