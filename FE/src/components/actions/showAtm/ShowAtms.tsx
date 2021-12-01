import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ListItem } from "@mui/material";
import Card from "../../cards/atms/Card";
import { getATMs } from "../../../actions/atm.action";
import { AtmProps } from "../../../interfaces/atm.interface";
import "./style.scss";

const ShowAtms: React.FC = () => {
  const dispatch = useDispatch();
  const atms = useSelector((state: any) => state.atm);

  useEffect(() => {
    const resetTimer = setInterval(() => {
      dispatch(getATMs());
    }, 1000);
    return () => clearInterval(resetTimer);
  }, []);

  //   atms.map((props: any) => console.log(props));

  return (
    <div>
      <ListItem
        sx={{
          display: "grid",
          gap: 1,
          gridTemplateColumns: "repeat(3, 1fr)",
        }}
      >
        {atms.ATMs?.map((props: AtmProps) => (
          <Card key={props.id} {...props} />
        ))}
      </ListItem>
    </div>
  );
};

export default ShowAtms;
