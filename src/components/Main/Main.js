import { useState, useEffect } from "react";

import FrameSelection from "./FrameSelection";
import ProjectTitle from "../Common/ProjectTitle";

import "./Main.css";

function Main() {
	const [loading, setLoading] = useState(true);
	const [frames, setFrames] = useState(null);
	const [selectedFrames, setSelectedFrames] = useState([]);
	const [nextStep, setNextStep] = useState(false);

	useEffect(() => {
		async function getFetch(url) {
			const response = await fetch(url);
			const data = await response.json();
			setFrames(data);
			setLoading(false);
		}

		getFetch("http://devserver.blkbox.ai/api/studio/creatives/step2");
	}, []);

	const nextHandler = () => {
		if (selectedFrames.length < 2) return;
		setNextStep(true);
	};

	const selectedFrameHandler = (frame) => {
		const isFrameAlreadySelected = selectedFrames.includes(frame);
		if (isFrameAlreadySelected) {
			const filterFrame = selectedFrames.filter((videoFrame) => videoFrame !== frame);
			setSelectedFrames(filterFrame);
		} else {
			setSelectedFrames([...selectedFrames, frame]);
		}
	};

	return (
		<main>
			<div className="container">
				<div>
					<ProjectTitle title="My Project" />
				</div>
				{loading ? <h3>Loading...</h3> : nextStep ? null : <FrameSelection frames={frames} selectedFrames={selectedFrames} selectFrameHandler={selectedFrameHandler} nextHandler={nextHandler} />}
			</div>
		</main>
	);
}

export default Main;
