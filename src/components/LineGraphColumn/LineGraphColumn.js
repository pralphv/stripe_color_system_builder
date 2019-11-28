import React from "react";
import LineGraph from "../LineGraph";
import PropTypes from "prop-types";

export default function LineGraphColumn({ data }) {
  return (
    <div>
      {Object.entries(data).map(([key, value]) => (
        <LineGraph data={value} key={key} label={key}/>
      ))}
    </div>
  );
}

LineGraph.propTypes = {
  // data: PropTypes.obj,
};

