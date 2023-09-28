import { useNavigate, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const navigate = useNavigate()
    const goHome=()=>{
        navigate("/")
    }
    const error = useRouteError();
  return (
    <div>
      <div className="grid justify-items-center my-40 space-y-5">
        <h1 className="text-4xl font-medium text-pink-600">Oops!</h1>
        <p className="text-3xl font-normal">Sorry, an unexpected error has occurred.</p>
        <p>
          <p className="text-2xl font-light text-pink-600">{error.statusText || error.message}</p>
        </p>
        <button  className="flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-pink-500 transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" onClick={goHome}>Go Home</button>
      </div>
    </div>
  );
};

export default ErrorPage;
