function Map({ location }) {
  return (
    <div className="card md:w-10/12 bg-base-100 shadow-xl bg-opacity-90">
      <div className="card-body ">
        <iframe
          title="googlemap"
          className="w-full h-96"
          src={location}
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}

export default Map;
