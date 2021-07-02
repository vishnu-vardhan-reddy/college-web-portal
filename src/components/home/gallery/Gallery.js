import React from "react";
import "./Gallery.css";
import image1 from "./image1.jpg";
import image2 from "./image2.jpg";
import image3 from "./image3.jpg";
import image4 from "./image4.jpg";
import Button from "@material-ui/core/Button";
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import purple from "@material-ui/core/colors/purple";
import SendIcon from "@material-ui/icons/Send";
import AwesomeSlider from "react-awesome-slider";
import AwsSliderStyles from "react-awesome-slider/dist/styles.css";
import "react-awesome-slider/dist/custom-animations/cube-animation.css";
import AnimationStyles from "react-awesome-slider/dist/custom-animations/fall-animation.css";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import { IconButton } from "@material-ui/core";

const AutoplaySlider = withAutoplay(AwesomeSlider);

const theme = createMuiTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: "#f77a23",
    },
  },
});

function Gallery() {
  return (
    <div className="gallery">
      <div className="galleryHeader">
        <div></div>
        <h1>Gallery</h1>
      </div>
      <div className="galleryContainer">
        <AutoplaySlider
          cssModule={AwsSliderStyles}
          animation="cubeAnimation"
          play={true}
          cancelOnInteraction={false} // should stop playing on user interaction
          interval={6000}
          className="awesome__slider"
          mobileTouch={true}
          buttons={true}
        >
          <div data-src={image1} />
          <div data-src={image2} />
          <div data-src={image3} />
        </AutoplaySlider>
        <AutoplaySlider
          cssModule={AwsSliderStyles}
          animation="cubeAnimation"
          play={true}
          cancelOnInteraction={false} // should stop playing on user interaction
          interval={6000}
          className="awesome__slider"
          mobileTouch={true}
          buttons={true}
        >
          <div data-src={image1} />
          <div data-src={image2} />
          <div data-src={image3} />
        </AutoplaySlider>
        <ThemeProvider theme={theme}>
          <Button
            variant="outlined"
            color="secondary"
            endIcon={<SendIcon />}
            className="view__more"
          >
            VIEW ALL
          </Button>
        </ThemeProvider>
        {/* <div className="galleryHeader__right">
          <p>See More</p>
          <IconButton>
            <ArrowRightAltIcon />
          </IconButton>
        </div> */}
      </div>
    </div>
  );
}

export default Gallery;
