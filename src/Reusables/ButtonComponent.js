import { Button } from "@mui/material";
import React from "react";
import { makeStyles } from "@mui/styles";

const ButtonComponent = ({
	variant,
	handelClick,
	value,
	color,
	buttonWidth,
}) => {
	const useStyles = makeStyles({
		formButton: { width: (props) => props.width },
	});
	const props = {
		width: `${buttonWidth}%`,
	};
	const classes = useStyles(props);
	return (
		<>
			<Button
				className={classes.formButton}
				variant={variant}
				onClick={handelClick}
				color={color || "primary"}
			>
				{value}
			</Button>
		</>
	);
};

export default ButtonComponent;
