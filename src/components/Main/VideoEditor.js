import { useState, useRef } from "react";

import PropTypes from "prop-types";
import VideoPreview from "./VideoPreview";

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
		<div className="my-8">
			<VideoPreview currentFrame={currentFrame} previewRef={previewRef} playState={playState} playHandler={playHandler} />
		</div>
	);
}

VideoEditor.prototype = {
	selectedFrames: PropTypes.array.isRequired,
};

export default VideoEditor;
