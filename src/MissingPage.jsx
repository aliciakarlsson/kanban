import React from 'react'
import {Link} from 'react-router-dom'
import { TbFaceIdError } from "react-icons/tb";

const MissingPage = () => {
  return (
    <main className="missingPage">
      <TbFaceIdError size={'6rem'} />
      <h2>Oops, you've got the wrong URL</h2>
      <Link style={{ textDecoration: "none", color: "black" }} to="/">
        Try <b>this</b> one, it might work
      </Link>
    </main>
  );
}

export default MissingPage