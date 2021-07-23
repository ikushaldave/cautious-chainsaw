import PropTypes from "prop-types";
import { FaPlay } from "react-icons/fa";

import "./VideoPreview.css";

function VideoPreview({ previewRef, currentFrame, playState, playHandler }) {
	return (
		<div className="flex justify-center">
			<div className="player">
				<video src={currentFrame.url} ref={previewRef} controls={playState} />
				{playState ? null : (
					<div className="player_overlay flex justify-center items-center">
						<div className="rounded-play" onClick={playHandler}>
							<FaPlay />
						</div>
					</div>
				)}
			</div>
		</div>
	);
}

VideoPreview.prototype = {
	currentFrame: PropTypes.object.isRequired,
};

export default VideoPreview;
