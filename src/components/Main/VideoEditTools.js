import PropTypes from "prop-types";

import { IoAddCircleOutline } from "react-icons/io5";
import { RiExchangeLine, RiDeleteBin5Line } from "react-icons/ri";
import { MdSkipPrevious, MdSkipNext } from "react-icons/md";

import "./VideoEditTools.css";

function VideoEditTools({ frames, currentFrame }) {
	return (
		<div className="flex mt-16">
			<div className="flex justify-center items-center w-12 video_time">
				<div className="center">
					<h3>Total Time</h3>
					<span>00:00:16</span>
				</div>
			</div>
			<div className="flex-col justify-evenly items-center w-4 video_tools">
				<button>
					<IoAddCircleOutline />
				</button>
				<button>
					<RiExchangeLine />
				</button>
				<button>
					<MdSkipPrevious />
				</button>
				<button>
					<MdSkipNext />
				</button>
				<button>
					<RiDeleteBin5Line />
				</button>
			</div>
			<div className="flex items-center py-12 2-80 overflow-y video_frame_section">
				{frames.map((frame) => (
					<video key={frame.name} src={frame.url} className={currentFrame === frame ? "video_frame mx-4 active_frame" : "video_frame mx-4"} />
				))}
			</div>
		</div>
	);
}

export default VideoEditTools;
