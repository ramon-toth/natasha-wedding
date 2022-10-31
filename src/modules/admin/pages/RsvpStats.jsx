import React from "react";

function RsvpStats({ data }) {
  if (data.length < 1) return;

  const accepted = () => data.filter((d) => d.accept === "yes").length;
  const declined = () => data.filter((d) => d.accept === "no").length;
  const chicken = () =>
    data
      .map((d) => d.guests.filter((g) => g.entree === "chicken").length)
      .reduce((prev, cur) => prev + cur) +
    data.filter((d) => d.entree === "chicken").length;

  const meat = () =>
    data
      .map((d) => d.guests.filter((g) => g.entree === "meat").length)
      .reduce((prev, cur) => prev + cur) +
    data.filter((d) => d.entree === "meat").length;

  const veggie = () =>
    data
      .map((d) => d.guests.filter((g) => g.entree === "vegetarian").length)
      .reduce((prev, cur) => prev + cur) +
    data.filter((d) => d.entree === "vegetarian").length;

  return (
    <div className="overflow-x-auto mr-10 pt-[150px]">
      <table className="table w-full">
        <thead>
          <tr>
            <th className="bg-secondary text-primary">Totals</th>
            <th className="bg-secondary text-primary"></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Total</th>
            <td>{accepted()}</td>
          </tr>
          <tr className="hover">
            <th>Accepted</th>
            <td>{accepted()}</td>
          </tr>
          <tr>
            <th>Declined</th>
            <td>{declined()}</td>
          </tr>
          <tr>
            <th>Chicken</th>
            <td>{chicken()}</td>
          </tr>
          <tr>
            <th>Red Meat</th>
            <td>{meat()}</td>
          </tr>
          <tr>
            <th>Veggie</th>
            <td>{veggie()}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default RsvpStats;
