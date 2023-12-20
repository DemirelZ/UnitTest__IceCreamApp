
import { useEffect, useState } from "react";
import Card from "../Card";
import axios from "axios";

const Scoops = () => {

    const [scoopsData, setScoopsData] = useState([])
    const [basket, setBasket] = useState([])

    useEffect(()=>{

        axios.get("http://localhost:3026/scoops").then((res)=>setScoopsData(res.data)).catch((err)=>console.log(err.message))

    },[]);

    

  return (
    <div className="container">
      <h1>Dondurma Çeşitleri</h1>
      <p>Tanesi 20 &#8378; </p>
      <h2 data-testId='toplam' >Çeşitler ücreti {basket.length * 20} &#8378; </h2>

      <div className="row gap-5 justify-content-between" >
        {scoopsData?.map((scoop)=> (
           <Card scoop={scoop} setBasket={setBasket} basket={basket} /> 
        ))}
      </div>
        
    </div>
  );
};

export default Scoops;
