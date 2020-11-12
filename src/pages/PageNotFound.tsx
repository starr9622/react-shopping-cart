import * as React from "react";
import { useLocation } from "react-router-dom";

export default function NoMatch() {
  let location = useLocation();

  return (
    <div className="noPage">
      <h1>
      Page Not Found : <code>{location.pathname}</code>
      </h1>
    </div>
  );
}