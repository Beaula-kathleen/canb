import SearchBar from "@mkyy/mui-search-bar";
import { useState } from "react";
import React from "react";
import { styled } from "@mui/styles";
import { useNavigate } from "react-router-dom";
import TableComponent from "../Reusables/TableComponent";
import ButtonComponent from "../Reusables/ButtonComponent";
import { tableHeader } from "../Constants/constant";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const BranchField = styled("div")({
	padding: "0% 5%",
});
const EditingFields = styled("div")({
	display: "flex",
	alignItems: "center",
});
const BranchHeader = styled("div")({
	display: "flex",
	justifyContent: "space-between",
	margin: "1% 0%",
	alignItems: "center",
});
const DataField = styled("div")({
	display: "flex",
	justifyContent: "center",
	height: "30vh",
	alignItems: "center",
	font: "normal normal normal 34px/17px Rubik",
	color: "gray",
});
const Table = () => {
	const selector = useSelector((state) => {
		return state.userData;
	});
	useEffect(() => {
		setTableDatas(selector);
	}, [selector]);
	const naviagate = useNavigate();
	const [tableDatas, setTableDatas] = useState([]);
	const [searched, setSearched] = useState("");
	const [anchorEl, setAnchorEl] = useState(null);
	const open = Boolean(anchorEl);
	const requestSearch = (searchedVal) => {
		const filteredRows = selector.filter((row) => {
			return row.OrganisationName.toLowerCase().includes(
				searchedVal.toLowerCase()
			);
		});
		setTableDatas(filteredRows);
	};
	const cancelSearch = () => {
		setSearched("");
		requestSearch(searched);
	};

	return (
		<BranchField>
			<BranchHeader>
				<div>BRANCH</div>
				<EditingFields>
					<SearchBar
						value={searched}
						onChange={(searchVal) => requestSearch(searchVal)}
						onCancelResearch={() => {
							cancelSearch();
						}}
					/>
					<ButtonComponent
						color="success"
						value={"New"}
						variant={"contained"}
						buttonWidth={30}
						handelClick={() => naviagate("form")}
					/>
				</EditingFields>
			</BranchHeader>
			{tableDatas.length === 0 ? (
				<DataField>No Data</DataField>
			) : (
				<TableComponent
					tableDatas={tableDatas}
					setAnchorEl={setAnchorEl}
					open={open}
					anchorEl={anchorEl}
					naviagate={naviagate}
					tableHeader={tableHeader}
					setTableDatas={setTableDatas}
					selector={selector}
				/>
			)}
		</BranchField>
	);
};

export default Table;
