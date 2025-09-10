import Roles from "./Roles";

const rolesData = [
  {
    id: 1,
    title: "Cross‑Platform App Development",
    description:
      "Build iOS and Android apps with Flutter and Dart, focusing on performance, responsiveness, and a clean architecture.",
  },
  {
    id: 2,
    title: "UI Implementation from Figma/Adobe XD",
    description:
      "Convert designs into pixel‑perfect Flutter UIs with reusable widgets and responsive layouts.",
  },
  {
    id: 3,
    title: "Firebase & API Integration",
    description:
      "Implement Firebase Auth, Firestore, and REST APIs with robust state management (Provider/BLoC basics).",
  },
  {
    id: 4,
    title: "Code Version Control",
    description:
      "Use Git & GitHub for clean commits, code reviews, and collaborative workflows.",
  },
];

const Profession = () => {
  return (
    <div
      className="content grid md:grid-cols-2 max-xxl:px-4 xxl:px-2 py-10 md:py-15 lg:py-37.5"
      id="services"
    >
      <div className="flex flex-col justify-between h-fit md:pe-8 lg:pe-35.75 max-md:text-center my-auto">
        <p className="section-title max-md:text-center">What I do</p>
        <div className="mt-6 text-[14px]">
          <p className="text-xs sm:text-lg font-normal text-gray-400 mb-4">
            I help teams ship mobile apps faster using Flutter with clean UI and maintainable code.
          </p>
          <p className="text-xs sm:text-lg font-normal text-gray-400">
            From implementing designs to integrating Firebase and APIs, I deliver reliable cross‑platform solutions.
          </p>
        </div>
        <a
          href="#contact"
          className="mt-5 md:mt-12.5 btn btn-primary text-white w-fit md:py-3 md:px-6 text-[12px] sm:text-[16px] font-semibold max-md:mx-auto max-md:mb-5"
        >
          Say Hello!
        </a>
      </div>
      <div className="">
        {rolesData.map((role, index) => (
          <Roles role={role} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Profession;
