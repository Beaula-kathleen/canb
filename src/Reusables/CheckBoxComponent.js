import { FormControlLabel, Checkbox } from "@mui/material";
import { useSelector } from "react-redux";
import {styled} from "@mui/styles"
import React from "react";

const CheckBoxComponent = ({handelCheckBox,value}) => {
	const selector = useSelector((state) => {
		return state.view;
	});
	const CheckField = styled ("div")({
		height:"23px"
	  })	
	return (
		<CheckField>
			<FormControlLabel
				className="checkBox"
				control={
					<Checkbox
						onClick={(e) => {
							handelCheckBox(e.target.checked);
						}}
						checked={value}
						disabled={selector}
					/>
				}
				label="Mark this as a Corporate/Main Address"
			/>
		</CheckField>
	);
};

export default CheckBoxComponent;
