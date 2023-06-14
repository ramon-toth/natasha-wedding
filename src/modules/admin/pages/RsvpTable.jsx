import React from "react";
import shortid from 'shortid';

function RsvpTable({ data }) {
  return (
    <div className="overflow-x-auto my-10 max-w-6xl overflow-y-hidden" >
      <div className="flex justify-center">
        <h2 className="text-xl font-bold my-10">RSVPs Received:</h2>
      </div>
      <table className="table table-normal  w-full ">
        <thead>
          <tr>
            <th className="bg-secondary text-primary" ></th>
            <th className="bg-secondary text-primary">Name</th>
            <th className="bg-secondary text-primary">Accepted</th>
            <th className="bg-secondary text-primary">Email</th>
            <th className="bg-secondary text-primary">Entree</th>
            <th className="bg-secondary text-primary">Dietary Restrictions</th>
            <th className="bg-secondary text-primary">Song Request</th>
            <th className="bg-secondary text-primary">Guests</th>
          </tr>
        </thead>
        <tbody>
          {data.map((d, i) => (
            <React.Fragment key={shortid.generate()}>
              <tr className="hover" key={shortid.generate()}>
                <th key={shortid.generate()} >{i + 1}</th>
                <td  key={shortid.generate()} className="text-xl font-bold">{d.fullname}</td>
                <td  key={shortid.generate()} className="text-xl">{d.accept}</td>
                <td  key={shortid.generate()} className="text-xl">{d.email}</td>
                <td  key={shortid.generate()} className="text-xl">{d.entree}</td>
                <td  key={shortid.generate()} className="text-xl">{d.dietary}</td>
                <td  key={shortid.generate()} className="text-xl">{d.songrequest}</td>
                <td  key={shortid.generate()} className="text-xl">{d.guestcount}</td>
              </tr>
              {d.guests.length > 0
                ? d.guests.map((g) => (
                    <tr className="hover" key={shortid.generate()}>
                      <th key={shortid.generate()} ></th>
                      <td key={shortid.generate()}  className="text-xl font-bold">{g.name}</td>
                      <td key={shortid.generate()}  className="text-xl"></td>
                      <td key={shortid.generate()}  className="text-xl"></td>
                      <td key={shortid.generate()}  className="text-xl">{g.entree}</td>
                      <td key={shortid.generate()}  className="text-xl">{g.dietary}</td>
                      <td key={shortid.generate()}  className="text-xl"></td>
                      <td key={shortid.generate()}  className="text-xl">-</td>
                    </tr>
                  ))
                : null}
            </React.Fragment>
          ))}
        </tbody>
        <tfoot>
        <tr>
          <th className="bg-secondary text-primary" ></th>
          <th className="bg-secondary text-primary">Name</th>
          <th className="bg-secondary text-primary">Accepted</th>
          <th className="bg-secondary text-primary">Email</th>
          <th className="bg-secondary text-primary">Entree</th>
          <th className="bg-secondary text-primary">Dietary Restrictions</th>
          <th className="bg-secondary text-primary">Song Request</th>
          <th className="bg-secondary text-primary">Guests</th>
        </tr>
        </tfoot>
      </table>
    </div>
  );
}

export default RsvpTable;
