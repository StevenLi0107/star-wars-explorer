import { memo, useMemo } from "react";
import {PropTypes} from 'prop-types';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme =>({
    subItemContainer:{
        margin:'0px 8px 0px 8px',
        background:'white',
        width:'calc(100% - 48px)',
        height:'100%',
        display:'flex',
        flexDirection:'column',
        boxShadow: `2px 2px 2px ${theme.palette.primary.text3}`,
        padding:'8px 16px 0px 16px'
    },
    title:{
        fontColor:'black',
        fontSize:'32px',
        fontWeight: 500,
        lineWeight: '40px',
    },
    itemGroup:{
        width:'100%',
        height:'569px',
        overflowY:'auto'
    },
    itemContainer:{
        display:'flex',
        flexDirection:'column',
        padding:'8px 0px',
        borderBottom: `1px dashed ${theme.palette.primary.text3}`
    },
    itemContent:{
        color:theme.palette.primary.text3,
        fontSize:'14px',
        fontWeight: 500,
        lineWeight: '18px',
    }
  }));

const getName = (key) => {
    const valueArray = key.split('_').map(item => item[0].toUpperCase() + item.slice(1, item.length));
    return valueArray.join(' ') ;
}

const getValue = (value) => {
    return value;
}

function SubItemBody({displayData}) {
    const classes = useStyles();

    const componentData = useMemo(() => {
        const dataKeys = Object.keys(displayData);
        const dataValues = Object.values(displayData);
        const itemData = dataKeys.reduce((result, keyItem, index) => {
            if(!Array.isArray(dataValues[index]))
                return [ ...result,
                    {
                        key: keyItem,
                        value : dataValues[index]
                    }
                ]; 
            else
                return [...result];
        }, []);
        return itemData;
    }, [displayData])
    
    return (
        <div className={classes.subItemContainer}>
            <div className={classes.title}>{displayData.name}</div>
            <div className={classes.itemGroup}>
                {componentData.map(({key, value}) => 
                <div key={key} className={classes.itemContainer}>
                    <div className={classes.itemContent}>{getName(key)}</div>
                    <div className={classes.itemContent}>{getValue(value)}</div>
                </div>)}
            </div>
        </div>
    );
};

SubItemBody.propTypes = {
    displayData: PropTypes.shape({}).isRequired
};

export default memo(SubItemBody);