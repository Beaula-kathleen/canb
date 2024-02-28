import { ActionType } from "../Constants/constant";
const initialState = {
	userData: [],
	getIndex: null,
	view: false,
};
const productReducer = (state = initialState, action) => {
	switch (action.type) {
		case ActionType.setFormDetails:
			return { ...state, userData: [...state.userData, action.payload] };

		case ActionType.deleteFormDetails:
			return { ...state, userData: action.payload };

		case ActionType.editFormDetails:
			return { ...state, userData: action.payload };

		case ActionType.selectedForm:
			return { ...state, getIndex: action.payload };

		case ActionType.viewForm:
			return { ...state, view: action.payload };

		default:
			return state;
	}
};
export default productReducer;
