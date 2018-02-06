import { combineReducers } from 'redux'
// import CanvasReducer from '../containers/Canvas/reducer'
import GradientsReducer from '../containers/Gradients/reducer'

const rootReducer = combineReducers({
  gradients: GradientsReducer
})

export default rootReducer
