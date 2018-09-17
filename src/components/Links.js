import React from "react"
import { Link } from "react-router-dom"

const Links = () => (
  <div className="links">
  <ul>
        <li>
          <Link to="/">Chat</Link>
        </li>
        <li>
          <Link to="/Videos">videos</Link>
        </li>
      </ul>
  </div>
);
export default Links;
