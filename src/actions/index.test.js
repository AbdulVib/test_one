import { actionTypes, correctGuess } from './'

describe('correctGuess', () => {
    it('should returns an action with type correctGuess', () => {
        const action = correctGuess()

        // here we cant use toBe(), bcz it compares "===" (eg. a = {}, b = {}, a == b or a === b is false unless we copy an instance of the same object )
        expect(action).toEqual({ type: actionTypes.CORRECT_GUESS })

    });
});
