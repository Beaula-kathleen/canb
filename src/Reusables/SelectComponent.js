import React from "react";
import {
	FormControl,
	InputLabel,
	Select,
	OutlinedInput,
	MenuItem,
} from "@mui/material";
import { styled } from "@mui/styles";
import { menuItems } from "../Constants/constant";
import { useSelector } from "react-redux";

const ErrorMessage = styled("div")({
	fontSize: "small",
	color: "red",
	alignItems: "center",
	paddingTop: "1%",
});
const SelectComponent = ({
	fieldValue,
	handelChange,
	value,
	validate,
	clearError,
	name
}) => {
	const selector = useSelector((state) => {
		return state.view;
	});
	const selectChanges = (event) => {
		handelChange(event);
		clearError({ ...validate, [event.target.name]: false });
	};

	return (
		<>
			<FormControl>
				<InputLabel id="demo-multiple-name-label">{fieldValue}</InputLabel>
				<Select
					required
					input={<OutlinedInput label="AB Coaching Institute" />}
					onChange={(event) => {
						selectChanges(event);
					}}
					name={"OrganisationName"}
					value={value}
					error={validate[name]}
					disabled={selector}
				>
					{menuItems.map((element, index) => {
						return (
							<MenuItem value={element} key={index}>
								{element}
							</MenuItem>
						);
					})}
				</Select>
			</FormControl>
			{validate[name] && <ErrorMessage>Select the Organisation Name</ErrorMessage>}
		</>
	);
};

export default SelectComponent;
