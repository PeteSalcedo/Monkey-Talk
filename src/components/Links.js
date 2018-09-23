import React from "react"
import { Link } from "react-router-dom"

const Links = () => (
  <div className="links">
  <ul>
        <li>
          <Link to="/">Chat</Link>
        </li>
        <li>
          <Link to="/BotHome">Monkey Bot</Link>
        </li>
        <li>
          <Link to="/PhotoHome">Photos</Link>
        </li>
        <li>
          <Link to="/Videos">Videos</Link>
        </li>
      </ul>
  </div>
);
export default Links;
