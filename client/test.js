const axios=require('axios');

const load=async()=>{
    const res=await axios.get("http://localhost:5000/api/battle/search");
    console.log(res.data.count);
}
load();