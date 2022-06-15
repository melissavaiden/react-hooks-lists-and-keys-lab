import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  let specificLinks = links.map(link => {
    return <a key={link} href={`#${link}`}>{link}</a>
  })
  return <nav>
    {specificLinks}
  </nav>;
}

export default NavBar;
