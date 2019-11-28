import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import SavedOptions from "../../components/SavedOptions";
import { loadSlotActions } from "../../state/loadSlot";

export const SavedOptionsContainer = ({ loadSlot }) => {
  return <SavedOptions loadSlot={loadSlot} />;
};

SavedOptionsContainer.propTypes = {
  loadSlot: PropTypes.func.isRequired
};

export default connect(null, {
  loadSlot: loadSlotActions.loadSlot
})(SavedOptionsContainer);
