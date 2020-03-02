let ar=['test','tes','see','ssettsdf'];
let k= ar.filter((a)=>{
         const regex=new RegExp(`se`,'gi');
         console.log(a);
         return a.match(regex);
    });
    console.log(k);