import PropTypes from "prop-types";
import { BlueButton } from "../Common/Buttons";
import SelectedFrame from "./SelectedFrame";

import "./FrameSelection.css";

function FrameSelection({ frames, selectFrameHandler, nextHandler, selectedFrames }) {
	return (
		<div>
			<div className="flex justify-between flex-wrap">
				{frames.data.map((video) => (
					<div className="frame my-4" key={video.name} onClick={() => selectFrameHandler(video)}>
						<video src={video.url}></video>
						{selectedFrames.includes(video) ? <SelectedFrame /> : null}
					</div>
				))}
			</div>
			<BlueButton text="Next" onClick={nextHandler} />
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
