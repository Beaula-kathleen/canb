import React from "react";
import { headerList } from "../Constants/constant";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import { styled } from "@mui/styles";
const NavBar = styled("div")({
	display: "flex",
	width: "100%",
	border: "black solid 1px",
	height: "9%",
	justifyContent: "space-between",
});
const NavList = styled("div")({
	display: "flex",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "space-between",
	padding: " 0% 2%",
	width: " 100%",
	border: "1px solid black",
});
const NavItems = styled("div")({
	display: "flex",
	width: "80%",
	font: "normal normal medium 14px/18px Montserrat",
	color: "#333333",
});
const Itemlist = styled("div")({
	font: " normal normal medium 14px/18px Montserrat",
	width: "100%",
});
const ProfileDetails = styled("div")({
	display: "flex",
	justifyContent: "flex-end",
	width: "30%",
	padding: "1% 0%",
	alignItems: "center",
});
const ProfileHolder = styled("div")({
	display: "flex",
	justifyContent: "flex-end",
	font: "normal normal normal 14px/17px Rubik",
});
const ProfileImage = styled("div")({
	height: "100%",
	width: "15%",
	borderRadius: "50%",
	border: "black solid 1px",
	margin: "0% 3%",
});
const UserDetails = styled("div")({
	padding: "0% 2%",
});
const Header = () => {
	return (
		<NavBar>
			<NavList>
				<NavItems>
					{headerList.map((element, index) => (
						<Itemlist key={index}>{element}</Itemlist>
					))}
				</NavItems>
				<div>
					<NotificationsNoneIcon />
				</div>
			</NavList>
			<ProfileDetails>
				<UserDetails>
					<div>Madhu Venkat</div>
					<ProfileHolder>Owner</ProfileHolder>
				</UserDetails>
				<ProfileImage></ProfileImage>
			</ProfileDetails>
		</NavBar>
	);
};

export default Header;
