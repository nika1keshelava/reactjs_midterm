import { NavLink } from 'react-router-dom';

import './styles.css';

function Navigation(props) {
  return (
    <div className="row mt-4 mb-4">
      <ul className="nav nav-pills nav-fill">
        <li className="nav-item">
          <NavLink
            className="nav-link"
            to="/auth"
            activeClassName="active bg-auth ">
            login
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink
            className="nav-link"
            to="/profile"
            activeClassName="active bg-profile ">
            Profile
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink
            className="nav-link"
            to="/Companies"
            exact
            activeClassName="active bg-companiesPage">
            Companies
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            className="nav-link"
            to="/images"
            activeClassName="active bg-imagesPage">
            Images page
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            className="nav-link"
            to="/addcompany"
            activeClassName="active bg-addcompany ">
            Add company
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            className="nav-link"
            to="/createimage"
            activeClassName="active bg-createimage ">
            create image
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
