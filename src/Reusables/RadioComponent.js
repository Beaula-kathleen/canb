import React from "react";
import { FormControlLabel, Radio } from "@mui/material";
import { useSelector } from "react-redux";

const RadioComponent = ({ value, label, checked, handelChecked }) => {
	const selector = useSelector((state) => {
		return state.view;
	});
	return (
		<>
			<FormControlLabel
				value={value}
				control={<Radio />}
				label={label}
				checked={checked}
				onClick={() => {
					if (!selector) handelChecked(label);
				}}
				disabled={selector}
			/>
		</>
	);
};

export default RadioComponent;
