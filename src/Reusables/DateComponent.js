import React from "react";
import dayjs from "dayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { styled } from "@mui/styles";
import { replaceInvalidDateByNull } from "@mui/x-date-pickers/internals";
import { useSelector } from "react-redux";

const ErrorMessage = styled("div")({
	fontSize: "small",
	color: "red",
	alignItems: "center",
	paddingTop: "1%",
});

const DateComponent = ({
	fieldValue,
	handelDateField,
	value,
	clearError,
	validate,
	name,
}) => {
	const handelError = () => {
		return validate[name] === true ? replaceInvalidDateByNull : null;
	};
	const selector = useSelector((state) => {
		return state.view;
	});

	return (
		<>
			<LocalizationProvider dateAdapter={AdapterDayjs}>
				<DatePicker
					slotProps={{
						textField: {
							readOnly: true,
							disabled:selector							
						}					
					}}
					disabled={selector}
					className="formInputs"
					disablePast
					maxDate={dayjs().add(10, "day")}
					label={fieldValue}
					onChange={(event) => {
						handelDateField(event);
						clearError({ ...validate, [name]: false });
					}}					
					value={value ? dayjs(value) : handelError()}
				/>
			</LocalizationProvider>
			{validate[name] && <ErrorMessage>Select the Date Field</ErrorMessage>}
		</>
	);
};

export default DateComponent;
