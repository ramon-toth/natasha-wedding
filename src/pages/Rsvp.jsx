import React from "react";
import { useState } from "react";

function Rsvp() {
  const [formData, setFormData] = useState({ guests: [] });

  const handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    const guestCount =
      target.type === "select-one" ? parseInt(target.value) : null;

    if (guestCount && formData.guests.length < 1) {
      const buildArray = Array.from(Array(guestCount).keys());
      formData.guests = buildArray.map(() => {
        return {};
      });
    }

    setFormData({ ...formData, [name]: value });
  };
  const handleGuestChange = (event, i) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    setFormData(() => {
      formData.guests[i][name.split("-")[1]] = value;
      return formData;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const declinedMessage = (
    <p className="mt-10">We're very sorry that you're unable to join us.</p>
  );

  const formFields = (
    <>
      {/*Entree preference*/}
      <fieldset id="entree">
        <div className="form-control mt-5">
          <label className="label">
            <span className="label-text">Entree Preference</span>
          </label>

          <label className="label cursor-pointer flex justify-start gap-x-10">
            <input
              type="radio"
              name="entree"
              value="chicken"
              className="radio radio-secondary"
              onChange={handleInputChange}
            />
            <span className="label-text">Chicken</span>
          </label>
          <label className="label cursor-pointer flex justify-start gap-x-10">
            <input
              type="radio"
              name="entree"
              value="meat"
              className="radio radio-secondary"
              onChange={handleInputChange}
            />
            <span className="label-text">Meat</span>
          </label>
          <label className="label cursor-pointer flex justify-start gap-x-10">
            <input
              type="radio"
              name="entree"
              value="vegetarian"
              className="radio radio-secondary"
              onChange={handleInputChange}
            />
            <span className="label-text">Vegetarian</span>
          </label>
        </div>
      </fieldset>

      {/*Email*/}
      <div className="form-control mt-5">
        <label className="label">
          <span className="label-text">E-mail</span>
        </label>
        <input
          name="email"
          type="text"
          placeholder="E-mail"
          className="input input-bordered input-secondary"
          onChange={handleInputChange}
        />
      </div>

      {/*Dietary Restrictions*/}
      <div className="form-control mt-5">
        <label className="label">
          <span className="label-text">Dietary Restrictions</span>
        </label>
        <textarea
          className="textarea textarea-secondary"
          placeholder="Dietary Restrictions"
          rows={4}
          name="dietary"
          onChange={handleInputChange}
        ></textarea>{" "}
      </div>

      {/*Song Request*/}
      <div className="form-control mt-5">
        <label className="label">
          <span className="label-text">
            Please submit a song request for the party!
          </span>
        </label>
        <textarea
          className="textarea textarea-secondary"
          placeholder="Song Request"
          rows={2}
          name="songrequest"
          onChange={handleInputChange}
        ></textarea>{" "}
      </div>

      {/*is Guest*/}
      <fieldset id="guest">
        <div className="form-control mt-5">
          <label className="label">
            <span className="label-text">Are you bringing a guest?</span>
          </label>
          <label className="label cursor-pointer flex justify-start gap-x-10">
            <input
              type="radio"
              name="guest"
              value="no"
              className="radio radio-secondary"
              onChange={handleInputChange}
            />
            <span className="label-text">No</span>
          </label>
          <label className="label cursor-pointer flex justify-start gap-x-10">
            <input
              type="radio"
              name="guest"
              value="yes"
              className="radio radio-secondary"
              onChange={handleInputChange}
            />
            <span className="label-text">Yes</span>
          </label>
        </div>
      </fieldset>
    </>
  );

  const guestFields = (
    <>
      {/*Number of Guest*/}
      <div className="form-control mt-5">
        <label className="label">
          <span className="label-text">How many guests do you have?</span>
        </label>
        <select
          className="select select-secondary w-full max-w-xs"
          name="guestcount"
          onChange={handleInputChange}
          disabled={formData.guests.length > 0}
        >
          <option>Please select number of guests</option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
      </div>

      {formData.guests.map((guest, i) => (
        <div key={i}>
          {/*Guest*/}
          <div className="form-control mt-5">
            <label className="label">
              <span className="label-text">Name of Guest {i + 1}</span>
            </label>
            <input
              name={`${i}-name`}
              type="text"
              placeholder="Name of Guest"
              className="input input-bordered input-secondary"
              onChange={(event) => handleGuestChange(event, i)}
            />
          </div>

          {/*Entree preference*/}
          <fieldset id={`${i}-entree`}>
            <div className="form-control mt-5">
              <label className="label">
                <span className="label-text">
                  Entree Preference of Guest {i + 1}
                </span>
              </label>

              <label className="label cursor-pointer flex justify-start gap-x-10">
                <input
                  type="radio"
                  name={`${i}-entree`}
                  // name={`entree${i}`}
                  value="chicken"
                  className="radio radio-secondary"
                  onChange={(event) => handleGuestChange(event, i)}
                />
                <span className="label-text">Chicken</span>
              </label>
              <label className="label cursor-pointer flex justify-start gap-x-10">
                <input
                  type="radio"
                  name={`${i}-entree`}
                  value="meat"
                  className="radio radio-secondary"
                  onChange={(event) => handleGuestChange(event, i)}
                />
                <span className="label-text">Meat</span>
              </label>
              <label className="label cursor-pointer flex justify-start gap-x-10">
                <input
                  type="radio"
                  name={`${i}-entree`}
                  value="vegetarian"
                  className="radio radio-secondary"
                  onChange={(event) => handleGuestChange(event, i)}
                />
                <span className="label-text">Vegetarian</span>
              </label>
            </div>
          </fieldset>

          {/*Dietary Restrictions*/}
          <div className="form-control mt-5">
            <label className="label">
              <span className="label-text">
                Dietary Restrictions of Guest {i + 1}
              </span>
            </label>
            <textarea
              className="textarea textarea-secondary"
              placeholder="Dietary Restrictions"
              rows={4}
              name={`${i}-dietary`}
              onChange={(event) => handleGuestChange(event, i)}
            ></textarea>{" "}
          </div>

          <div className="divider"></div>
        </div>
      ))}
    </>
  );
  return (
    <div className="flex justify-center">
      <div className="card w-full bg-base-100 shadow-xl m-10">
        <div className="flex justify-center">
          <div className="w-8/12">
            <div className="card-body">
              <h2 className="card-title">
                Please RSVP no later than April 1st, 2023.
              </h2>
              <form>
                {/*Name*/}
                <div className="form-control mt-5">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    name="fullname"
                    type="text"
                    placeholder="Name"
                    onChange={handleInputChange}
                    className="input input-bordered input-secondary"
                  />
                </div>

                {/*Accept/decline*/}
                <fieldset id="accept">
                  <div className="form-control mt-5">
                    <label className="label cursor-pointer flex justify-start gap-x-10">
                      <input
                        type="radio"
                        className="radio radio-secondary"
                        name="accept"
                        value="yes"
                        onChange={handleInputChange}
                      />
                      <span className="label-text">
                        <b>Accepts with pleasure</b>
                      </span>
                    </label>
                    <label className="label cursor-pointer flex justify-start gap-x-10">
                      <input
                        type="radio"
                        name="accept"
                        value="no"
                        className="radio radio-secondary"
                        onChange={handleInputChange}
                      />

                      <span className="label-text">
                        <b>Declines with regret</b>
                      </span>
                    </label>
                  </div>
                </fieldset>

                {formData.accept === "yes" ? formFields : null}
                {formData.accept === "no" ? declinedMessage : null}
                {formData.guest === "yes" ? guestFields : null}

                <div className="card-actions justify-center">
                  <button
                    onClick={handleSubmit}
                    className="btn btn-secondary text-white btn-md mt-10"
                  >
                    Submit RSVP
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rsvp;
