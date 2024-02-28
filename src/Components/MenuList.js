import { ButtonGroup } from "@mui/material";
import React from "react";
import { inputLists } from "../Constants/constant";
import { styled } from "@mui/styles";
import { useNavigate } from "react-router-dom";
import ButtonComponent from "../Reusables/ButtonComponent";

const CanbHeader = styled("div")({
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	border: "black solid 1px",
	borderRadius: " 0% 0% 18% 18%",
	height: "9vh",
	paddingTop: "4%",
});
const Menu = styled("div")({
	display: "flex",
	flexDirection: "row",
	justifyContent: "center",
	overflowX: "hidden",
	margin: "6% 0%",
});
const PageInputs = styled("div")({
	width: "20%",
	border: " black solid 1px",
});

const Describe = styled("div")({
  fontWeight:"12px",
	font: "normal normal medium 12px Montserrat",
});

const Can = styled("div")({
  fontWeight:"medium",
  fontSize:"20px",
	font: "normal normal medium 20px/15px Montserrat",
});

const MenuList = () => {
	const navigate = useNavigate();
	const handelClick = () => {
		navigate("/");
	};

	return (
		<PageInputs>
			<CanbHeader>
				<Can>CAN</Can>
				<Describe>Connect And Network</Describe>
				<Describe>Vhi admin</Describe>
			</CanbHeader>
			<Menu>
				<ButtonGroup
					orientation="vertical"
					aria-label="vertical outlined button group"
					variant="text"
				>
					{inputLists.map((element, index) => {
						return (
							<div key={index}>
								<ButtonComponent
									variant="outlined"
									value={element}
									buttonWidth={100}
									handelClick={handelClick}
								/>
							</div>
						);
					})}
				</ButtonGroup>
			</Menu>
		</PageInputs>
	);
};

export default MenuList;
