//React
import React, { useState, useEffect } from "react";
//Material
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';


function GetHistoricPricesfff(props) {
  let today = new Date(props.date);
  let date=parseInt(today.getDate()+1) + "-"+ parseInt(today.getMonth()+1) +"-"+today.getFullYear();
  var params = {
    date: date,
    id: props.active
  };
  params = new URLSearchParams(params).toString();
  const [state, setState] = useState([]);
  useEffect(() => {
    if ((props.date !== undefined) && (props.active !== undefined)) {
      fetch(
        "https://api.coingecko.com/api/v3/coins/" + props.active + "/history?" + params
      )
        .then((res) => res.json())
        .then((response) => {
          if (response.market_data !== undefined) {
            setState(response.market_data.current_price.eur);
          }
        });
    }
  }, [params]);
  return (
    <TextField
      key="value"
      name="value"
      type="number"
      value={state}
      label={props.label}
      onChange={props.method}
      variant='outlined'
      margin="normal"
      color="primary"
      id="value"
      required
      fullWidth
    />
  );
}

export default function GetHistoricPrices(props) {
  const [state, setState] = useState([<option key="-1" >
                                        Precio del activo
                                      </option>]);
  var defaultValue = [];

  if ((props.date !== undefined) && (props.active !== undefined)) {
    let date = new Date(props.date);
    let fromFull = new Date(date.getFullYear(), parseInt(date.getMonth()), date.getDate()+1);
    let toFull = new Date(fromFull.getFullYear(), parseInt(fromFull.getMonth()), fromFull.getDate()+2);
    let dateFrom = fromFull.getTime() / 1000;;
    let dateTo = toFull.getTime() / 1000;

    var params = {
      vs_currency: "eur",
      from: dateFrom,
      to: dateTo,
    };
    params = new URLSearchParams(params).toString();
  }

  useEffect(() => {
    if ((props.date !== undefined) && (props.active !== undefined)) {
      fetch(
        "https://api.coingecko.com/api/v3/coins/" + props.active + "/market_chart/range?" + params
      )
        .then((res) => res.json())
        .then((response) => {
          if (response.prices !== undefined) {
            const prices = []
            for (var i = 0; i < response.prices.length; i++) {
              var t = new Date(response.prices[i][0]);
              var formatted = t.getHours().toString() + "h:" + t.getMinutes().toString() + "m:" + t.getSeconds().toString() + "s";
              if (i == 0) {
                defaultValue.push(formatted);
                defaultValue.push(response.prices[0][1]);
              }
              prices.push(
                <option
                  key={i}
                  value={response.prices[i][1]}
                >
                  Hora: {formatted} Valor: {response.prices[i][1].toFixed(4)}
                </option>
              )
            }
            setState(prices);
          }
        });
    }
  }, [params]);
  return (
    <Select
       native
       value={defaultValue[1]}
       key="-1"
       name="value"
       onChange={props.method}>
       {state}
     </Select>
  );
}
