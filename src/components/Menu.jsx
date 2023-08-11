import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function Menu() {
  let location = useLocation();

  return (
    <nav class="menu">
      <div class="logoContainer">
        <img src="/images/logo.png" alt="logo do site" class="logo" />
        <img src="/images/dogin.png" alt="Dogin" class="logoName" />
      </div>
      <div class="menuOpts">
        <ul>
          <li>
            <LinkTo label="Home" href="/" path={location.pathname} />
          </li>
          <li>
            <LinkTo label="Sobre" href="/about" path={location.pathname} />
          </li>
          <li>
            <LinkTo label="Raças" href="/breeds" path={location.pathname} />
          </li>
        </ul>
      </div>
    </nav>
  );
}

function LinkTo({ label, href, path }) {
  if (href === path) {
    return <>{label}</>;
  }

  return <Link to={href}>{label}</Link>;
}
