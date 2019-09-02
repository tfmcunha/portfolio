import React, { useState, useEffect } from "react";

export default function ListItem({ idx, item, timer, lng }) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, Math.abs((idx - lng) * timer));
  }, [timer, idx, lng]);

  return (
    <li className={`items ${!loaded ? "hidden" : "slideDown"}`}>{item}</li>
  );
}