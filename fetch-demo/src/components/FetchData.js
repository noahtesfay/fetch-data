import React, {useEffect, useState} from "react";
import axios from 'axios';

 const FetchData=()=>{
   const [state, setState] =  useState({d: []});

   useEffect(()=>
   axios.get('https://jsonplaceholder.typicode.com/posts')
   .then(r=>setState({d: r.data}))
   .catch(e=>console.log(e.toString())),[])
    
   const res=state.d.length?state.d.map(v=><ul key={v.id} style={{
       listStyle: 'none'
   }}><li>{v.title}</li><li>{v.body}</li></ul>):"No Data";

    return(<div>
         <div>
             {res}
         </div>
    </div>)
};

export default FetchData;