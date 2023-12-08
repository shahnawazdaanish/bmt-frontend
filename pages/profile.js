/*eslint-disable*/
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
import makeStyles from "@mui/styles/makeStyles";
import Tooltip from "@mui/material/Tooltip";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
// @mui/icons-material
import Camera from "@mui/icons-material/Camera";
import Palette from "@mui/icons-material/Palette";
import People from "@mui/icons-material/People";
import Add from "@mui/icons-material/Add";
import Favorite from "@mui/icons-material/Favorite";
// core components
import Header from "/components/Header/Header.js";
import Footer from "./Footer.js";
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import HeaderLinks from "/components/Header/HeaderLinks.js";
import NavPills from "/components/NavPills/NavPills.js";
import Card from "/components/Card/Card.js";
import CardBody from "/components/Card/CardBody.js";
import CardHeader from "/components/Card/CardHeader.js";
import Badge from "/components/Badge/Badge.js";
import Muted from "/components/Typography/Muted.js";
import Parallax from "/components/Parallax/Parallax.js";
import Clearfix from "/components/Clearfix/Clearfix.js";
import Button from "/components/CustomButtons/Button.js";

import profilePageStyle from "/styles/jss/nextjs-material-kit-pro/pages/profilePageStyle.js";
import Search from '@mui/icons-material/Search';
import CustomInput from '../components/CustomInput/CustomInput';
import CustomTable from '../components/Table/Table';

const useStyles = makeStyles(profilePageStyle);

export default function ProfilePage({ ...rest }) {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
  return (
    <div>
      <Header
        color="transparent"
        brand="BuildMyTrips"
        links={<HeaderLinks dropdownHoverColor="info" />}
        fixed
        changeColorOnScroll={{
          height: 200,
          color: "info",
        }}
        {...rest}
      />
      <Parallax
        image="/img/examples/profile_city.jpg"
        filter="dark"
        className={classes.parallax}
      />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <div className={classes.profileTabs}>
            <NavPills
              alignCenter
              color="primary"
              tabs={[
                {
                  tabButton: "Search",
                  tabIcon: Search,
                  tabContent: (
                    <GridContainer>
                      <GridItem
                        xs={12}
                        sm={12}
                        md={12}
                        className={classes.gridItem}
                      >
                        <GridContainer className={classes.collections}>
                          <GridItem xs={12} sm={12} md={12}>
                            <Card
                            >
                              <CardHeader color="success">Search items in Turku city</CardHeader>
                              <CardBody className={classes.cardBody}>
                                <GridContainer>
                                  <GridItem xs={12} sm={12} md={4}>
                                    <CustomInput
                                      labelText="Enter destination"
                                      formControlProps={{
                                        fullWidth: true
                                      }}
                                      inputProps={{
                                      }}
                                    />
                                  </GridItem>
                                  <GridItem xs={12} sm={12} md={4}>
                                    <CustomInput
                                      labelText="Enter max budget"
                                      id="disabled"
                                      formControlProps={{
                                        fullWidth: true
                                      }}
                                      inputProps={{
                                        disabled: false,
                                        type: "number",
                                        max: 3
                                      }}
                                    />
                                  </GridItem>
                                  <GridItem xs={12} sm={12} md={4}>
                                    <Button type="button" color="primary">Search</Button>
                                  </GridItem>
                                </GridContainer>
                              </CardBody>
                            </Card>
                          </GridItem>
                        </GridContainer>
                      </GridItem>
                    </GridContainer>
                  ),
                },
                {
                  tabButton: "Recommendation History",
                  tabIcon: People,
                  tabContent: (
                    <div>
                      <GridContainer justifyContent="center">
                        <GridItem
                          xs={12}
                          sm={12}
                          md={12}
                          className={classes.gridItem}
                        >
                          <Card profile plain className={classes.card}>
                            <GridContainer>
                              <GridItem xs={12} sm={12} md={12}>
                                <CardHeader color="info"><h4>Your previous recommendation history</h4></CardHeader>
                              </GridItem>
                              <GridItem xs={12} sm={12} md={12}>
                                <CardBody>
                                  <CustomTable
                                    striped
                                    tableShopping
                                    tableHead={["ID", "Recommendation Title", "Generated At", "Action"]}
                                    tableData={[[1, "I want to go to Turku palace", "10 November 2023 4:35pm","View"]]}
                                  />
                                </CardBody>
                              </GridItem>
                            </GridContainer>
                          </Card>
                        </GridItem>
                      </GridContainer>

                    </div>
                  ),
                },
              ]}
            />
          </div>
          <Clearfix />
        </div>
      </div>
      <Footer class={classes.footer} />
    </div>
  );
}
