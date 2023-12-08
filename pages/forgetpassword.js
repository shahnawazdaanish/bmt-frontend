/*eslint-disable*/
import React from "react";
import makeStyles from "@mui/styles/makeStyles";
import InputAdornment from "@mui/material/InputAdornment";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Icon from "@mui/material/Icon";
// @mui/icons-material
import Timeline from "@mui/icons-material/Timeline";
import Code from "@mui/icons-material/Code";
import Group from "@mui/icons-material/Group";
import Face from "@mui/icons-material/Face";
import Email from "@mui/icons-material/Email";
import Check from "@mui/icons-material/Check";
import Favorite from "@mui/icons-material/Favorite";
// core components
import Header from "/components/Header/Header.js";
import HeaderLinks from "/components/Header/HeaderLinks.js";
import Footer from "/components/Footer/Footer.js";
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import Button from "/components/CustomButtons/Button.js";
import Card from "/components/Card/Card.js";
import CardBody from "/components/Card/CardBody.js";
import InfoArea from "/components/InfoArea/InfoArea.js";
import CustomInput from "/components/CustomInput/CustomInput.js";

import signupPageStyle from "/styles/jss/nextjs-material-kit-pro/pages/signupPageStyle.js";
import Image from "next/image";
import bannerImage from'../public/img/signup-rightsection.jpg';
const useStyles = makeStyles(signupPageStyle);

export default function SignUpPage({ ...rest }) {
  const [checked, setChecked] = React.useState([1]);
  const handleToggle = (value) => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];
    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
  };
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });
  const classes = useStyles();
  return (
    <div>
      <Header
        absolute
        color="transparent"
        brand="Build My Trips"
        links={<HeaderLinks dropdownHoverColor="rose" />}
        {...rest}
      />
      <div
        className={classes.pageHeader}
        
        style={{
          backgroundImage: "url('/img/bg7.jpg')",
          backgroundSize: "cover ",
          backgroundPosition: "top center ",
        }}
      >
        <div className={classes.container} >
          <GridContainer justifyContent="center">
            <GridItem xs={12} sm={10} md={10} >
              <Card className={classes.cardSignup}>
                <h2 className={classes.cardTitle}>Forget Password</h2>
                
                <br></br>
                <br></br>
                <CardBody>
                  <GridContainer justifyContent="center">
                    <GridItem xs={12} sm={5} md={5} style={{backgroundImage:"url('/img/forgetpassword.jpg')", marginRight:"50px", borderRadius:"5px" }}>
                      {/*<Image src={bannerImage} alt="Travel To Finland" width={410} height={410} />// */}
                        {/* <InfoArea
                        className={classes.infoArea}
                        title="Built Trips"
                        description="Proudly, 18542 trips have been made so far, Wanna try yours?"
                        icon={Timeline}
                        iconColor="rose"
                      />
                      <InfoArea
                        className={classes.infoArea}
                        title="Wanna Visit Finland?"
                        description="Do you know what the lowest price is to see the Northern Lights?"
                        icon={Code}
                        iconColor="primary"
                      />
                      <InfoArea
                        className={classes.infoArea}
                        title="Built Audience"
                        description="Do you know what kind of trip suits your tastes? Build it based on your interests in just a few steps..."
                        icon={Group}
                        iconColor="info"
                      />*/}
                      </GridItem>
                      <GridItem xs={12} sm={5} md={5}>
                      {/*<div className={classes.textCenter}>
                        <Button justIcon round color="twitter">
                          <i className={classes.socials + " fab fa-twitter"} />
                        </Button>
                        {` `}
                        <Button justIcon round color="dribbble">
                          <i className={classes.socials + " fab fa-dribbble"} />
                        </Button>
                        {` `}
                        <Button justIcon round color="facebook">
                          <i
                            className={classes.socials + " fab fa-facebook-f"}
                          />
                        </Button>
                        {` `}
                        <h6>Or Use Your Email Account </h6>
                      </div> */}
                    <form className={classes.form} style={{marginTop:"15px;!important"}}>
                        {/* <CustomInput
                          formControlProps={{
                            fullWidth: true,
                            className: classes.customFormControlClasses,
                          }}
                          inputProps={{
                            startAdornment: (
                              <InputAdornment
                                position="start"
                                className={classes.inputAdornment}
                              >
                                <Face className={classes.inputAdornmentIcon} />
                              </InputAdornment>
                            ),
                            placeholder: "First Name...",
                          }}
                        /> */}
                         
                            <span style={{fontSize:"18px", marginTop:"100px;!important"}}>
                              Please enter your Email or mobile to send the changing password link
                            </span>
                          <br></br>
                          <br></br>
                          
                        <CustomInput style={{marginTop:"10px;!important"}}
                          formControlProps={{
                            fullWidth: true,
                            className: classes.customFormControlClasses,
                          }}
                          inputProps={{
                            startAdornment: (
                              <InputAdornment
                                position="start"
                                className={classes.inputAdornment}
                              >
                                <Email className={classes.inputAdornmentIcon} />
                              </InputAdornment>
                            ),
                            placeholder: "Email or Mobile...",
                          }}
                        />
                        <br></br>
                        <br></br>
                        
                        <div className={classes.textCenter}>
                          <Button round color="primary">
                           Send
                          </Button>
                        </div>
                      </form>
                    </GridItem>
                  </GridContainer>
                </CardBody>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
        <Footer
          content={
            <div>
              <div className={classes.left}>
                <List className={classes.list}>
                  <ListItem className={classes.inlineBlock}>
                    <a
                      href="https://www.creative-tim.com/?ref=njsmkp-signup"
                      target="_blank"
                      className={classes.block}
                    >
                      Creative Tim
                    </a>
                  </ListItem>
                  <ListItem className={classes.inlineBlock}>
                    <a
                      href="https://www.creative-tim.com/presentation?ref=njsmkp-signup"
                      target="_blank"
                      className={classes.block}
                    >
                      About us
                    </a>
                  </ListItem>
                  <ListItem className={classes.inlineBlock}>
                    <a
                      href="http://blog.creative-tim.com/?ref=njsmkp-signup"
                      className={classes.block}
                    >
                      Blog
                    </a>
                  </ListItem>
                  <ListItem className={classes.inlineBlock}>
                    <a
                      href="https://www.creative-tim.com/license?ref=njsmkp-signup"
                      target="_blank"
                      className={classes.block}
                    >
                      Licenses
                    </a>
                  </ListItem>
                </List>
              </div>
              <div className={classes.right}>
                &copy; {1900 + new Date().getYear()}  by{" "}
                <a
                  href="#"
                  target="_blank"
                  >
                  Build My Trips
                </a>{" "}
                
              </div>
            </div>
          }
        />
      </div>
    </div>
  );
}
