import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

const About = () => {
  return (
    <div>
      <section className="flex items-center bg-stone-100 xl:h-screen font-poppins dark:bg-gray-800 ">
        <div className="justify-center flex-1 max-w-6xl py-4 mx-auto lg:py-6 md:px-6">
          <div className="flex flex-wrap ">
            <div
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0"
            >
              <div className="relative lg:max-w-md">
                <div className="h-80">
                <img
                  src="https://i.ibb.co/0frZsTP/mer-banner.png"
                  alt="aboutimage"
                  className="relative z-10 object-cover w-full h-full rounded "
                />
                </div>
                <div className="absolute bottom-0 right-0 z-10 p-8 bg-white border-4 border-blue-500 rounded shadow dark:border-blue-400 lg:-mb-8 lg:-mr-11 sm:p-8 dark:text-gray-300 dark:bg-gray-800 ">
                  <p className="text-lg font-semibold md:w-72">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      className="absolute top-0 left-0 w-16 h-16 text-blue-700 dark:text-gray-300 opacity-10"
                      viewBox="0 0 16 16"
                    >
                      <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z"></path>
                    </svg>{" "}
                    Successfully Supplying automotive products since 1998
                  </p>
                </div>
              </div>
            </div>

            <div
              data-aos="fade-left"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              className="w-full px-6 mb-10 lg:w-1/2 lg:mb-0 "
            >
              <div className="pl-4 mb-6 border-l-4 border-blue-500 ">
                <span className="text-sm text-gray-600 uppercase dark:text-gray-400">
                  Who we are?
                </span>
                <h1 className="mt-2 text-3xl font-black text-gray-700 md:text-5xl dark:text-gray-300">
                  About Us
                </h1>
              </div>
              <p className="mb-6 text-base leading-7 text-gray-500 dark:text-gray-400">
              Welcome to SovereignRides, where the road meets passion. We are not just an automotive website; we are a community of enthusiasts who live and breathe everything on four wheels. Our mission is to deliver the latest industry updates, comprehensive vehicle reviews, and expert advice to empower every driver, from the novice to the connoisseur. With a team of seasoned automotive writers and gearheads, we are committed to sharing our knowledge and love for cars, helping you make informed choices and explore the exciting world of automobiles. So, fasten your seatbelts, embark on a journey with us, and let the road be your guide.
              </p>
              <a
                href="#"
                className="px-4 py-2 text-gray-100 bg-blue-500 rounded dark:bg-blue-400 dark:hover:bg-blue-500 hover:bg-blue-600"
              >
                Learn more
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
