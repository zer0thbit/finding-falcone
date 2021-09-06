import React from "react";
import { Paper, Grid, withStyles } from "@material-ui/core";

import { GEEK_TRUST_HOME_URL as GEEK_TRUST_CHALLENGE_URL } from "../../config/constants";
import styles from "./Footer.styles";

function Footer({ classes }) {
  const { footer, descColor, linkUrl } = classes;
  return (
    <Paper className={footer}>
      <Grid container justify="center">
        <Grid item xs={12}>
          <h4 className={descColor} align="center">
            Coding problem -{" "}
            <a href={GEEK_TRUST_CHALLENGE_URL} className={linkUrl}>
              {GEEK_TRUST_CHALLENGE_URL}
            </a>
          </h4>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default withStyles(styles)(Footer);
