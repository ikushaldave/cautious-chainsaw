import PropTypes from "prop-types";

import { IoAddCircleOutline } from "react-icons/io5";
import { RiExchangeLine, RiDeleteBin5Line } from "react-icons/ri";
import { MdSkipPrevious, MdSkipNext } from "react-icons/md";

import "./VideoEditTools.css";

function VideoEditTools({ frames, currentFrame, previousFrameHandler, nextFrameHandler, setNextStep, setSelectedFrames }) {
	const addMoreFrameHandler = () => {
		setNextStep(false);
	};

	const deleteFrameHandler = (frameNumber) => {
		const cloneFrames = [...frames];
		const framesWithDeleted = cloneFrames.splice(frameNumber, 1);
		setSelectedFrames(cloneFrames);
	};

	return (
		<div className="flex mt-16">
			<div className="flex justify-center items-center w-12 video_time">
				<div className="center">
					<h3>Total Time</h3>
					<span>00:00:16</span>
				</div>
			</div>
			<div className="flex-col justify-evenly items-center w-4 video_tools">
				<button onClick={addMoreFrameHandler}>
					<IoAddCircleOutline />
				</button>
				<button>
					<RiExchangeLine />
				</button>
				<button onClick={previousFrameHandler}>
					<MdSkipPrevious />
				</button>
				<button onClick={nextFrameHandler}>
					<MdSkipNext />
				</button>
				<button onClick={() => deleteFrameHandler(currentFrame)}>
					<RiDeleteBin5Line />
				</button>
			</div>
			<div className="flex items-center py-12 w-84 overflow-y video_frame_section">
				{frames.map((frame) => (
					<video key={frame.name} src={frame.url} className={currentFrame === frame ? "video_frame mx-4 active_frame" : "video_frame mx-4"} />
				))}
			</div>
		</div>
	);
}

VideoEditTools.prototype = {
	frames: PropTypes.array.isRequired,
	currentFrame: PropTypes.number.isRequired,
	previousFrameHandler: PropTypes.func.isRequired,
	nextFrameHandler: PropTypes.func.isRequired,
};

export default VideoEditTools;
