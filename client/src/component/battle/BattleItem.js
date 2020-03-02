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
                </div>
                
                <div className="card-body">
                        <h5 className="card-title">{battle_info.name}</h5>
                        <p className="card-text"><span><i className="fas fa-crown"></i> </span>{battle_info.attacker_outcome && battle_info.attacker_outcome==="win"?(battle_info.attacker_king):(battle_info.defender_king)} {battle_info.attacker_commander && (
                battle_info.attacker_commander.map((commander,index)=>{
                    return (<li key={index}>{commander}</li>);
                })
                )}</p>
                        <a href="#" class="btn btn-primary">Know more</a> {battle_info.attacker_outcome}
                </div>
            </div>
        </div>
    )
}

BattleItem.propTypes = {
    battle_info:PropTypes.object.isRequired
}

export default BattleItem

