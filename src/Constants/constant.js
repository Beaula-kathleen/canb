import Table from "../Pages/Table"
import Form from "../Pages/Form"

export const inputLists = [
	"DASHBOARD",
	"ORGANISATIONS",
	"ORGANISATION GROUPS",
	"ORG EMPLOYEES",
	"ORGANISATION PAGES",
	"ORGANISATION POST",
	"ORGANISATION MEMBERS",
	"NOTIFICATIONS",
	"ACADEMY PERFORMANCE",
	"OPINION POLL",
	"ATTENDANCE",
	"FINANCIALS",
	"MEMBER PAGES",
	"MEMBER POSTS",
];
export const inputList = {
	OrganisationName: "",
	BranchName: "",
	BranchAddress: "",
	Country: "",
	State: "",
	Pincode: "",
	Latitude: "",
	Longtitude: "",
	Landmark: "",
	DistancefromLandmark: "",
	NearestStation: "",
	EffectiveDate: null,
	ReasonforDeactivation: "",
	checkBox: false,
	Deactive: true,
	Active: false,
};

export const headerList = [
	"OUR BILLINGS",
	"AD CAMPAIGN",
	"CONNECTION",
	"ORG.CONTROL AREA",
];
export const routing = [
	{ path: "/", element:  <Table/>},
	{ path: "form", element: <Form/> },
];
export const ActionType = {
	setFormDetails: "setFormDetails",
	selectedForm: "selectedForm",
	deleteFormDetails: "deleteFormDetails",
	editFormDetails: "editFormDetails",
	viewForm: "viewForm",
};

export const numberInput = /^[0-9,\b]+$/;

export const originalRows = [
	{
		institute: "AB Coaching Institute",
		branch: "Shollinganallur",
		Location: "No.6 ,Mt.road,Shollinganallur",
		Employees: 10,
	},
	{
		institute: "CD Coaching Institute",
		branch: "Velachery",
		Location: "No.6 ,Mt.road,Velachery",
		Employees: 30,
	},
];

export const menuItems = [
	"AB Coaching Institute",
	"CD Coaching Institute",
	"SA Coaching Institute",
];

export const tableHeader = [
	{ label: "Institute Name", key: "OrganisationName" },
	{ label: "Branch Name", key: "BranchName" },
	{ label: "Location", key: "BranchAddress" },
	{ label: "Employees", key: "Pincode" },
];

export const errorValidation = [
	{
		key: "OrganisationName",
		error: false,
	},
	{ key: "BranchName", error: false },
	{ key: "BranchAddress", error: false },
	{ key: "Country", error: false },
	{ key: "State", error: false },
	{ key: "Pincode", error: false },
	{ key: "Latitude", error: false },
	{ key: "Longtitude", error: false },
	{ key: "Landmark", error: false },
	{ key: "DistancefromLandmark", error: false },
	{ key: "NearestStation", error: false },
	{ key: "EffectiveDate", error: false },
	{ key: "ReasonforDeactivation", error: false },
];
