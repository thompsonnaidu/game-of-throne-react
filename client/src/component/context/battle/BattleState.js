import React,{useReducer} from 'react'
import battleReducer from './battleReducer';
import battleContext from './battleContext';
import axios from 'axios';
import { GET_BATTLES,SEARCH_BATTLE,SET_CURRENT,GET_LOCATION ,GET_FILTER_LOCATION,CLEAR_FILTER_LOCATION} from '../types';

const BattleState = props => {

    const initialState={
        battles:null,
        current:null,
        suggestion:null,
        error:null,
        filtered_location:[],
        location:[]
    }

    const [state, dispatch] = useReducer(battleReducer, initialState);
    
    //get all location
    const getAllLocation= async()=>{
        const res=await axios.get(`/api/battle/list`);
        if(res.data && res.data!==null){
            dispatch({
                type:GET_LOCATION,
                payload:res.data
            })
        }
    }

    const getFilteredLocation=(filtered_location)=>{
        dispatch({
            type:GET_FILTER_LOCATION,
            payload:filtered_location
        })
    }

    const clearFilteredLocation=()=>{
        dispatch({
            type:CLEAR_FILTER_LOCATION
        })
    }
    //get all battle
    
    
    //get search battle list(autocomplete)
    const getSearchData=async (search_data)=>{
        let {king,location,battle_type}=search_data;
        let search_param='?';
        //setting the get para details
        if(king && king!=null && king!==""){
            search_param=`${search_param}king=${king}&`;
        }
        if(location && location!=null && location!==""){
            search_param=`${search_param}location=${location}&`;
        }
        if(battle_type && battle_type!=null && battle_type!==""){
            search_param=`${search_param}type=${battle_type}&`;
        }
        
        const res=await axios.get(`/api/battle/search${search_param}`);
        console.log(`/api/battle/search${search_param}`,res.data);
        console.log(search_data);
        if(res.data && res.data.battles && res.data.battles!=null && res.data.battles.length >0){
            dispatch({
                type:GET_BATTLES,
                payload:res.data.battles
            })
        }
        
        getAllLocation(); 
        
    }

    //set the selected battle field
    const setCurrentBattle=(battle)=>{
        if(battle !==null){
            dispatch({
                type:SET_CURRENT,
                payload:battle
            })
        }
    }

    //get filtered data
    const getFilteredData=(search)=>{
        
        if(search !== null && state.battles!==null && state.battles.length>0){
            
            dispatch({
                type:SEARCH_BATTLE,
                payload:search
            })
        }

    }

    return (<battleContext.Provider value={
        {
            battles:state.battles,
            suggestion:state.suggestion,
            filtered_location:state.filtered_location,
            getSearchData,
            setCurrentBattle,
            getFilteredData,
            getAllLocation,
            getFilteredLocation,
            clearFilteredLocation
        }
    }>
        {props.children}
    </battleContext.Provider>
    )
}

export default BattleState
