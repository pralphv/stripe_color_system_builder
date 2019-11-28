import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { LoadingScreen } from "../../components";
import { loadingSelectors } from "../../state/loading";

export const LoadingScreenContainer = ({ loading }) => {
  return <LoadingScreen loading={loading} />;
};

LoadingScreenContainer.propTypes = {
  loading: PropTypes.bool,
};

const mapStateToProps = state => ({
  loading: loadingSelectors.selectorLoading(state).loading
});

export default connect(
  mapStateToProps,
)(LoadingScreenContainer);
