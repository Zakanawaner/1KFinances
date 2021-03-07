//React
import React, { useState, useEffect } from "react";
//My things
import WalletChart from "./WalletChart.js";
import TableMovements from "../tables/TableMovements.js";
//Material
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import IconButton from "@material-ui/core/IconButton";
import Avatar from "@material-ui/core/Avatar";


export default function WalletActive(props) {
  const [state, setState] = useState([]);
  useEffect(() => {
    fetch("https://api.coingecko.com/api/v3/coins/" + props.active.gecko_id)
      .then((res) => res.json())
      .then((response) => {
        setState(
          <Container className="my-container" maxWidth="md">
            <div className="flex-centered mb-10">
              <div className='avatar'>
              <IconButton href={response.links.homepage[0]}>
                <Avatar src={response.image.small} />
              </IconButton>
              </div>
              <Typography className="text-centered" component="h2" variant="h4" color="primary" gutterBottom>
                {response.name} ({response.symbol})
              </Typography>
            </div>
            <WalletChart coin={props.active.gecko_id} movements={props.active.movements} currency="eur" days={1} />
            <Typography component="h2" variant="h6" color="primary" gutterBottom>
              {props.active.information.title}
            </Typography>
            <div className="flex-centered mb-10">
              <Typography className="text-centered text-small" component="h2" variant="body1" gutterBottom>
                {props.active.information.head.current_price}: {props.active.information.current_price}
              </Typography>
              <Typography className="text-centered text-small" component="h2" variant="body1" gutterBottom>
                {props.active.information.head.amount_owned}: {props.active.total}
              </Typography>
              <Typography className="text-centered text-small" component="h2" variant="body1" gutterBottom>
                {props.active.information.head.average_buy_price}: {props.active.information.average_buy_price}
              </Typography>
              <Typography className="text-centered text-small" component="h2" variant="body1" gutterBottom>
                {props.active.information.head.percentage_of_total_investment}: {props.active.information.percentage_of_total_investment}%
              </Typography>
              <Typography className="text-centered text-small" component="h2" variant="body1" gutterBottom>
                {props.active.information.head.revenue}: {props.active.information.revenue}
              </Typography>
            </div>
            {props.active.movements !== undefined ? TableMovements(props.active.movements, false, false) : null}
        </Container>
        );
      });
  }, [props.active.gecko_id]);
  return state;
}
