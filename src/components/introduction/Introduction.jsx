import person from "../../assets/images/photo_2025-04-29_13-02-55.jpg";
import "./introduction.css";
import InformationSummary from "./InformationSummary";

// Removed info summary cards for a cleaner junior-friendly header
const informationSummaryData = [];

const Introduction = () => {
  return (
    <div
      className="flex max-lg:flex-col-reverse sm:justify-between pt-10 lg:pt-31.5 lg:mb-27.5 max-xl:gap-2 p-2 max-xxl:px-4"
      id="introduction"
    >
      <div className="w-full flex flex-col justify-between max-lg:text-center">
        <div className="pt-13 me-31.5 w-full lg:w-auto transition-all duration-500 animate-fadeInLeft">
          <p className="text-3xl xxs:text-4xl sm:max-xl:text-5xl xl:text-6xl font-semibold w-full">
            Hello, I'm
            <span className="text-nowrap shrink-0 inline-block w-full bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Youssef Adly
            </span>
          </p>
          <p className="text-xs xxs:text-lg lg:text-[18px] my-6">
            I’m a <span className="bg-highlight">Flutter Developer</span> passionate about building
            high-quality cross-platform mobile apps with clean UI, solid
            architecture, and smooth performance. I work with Flutter, Dart,
            Firebase, and REST APIs to deliver user-friendly experiences.
          </p>
          <p className="text-xs xxs:text-lg lg:text-[16px] text-gray-600">
            Open to internships and freelance opportunities
          </p>
          <p className="text-center lg:text-start">
            <a
              className="btn-primary btn btn-xs xxs:btn-lg text-white"
              href="#contact"
            >
              Say Hello!
            </a>
          </p>
        </div>
        <div className="mx-auto lg:mx-0 relative"></div>
      </div>
      <div
        className={`max-w-134 w-full h-full max-lg:mx-auto aspect-[536/636] relative animate-fadeInRight`}
      >
        <img
          className={`shadow-2xl shadow-gray-200 w-full h-full absolute bottom-0 object-cover bg-white rounded-3xl`}
          src={person}
          alt="person"
        />
      </div>
    </div>
  );
};

export default Introduction;
