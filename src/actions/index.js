const actionTypes = {
    CORRECT_GUESS: 'CORRECT_GUESS'
}

/**
 * @function correctGuess
 * @returns {object} 
 */

 const correctGuess = _ => {
     return{
         type: actionTypes.CORRECT_GUESS
     }
 }

 export {
     actionTypes, 
     correctGuess
 }