/*eslint-disable*/
import React from 'react';
import makeStyles from '@mui/styles/makeStyles';
import InputAdornment from '@mui/material/InputAdornment';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Icon from '@mui/material/Icon';
// @mui/icons-material
import Email from '@mui/icons-material/Email';
import Check from '@mui/icons-material/Check';
// core components
import Header from '/components/Header/Header.js';
import HeaderLinks from '/components/Header/HeaderLinks.js';
import Footer from './Footer';
import GridContainer from '/components/Grid/GridContainer.js';
import GridItem from '/components/Grid/GridItem.js';
import Button from '/components/CustomButtons/Button.js';
import Card from '/components/Card/Card.js';
import CardBody from '/components/Card/CardBody.js';
import CustomInput from '/components/CustomInput/CustomInput.js';

import signupPageStyle from '/styles/jss/nextjs-material-kit-pro/pages/signupPageStyle.js';
import { useRouter } from 'next/router';

const useStyles = makeStyles(signupPageStyle);

export default function SignUpPage({ ...rest }) {
  const router = useRouter();
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
  const handleSubmit = (e) => {
    e.preventDefault();

    router.push('/login')
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
                <h2 className={classes.cardTitle}>SIGN UP</h2>
                <CardBody>
                  <GridContainer justifyContent="center">
                    <GridItem xs={12} sm={5} md={5} style={{backgroundImage:"url('/img/signup-rightsection.jpg')", marginRight:"50px", borderRadius:"5px" }}>
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
                      </div>*/}
                      <form className={classes.form} onSubmit={handleSubmit}>
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
                        <CustomInput
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
                            placeholder: "Email...",
                          }}
                        />
                        <CustomInput
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
                                <Icon className={classes.inputAdornmentIcon}>
                                  lock_outline
                                </Icon>
                              </InputAdornment>
                            ),
                            placeholder: "Password...",
                          }}
                        />
                        <CustomInput
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
                                <Icon className={classes.inputAdornmentIcon}>
                                  lock_outline
                                </Icon>
                              </InputAdornment>
                            ),
                            placeholder: "Repeat Password...",
                          }}
                        />
                        <FormControlLabel
                          classes={{
                            label: classes.label,
                          }}
                          control={
                            <Checkbox
                              tabIndex={-1}
                              onClick={() => handleToggle(1)}
                              checkedIcon={
                                <Check className={classes.checkedIcon} />
                              }
                              icon={<Check className={classes.uncheckedIcon} />}
                              classes={{
                                checked: classes.checked,
                                root: classes.checkRoot,
                              }}
                              checked={checked.indexOf(1) !== -1 ? true : false}
                            />
                          }
                          label={
                            <span>
                              I agree to the{" "}
                              <a href="#pablo">terms and conditions</a>.
                            </span>
                          }
                        />
                        <div className={classes.textCenter}>
                          <Button type="submit" round color="primary">
                           Register
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
        <Footer className={classes.footer}/>
      </div>
    </div>
  );
}
