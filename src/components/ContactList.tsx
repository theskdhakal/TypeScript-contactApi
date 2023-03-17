import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import React from "react";
import { contactDataType } from "../interface";

interface Props {
  item: contactDataType;
}

export const ContactList: React.FC<Props> = ({ item }) => {
  return (
    <div>
      <Card sx={{ maxWidth: 345 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
              {item?.name[0]}
            </Avatar>
          }
          // action={
          //   <IconButton aria-label="settings">
          //     <MoreVert />
          //   </IconButton>
          // }
          title={item.name}
          subheader={item.email}
        />

        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {item.username}

            {item.id}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};
