import PropTypes from "prop-types";
import { BlueButton } from "../Common/Buttons";
import SelectedFrame from "./SelectedFrame";

import "./FrameSelection.css";

function FrameSelection({ frames, selectFrameHandler, nextHandler, selectedFrames }) {
	return (
		<div className="container">
			<div className="flex justify-between items-center my-4">
				<span className="frame_info">Select a video frame</span>
				<span className="frame_info selection_frame_info">
					{selectedFrames.length} selected out of {frames.data.length} frames
				</span>
			</div>

			<div className="flex justify-between flex-wrap">
				{frames.data.map((frame) => (
					<div className="frame my-4" key={frame.name} onClick={() => selectFrameHandler(frame)}>
						<video src={frame.url}></video>
						{selectedFrames.includes(frame) ? <SelectedFrame /> : null}
					</div>
				))}
			</div>

			<BlueButton className="center mx-4" text="Next" onClick={nextHandler} />
		</div>
	);
}

FrameSelection.prototype = {
	frames: PropTypes.object.isRequired,
	selectFrameHandler: PropTypes.func.isRequired,
	nextHandler: PropTypes.func.isRequired,
	selectedFrames: PropTypes.array.isRequired,
};

export default FrameSelection;
