import React from "react";
import { useState, useEffect } from "react";
import { Button, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { makeStyles, styled } from "@mui/styles";
import TextFieldComponent from "../Reusables/TextFieldComponent";
import SelectComponent from "../Reusables/SelectComponent";
import CheckBoxComponent from "../Reusables/CheckBoxComponent";
import RadioComponent from "../Reusables/RadioComponent";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import DateComponent from "../Reusables/DateComponent";
import ButtonComponent from "../Reusables/ButtonComponent";
import { inputList } from "../Constants/constant";
import { useDispatch, useSelector } from "react-redux";
import {
	editFormDetails,
	selectedForm,
	setFormDetails,
	viewForm,
} from "../Store/action";

const useStyles = makeStyles({
	arrowIcon: { color: "black" },
	textInput: { width: "96.5%", margin: "2%" },
});
const FormPage = styled("div")({
	display: "flex",
	flexDirection: "column",
	border: "black 1px solid",
	alignSelf: "center",
	justifyContent: "center",
	width: "70%",
	padding: "3% 5%",
	borderRadius: "10px",
});
const FormContainer = styled("div")({
	display: "flex",
	flexDirection: "column",
	overflowX: "hidden",
	height: "90vh",
});
const FormHeader = styled("div")({
	alignItems: "center",
	fontSize: "larger",
	margin: "2% 0%",
});

const Form = () => {
	const [formData, setFormData] = useState(inputList);
	const navigate = useNavigate();
	const [validate, setValidate] = useState({});
	const [viewSelector, setViewSelector] = useState(false);
	const dispatch = useDispatch();
	const classes = useStyles();
	const selector = useSelector((state) => {
		return state;
	});

	useEffect(() => {
		if ((selector && selector.getIndex) != null) {
			setFormData(selector.userData[selector.getIndex]);
			setViewSelector(selector.view);
		}
	}, [selector]);

	const handelChange = (event) => {
		const formDetails = { ...formData };
		if (event.target.name === "Pincode") {
			return event.target.value.length < 7
				? setFormData({
						...formDetails,
						[event.target.name]: event.target.value,
				  })
				: "";
		} else {
			setFormData({
				...formDetails,
				[event.target.name]: event.target.value,
			});
		}
	};

	const handelDateField = (event) => {
		const formDetails = { ...formData };
		setFormData({
			...formDetails,
			EffectiveDate: event,
		});
	};

	const handelChecked = (lable) => {
		return lable === "Deactive"
			? setFormData({ ...formData, Deactive: true, Active: false })
			: setFormData({ ...formData, Active: true, Deactive: false });
	};
	const handelCheckBox = (value) => {
		setFormData({ ...formData, checkBox: value });
	};
	const handelValidate = () => {
		const errors = {};
		Object.entries(formData).map(([key, value]) => {
			if (
				(typeof value == "string" && value.trim() === "") ||
				value === "" ||
				value === null
			) {
				errors[key] = true;
			}
		});
		return errors;
	};
	const handelSubmit = () => {
		setValidate({});
		const errorValues = handelValidate();
		setValidate(errorValues);
		if (Object.keys(errorValues).length === 0) {
			selector && !viewSelector && selector.getIndex === null
				? dispatch(setFormDetails(formData))
				: dispatch(
						editFormDetails(formData, selector.userData, selector.getIndex)
				  );
			handelBack();
		}
	};
	const handelBack = () => {
		dispatch(selectedForm(null));
		dispatch(viewForm(false));
		navigate("/");
	};

	return (
		<FormContainer>
			<FormHeader>
				<Button onClick={handelBack} className="arrow">
					<ArrowBackIcon className={classes.arrowIcon} />
				</Button>
				NEW BRANCH
			</FormHeader>
			<FormPage>
				<Grid container rowGap={5} columnSpacing={6}>
					<Grid item xs={6}>
						<SelectComponent
							fieldValue={"Organisation Name"}
							handelChange={handelChange}
							name={"OrganisationName"}
							value={formData.OrganisationName}
							clearError={setValidate}
							validate={validate}
						/>
					</Grid>
					<Grid item xs={6}>
						<TextFieldComponent
							fieldType={"text"}
							fieldValue={"Branch Name"}
							handelChange={handelChange}
							name={"BranchName"}
							formData={formData}
							value={formData.BranchName}
							clearError={setValidate}
							validate={validate}
						/>
					</Grid>
					<Grid item xs={12}>
						<hr />
					</Grid>

					<Grid item xs={12}>
						<CheckBoxComponent
							handelCheckBox={handelCheckBox}
							value={formData.checkBox}
						/>
					</Grid>
					<Grid item xs={12}>
						<TextFieldComponent
							fieldType={"text"}
							fieldValue={"Branch Address"}
							handelChange={handelChange}
							name={"BranchAddress"}
							formData={formData}
							value={formData.BranchAddress}
							clearError={setValidate}
							validate={validate}
						/>
					</Grid>
					<Grid item xs={4}>
						<TextFieldComponent
							fieldType={"text"}
							fieldValue={"Country"}
							handelChange={handelChange}
							name={"Country"}
							formData={formData}
							value={formData.Country}
							clearError={setValidate}
							validate={validate}
						/>
					</Grid>
					<Grid item xs={4}>
						<TextFieldComponent
							fieldType={"text"}
							fieldValue={"State"}
							handelChange={handelChange}
							formData={formData}
							value={formData.State}
							name={"State"}
							clearError={setValidate}
							validate={validate}
						/>
					</Grid>
					<Grid item xs={4}>
						<TextFieldComponent
							fieldType={"number"}
							fieldValue={"Pincode"}
							handelChange={handelChange}
							name={"Pincode"}
							formData={formData}
							value={formData.Pincode}
							clearError={setValidate}
							validate={validate}
						/>
					</Grid>
					<Grid item xs={6}>
						<TextFieldComponent
							fieldType={"number"}
							fieldValue={"Latitude"}
							handelChange={handelChange}
							name={"Latitude"}
							formData={formData}
							value={formData.Latitude}
							clearError={setValidate}
							validate={validate}
						/>
					</Grid>
					<Grid item xs={6}>
						<TextFieldComponent
							fieldType={"number"}
							fieldValue={"Longtitude"}
							handelChange={handelChange}
							name={"Longtitude"}
							formData={formData}
							value={formData.Longtitude}
							clearError={setValidate}
							validate={validate}
						/>
					</Grid>
					<Grid item xs={6}>
						<TextFieldComponent
							fieldType={"text"}
							fieldValue={"Landmark"}
							handelChange={handelChange}
							name={"Landmark"}
							formData={formData}
							value={formData.Landmark}
							clearError={setValidate}
							validate={validate}
						/>
					</Grid>
					<Grid item xs={6}>
						<TextFieldComponent
							fieldType={"number"}
							fieldValue={"Distance from Landmark"}
							handelChange={handelChange}
							name={"DistancefromLandmark"}
							formData={formData}
							value={formData.DistancefromLandmark}
							clearError={setValidate}
							validate={validate}
						/>
					</Grid>
					<Grid item xs={6}>
						<TextFieldComponent
							fieldType={"text"}
							fieldValue={"Nearest Bus stop / Railway Station"}
							handelChange={handelChange}
							name={"NearestStation"}
							formData={formData}
							error={validate.NearestStation}
							clearError={setValidate}
							validate={validate}
						/>
					</Grid>
					<Grid item xs={12}>
						<hr />
					</Grid>
					<Grid item xs={2}>
						Status
					</Grid>
					<Grid item xs={2}>
						<RadioComponent
							value={"deactive"}
							label={"Deactive"}
							checked={formData.Deactive}
							handelChecked={handelChecked}
						/>
					</Grid>
					<Grid item xs={2}>
						<RadioComponent
							value={"active"}
							label={"Active"}
							checked={formData.Active}
							handelChecked={handelChecked}
						/>
					</Grid>
					<Grid item xs={6}>
						<DateComponent
							fieldValue={"Effective Date"}
							handelDateField={handelDateField}
							name={"EffectiveDate"}
							formData={formData}
							value={formData.EffectiveDate}
							clearError={setValidate}
							validate={validate}
						/>
					</Grid>
					<Grid item xs={12}>
						<TextFieldComponent
							fieldType={"text"}
							fieldValue={" Reason for Deactivation"}
							handelChange={handelChange}
							name={"ReasonforDeactivation"}
							formData={formData}
							value={formData.ReasonforDeactivation}
							clearError={setValidate}
							validate={validate}
						/>
					</Grid>
					<Grid container spacing={1}>
						<Grid item xs={8}></Grid>
						<Grid item xs={2}>
							<ButtonComponent
								variant="outlined"
								handelClick={handelBack}
								value={"CANCEL"}
								buttonWidth={100}
							/>
						</Grid>
						<Grid item xs={2}>
							<ButtonComponent
								variant="outlined"
								value={" SUBMIT "}
								buttonWidth={100}
								handelClick={() => {
									if (!viewSelector) handelSubmit();
								}}
							/>
						</Grid>
					</Grid>
				</Grid>
			</FormPage>
		</FormContainer>
	);
};

export default Form;
