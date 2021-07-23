import PropTypes from "prop-types";
import "./ProjectTitle.css";
function ProjectTitle({ title = "App Name" }) {
	return <h2 className="project_title my-8">{title}</h2>;
}

ProjectTitle.propTypes = {
	title: PropTypes.string,
};

export default ProjectTitle;
