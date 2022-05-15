// ? Import modules
import { configureStore } from '@reduxjs/toolkit';
import dropdownReducer from './features/dropDownSlice';
import topNewReducer from './features/topNewSlice';
import authReducer from './features/authSlice';
import messageReducer from './features/messageSlice';
import refReducer from './features/refSlice';
import topContributorsReducer from './features/topContributorsSlice';

const reducer = {
  dropdown: dropdownReducer,
  topNew: topNewReducer,
  auth: authReducer,
  message: messageReducer,
  ref: refReducer,
  contributors: topContributorsReducer,
};

// ? Store
export default configureStore({
  reducer,
});
