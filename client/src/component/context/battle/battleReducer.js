import {
GET_BATTLES,
SEARCH_BATTLE,
SET_CURRENT,
GET_LOCATION,
GET_FILTER_LOCATION,
CLEAR_FILTER_LOCATION
} from '../types';

export default(state,action)=>{

    switch(action.type){
        case GET_BATTLES:
            console.log('get_battles',action.payload);
            return {
                ...state,
                battles:action.payload,
                loading:false
            };

        case SEARCH_BATTLE:
            return {
                ...state,
                suggestion:state.battles.filter(battle=>{
                    const regex=new RegExp(`${action.payload}`,'gi');
                    if(battle.location)
                        return battle.location.match(regex);
                }),
                loading:false
            }
        case SET_CURRENT:
            return {
                ...state,
                currrent:action.payload
            }
        case GET_LOCATION:
            return {
                ...state,
                location:action.payload
            }

        case GET_FILTER_LOCATION:
            return {
                    ...state,
                    filtered_location:state.location.filter((loc)=>{
                        const regex=new RegExp(`${action.payload}`,'gi');
                        return loc.match(regex);
                    })
                }
         
        case CLEAR_FILTER_LOCATION:
            return {
                    ...state,
                    filtered_location:[]
                }
         
         
        default: return state;
    }
}