import PropTypes from "prop-types";

function ProjectTitle({ title = "App Name" }) {
	return <h2 className="project_title">{title}</h2>;
}

ProjectTitle.propTypes = {
	title: PropTypes.string,
};

export default ProjectTitle;
