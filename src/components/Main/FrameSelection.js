import PropTypes from "prop-types";
import { BlueButton } from "../Common/Buttons";
import SelectedFrame from "./SelectedFrame";

import "./FrameSelection.css";

function FrameSelection({ frames, selectFrameHandler, nextHandler, selectedFrames }) {
	return (
		<div>
			<div className="flex justify-between items-center my-4">
				<span className="frame_info">Select a video frame</span>
				<span className="frame_info selection_frame_info">
					{selectedFrames.length} selected out of {frames.data.length} frames
				</span>
			</div>
			<div className="flex justify-between flex-wrap">
				{frames.data.map((video) => (
					<div className="frame my-4" key={video.name} onClick={() => selectFrameHandler(video)}>
						<video src={video.url}></video>
						{selectedFrames.includes(video) ? <SelectedFrame /> : null}
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
