import React, { useEffect, useState } from "react";
import RsvpTable from "./RsvpTable";
import RsvpStats from "./RsvpStats";

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
    <div className="w-screen  h-screen flex justify-center">
      <RsvpStats data={guestList} />
      {guestList.length > 0 ? (
        <RsvpTable data={guestList} />
      ) : (
        <h2 className="text-xl">No RSVPs to show yet...</h2>
      )}
    </div>
  );
}

export default RsvpAdmin;
