import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import CustomButton from "../../components/CustomButton";
import { colorBoxActions } from "../../state/colorBox";
import { changeColorInputActions } from "../../state/changeColorInput";

export const RemoveColorBoxButtonContainer = ({
  removeColorBoxRow,
  focusColorBox
}) => {
  return (
    <CustomButton
      handleOnClick={() => {
        removeColorBoxRow();
        focusColorBox({id: "", lch: ""});
      }}
      type="delete"
    />
  );
};

RemoveColorBoxButtonContainer.propTypes = {
  removeColorBoxRow: PropTypes.func.isRequired
};

export default connect(null, {
  removeColorBoxRow: colorBoxActions.removeColorBoxRow,
  focusColorBox: changeColorInputActions.focusColorBox
})(RemoveColorBoxButtonContainer);
