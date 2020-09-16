import React from "react";
import { Paper, Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
// import "./App.css";
import image from "../img/unplugged.jpg";
import { makeStyles } from "@material-ui/core";
import { ScrollView } from "react-native-web";
import { Link, Route, BrowserRouter } from "react-router-dom";
import EventHub from "./eventhuub";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: "#8cecec",
    overflowX: "hidden",
    flexGrow: 1,
    display: "flex",
    // width: `calc(100vw - 90px)`,
    padding: "20px",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
}));

const Societyhub = () => {
  const classes = useStyles();
  return (
    <div className="moveRt">
    <div className={classes.container} id="main">
      <Grid container>
        <Grid item sm={12}>
          <Typography variant="h3">Society Hub</Typography>
        </Grid>
        <Route path="/eventhub" component={EventHub}>
          {" "}
          <button>Event hub</button>
        </Route>
        <Grid item sm={12}>
          <Grid container sm={12}>
            <Grid item sm={12}>
              <Paper
                elevation={0}
                style={{
                  width: "70rem",
                  padding: "15px",
                  borderRadius: "10px",
                  fontSize: "1.6rem",
                  borderBottom: "1px solid grey",
                }}
              >
                <Grid container>
                  <Grid item sm={12}>
                    <Typography variant="h5">Category 1</Typography>
                  </Grid>
                </Grid>
                <Grid container>
                  <ScrollView horizontal={true} indicatorStyle="black">
                    <Grid item>
                      <img class="society-img"
                        src={image}
                        width="200px"
                        alt="sample"
                        style={{ border: "1px black solid", margin: "20px" }}
                      />
                      <Typography
                        variant="h6"
                        style={{ margin: " 0 20px 0", textAlign: "center" }}
                      >
                        Society 1
                      </Typography>
                    </Grid>
                    <Grid item>
                      <img 
                        class="society-img"
                        src={image}
                        width="200px"
                        alt="sample"
                        style={{ border: "1px black solid", margin: "20px" }}
                      />
                      <Typography
                        variant="h6"
                        style={{ margin: " 0 20px 0", textAlign: "center" }}
                      >
                        Society 1
                      </Typography>
                    </Grid>
                    <Grid item>
                      <img class="society-img"
                        src={image}
                        width="200px"
                        alt="sample"
                        style={{ border: "1px black solid", margin: "20px" }}
                      />
                      <Typography
                        variant="h6"
                        style={{ margin: " 0 20px 0", textAlign: "center" }}
                      >
                        Society 1
                      </Typography>
                    </Grid>
                    <Grid item>
                      <img class="society-img"
                        src={image}
                        width="200px"
                        alt="sample"
                        style={{ border: "1px black solid", margin: "20px" }}
                      />
                      <Typography
                        variant="h6"
                        style={{ margin: " 0 20px 0", textAlign: "center" }}
                      >
                        Society 1
                      </Typography>
                    </Grid>
                    <Grid item>
                      <img class="society-img"
                        src={image}
                        width="200px"
                        alt="sample"
                        style={{ border: "1px black solid", margin: "20px" }}
                      />
                      <Typography
                        variant="h6"
                        style={{ margin: " 0 20px 0", textAlign: "center" }}
                      >
                        Society 1
                      </Typography>
                    </Grid>
                    <Grid item>
                      <img class="society-img"
                        src={image}
                        width="200px"
                        alt="sample"
                        style={{ border: "1px black solid", margin: "20px" }}
                      />
                      <Typography
                        variant="h6"
                        style={{ margin: " 0 20px 0", textAlign: "center" }}
                      >
                        Society 1
                      </Typography>
                    </Grid>
                  </ScrollView>
                </Grid>
              </Paper>
            </Grid>
            <Grid item sm={12}>
              <Paper
                elevation={0}
                style={{
                  width: "70rem",
                  padding: "15px",
                  borderRadius: "10px",
                  fontSize: "1.6rem",
                  borderBottom: "1px solid grey",
                }}
              >
                <Grid container>
                  <Grid item sm={12}>
                    <Typography variant="h5">Category 1</Typography>
                  </Grid>
                </Grid>
                <Grid container>
                  <Grid item>
                    <img class="society-img"
                      src={image}
                      width="200px"
                      alt="sample"
                      style={{ border: "1px black solid", margin: "20px" }}
                    />
                    <Typography
                      variant="h6"
                      style={{ margin: " 0 20px 0", textAlign: "center" }}
                    >
                      Society 1
                    </Typography>
                  </Grid>
                  <Grid item>
                    <img class="society-img"
                      src={image}
                      width="200px"
                      alt="sample"
                      style={{ border: "1px black solid", margin: "20px" }}
                    />
                    <Typography
                      variant="h6"
                      style={{ margin: " 0 20px 0", textAlign: "center" }}
                    >
                      Society 1
                    </Typography>
                  </Grid>
                  <Grid item>
                    <img class="society-img"
                      src={image}
                      width="200px"
                      alt="sample"
                      style={{ border: "1px black solid", margin: "20px" }}
                    />
                    <Typography
                      variant="h6"
                      style={{ margin: " 0 20px 0", textAlign: "center" }}
                    >
                      Society 1
                    </Typography>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
            <Grid item sm={12}>
              <Paper
                elevation={0}
                style={{
                  width: "70rem",
                  padding: "15px",
                  borderRadius: "10px",
                  fontSize: "1.6rem",
                  borderBottom: "1px solid grey",
                }}
              >
                <Grid container>
                  <Grid item sm={12}>
                    <Typography variant="h5">Category 1</Typography>
                  </Grid>
                </Grid>
                <Grid container>
                  <Grid item>
                    <img class="society-img"
                      src={image}
                      width="200px"
                      alt="sample"
                      style={{ border: "1px black solid", margin: "20px" }}
                    />
                    <Typography
                      variant="h6"
                      style={{ margin: " 0 20px 0", textAlign: "center" }}
                    >
                      Society 1
                    </Typography>
                  </Grid>
                  <Grid item>
                    <img class="society-img"
                      src={image}
                      width="200px"
                      alt="sample"
                      style={{ border: "1px black solid", margin: "20px" }}
                    />
                    <Typography
                      variant="h6"
                      style={{ margin: " 0 20px 0", textAlign: "center" }}
                    >
                      Society 1
                    </Typography>
                  </Grid>
                  <Grid item>
                    <img class="society-img"
                      src={image}
                      width="200px"
                      alt="sample"
                      style={{ border: "1px black solid", margin: "20px" }}
                    />
                    <Typography
                      variant="h6"
                      style={{ margin: " 0 20px 0", textAlign: "center" }}
                    >
                      Society 1
                    </Typography>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
    </div>
  );
};

export default Societyhub;
