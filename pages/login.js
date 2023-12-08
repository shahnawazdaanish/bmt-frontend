/*eslint-disable*/
import React, { useState } from "react";
import makeStyles from "@mui/styles/makeStyles";
import InputAdornment from "@mui/material/InputAdornment";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import IconButton from "@mui/material/IconButton";
import Icon from "@mui/material/Icon";
// @mui/icons-material
import Email from "@mui/icons-material/Email";
import Favorite from "@mui/icons-material/Favorite";
import Face from "@mui/icons-material/Face";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
// core components
import Header from "/components/Header/Header.js";
import HeaderLinks from "/components/Header/HeaderLinks.js";
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import Button from "/components/CustomButtons/Button.js";
import Card from "/components/Card/Card.js";
import CardBody from "/components/Card/CardBody.js";
import CardHeader from "/components/Card/CardHeader.js";
import CustomInput from "/components/CustomInput/CustomInput.js";
import loginPageStyle from "/styles/jss/nextjs-material-kit-pro/pages/loginPageStyle.js";
import { useRouter } from "next/router";
import Footer from './Footer';

const useStyles = makeStyles(loginPageStyle);

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });
  const classes = useStyles();
  const router = useRouter();

  const handleSignUp = async (e) => {
    router.push('signup')
  }

  const handleClickLogin = async (e) => {
    e.preventDefault();

    const submitData = {"email": e.target[0].value, "password": e.target[1].value}
    router.push("/profile");

    /*try {
      const res = await fetch('http://api.buildmytrips.online/api/v1/login',{
        method: 'POST',
        body: JSON.stringify(submitData),
        headers: {
          'content-type': 'application/json'
        }
      })
      console.log(res)
      if(res.ok){
        router.push("/signup");
      }else{
        console.log("Oops! Something is wrong.")
      }
    } catch (error) {
      console.log(error)
    }*/
  };

  const handleClickforgetpassword = (e) => {
    e.preventDefault();
    router.push("/forgetpassword");
  };

  return (
    <div>
      <Header
        absolute
        color="transparent"
        brand="Build My Trips"
        links={<HeaderLinks dropdownHoverColor="info" />}
      />
      <div
        className={classes.pageHeader}
        style={{
          backgroundImage: "url('/img/bg7.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "top center",
        }}
      >
        <div className={classes.container}>
          <GridContainer justifyContent="center">
            <GridItem xs={12} sm={8} md={4}>
              <Card style={{ opacity: "0.9" }}>
                <form className={classes.form} onSubmit={handleClickLogin}>
                  <CardHeader
                    color="primary"
                    signup
                    className={classes.cardHeader}
                  >
                    <h4 className={classes.cardTitle}>Login</h4>
                  </CardHeader>
                  <p className={classes.description + " " + classes.textCenter}></p>
                  <CardBody signup>
                    <CustomInput
                      id="email"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        name:"email",
                        placeholder: "Email or Mobile...",
                        type: "email",
                        startAdornment: (
                          <InputAdornment position="start">
                            <Email className={classes.inputIconsColor} />
                          </InputAdornment>
                        ),
                      }}
                    />
                    <CustomInput
                      id="pass"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        name: "password",
                        placeholder: "Password",
                        type: showPassword ? "text" : "password",
                        startAdornment: (
                          <InputAdornment position="start">
                            <Icon className={classes.inputIconsColor}>
                              lock_utline
                            </Icon>
                          </InputAdornment>
                        ),
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              onClick={() => setShowPassword(!showPassword)}
                              edge="end"
                              style={{ fontSize: "16px", color: "#888" }}
                            >
                              {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                          </InputAdornment>
                        ),
                        autoComplete: "off",
                      }}
                    />
                  </CardBody>
                  <div className={classes.textCenter}>
                    <Button type="submit" simple color="primary" size="lg">
                      Login
                    </Button>
                  </div>
                  <div className={classes.textCenter} style={{ marginTop: -25 }}>
                    <Button simple color="primary" size="lg" style={{ color: "#888" }} onClick={handleClickforgetpassword}>
                      Forgot password?
                    </Button>
                  </div>
                  <hr style={{ width: 300 }}></hr>
                  <div className={classes.textCenter}>
                    <Button
                      simple
                      color="primary"
                      size="lg"
                      style={{ color: "#000" }}
                      onClick={handleSignUp}
                    >
                      Sign Up
                    </Button>
                  </div>
                </form>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
        <Footer className={classes.footer}/>
      </div>
    </div>
  );
}
