import React from "react";
import makeStyles from '@mui/styles/makeStyles';
// @mui/icons-material
// import  from "@mui/icons-material/";
// core components
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import Card from "/components/Card/Card.js";
import CardHeader from "/components/Card/CardHeader.js";
import CardBody from "/components/Card/CardBody.js";
import CardFooter from "/components/Card/CardFooter.js";
import Muted from "/components/Typography/Muted.js";
import Button from "/components/CustomButtons/Button.js";

import teamsStyle from "/styles/jss/nextjs-material-kit-pro/pages/sectionsSections/teamsStyle.js";
import teamStyle from "/styles/jss/nextjs-material-kit-pro/pages/landingPageSections/teamStyle.js";

const style = {
  ...teamsStyle,
  ...teamStyle,
  justifyContentCenter: {
    justifyContent: "center"
  }
};

const useStyles = makeStyles(style);

export default function SectionTeam() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <h2 className={classes.title}>Here is our team</h2>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={6} md={6}>
            <Card profile plain className={classes.card3}>
              <GridContainer>
                <GridItem xs={12} sm={5} md={5}>
                  <CardHeader image plain>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        src="/img/faces/team/reza.jpeg"
                        alt="..."
                      />
                    </a>
                    <div
                      className={classes.coloredShadow}
                      style={{
                        backgroundImage:
                          "url('/img/faces/team/reza.jpeg')",
                        opacity: "1"
                      }}
                    />
                  </CardHeader>
                </GridItem>
                <GridItem xs={12} sm={7} md={7}>
                  <CardBody plain>
                    <h4 className={classes.cardTitle}>Amrollaheian Reza</h4>
                    <Muted>
                      <h6 className={classes.cardCategory}>Project Manager & FE</h6>
                    </Muted>
                  </CardBody>
                </GridItem>
              </GridContainer>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={6}>
            <Card profile plain className={classes.card3}>
              <GridContainer>
                <GridItem xs={12} sm={5} md={5}>
                  <CardHeader image plain>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        src="/img/faces/team/nethmi.jpeg"
                        alt="..."
                      />
                    </a>
                    <div
                      className={classes.coloredShadow}
                      style={{
                        backgroundImage:
                          "url('/img/faces/team/nethmi.jpeg')",
                        opacity: "1"
                      }}
                    />
                  </CardHeader>
                </GridItem>
                <GridItem xs={12} sm={7} md={7}>
                  <CardBody plain>
                    <h4 className={classes.cardTitle}>Nethmi Fonseka</h4>
                    <Muted>
                      <h6 className={classes.cardCategory}>AI Lead</h6>
                    </Muted>
                  </CardBody>
                </GridItem>
              </GridContainer>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={6}>
            <Card profile plain className={classes.card3}>
              <GridContainer>
                <GridItem xs={12} sm={5} md={5}>
                  <CardHeader image plain>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        src="/img/faces/team/parisa.jpeg"
                        alt="..."
                      />
                    </a>
                    <div
                      className={classes.coloredShadow}
                      style={{
                        backgroundImage:
                          "url('/img/faces/team/parisa.jpeg')",
                        opacity: "1"
                      }}
                    />
                  </CardHeader>
                </GridItem>
                <GridItem xs={12} sm={7} md={7}>
                  <CardBody plain>
                    <h4 className={classes.cardTitle}>Parisa Poorhasani</h4>
                    <Muted>
                      <h6 className={classes.cardCategory}>Business Manager</h6>
                    </Muted>
                  </CardBody>
                </GridItem>
              </GridContainer>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={6}>
            <Card profile plain className={classes.card3}>
              <GridContainer>
                <GridItem xs={12} sm={5} md={5}>
                  <CardHeader image plain>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        src="/img/faces/team/shahnawaz.jpeg"
                        alt="..."
                      />
                    </a>
                    <div
                      className={classes.coloredShadow}
                      style={{
                        backgroundImage:
                          "url('/img/faces/team/shahnawaz.jpeg')",
                        opacity: "1"
                      }}
                    />
                  </CardHeader>
                </GridItem>
                <GridItem xs={12} sm={7} md={7}>
                  <CardBody plain>
                    <h4 className={classes.cardTitle}>Md Shahnawaz Ahmed</h4>
                    <Muted>
                      <h6 className={classes.cardCategory}>PO & Backend Engineer</h6>
                    </Muted>
                  </CardBody>
                </GridItem>
              </GridContainer>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={6}>
            <Card profile plain className={classes.card3}>
              <GridContainer>
                <GridItem xs={12} sm={5} md={5}>
                  <CardHeader image plain>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        src="/img/faces/team/salman.jpeg"
                        alt="..."
                      />
                    </a>
                    <div
                      className={classes.coloredShadow}
                      style={{
                        backgroundImage:
                          "url('/img/faces/team/salman.jpeg')",
                        opacity: "1"
                      }}
                    />
                  </CardHeader>
                </GridItem>
                <GridItem xs={12} sm={7} md={7}>
                  <CardBody plain>
                    <h4 className={classes.cardTitle}>Muhammad Salman Rashid</h4>
                    <Muted>
                      <h6 className={classes.cardCategory}>AI Engineer</h6>
                    </Muted>
                  </CardBody>
                </GridItem>
              </GridContainer>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
