import { ActionType } from "../Constants/constant";

export const setFormDetails = (newData) => {
	return {
		type: ActionType.setFormDetails,
		payload: newData,
	};
};

export const selectedForm = (newData) => {
	return {
		type: ActionType.selectedForm,
		payload: newData,
	};
};

export const deleteFormDetails = (newData, datas) => {
	const newInputs = datas.filter((element, index) => {
		return index != newData;
	});
	return {
		type: ActionType.deleteFormDetails,
		payload: newInputs,
	};
};

export const editFormDetails = (newData, datas, newindex) => {
	const newInput = datas.map((element, index) => {
		return index === newindex ? newData : element;
	});
	return {
		type: ActionType.editFormDetails,
		payload: newInput,
	};
};

export const viewForm = (newData) => {
	return {
		type: ActionType.viewForm,
		payload: newData,
	};
};
