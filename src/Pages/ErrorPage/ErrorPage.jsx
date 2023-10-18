
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
    const navigate = useNavigate()

    const handleGoBack =() =>{
        navigate(-1)
    }
    return (
        <div>
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h1 className="text-5xl font-bold">404 Not Found</h1>
              <p className="py-6">
                The page you are looking for is not found. Recheck your input and try again.
              </p>
              <button onClick={handleGoBack} className="btn text-white bg-[#f60] hover:bg-[#f60]">Go Back</button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default ErrorPage;