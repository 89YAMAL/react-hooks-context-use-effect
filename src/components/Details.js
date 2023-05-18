import React from "react";

export default function Details({user}) {
    return (
      <div>
        <ul>
          <img src={user.avatar} alt="" />
          <li><big>{user.name}</big></li>
          <li>City: {user.details.city}</li>
          <li>Company: {user.details.company}</li>
          <li>Position: {user.details.position}</li>
        </ul>
      </div>
    );
}