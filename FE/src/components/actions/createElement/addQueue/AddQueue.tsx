import React, { useState } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Button,
} from "@mui/material";
import { addQueue } from "../../../../actions/queue.action";
import { InputEvent, SubmitEvent } from "../../../../constants/Event";
import toast from "react-hot-toast";
import { Queue } from "../../../../interfaces/atm.interface";
import "./style.scss";

const AddQueueBtn: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [queue, setQueue] = useState<Queue>({
    name: "",
    transaction: 0,
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClickClose = () => {
    setOpen(false);
  };

  const onChangeAddQueue = (e: InputEvent) => {
    setQueue((queue) => ({
      ...queue,
      [e.target.name]: e.target.value,
    }));
  };

  const handleAddQueue = async (e: SubmitEvent) => {
    e.preventDefault();
    if (!queue.name) {
      setOpen(true);
      return toast.error("Name is required!");
    }
    if (queue.name.length < 2) {
      setOpen(true);
      return toast.error("Name is too short!");
    }
    if (!queue.transaction) {
      setOpen(true);
      return toast.error("Transactions is required");
    }
    if (queue.transaction > 20 || queue.transaction < 1) {
      setOpen(true);
      return toast.error("Transaction must be between 1 and 20");
    }
    await addQueue(queue);
  };

  return (
    <div>
      <Button variant="contained" onClick={handleClickOpen} size="medium">
        ADD NEW PERSON
      </Button>
      <Dialog className="dialog" open={open} onClose={handleClickClose}>
        <form action="/" method="POST" onSubmit={handleAddQueue}>
          <DialogTitle className="dialog_title">ADD NEW PERSON</DialogTitle>
          <DialogContent className="dialog_content">
            <TextField
              onChange={onChangeAddQueue}
              id="per"
              label="Person Name"
              name="name"
              type="text"
              fullWidth
              variant="outlined"
              className="dialog_input"
            />
            <TextField
              onChange={onChangeAddQueue}
              id="trans"
              label="Transactions"
              name="transaction"
              type="number"
              fullWidth
              variant="outlined"
            />
          </DialogContent>
          <DialogActions>
            <Button
              variant="outlined"
              onClick={handleClickClose}
              className="dialog_button"
            >
              Cancel
            </Button>
            <Button variant="outlined" type="submit" onClick={handleClickClose}>
              Add
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
};

export default AddQueueBtn;
