import React from "react";
import { useSelector } from "react-redux";
import { cartsect } from "../Redux/routing";
import { useDispatch } from "react-redux";
import { Total } from "../Redux/routing";
import { increament,decreament,handleRemove } from "../Redux/routing";
import './cart.css';
function Cart() {
    const cartval = useSelector(cartsect)
    const dispatch = useDispatch()
    const Totalcart = useSelector(Total)


    return (
        <div className="col-lg-12 d-flex p-5 ">
            <div>{cartval.map((e) => {
                return (
                    < div className="col-lg-6 ">
                        <div className="p-4" id="cart-bar">
                            <div>
                                <img src={e.url} width="300px" alt="images" />


                            </div>
                            <div id="bless">
                                <h4>{e.name}</h4>

                                <button onClick={() => dispatch(increament(e))}>+</button>
                                {<span>{e.cartQuantity}</span>}
                                <button onClick={() => dispatch(decreament(e))}>-</button>

                                <h3>
                                    price:$-{parseInt(e.price) * Number(e.cartQuantity)}</h3>

                                <button >order Now</button>
                            </div>
                            <div id="remove">
                                <button id="remo-btn" onClick={() => dispatch(handleRemove(e))}>X</button>
                            </div>
                        </div><br></br>


                    </div>

                )


            })}
            </div>
            <div className="col-lg-6" id="tolbuimg">
                <h3 >Total price</h3>
                <span>Rs-{Totalcart}</span>
            </div>
        </div>

    )

}
export default Cart