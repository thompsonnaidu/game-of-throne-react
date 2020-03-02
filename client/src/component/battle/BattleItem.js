import React from 'react'
import '../../App.css'
import PropTypes from 'prop-types'
import GOT from '../../image/main.jpg'
import Balon from '../../image/avatar/Balon.png'
let BattleItem=({battle_info})=> {

    
    return (
        <div className="col-xm-12 col-md-6 col-lg-4 pt-5">
            <div className="card">
                <div className="card-img-top" className="got-image"> 
                    <img src={GOT} alt="" className="main-image"></img>
                    <div className="cs-overlay"> 
                            {/* <div className="row">
                                <div className="col-md-6">
                                    <img className="rounded-circle" data-toggle="tooltip" title={battle_info.attacker_king} src={Balon} width={'110 px'}></img><br/>
                                    
                                </div>
                                <div className="col-md-6">
                                    <img className="rounded-circle" data-toggle="tooltip" title={battle_info.defender_king} src={Balon} width={'110 px'}></img><br/>
                                    <span> </span>
                                </div>
                            </div>                     */}
                    </div>
                    <div className="cs-location">
                        <span><i className="fas fa-map-marker-alt"></i> {battle_info.location}</span> <br/>
                        <div ><i className="far fa-calendar"></i> {battle_info.year}</div>
                    </div>
                    <div className="cs-battle-number">
                        <span> {battle_info.battle_number}</span>
                    </div>
                    
                </div>
                
                <div className="card-body">
                        <h5 className="card-title">{battle_info.name}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">{battle_info.attacker_king?battle_info.attacker_king:"N/A"} vs {battle_info.defender_king?battle_info.defender_king:"N/A"}</h6>
                        <p className="card-text">
                            <div>
                               <span>
                                    <i className="fas fa-users"></i> {battle_info.attacker_commander && battle_info.attacker_commander!==null && battle_info.attacker_commander.join(',')}
                               </span> 
                            </div>
                            <div>
                                <span>
                                    <i className="fas fa-users" data-toggle="tooltip" data-placement="right"></i> {battle_info.defender_commander && battle_info.defender_commander!==null && battle_info.defender_commander.join(',')}
                                </span>
                            </div>
                            
                            <span><i className="fas fa-trophy"></i> </span>{battle_info.attacker_outcome && battle_info.attacker_outcome==="win"?(battle_info.attacker_king):(battle_info.defender_king)}</p>
                        <a href="#" className="btn btn-primary">Know more</a> 
                </div>
            </div>
        </div>
    )
}

BattleItem.propTypes = {
    battle_info:PropTypes.object.isRequired
}

export default BattleItem

