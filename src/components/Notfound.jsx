import { Link, useNavigate } from "react-router-dom";
import notfound404 from "/notfound404.gif";

const Notfound = () => {
  const navigate = useNavigate();
  return (
    <div className="relative w-screen h-screen bg-black flex justify-center items-center">
      <Link
        onClick={() => navigate(-1)}
        className="absolute top-[3%] right-[1%] font-medium mr-8 hover:text-[#6556CD] text-zinc-200 text-4xl ri-close-fill"
      ></Link>
      <img className="h-[50%] object-cover " src={notfound404} />
    </div>
  );
};

export default Notfound;
