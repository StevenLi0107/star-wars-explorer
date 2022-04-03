import { useEffect, useReducer, useCallback} from 'react';
import Axios from 'axios';
import { makeStyles, MuiThemeProvider } from '@material-ui/core';

import ExplorerComponent from './components/ExplorerComponent';
import { stateReducer } from './context/reducer';
import { COMPONENT_CATEGORY, DATA_URL, APP_STATE, BUTTON_NAME, INITIAL_STATE } from './constants';
import { theme } from './theme/theme';

const useStyles = makeStyles({
  container: {
    margin:'8px',
    display:'flex',
    flexDirection:'row',
  },
});

function App() {
  const classes = useStyles();
  const [state, dispatch] = useReducer(stateReducer, INITIAL_STATE);
  const { totalData, mainData, subData, mainDataTitle, errorMessage } = state;

  useEffect(() =>{
    async function fetchData() {
      try {
        const responseData = await Promise.all(BUTTON_NAME.map(item => Axios.get(`${DATA_URL}${item.id}`)));
        const totalData = responseData.reduce((result, responseItem, index) =>  ({ ...result,
            [BUTTON_NAME[index].id]:responseItem.data.results
          }), {})
        dispatch({ type: APP_STATE.setTotalData, totalData});
      } catch(err) {
        console.log('error ->', `${err}`);
        dispatch({ type: APP_STATE.setErrorState, mainData:null, errorMessage:`${err.message}. Please check network.`});
      }
    }
    fetchData();
  }, []);

  const handleMainData = useCallback((selectedItem) => {
      dispatch({ type: APP_STATE.setMainData, mainData:totalData[selectedItem.id], mainDataTitle: selectedItem.name});
  }, [totalData]);

  const handleSubData = useCallback((dataIndex) => {
    dispatch({ type: APP_STATE.setSubData, subData:mainData[dataIndex]});
  }, [mainData]);

  return (
    <MuiThemeProvider theme={theme}>
      <div className={classes.container}>
        <ExplorerComponent 
          title="Star Wars Explorer" 
          componentCategory={COMPONENT_CATEGORY.main} 
          handleMainData={handleMainData} 
          isLoading={totalData === null && errorMessage === ''}
          errorMessage={errorMessage}
        />
        {mainData && <ExplorerComponent 
          title={mainDataTitle}
          componentCategory={COMPONENT_CATEGORY.item} 
          handleSubData={handleSubData} 
          displayData={mainData}/>}
        {subData && <ExplorerComponent 
          title={mainDataTitle}
          componentCategory={COMPONENT_CATEGORY.subItem} 
          displayData={subData}/>}
      </div>
    </MuiThemeProvider>
  );
}

export default App;
