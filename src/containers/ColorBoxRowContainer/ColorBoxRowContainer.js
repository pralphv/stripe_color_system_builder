import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import ColorBoxRow from "../../components/ColorBoxRow";
import { colorBoxSelectors } from "../../state/colorBox";
import { backgroundColorSelectors } from "../../state/backgroundColor";
import { changeColorInputActions } from "../../state/changeColorInput";

export const ColorBoxRowContainer = props => {
  const { focusColorBox, colorBoxRows, backgroundColor } = props;
  return (
    <ColorBoxRow
      backgroundColor={backgroundColor}
      colorBoxRows={colorBoxRows}
      onClick={focusColorBox}
    />
  );
};

// PostListContainer.propTypes = {
//   posts: PropTypes.arrayOf(PropTypes.shape({})),
//   fetchPosts: PropTypes.func.isRequired
// };

// PostListContainer.defaultProps = {
//   posts: []
// };

const mapStateToProps = state => ({
  colorBoxRows: colorBoxSelectors.selectorFormattedColorBoxRows(state),
  backgroundColor: backgroundColorSelectors.selectorBackgroundColor(state)
});

export default connect(
  mapStateToProps,
  {
    focusColorBox: changeColorInputActions.focusColorBox
  }
)(ColorBoxRowContainer);
