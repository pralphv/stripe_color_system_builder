import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { ChangeColorInput } from "../../components";
import { changeColorInputSelectors } from "../../state/changeColorInput";
import { colorBoxActions } from "../../state/colorBox";
import { changeColorInputActions } from "../../state/changeColorInput";

export const ChangeColorInputContainer = ({
  changeColorBox,
  lch,
  colorInputChanged
}) => {
  return (
    <ChangeColorInput
      changeColorBox={changeColorBox}
      lch={lch}
      colorInputChanged={colorInputChanged}
    />
  );
};

ChangeColorInputContainer.propTypes = {
  changeColorBox: PropTypes.func.isRequired,
  changeColorInputObj: PropTypes.object,
  colorInputChanged: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  lch: changeColorInputSelectors.selectorFormattedColorInput(
    state
  ).lch
});

export default connect(
  mapStateToProps,
  {
    changeColorBox: colorBoxActions.changeColorBox,
    colorInputChanged: changeColorInputActions.colorInputChanged
  }
)(ChangeColorInputContainer);
