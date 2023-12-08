import React from "react";
import makeStyles from "@mui/styles/makeStyles";

// @mui/icons-material
import Chat from "@mui/icons-material/Chat";
import VerifiedUser from "@mui/icons-material/VerifiedUser";
import Fingerprint from "@mui/icons-material/Fingerprint";
// core components
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import InfoArea from "/components/InfoArea/InfoArea.js";

import productStyle from "/styles/jss/nextjs-material-kit-pro/pages/landingPageSections/productStyle.js";
import { SaveSharp } from '@mui/icons-material';

const useStyles = makeStyles(productStyle);

export default function SectionProduct() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justifyContent="center">
        <GridItem xs={12} sm={8} md={8}>
          <h2 className={classes.title}>What we are offering</h2>
          <h5 className={classes.description}>
            We have crafted an application for you that reduces all the burdens and efforts from you to make plans for your travels.
            Our AI engine analyzes your interests and harnesses the most precise itineraries for you.
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={4} md={4}>
            <InfoArea
              title="Personalized Recommendation"
              description="Our AI will analyze your choices, interests and will predict better recommendations for you."
              icon={Chat}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={4} md={4}>
            <InfoArea
              title="Verified Deals"
              description="We will provide you up to date and verified deals, so that you can focus on item selection and we will try to reduce your cost."
              icon={VerifiedUser}
              iconColor="success"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={4} md={4}>
            <InfoArea
              title="Save Recommendations"
              description="You can save your recommendations and share with friends if you like our recommendations"
              icon={SaveSharp}
              iconColor="primary"
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
