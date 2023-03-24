import React, { useEffect, useState } from "react";
import SinglePage from './single.css';
import { useLocation } from "react-router-dom";
import Mydata from "../alldata";



function Single() {

    const [data, setData] = useState({});
    const { search } = useLocation();
    const query = new URLSearchParams(search);

    useEffect(() => {
        // query.get("name")

        const Categories = Mydata.find((item) => item.id == query.get("id"));
        setData(Categories);

    }
    )
    return (
        <div>
            <div className="section">


                <div className="main">
                    <div className="men-text">
                        <h1>Get Fresh<span>Food</span> a Esay Way</h1>

                    </div>
                    <div className="main-image">
                        <img src={data.url} alt="images" />
                        <p>Rating:{data.rating}</p>

                    </div>

                </div>
                <p id="lorn">{data.description}</p>


                <div className="main-btn">
                    <a href="#">Order Now</a>
                </div>




            </div>

        </div>
    )

}
export default Single