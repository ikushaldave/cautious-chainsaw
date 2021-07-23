import { IoIosCheckmarkCircleOutline } from "react-icons/io";

import "./SelectedFrame.css";

function SelectedFrame() {
	return (
		<div className="selected-frame flex items-center">
			<IoIosCheckmarkCircleOutline />
			<span className="mx-2">Selected</span>
		</div>
	);
}

export default SelectedFrame;
