import { useState, useRef } from "react";

import PropTypes from "prop-types";
import VideoPreview from "./VideoPreview";
import VideoEditTools from "./VideoEditTools";

function VideoEditor({ selectedFrames }) {
	const [currentFrameNumber, setCurrentFrameNumber] = useState(0);
	const [playState, setPlayState] = useState(false);
	const previewRef = useRef(null);

	const currentFrame = selectedFrames[currentFrameNumber];

	const playHandler = () => {
		setPlayState(!playState);
		if (!playState) previewRef.current.play();
	};

	return (
		<div className="mt-16">
			<VideoPreview currentFrame={currentFrame} previewRef={previewRef} playState={playState} playHandler={playHandler} />
			<VideoEditTools currentFrame={currentFrame} frames={selectedFrames} />
		</div>
	);
}

VideoEditor.prototype = {
	selectedFrames: PropTypes.array.isRequired,
};

export default VideoEditor;
