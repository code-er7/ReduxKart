import { createReducer } from "@reduxjs/toolkit";

const initialState = {
    items: [],
    total: 0
};

export const kartReducer = createReducer(initialState, {
  
    addToKart: (state, action) => {
        const newItem = action.payload;
        const index = state.items.findIndex(item => item.id === newItem.id);
        if (index !== -1) {
            // Item exists, create a new array with updated quantity
            state.items = state.items.map(item => {
                if (item.id === newItem.id) {
                    state.total+=item.price;
                    return {
                        ...item,
                        quantity: item.quantity + 1
                    };
                }
                return item;
            });
        } else {
            state.total+= newItem.price;
            state.items.push(newItem);
        }
        console.log(state.items)
    },
    increment:(state , action)=>{
        const objid = action.payload;
        state.items = state.items.map(item => {
            if (item.id === objid) {
                state.total+=item.price;
                return {
                    ...item,
                    quantity: item.quantity + 1
                };
            }
            return item;
        });

    },
    decrement:(state , action)=>{
        const objid = action.payload;
        state.items = state.items.map(item => {
            if (item.id === objid) {
                state.total-=item.price;
                return {
                    ...item,
                    quantity: item.quantity - 1
                };
            }
            return item;
        });
    }
});