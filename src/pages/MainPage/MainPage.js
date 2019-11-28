import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import { AddColorBoxButtonContainer } from "../../containers";
import { RemoveColorBoxButtonContainer } from "../../containers";
import { ColorBoxRowContainer } from "../../containers";
import { ChangeColorInputContainer } from "../../containers";
import { LchSlidersContainer } from "../../containers";
import { LLimitSliderContainer } from "../../containers";
import { BackgroundColorPickerContainer } from "../../containers";
import { LineGraphContainer } from "../../containers";
import { SavedOptionsContainer } from "../../containers";
import { LoadingScreenContainer } from "../../containers";
import { ResetButtonContainer } from "../../containers";

import Footer from "../../components/Footer";

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.primary
  },
  settings: {
    width: 200
  },
  colorGradient: {
    width: 280
  },
  footer: {
    marginTop: 20,
    display: "inline-block",
  },
  footerContainer: {
    margin: "auto",
    width: "50%"
  }
}));

function MainPage() {
  const classes = useStyles();

  return (
    <div>
      <LoadingScreenContainer />
      <Grid container>
        <Grid item xs={12}>
          <Grid container spacing={2} justify="center">
            <Grid item>
              <Paper className={`${classes.paper} ${classes.colorGradient}`}>
                <div>
                  <AddColorBoxButtonContainer />
                  <RemoveColorBoxButtonContainer />
                  <SavedOptionsContainer />
                  <ResetButtonContainer/>
                  <ColorBoxRowContainer />
                </div>
              </Paper>
            </Grid>
            <Grid item xs={6}>
              <Grid container justify="center" spacing={2}>
                <Grid item>
                  <Grid container spacing={2}>
                    <Grid item>
                      <Paper className={`${classes.paper} ${classes.settings}`}>
                        <div>
                          <ChangeColorInputContainer />
                          <LchSlidersContainer />
                        </div>
                      </Paper>
                    </Grid>
                    <Grid item>
                      <Paper className={`${classes.paper} ${classes.settings}`}>
                        <div>
                          <BackgroundColorPickerContainer />
                          {/*This and ChangeColorInputContainer are the same*/}
                          {/*Could be reused*/}
                          <LLimitSliderContainer />
                        </div>
                      </Paper>
                    </Grid>
                    <Grid item>
                      <LineGraphContainer />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <div className={classes.footerContainer}>

      <Paper className={`${classes.paper} ${classes.footer}`}>
        <Footer/>
      </Paper>
      </div>

    </div>
  );
}

export default MainPage;
