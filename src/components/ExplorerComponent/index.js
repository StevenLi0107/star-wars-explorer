import { memo } from "react";
import { makeStyles, CircularProgress } from '@material-ui/core';
import PropTypes from 'prop-types';
import Header from "../Header";
import MainBody from './MainBody';
import { COMPONENT_CATEGORY, COMPONENT_SIZE } from "../../constants";
import ItemBody from "./ItemBody";
import SubItemBody from "./SubItemBody";

const useStyles = makeStyles(theme => ({
    compContainer: {
      margin:'8px 4px',
      width:COMPONENT_SIZE.width,
      height:COMPONENT_SIZE.height,
      display:'flex',
      flexDirection:'column',
      position:'relative',
    },
    mainBody:{
      display:'flex',
      flexDirection: 'row',
      backgroundColor:theme.palette.background.b1,
      padding: '16px 0px',
      width:'100%',
      height:'100%',
    },
    loadingContainer:{
      display:'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems:'center',
    },
    loadingIcon: {
      marginTop: '32px',
      color:'blue',
      width:'50px',
      height:'50px',
    },
    errorMessage: {
      marginTop: '32px',
      marginLeft: '32px',
      color:'red',
      fontSize:'14px',
      fontWeight: 500
    }
}));

function ExplorerComponent({title, componentCategory, handleMainData, handleSubData, displayedData, isLoading, errorMessage}) {
    const classes = useStyles();
    
    return(
      <div className={classes.compContainer}>
        <Header title={title}/>
        {isLoading ? 
        <div className={classes.loadingContainer}>
          <CircularProgress className={classes.loadingIcon}/> 
        </div>:
        <div className={classes.mainBody}>
          {errorMessage !== ''? 
            <div className={classes.errorMessage}>{errorMessage}</div>:
            <>
              {componentCategory === COMPONENT_CATEGORY.main && <MainBody handleButtonClick={handleMainData}/>}
              {componentCategory === COMPONENT_CATEGORY.item && <ItemBody displayedData={displayedData} handleItemClick={handleSubData}/>}
              {componentCategory === COMPONENT_CATEGORY.subItem && <SubItemBody displayedData={displayedData}/>}
            </>
          }
        </div>}
      </div>
    )
}

ExplorerComponent.propTypes = {
  title: PropTypes.string.isRequired,
  componentCategory: PropTypes.number.isRequired,
  handleMainData: PropTypes.func,
  handleSubData: PropTypes.func,
  displayedData: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.shape({})),
    PropTypes.shape({})
  ]),
  isLoading: PropTypes.bool,
  errorMessage: PropTypes.string
};

ExplorerComponent.defaultProps = {
  handleMainData: null,
  handleSubData: null,
  displayedData: null,
  isLoading: false,
  errorMessage: ''
}

export default memo(ExplorerComponent);