import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import PropTypes from "prop-types";
import {
  AppBar,
  Toolbar,
  Typography,
  withStyles,
  Button
} from "@material-ui/core";

import styles from "./Header.styles";
import { GEEK_TRUST_HOME_URL } from "../../config/constants";

class Header extends Component {
  render() {
    const {
      classes: { link, textCenter, title, toolbar, appBar }
    } = this.props;
    return (
      <AppBar position="static" className={appBar}>
        <Toolbar className={toolbar}>
          <div>&nbsp;</div>
          <Typography variant="h6" className={[title, textCenter].join(" ")}>
          Select planets you wish to search in:
          </Typography>
          <Typography variant="text" className={link}>
            Finding Falcone Challenge
          </Typography>

        </Toolbar>
      </AppBar>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired
};

export default compose(withStyles(styles), withRouter)(Header);
