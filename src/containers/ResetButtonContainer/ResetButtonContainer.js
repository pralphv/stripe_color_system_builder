import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import ResetButton from "../../components/ResetButton";
import { resetStateActions } from "../../state/resetState";

export const ResetButtonContainer = ({ resetState }) => {
  return <ResetButton resetState={resetState} />;
};

ResetButtonContainer.propTypes = {
  resetState: PropTypes.func.isRequired
};

export default connect(null, {
  resetState: resetStateActions.resetState
})(ResetButtonContainer);
