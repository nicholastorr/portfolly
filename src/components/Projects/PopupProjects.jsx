import React from "react";
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

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const card = (
  <React.Fragment>
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Mbs-Standoffs
      </Typography>
      <Typography variant="h5" component="div">

      </Typography>
      <Typography variant="body2">
        <h3>Large scale e-commerce site containing over 60k unique products that averages over 7k sales a month. Also a part of the HTM-MBS suite of sites that are built on top of the same Drupal CMS platform.
        Other sites built include</h3>
        </Typography>
        <br /> 
        <a>https://mbs-signsupply.com/</a> 
        <br />
        <a>https://mbs-hanging-systems.com/</a>
        <br />
    </CardContent>
    <CardActions>
      <Button size="small">Learn More</Button>
    </CardActions>
  </React.Fragment>
);

 
const Popup = props => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="popup-box">
      <div className="box">
        <CloseIcon className="close-icon" onClick={props.handleClose} />
        <h1>HTM MBS</h1>
        <div style= {{display: "flex", flexDirection: "row", width: "100%"}}>
          <StaticImage src="../../images/mbs-standoffs-2.png" style={{width: "50%"}}/>
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
          Small
        </Button>
        <Button style={{fontSize: "30px"}} variant="outlined" size="large">
          Medium
        </Button>
        <Button style={{fontSize: "30px"}} variant="outlined" size="large">
          Large
        </Button>
      </div>
      <div>
      <Button style={{fontSize: "30px"}} variant="outlined" size="large">
          Small
        </Button>
        <Button style={{fontSize: "30px"}} variant="outlined" size="large">
          Medium
        </Button>
        <Button style={{fontSize: "30px"}} variant="outlined" size="large">
          Large
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
 
export default Popup;