export const DATA_URL = "https://swapi.dev/api/";
export const APP_STATE = {
    setTotalData: 'SET_TOTAL_DATA_STATE',
    setMainData:'SET_MAIN_DATA_STATE',
    setSubData: 'SET_MAIN_SUB_DATA_STATE',
    setErrorState: 'SET_ERROR_STATE',
};

export const INITIAL_STATE = {
    totalData: null,
    mainDataTitle:'',
    mainData:null,
    subData:null,
    errorMessage: ''
}

export const COMPONENT_CATEGORY = {
  main: 0,
  item: 1,
  subItem: 2
};
export const COMPONENT_SIZE = {
    width: '300px',
    height:'700px'
};
export const FORE_COLOR = '#2C3EF6';
export const BACK_COLOR = '#E0E0E0';
export const BUTTON_NAME = [
    {id:'people', name:'People'}, 
    {id:'starships', name:'Movies'},
    {id:'planets', name:'Planets'}
];