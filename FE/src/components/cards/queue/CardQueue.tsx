import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import {Queue} from "../../../interfaces/atm.interface";

const CardQueue: React.FC<Queue> = (props) => {
  return (
    <Card>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Name: {props.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Transactions: {props.transaction}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CardQueue;
