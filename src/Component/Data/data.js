import React, { useState } from "react";
import Slide from "../Slideshow/slide";
import { addcart } from "../Redux/routing";
import './data.css';
import {useDispatch} from "react-redux";
import Mydata from "./alldata";
import { useHistory } from "react-router-dom";
function Food() {
    
    const [food,allfood]=useState(Mydata)
    const dispatch = useDispatch();
    function india(item) {
        const india = allfood.filter((e) => e.key === item.key)
        food(india);
    }
    function china(item) {
        const china = allfood.filter((e) => e.key === item.key)
        food(china);
    }
    function wes(item) {
        const wes = allfood.filter((e) => e.key === item)
        food(wes);
    }
    function veg(item) {
        const veg = allfood.filter((e) => e.key === item)
        food(veg);
    }
    function all(item) {
        const all = allfood.filter((e) => e.key=== item)
        food(all);
    } 
    const history= useHistory();
    function click(id){
return(
    history.push(`/single?id=${id}`)
)
    }

    return (
        <div>
             <div>
            <Slide />
            </div>
            <div className=" menu-tabs  d-flex justify-content-center" id="imgten" >
                <button className="btn btn-warning" onClick={() => wes("western")}>WESTERN</button>
                <button className="btn btn-warning" onClick={() => india("non-veg")}>NON-VEG</button>
                <button className="btn btn-warning" onClick={() => china("chinese")}>CHINESE</button>
                <button className="btn btn-warning" onClick={() => all("all")}>ALL</button>

            </div>
           
            <div className=" p-4 gap-5"  id="sell">

                {food.map((e)=>{
                    return(
                        <div id="imgone">
                            <img onClick={()=>click(e.id)} src={e.url}></img>
                            <h4 id="imgtwo">{e.name}</h4>
                            <p id="imgthree">price:{e.price}</p>
                            <button id="imgfour" onClick={()=>dispatch(addcart(e))}>Add to cart</button>
                        </div>
                        )

                })}
            </div>

        </div>
    )

    }
    export default Food