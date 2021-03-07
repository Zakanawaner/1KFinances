//React
import { useState, useEffect } from "react";
//Material
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Container from '@material-ui/core/Container';


export default function GetCoins(props) {
  const [state, setState] = useState([]);

  useEffect(() => {
    fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur")
      .then((res) => res.json())
      .then((response) => {
        const options = [];
        for (var i = 0; i < response.length; i++) {
          options.push(
            <option key={i} value={response[i].id}>
              {response[i].name}
            </option>
          );
        }
        setState(
          <Select
            native
            className='avatar'
            name='active'
            value={options[0].value}
            onChange={props.method}>
            {options}
          </Select>
        );
      });
  }, []);
  
  if (props.market) {
    return (
      <Container maxWidth="xs" className="my-container">
        <div className="flex-centered">
          {state}
        </div>
      </Container >
    );
  } else {
    return (
      <div className="flex-centered">
        {state}
      </div>
    );
  }
}
