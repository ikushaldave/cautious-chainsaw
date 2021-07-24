import { useState, useRef } from "react";

import PropTypes from "prop-types";
import VideoPreview from "./VideoPreview";
import VideoEditTools from "./VideoEditTools";

function VideoEditor({ selectedFrames, setNextStep, setSelectedFrames }) {
	const [currentFrameNumber, setCurrentFrameNumber] = useState(0);
	const [playState, setPlayState] = useState(false);
	const videoPreviewRef = useRef(null);

	const currentFrame = selectedFrames[currentFrameNumber];

	const playHandler = () => {
		setPlayState(true);
		if (!playState) videoPreviewRef.current.play();
	};

	const nextFrameHandler = () => {
		if (currentFrameNumber === selectedFrames.length - 1) {
			setCurrentFrameNumber(0);
			setPlayState(false);
			return;
		}
		setCurrentFrameNumber(currentFrameNumber + 1);
	};

	const previousFrameHandler = () => {
		if (currentFrameNumber === 0) {
			setPlayState(false);
			return;
		}
		setCurrentFrameNumber(currentFrameNumber - 1);
	};

	return (
		<div className="mt-16">
			<VideoPreview currentFrame={currentFrame} videoPreviewRef={videoPreviewRef} playState={playState} playHandler={playHandler} nextFrameHandler={nextFrameHandler} />
			<VideoEditTools currentFrame={currentFrame} frames={selectedFrames} previousFrameHandler={previousFrameHandler} nextFrameHandler={nextFrameHandler} setNextStep={setNextStep} setSelectedFrames={setSelectedFrames} />
		</div>
	);
}

VideoEditor.prototype = {
	selectedFrames: PropTypes.array.isRequired,
};

export default VideoEditor;
