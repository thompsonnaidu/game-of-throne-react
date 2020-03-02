import React,{useContext,useEffect, Fragment} from 'react';

import BattleContext from '../context/battle/battleContext';
import BattleItem from '../battle/BattleItem';
const Battle = () => {

    const battleContext= useContext(BattleContext);
    const {battles,getSearchData,suggestion}=battleContext;
    
    useEffect(()=>{
        getSearchData({
            king:null,location:null,battle_type:null
        });
        console.log(battles);
        // eslint-disable-next-line
    },[]);

    return (
        <div className="row">
            {battles && battles!==null? (
                suggestion && suggestion !==null ? suggestion.map((battle)=>{
                    return (
                        <BattleItem key={battle._id} battle_info={battle}></BattleItem>
                    )
                }):battles.map(battle=>{
                    return  (
                        <BattleItem key={battle._id} battle_info={battle}></BattleItem>
                    )
                })
            ):(<div/>)}
        </div>
    )
}


export default Battle
