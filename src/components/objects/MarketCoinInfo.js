//React
import React, { useState, useEffect } from "react";
//My things
import MarketChart from "./MarketChart.js";
//Material
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import IconButton from "@material-ui/core/IconButton";
import Avatar from "@material-ui/core/Avatar";


export default function MarketCoinInfo(props) {
  const [state, setState] = useState([]);
  useEffect(() => {
    fetch("https://api.coingecko.com/api/v3/coins/" + props.id)
      .then((res) => res.json())
      .then((response) => {
        setState(
          <Container className="my-container" maxWidth="sm">
            <div className="flex-centered mb-10">
              <div className='avatar'>
              <IconButton href={response.links.homepage[0]}>
                <Avatar src={response.image.small} />
              </IconButton>
              </div>
              <Typography className="text-centered" component="h2" variant="h6" color="primary" gutterBottom>
                {response.name} ({response.symbol})
              </Typography>
            </div>
            <Typography
              dangerouslySetInnerHTML={{ __html: response.description.es }}
            />
            <Typography>
              Current price: {response.market_data.current_price.eur}
            </Typography>
            <MarketChart coin={props.id} currency="eur" days={1} />
          </Container>
        );
      });
  }, [props.id]);
  return state;
}

// Añadir links interesantes, gráficas por tiempo histórico
