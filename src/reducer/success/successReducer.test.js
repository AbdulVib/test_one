import { actionTypes } from '../../actions'
import SuccessReducer from './successReducer'

describe('Name of the group', () => {
    it('should return default initial state of false whne no action is passed', () => {
        const newState = SuccessReducer(undefined, {})
        expect(newState).toBe(false)
    });
    it('should return state of true, wen it receives action type of CORRECT_GEUSS', () => {
        const newState = SuccessReducer( undefined, { type: actionTypes.CORRECT_GUESS })
        expect(newState).toBe(true)
    });
});
