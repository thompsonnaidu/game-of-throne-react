const mongoose=require('mongoose');

const BattleSchema= mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    year:{
        type:Number,
        required:true
    },
    battle_number:{
        type:String,
        required:true,        
        unique:true
    },
    attacker_king: { type: String},
    defender_king: { type: String},
    attacker_1: { type: String},
    attacker_2: { type: String},
    attacker_3: { type: String},
    attacker_4: { type: String},
    defender_1:{ type: String},
    defender_2:{ type: String},
    defender_3:{ type: String},
    defender_4:{ type: String},
    attacker_outcome:{ type: String},
    battle_type:{ type: String},
    major_death:{ type: Number},    
    major_capture:{ type: Number},
    attacker_size:{ type: Number},
    defender_size:{ type: Number},
    attacker_commander:{ type: [String]},
    defender_commander:{ type: [String]},
    summer:{ type: Number},
    location:{ type: String},
    region:{ type: String},
    note:{ type: String}
})

module.exports=mongoose.model("battle",BattleSchema)