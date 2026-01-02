import { NavLink } from "react-router-dom";

export const Menu = () => {
    return (
        <nav className="flex gap-6">
            <NavLink to="/projects">Projects</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/feedback">Feedback</NavLink>
        </nav>
    );
};
