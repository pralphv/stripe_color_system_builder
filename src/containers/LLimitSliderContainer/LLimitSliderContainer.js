import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { LLimitSlider } from "../../components";
import { lLimitSelectors, lLimitActions } from "../../state/lLimit";

export const LLimitSliderContainer = ({ lLimit, changeLLimit }) => {
  return <LLimitSlider lLimit={lLimit} changeLLimit={changeLLimit} />;
};

LLimitSliderContainer.propTypes = {
  lLimit: PropTypes.object,
  changeLLimit: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  lLimit: lLimitSelectors.selectorLLimit(state)
});

export default connect(
  mapStateToProps,
  {
    changeLLimit: lLimitActions.changeLLimit
  }
)(LLimitSliderContainer);
