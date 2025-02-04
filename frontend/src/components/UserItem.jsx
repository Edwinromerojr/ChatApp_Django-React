import { Avatar, ListItem, ListItemAvatar, ListItemText } from "@mui/material";
import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import { Link } from "react-router-dom";

const UserItem = (props) => {
    const userProfileUrl = `/user/${props.id}/`
  return (
    <Link to={userProfileUrl}>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <PersonIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={props.name}
          secondary={props.email}
        ></ListItemText>
      </ListItem>
    </Link>
  );
};

export default UserItem;
