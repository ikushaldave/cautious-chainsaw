import { Link, NavLink } from "react-router-dom";
import "./Header.css";

export default function Header() {
	return (
		<header className="header p-2">
			<div className="container flex justify-between items-center">
				<Link to="/" className="brand_logo">
					<img src="/logo.png" alt="blkbox logo" />
				</Link>

				<nav className="nav flex items-center">
					<NavLink to="/" activeClassName="active" exact>
						Home
					</NavLink>
					<NavLink to="/videos" activeClassName="active">
						Videos
					</NavLink>
				</nav>

				<div className="user flex items-center">
					<div className="user_avatar flex justify-center items-center">
						<span>KD</span>
					</div>
					<h3 className="m-2">Kushal Dave</h3>
				</div>
			</div>
		</header>
	);
}
