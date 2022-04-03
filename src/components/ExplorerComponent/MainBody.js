import { memo } from "react";
import {PropTypes} from 'prop-types';
import {Button, makeStyles} from '@material-ui/core';
import { BUTTON_NAME } from "../../constants";

const useStyles = makeStyles(theme => ({
  mainBody:{
    width:'100%',
    height:'100%',
    display:'flex',
    flexDirection:'column',
  },
  button: {
    backgroundColor:theme.palette.background.main,
    color: theme.palette.primary.main,
    margin:'0px 0px 16px 16px',
    width:'100px',
    height:'32px',
    borderRadius:'0px',
    '&:hover':{
      backgroundColor:theme.palette.background.b2,
    }
  },
}));

function MainBody({handleButtonClick}) {
  const classes = useStyles();
    return(
      <div className={classes.mainBody}>
        {BUTTON_NAME.map(item => 
          <Button 
            key={item.id}
            variant="contained" 
            className={classes.button} 
            onClick={() => handleButtonClick(item)}
          >
            {item.name}
          </Button>)}
      </div>
    )
}

MainBody.propTypes = {
  handleButtonClick: PropTypes.func.isRequired
};

export default memo(MainBody);