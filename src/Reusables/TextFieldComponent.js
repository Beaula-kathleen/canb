import React from "react";
import { TextField } from "@mui/material";
import { numberInput } from "../Constants/constant";
import { styled } from "@mui/styles";
import { useSelector } from "react-redux";

const ErrorMessage = styled("div")({
	fontSize: "small",
	color: "red",
	alignItems: "center",
	paddingTop: "1%",
});
const TextFieldComponent = ({
	fieldValue,
	handelChange,
	name,
	value,
	fieldType,
	clearError,
	validate,
}) => {
	const selector = useSelector((state) => {
		return state.view;
	});
	const handelInputs = (event) => {
			if (fieldType === "number") {
				if (numberInput.test(event.target.value)||event.target.value === "") {
					handelChange(event);
					clearError({ ...validate, [event.target.name]: false });
				}
			} else {
				handelChange(event);
				clearError({ ...validate, [event.target.name]: false });
			}
	};
	return (
		<>
			<TextField
				className="formInputs"
				name={name}
				label={fieldValue}
				variant="outlined"
				required
				onChange={(event) => {
					handelInputs(event);
				}}
				value={value}
				error={validate[name]}
				disabled={selector}
			/>
			{validate[name] && <ErrorMessage>Enter the {fieldValue} field</ErrorMessage>}
		</>
	);
};

export default TextFieldComponent;
