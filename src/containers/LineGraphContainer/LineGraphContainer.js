import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

import { LineGraphColumn } from "../../components";
import { colorBoxSelectors } from "../../state/colorBox";
import { separateIdSubId } from "../../utils/helper";

const useStyles = makeStyles(() => ({
  paper: {
    textAlign: "center",
    paddingBottom: 10
  },
  title: {
    padding: 10
  }
}));

export const LineGraphContainer = ({ colorBoxRows, activeColorBox }) => {
  const classes = useStyles();
  const idObj = separateIdSubId(activeColorBox);
  let rowWiseData = {};
  let columnWiseData = [];
  try {
    rowWiseData = deriveRowWiseData(colorBoxRows, idObj.id);
  } catch {}
  try {
    columnWiseData = deriveColumnWiseData(colorBoxRows, idObj.subId);
  } catch {
    try {
      columnWiseData = deriveColumnWiseData(colorBoxRows, 0);
    } catch {}
  }

  return (
    Object.keys(rowWiseData).length > 0 && (
      <Grid container spacing={2}>
        <Grid item>
          <Paper className={classes.paper}>
            <Typography className={classes.title}>Column-wise</Typography>
            {<LineGraphColumn data={columnWiseData} />}
          </Paper>
        </Grid>
        <Grid item>
          <Paper className={classes.paper}>
            <Typography className={classes.title}>Row-wise</Typography>

            {<LineGraphColumn data={rowWiseData} />}
          </Paper>
        </Grid>
      </Grid>
    )
  );
};

LineGraphContainer.propTypes = {
  colorBoxRows: PropTypes.object
};

const lchComponents = ["l", "c", "h"];
function deriveColumnWiseData(colorBoxRows, colorGradientIndex) {
  const columnWiseData = {
    l: [],
    c: [],
    h: []
  };
  let counter = 0;
  Object.entries(colorBoxRows).forEach(([key, value]) => {
    lchComponents.forEach(elem => {
      const colorComponent = value.colorGradient[colorGradientIndex].lch[elem];
      columnWiseData[elem].push({ y: colorComponent, x: `x: ${counter}` });
    });
    counter += 1;
  });
  return columnWiseData;
}

function deriveRowWiseData(colorBoxRows, colorRowId) {
  const rowWiseData = {
    l: [],
    c: [],
    h: []
  };
  Object.entries(colorBoxRows[colorRowId].colorGradient).forEach(
    ([key, value]) => {
      lchComponents.forEach(elem => {
        const data = { x: `x: ${key}`, y: value.lch[elem] };
        rowWiseData[elem].push(data);
      });
    }
  );
  return rowWiseData;
}

const mapStateToProps = state => ({
  colorBoxRows: colorBoxSelectors.selectorFormattedColorBoxRows(state),
  activeColorBox: colorBoxSelectors.selectorActiveColorBox(state)
});

export default connect(mapStateToProps)(LineGraphContainer);
