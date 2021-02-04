import React, { Fragment } from "react";
import IconButton from "@material-ui/core/IconButton";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import { Avatar } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { userLogout } from "../actions/user.actions";

export default function ProfileMenu({ user }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const dispatch = useDispatch();

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (e) => {
    if (e.target.innerText === "Sign out") {
      setAnchorEl(null);
      dispatch(userLogout());
    }
    setAnchorEl(null);
  };

  return (
    <Fragment>
      <IconButton
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleMenu}
        color="inherit"
      >
        {user?.avatar?.url ? (
          <Avatar src={user.avatar.url} alt={user.name}></Avatar>
        ) : (
          <AccountCircle style={{ fontSize: 35 }} />
        )}
      </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right"
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right"
        }}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>Setting</MenuItem>
        <MenuItem onClick={handleClose} name="userLogout">
          Sign out
        </MenuItem>
      </Menu>
    </Fragment>
  );
}
