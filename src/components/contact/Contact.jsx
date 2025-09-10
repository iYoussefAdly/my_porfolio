import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import Address from "./Address";
import Form from "./Form";
import SocialMedia from "../common/socialMedia/SocialMedia";

const addressData = [
  {
    icon: faLocationDot,
    title: "Location",
    description: "Beni-Suef, Egypt",
  },
  {
    icon: faEnvelope,
    title: "My Email",
    description: "youssefadly332@gmail.com",
  },
  {
    icon: faPhone,
    title: "WhatsApp",
    description: "01204188922",
  },
];

const Contact = () => {
  return (
    <div className="relative -bottom-15 -mt-15 z-10 px-2">
      <div
        className="content p-4 md:p-10 lg:p-22 bg-white rounded-2xl shadow-[0px_0px_90px_9px_rgba(0,_0,_0,_0.1)]"
        id="contact"
      >
        <div className="flex flex-col-reverse lg:gap-5 xl:gap-25.75 lg:flex-row justify-between">
          <div className="animate-fadeInLeft">
            <div>
              <p className="text-[35px] max-lg:hidden font-semibold text-nowrap bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Contact
              </p>
              <p className="text-[12px] xs:text-[14px] sm:text-lg md:text-lg max-lg:text-center pt-4 font-normal text-soft-dark">
                Let's work together! I'm always excited to discuss new projects and opportunities.
              </p>
            </div>
            <div className="my-8.75 sm:max-lg:flex justify-between items-center">
              {addressData.map((item, index) => (
                <div key={index} className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <Address item={item} />
                </div>
              ))}
            </div>
            <div className="w-full max-lg:text-center max-md:mb-4 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <SocialMedia />
            </div>
          </div>
          <div className="w-full overflow-y-scroll py-6.5 animate-fadeInRight">
            <p className="text-xl mb-2 xs:text-2xl sm:text-2xl md:text-[38px] font-semibold text-[#132238] lg:hidden text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Contact
            </p>
            <div className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <Form />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
