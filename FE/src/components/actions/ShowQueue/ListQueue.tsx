import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import {Box, ListItem, Typography} from "@mui/material";
import { getQueue } from "../../../actions/queue.action";
import CardQueue from "../../cards/queue/CardQueue";
import {Queue} from "../../../interfaces/atm.interface"

const ListQueue: React.FC = () => {
 const dispatch = useDispatch();
 const queue = useSelector((state: any) => state.queue);

 useEffect(() => {
     const resetTimer = setInterval(() => {
         dispatch(getQueue());
     }, 1000);
     return () => clearInterval(resetTimer);
 })

  return (
    <div>
      <ListItem
        sx={{
          display: "grid",
          gap: 1,
          gridTemplateRows: "repeat(1, 1fr)",
        }}
      >
        {!queue.queue ? (
          <Typography variant="caption" display="block" gutterBottom>
            No person in queue
          </Typography>
        ) : (
          queue.queue.map((props: Queue) => (
            <Box sx={{ width: "auto" }}>
              <CardQueue {...props} />
            </Box>
          ))
        )}
      </ListItem>
    </div>
  );
};

export default ListQueue;
