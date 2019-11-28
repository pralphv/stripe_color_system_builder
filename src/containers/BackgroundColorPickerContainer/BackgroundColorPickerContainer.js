import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { BackgroundColorPicker } from "../../components";
import { backgroundColorSelectors } from "../../state/backgroundColor";
import { backgroundColorActions } from "../../state/backgroundColor";

export const BackgroundColorPickerContainer = ({
  changeBackgroundColor,
  backgroundColor
}) => {
  return (
    <BackgroundColorPicker
      changeBackgroundColor={changeBackgroundColor}
      backgroundColor={backgroundColor}
    />
  );
};

BackgroundColorPickerContainer.propTypes = {
  changeBackgroundColor: PropTypes.func.isRequired,
  backgroundColor: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  backgroundColor: backgroundColorSelectors.selectorBackgroundColor(state)
});

export default connect(
  mapStateToProps,
  {
    changeBackgroundColor: backgroundColorActions.backgroundColorChanged
  }
)(BackgroundColorPickerContainer);
