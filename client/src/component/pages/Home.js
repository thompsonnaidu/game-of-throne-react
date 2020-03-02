import React,{useContext} from 'react';
import BattleContext from '../context/battle/battleContext';
import AutoTextBox from '../layout/AutoTextBox/AutoTextBox';
import Battle from '../battle/Battle';
const Home=() => {

    const battleContext= useContext(BattleContext);
    const {suggestion}=battleContext;
    
    return (
        <div>
            <AutoTextBox location={suggestion}/>
            <Battle/>
        </div>
    )
}

// Home.propTypes={
//     search_data:PropTypes.object.isRequired
// }
export default Home
