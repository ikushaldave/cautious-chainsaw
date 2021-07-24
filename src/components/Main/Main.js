import { useState, useEffect } from "react";

import ProjectTitle from "../Common/ProjectTitle";
import FrameSelection from "./FrameSelection";
import VideoEditor from "./VideoEditor";
import { BlueButton } from "../Common/Buttons";

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

		getFetch("https://devserver.blkbox.ai/api/studio/creatives/step2");
	}, []);

	const nextHandler = () => {
		if (selectedFrames.length < 2) return alert("Select minimum 2 frames to create video");
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
			<div className="container flex justify-between items-center">
				<ProjectTitle />
				{nextStep ? <BlueButton text="Save Video" onClick={() => alert("Video Saved Successfully")} /> : null}
			</div>
			{loading ? <h3>Loading...</h3> : nextStep ? <VideoEditor selectedFrames={selectedFrames} setNextStep={setNextStep} setSelectedFrames={setSelectedFrames} /> : <FrameSelection frames={frames} selectedFrames={selectedFrames} selectFrameHandler={selectedFrameHandler} nextHandler={nextHandler} />}
		</main>
	);
}

export default Main;
