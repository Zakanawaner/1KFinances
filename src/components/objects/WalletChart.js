//React
import React, { useState, useEffect } from "react";
//Material
import Paper from "@material-ui/core/Paper";
//Charts
import {
  ArgumentAxis,
  ValueAxis,
  Chart,
  LineSeries,
  SplineSeries,
  ScatterSeries,
} from "@devexpress/dx-react-chart-material-ui";


export default function MarketChart(props) {
  var params = {
    vs_currency: props.currency,
    days: props.days
  };
  params = new URLSearchParams(params).toString();
  const [state, setState] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.coingecko.com/api/v3/coins/" + props.coin + "/ohlc?" + params
    )
      .then((res) => res.json())
      .then((response) => {
        const result = [];
        for (var i = 0; i < response.length; i++) {
          result.push({
            splineValue: response[i][1],
            //scatterValue: response[i][1],
            argument: i });
        }
        setState(result);
      });
  }, [props.coin]);

  return (
    <Paper>
      <Chart data={state}>
        <ArgumentAxis />
        <ValueAxis />
        <ScatterSeries valueField="scatterValue" argumentField="argument" />
        <SplineSeries valueField="splineValue" argumentField="argument" />
      </Chart>
    </Paper>
  );
}
