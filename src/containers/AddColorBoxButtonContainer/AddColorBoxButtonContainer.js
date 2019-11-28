import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import CustomButton from "../../components/CustomButton";
import { colorBoxActions } from "../../state/colorBox";
import { changeColorInputActions } from "../../state/changeColorInput";

export const AddColorBoxButtonContainer = ({
  addColorBoxRow,
  focusColorBox
}) => {
  return (
    <CustomButton
      handleOnClick={() => {
        addColorBoxRow();
        focusColorBox({id: "", lch: ""});
      }}
      type="add"
    />
  );
};

AddColorBoxButtonContainer.propTypes = {
  addColorBoxRow: PropTypes.func.isRequired
};

export default connect(null, {
  addColorBoxRow: colorBoxActions.addColorBoxRow,
  focusColorBox: changeColorInputActions.focusColorBox
})(AddColorBoxButtonContainer);
