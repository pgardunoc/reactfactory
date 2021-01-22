import './App.css';
import React from 'react';
import RenderComponent from './RenderComponent';
import { Box } from '@material-ui/core';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.eventHandler = this.eventHandler.bind(this);
  }

  eventHandler(event) {
    event.preventDefault();
    console.log(event.target.id);
  }

  render() {
    return (
      <div>
      <Box bgcolor="white" color="primary.contrastText" flexDirection="column" alignItems="stretch" padding={5} onClick={this.eventHandler}>
        {RenderComponent()}
      </Box>  
      </div>
    );
  }
  
}

export default App;


/*
<Box bgcolor="white" color="primary.contrastText" flexDirection="column" alignItems="stretch" padding={1}>
        <Button variant="contained" color="primary">My Button</Button>
        <br/>
        <Checkbox
          value="checkedA"
          inputProps={{ 'aria-label': 'Checkbox A' }}
        />
        <br/>
        <FormControl component="fieldset">
          <FormLabel component="legend">Gender</FormLabel>
          <RadioGroup aria-label="gender" name="gender1" value="group" >
            <FormControlLabel value="female" control={<Radio />} label="Female" />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
            <FormControlLabel value="disabled" disabled control={<Radio />} label="(Disabled option)" />
          </RadioGroup>
        </FormControl>
        <br/><br/>
        <Slider
        defaultValue={30}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        step={10}
        marks
        min={10}
        max={110}
      />
      <br/><br/>
      <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          AuthenticID
        </Typography>
        <Typography variant="h5" component="h2">
          Sample Card
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          more
        </Typography>
        <Typography variant="body2" component="p">
          This is a sample of how to use 
          <br />
          {'"cards"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
      </Box>      
      */