import { memo } from "react";
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';
import {AccountCircle as AccountIcon} from '@material-ui/icons';

const useStyles = makeStyles(theme =>({
    mainContainer:{
        background:'white',
        width:'100%',
        height:'100%',
        display:'flex',
        flexDirection:'column',
    },
    itemStyle:{
        display:'flex',
        alignItems:'center',
        padding:'8px 16px',
        cursor: 'pointer'
    },
    iconStyle:{
        color:'#BDBDBD',
        width:'32px',
        height:'32px'
    },
    itemTitleStyle:{
        fontColor:'black',
        fontSize:'16px',
        fontWeight: 500,
        lineWeight: '20px',
        marginLeft:'16px'
    }
  }));

function ItemBody({displayedData, handleItemClick}) {
    const classes = useStyles();
    return (<div className={classes.mainContainer}>
        {displayedData.map((displayItem, index) => 
        <div key={displayItem.name} className={classes.itemStyle} onClick={() => handleItemClick(index)}>
            <AccountIcon className={classes.iconStyle}/>
            <div className={classes.itemTitleStyle}>{displayItem.name}</div>
        </div>)}
    </div>);
};

ItemBody.propTypes = {
    displayedData: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    handleItemClick: PropTypes.func.isRequired
};

export default memo(ItemBody);