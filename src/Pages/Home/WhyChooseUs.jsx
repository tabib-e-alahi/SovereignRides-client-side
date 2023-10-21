import { BiMedal } from "react-icons/bi";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { FaStudiovinari } from 'react-icons/fa';


const WhyChooseUs = () => {
  return (
    <div className="my-16">
      <h1 className="text-4xl lg:text-6xl mt-10 lg:mt-16 font-bold my-10 text-center">
        Why Choose Us
      </h1>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* card-1================== */}
        <div className="card  ">
        <figure className="px-10 pt-10 ">
          <VscWorkspaceTrusted className="text-7xl  bg-[#a6ebac]  p-4 rounded-full text-[#21591c]"></VscWorkspaceTrusted>
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-2xl mb-6">Trusted by our clients</h2>
            <p>We can help with your financing plan, we can offer some tips and tricks. Drive off with this dream car of yours regardless of your credit history.</p>
            
          </div>
        </div>

        {/* card-2========================== */}
        <div className="card  ">
          <figure className="px-10 pt-10 ">
          <BiMedal className="text-7xl  bg-[#edbb9a]  p-4 rounded-full text-[#f40]"></BiMedal>
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-2xl mb-6">Wide range of brands</h2>
            <p>We can help with your financing plan, we can offer some tips and tricks. Drive off with this dream car of yours regardless of your credit history.</p>
          </div>
        </div>

        {/* card-3======================================== */}
        <div className="card  ">
          <figure className="px-10 pt-10">
            <FaStudiovinari className="text-7xl  bg-sky-100  p-4 rounded-full text-sky-700"></FaStudiovinari>
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-2xl mb-6">Fast & easy financing</h2>
            
            <p>We can help with your financing plan, we can offer some tips and tricks. Drive off with this dream car of yours regardless of your credit history.</p>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
