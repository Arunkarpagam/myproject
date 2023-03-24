import { createSlice , current} from "@reduxjs/toolkit";
export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0,
        value1: [],
        Totalamount: 0,

    },
    reducers: {
        increament: (state, e) => {
            const incres = [...current(state.value1)]
            const incres1 = incres.findIndex((item) => item.id === e.payload.id)
            state.value1[incres1].cartQuantity += 1;

            state.value1[incres1].Totalamount = state.value1.reduce((total, item) => {
                return total + Number(item.price) * Number(item.cartQuantity);
            }, 0);
        },
        decreament: (state, e) => {
            const incres = [...current(state.value1)]
            const incres1 = incres.findIndex((item) => item.id === e.payload.id)
            state.value1[incres1].cartQuantity += 1;

            state.value1[incres1].Totalamount = state.value1.reduce((total, item) => {
                return total + Number(item.price) * Number(item.cartQuantity);
            }, 0);
            if (state.value1[incres1].cartQuantity < 0) {
                return (state.Totalamount = 0);
            }
            if (state.Totalamount < 0) {
                return (state.Totalamount = 0);
            }
        },
        addcart: (state, e) => {
            const incres = state.value1.findIndex(
                (item) => item.id === e.payload.price
            );
            if (incres) {
                const cartrItem = {
                    ...e.payload, cartQuantity: 1,
                    Totalamount: e.payload.price
                };
                state.value1.push(cartrItem);
            }
            if (incres>=0){
                state.value1.cartQuantity+=1;
            }
        },
        handleRemove:(state,e)=>{
            const exitItem =state.value1.find((item)=>item.id === e.payload)  
            
            if(exitItem){
                state.value1= state.value1.filter((item)=>item.id !==e.payload)
                state.Totalamount =0;
            }
        },
    },
})
export const { increament, decreament, addcart,handleRemove } = counterSlice.actions;
export const selectCount =(state) =>state.counter.value;
export const Total=(state) => state.counter.Totalamount;
export const cartsect =(state) => state.counter.value1;
export default counterSlice.reducer