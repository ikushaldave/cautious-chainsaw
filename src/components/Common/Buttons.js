import "./Buttons.css";

function BlueButton({ text, onClick }) {
	return (
		<button className="btn btn_white_text btn_blue" onClick={onClick}>
			{text}
		</button>
	);
}

export { BlueButton };
