import React from "react";
import Typography from "@material-ui/core/Typography";
import { LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";
import PropTypes from "prop-types";
import "./styles.css";
import DefaultTooltipContent from 'recharts/lib/component/DefaultTooltipContent';

const lchProperties = {
  l: { label: "Lightness", yRange: [0, 110] },
  c: { label: "Chroma", yRange: [0, 150] },
  h: { label: "Hue", yRange: [0, 370] }
};

export default function LineGraph({ data, label }) {
  return (
    <div>
      <Typography gutterBottom>{lchProperties[label].label}</Typography>
      <div style={{ margin: 10 }}>
        <LineChart
          width={210}
          height={60}
          data={data}
          margin={{
            left: -50,
            bottom: -30
          }}
        >
          <XAxis dataKey="x" tick={false} />
          <YAxis tick={false} domain={lchProperties[label].yRange} />
          <Tooltip content={<CustomTooltipContent />}/>
          <Line dataKey="y" isAnimationActive={false} />
        </LineChart>
      </div>
    </div>
  );
}

LineGraph.propTypes = {
  // label: PropTypes.str,
  // data: PropTypes.obj,
};


const CustomTooltipContent = function(props){
  if(props.payload != null && props.payload[0] != null){
    const newPayload = [];
    props.payload.forEach((obj) => {
      obj.payload = {y: obj.payload.y};
      const newObj = {...obj, payload: {y: obj.payload.y + "JER"}}
      
      newPayload.push(newObj);
    });
    return <DefaultTooltipContent {...props} payload={newPayload} />;
  }
  return <DefaultTooltipContent {...props}/>;
}