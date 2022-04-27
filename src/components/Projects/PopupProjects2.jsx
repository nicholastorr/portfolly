import React from "react";
import { ExpandMore } from "./PopupProjects";
import { StaticImage } from 'gatsby-plugin-image';
import CloseIcon from '@mui/icons-material/Close';
import './style.css';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Collapse from '@mui/material/Collapse';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';

const card = (
  <React.Fragment>
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Scrribble Stadium (FKA Story Squad)
      </Typography>
      <Typography variant="h5" component="div">
      A web app that turns young kids from “reluctant readers” into authors and illustrators in its fun world-building game by using small doses of screen time to maximize time spent as creators scribbling down original stories and drawings. Each week students then vote on their creations to see who wins the Scribble Stadium for the week.
      </Typography>
      <Typography variant="body2">
        <h3></h3>
        </Typography>
        <br /> 
        <a href="https://github.com/BloomTech-Labs/scribble-stadium-fe">Scribble Stadium FE</a> 
        <br />
        <a href="https://github.com/BloomTech-Labs/scribble-stadium-be">Scribble Stadium BE</a>
        <br />
        <a href="https://www.storysquad.education/">Home page for Info site</a>
        <br />
    </CardContent>
  </React.Fragment>
);

 
const Popup2 = props => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="popup-box">
      <div className="box">
        <CloseIcon className="close-icon" onClick={props.handleClose} />
        <h1>Scribble Stadium</h1>
        <div style= {{display: "flex", flexDirection: "row", width: "100%"}}>
          <StaticImage src="../../images/scribble-stadium.jpg" style={{width: "50%"}}/>
          <Box sx={{ minWidth: 275, width: "50%" }}>
            <Card variant="outlined">{card}</Card>
            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon /> <h5>Tech Stack</h5>
            </ExpandMore>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
        <Box sx={{ 
          '& button': { m: 1 },
          fontSize: "50px" }}>
      <div>
      <Button style={{fontSize: "30px"}} variant="outlined" size="large">
          <a href="https://reactjs.org/">React</a>
        </Button>
        <Button style={{fontSize: "30px"}} variant="outlined" size="large">
          <a href="https://ant.design/">Ant Design</a>
        </Button>
        <Button style={{fontSize: "30px"}} variant="outlined" size="large">
          <a href="https://plotly.com/graphing-libraries/">React Plotly</a>
        </Button>
      </div>
      <div>
      <Button style={{fontSize: "30px"}} variant="outlined" size="large">
          <a href="https://redux.js.org/">Redux</a>
        </Button>
        <Button style={{fontSize: "30px"}} variant="outlined" size="large">
          <a href="https://nodejs.org/en/about/">Node JS</a>
        </Button>
        <Button style={{fontSize: "30px"}} variant="outlined" size="large">
          <a href="https://expressjs.com/">Express JS</a>
        </Button>
      </div>
    </Box>
        </CardContent>
        </Collapse>
          </Box>

        </div>
      </div>
    </div>
  );
};
 
export default Popup2;