import React, { useEffect, useState } from "react";
import RsvpTable from "./RsvpTable";

function RsvpAdmin() {
  const getGuestList = () => {
    const token = window.sessionStorage.getItem("token");
    fetch(process.env.REACT_APP_API_SERVER + "/api/rsvp", {
      headers: {
        authorization: `Bearer: ${token}`,
      },
    })
      .then((response) => response.json())
      .then((res) => setGuestList(res.map((r) => r.payload)))
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  useEffect(() => getGuestList(), []);

  const [guestList, setGuestList] = useState([]);

  return (
    <div className="w-screen flex justify-center">
      {guestList.length > 0 ? <RsvpTable data={guestList} /> : null}
    </div>
  );
}

export default RsvpAdmin;
