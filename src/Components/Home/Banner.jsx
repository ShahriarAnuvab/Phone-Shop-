const Banner = () => {
  return (
    <div className="p-5">
      <div
        className="hero h-[300px] md:h-[600px]"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1616077168079-7e09a677fb2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)",
        }}
      >
        <div className="hero-overlay bg-opacity-60 p-5"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md flex flex-col md:flex-row  justify-center items-center gap-3">
            <div className="form-control w-full max-w-xs">
              <input
                type="text"
                placeholder="Search By category"
                className="input input-bordered w-full text-black "
              />
            </div>
            <button className="btn btn-primary">Search</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
