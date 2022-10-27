import React from "react";

function RsvpTable({ data }) {
  return (
    <div className="overflow-x-auto my-10">
      <table className="table table-normal  w-full ">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Accepted</th>
            <th>Email</th>
            <th>Entree</th>
            <th>Dietary Restrictions</th>
            <th>Song Request</th>
            <th>Guests</th>
          </tr>
        </thead>
        <tbody>
          {data.map((d, i) => (
            <>
              <tr className="hover">
                <th>{i + 1}</th>
                <td className="text-xl font-bold">{d.fullname}</td>
                <td>{d.accept}</td>
                <td>{d.email}</td>
                <td>{d.entree}</td>
                <td>{d.dietary}</td>
                <td>{d.songrequest}</td>
                <td>{d.guestcount}</td>
              </tr>
              {d.guests.length > 0
                ? d.guests.map((g) => (
                    <tr className="hover">
                      <th></th>
                      <td className="text-xl font-bold">{g.name}</td>
                      <td></td>
                      <td></td>
                      <td>{g.entree}</td>
                      <td>{g.dietary}</td>
                      <td></td>
                      <td>-</td>
                    </tr>
                  ))
                : null}
            </>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Accepted</th>
            <th>Email</th>
            <th>Entree</th>
            <th>Dietary Restrictions</th>
            <th>Song Request</th>
            <th>Guests</th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

export default RsvpTable;
