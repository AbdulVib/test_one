/**
 * @function succesReducer
 * @param {array} state - Guessed word Array 
 * @param {object} state - action 
 * @returns {boolean}
 */

import { actionTypes } from "../../actions";

// const initialState = {

// }

export default (state = false, action) => {

    switch (action.type) {

        case (actionTypes.CORRECT_GUESS):
            return true
    
        default: 
            return state;
    }
 }
 