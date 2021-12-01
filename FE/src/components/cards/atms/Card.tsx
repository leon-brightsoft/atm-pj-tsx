import React from "react";
import { delATM } from "../../../actions/atm.action";
import { Typography, Grid, Paper, Button } from "@mui/material";
import { styled } from "@mui/system";
import atm from "../../../assets/atm.png";
import toast from "react-hot-toast";
import { AtmProps } from "../../../interfaces/atm.interface";
import "./style.scss";

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

const Card: React.FC<AtmProps> = (props) => {
  const removeAtm = async () => {
    const promise = delATM(props.id);
    toast.promise(promise, {
      loading: "Removing ATM ...",
      success: "Removed ATM",
      error: "error",
    });

    return await promise;
  };

  return (
    <Paper className="atm_card">
      <Grid
        container
        spacing={2}
        sx={{
          display: "flex",
          alignItems: "flex-start",
          flexDirection: "column",
          alignContent: "center",
          p: 2,
        }}
        className="card_detail"
      >
        <Grid item>
          <Img className="atm_img" alt="atm" src={atm} />
        </Grid>
        <Grid
          item
          sm
          container
          sx={{
            display: "grid",
            gap: 1,
            gridTemplateRows: "repeat(1, 1fr)",
          }}
        >
          <Typography gutterBottom variant="subtitle1" component="div">
            ATM name: <strong> {props.name} </strong>
          </Typography>
          <Typography variant="subtitle1" component="div">
            Status:{" "}
            {props.status === "Free" ? (
              <span className="green_text">{props.status}</span>
            ) : (
              <span className="red_text">{props.status}</span>
            )}
          </Typography>
          <Typography variant="body2" gutterBottom>
            Trading:
            {props.status === "Busy" && <span> {props.client} </span>}
          </Typography>

          <Typography variant="body2" gutterBottom>
            Transactions: {props.transaction}
          </Typography>
        </Grid>
        <Grid item>
          <Button onClick={removeAtm} variant="outlined" color="error">
            Remove ATM
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Card;
