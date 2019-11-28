import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { LchSliders } from "../../components";
import { changeColorInputSelectors } from "../../state/changeColorInput";
import { changeColorInputActions } from "../../state/changeColorInput";

export const LchSlidersContainer = ({
  lchAndId,
  lchColorInputChanged
}) => {
  return (
    <LchSliders
      lchColorInputChanged={lchColorInputChanged}
      lchAndId={lchAndId}
    />
  );
};

// ChangeColorInputContainer.propTypes = {
//   changeColorBox: PropTypes.func.isRequired,
//   changeColorInputObj: PropTypes.object,
//   colorInputChanged: PropTypes.func.isRequired
// };

const mapStateToProps = state => ({
  lchAndId: changeColorInputSelectors.selectorFormattedColorInput(
    state
  )
});

export default connect(
  mapStateToProps,
  {
    lchColorInputChanged: changeColorInputActions.lchColorInputChanged
  }
)(LchSlidersContainer);
