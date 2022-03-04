import React from "react";

export default function Listitem() {
  const List = [
    "Event Settings",
    "Engage and Network",
    "Event Marketing",
    "Tickets",
    "Attendees",
    "Event Content",
    "Publish"
  ];
  return (
    <div className="Listitem">
      <ul>
        {List.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
}
