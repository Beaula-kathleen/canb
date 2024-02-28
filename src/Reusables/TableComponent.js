import React from "react";
import {
	Button,
	Table,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Paper,
	TableBody,
	MenuItem,
	Menu,
} from "@mui/material";
import { orderBy } from "lodash";
import { useState } from "react";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { TableSortLabel } from "@mui/material";
import { makeStyles, styled } from "@mui/styles";
import { useDispatch } from "react-redux";
import { deleteFormDetails, selectedForm, viewForm } from "../Store/action";

const useStyles = makeStyles({
	root: { backgroundColor: "#d8e4fc" },
});
const BranchDetails = styled("div")({
	display: "flex",
	justifyContent: "flexEnd",
	alignItems: "center",
	width: "100%",
});
const TableHeader = styled("div")({
	width: "100%",
	fontWeight: "bolder",
});
const TableComponent = ({
	tableDatas,
	setAnchorEl,
	open,
	anchorEl,
	naviagate,
	tableHeader,
	setTableDatas,
	selector = [],
}) => {
	const [indexValue, setIndexValue] = useState("");
	const [orderData, setOrderData] = useState({
		order: "desc",
		orderBy: "tableHeader.lable",
	});
	const dispatch = useDispatch();
	const createSortHandler = (key) => {
		setOrderData({
			order: orderData.order === "asc" ? "desc" : "asc",
			orderBy: key,
		});
		const sorted = orderBy(tableDatas, [key], [orderData.order]);
		setTableDatas(sorted);
	};
	const handelView = (event) => {
		if (event === "view") {
			dispatch(viewForm(true));
		}
		dispatch(selectedForm(indexValue));
		setIndexValue("");
		setAnchorEl(null);
		naviagate("form");
	};
	const handelDelete = () => {
		dispatch(deleteFormDetails(indexValue, selector));
		setIndexValue("");
		setAnchorEl(null);
	};

	const classes = useStyles();
	return (
		<>
			<TableContainer component={Paper}>
				<Table>
					<TableHead>
						<TableRow>
							{tableHeader.map((item) => {
								return (
									<TableCell key={item.key} className={classes.root}>
										<BranchDetails>
											<TableSortLabel
												active={orderData.orderBy === item.key}
												direction={
													orderData.orderBy === item.key
														? orderData.order
														: "asc"
												}
												onClick={() => createSortHandler(item.key)}
											>
												<TableHeader>{item.label}</TableHeader>
											</TableSortLabel>
										</BranchDetails>
									</TableCell>
								);
							})}
						</TableRow>
					</TableHead>

					<TableBody>					
							{tableDatas.map((row, index) => (
								<TableRow key={index}>
									<TableCell component="th" scope="row">
										{row.OrganisationName}
										<Button
											onClick={(event) => {
												setAnchorEl(event.currentTarget);
												setIndexValue(index);
											}}
										>
											<MoreHorizIcon />
										</Button>
										<Menu
											anchorEl={anchorEl}
											open={open}
											onClose={() => setAnchorEl(null)}
										>
											<MenuItem onClick={() => handelView("view")}>
												View Details
											</MenuItem>
											<MenuItem
												onClick={() => {
													handelView("edit");
												}}
											>
												Edit
											</MenuItem>
											<MenuItem
												onClick={() => {
													handelDelete();
												}}
											>
												Delete
											</MenuItem>
										</Menu>
									</TableCell>
									<TableCell align="left">{row.BranchName} </TableCell>
									<TableCell align="left">{row.BranchAddress}</TableCell>
									<TableCell align="left">{row.Pincode}</TableCell>
								</TableRow>
							))}
					</TableBody>
				</Table>
			</TableContainer>
		</>
	);
};

export default TableComponent;
