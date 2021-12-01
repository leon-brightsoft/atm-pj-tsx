import React, { useState } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Button,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { addATM } from "../../../../actions/atm.action";
import { InputEvent, SubmitEvent } from "../../../../constants/Event";
import toast from "react-hot-toast";

const CreateAtmBtn: React.FC = ()  => {
    const dispatch = useDispatch();
    const [open, setOpen] = useState<boolean>(false);
    const [atmName, setAtmName] = useState<string>("");

    const handleClickOpen = () => {
        setOpen(true);
    }

    const handleClickClose = () => {
        setOpen(false);
    }

    const onChangeAddAtm = (e: InputEvent) => {
        setAtmName(e.target.value);
    }

    const handleAddAtm = async (e: SubmitEvent) => {
        e.preventDefault();
        if (!atmName) {
            setOpen(true);
            return toast.error("Name is required");
          }
          if (atmName.length < 2) {
            setOpen(true);
            return toast.error("Name is too short");
          }
          dispatch(addATM(atmName));
          setAtmName("");
    }

  return (
    <div>
      <Button variant="contained" onClick={handleClickOpen} size="medium">
        Add new ATM
      </Button>
      <Dialog className="dialog" open={open} onClose={handleClickClose}>
        <form action="/" method="POST" onSubmit={handleAddAtm}>
          <DialogTitle className="dialog_title">ADD New ATM</DialogTitle>
          <DialogContent className="dialog_content">
            <TextField
              onChange={onChangeAddAtm}
              id="atm"
              label="ATM Name"
              type="text"
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

export default CreateAtmBtn;
