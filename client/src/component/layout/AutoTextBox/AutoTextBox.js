import React,{useContext, useState} from 'react'
import PropTypes from 'prop-types'
import BattleContext from '../../context/battle/battleContext'
const AutoTextBox = () => {
    //let location_list=(location && location!=null)?location:[];
    let battleContext=useContext(BattleContext);
    let {getFilteredLocation,clearFilteredLocation,getFilteredData,filtered_location:location_list}=battleContext;
    const [text,setText]=useState('');
    //on location changed
    const onTextChanged=(e)=>{
        setText(e.target.value);
        //filter data
        if(e.target.value.length >0){
            let search_location=e.target.value.replace(/[^a-zA-Z0-9 ]/g, '');
            getFilteredLocation(search_location);
            getFilteredData(search_location);
        }else if(e.target.value.length === 0){
            clearFilteredLocation()
        }
    }

    //set current on select
    const onLocationSelect=(loc)=>{
        //set the current to loc and clear the suggest
        setText(loc);        
        getFilteredData(loc);
        clearFilteredLocation();

    }
    console.log(`this is contact list-->`,location_list);
    return (
        
            <form>
                <div className="autocomplete form-group">
                    
                    <input type="text" placeholder="search by location" className="form-control" value={text} onChange={onTextChanged}></input>
                    { location_list && location_list.length > 0 && (
                        <div className="list-group">
                            {location_list.map((loc)=>{
                                return (<div key={"location_"+loc} class="list-group-item" onClick={()=>{onLocationSelect(loc)}}>{loc}<input type="hidden"  value={loc}></input></div>)
                            })}
                            
                        </div>
                        )

                    }
                </div>
                
            </form>
     
    )
}

AutoTextBox.propTypes = {
    location:PropTypes.array,
}

export default AutoTextBox
