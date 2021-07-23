import "./Buttons.css";

function BlueButton({ className, text, onClick }) {
	return (
		<div className={className}>
			<button className="btn btn_white_text btn_blue" onClick={onClick}>
				{text}
			</button>
		</div>
	);
}

export { BlueButton };
