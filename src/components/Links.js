import React from "react";
import user from "../data/user";


const {github, linkedin} = user.links


function Links() {

  return (
    <div>
      <h3>Links</h3>
      <div>
        <a href={github}>{github}</a>
        <a href={linkedin}>{linkedin}</a>
      </div>
    </div>
  )
}

export default Links;