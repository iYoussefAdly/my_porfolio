import Projects from "./Projects";
import card1 from "../../assets/images/portfolio-images/card-1.png";
import card2 from "../../assets/images/portfolio-images/card-2.png";
import card3 from "../../assets/images/portfolio-images/card-3.png";
import card4 from "../../assets/images/portfolio-images/card-4.png";
import card5 from "../../assets/images/portfolio-images/card-5.png";
import card6 from "../../assets/images/portfolio-images/card-6.png";

const projectData = [
  {
    id: 1,
    image: card1,
    category: "Flutter / REST API",
    title: "Bookly App",
    description:
      "Browse and read books with smooth UI and API integration. Built with Flutter & Dart.",
    link: "https://github.com/iYoussefAdly/bookly_app.git",
  },
  {
    id: 2,
    image: card2,
    category: "Flutter / REST API",
    title: "News App",
    description:
      "Categorized news with a modern UI and clean state handling.",
    link: "https://github.com/iYoussefAdly/news_app.git",
  },
  {
    id: 3,
    image: card3,
    category: "Flutter / REST API",
    title: "Weather App",
    description:
      "Real-time weather data with a simple, intuitive UI.",
    link: "https://github.com/iYoussefAdly/weather_app.git",
  },
  {
    id: 4,
    image: card4,
    category: "Flutter / Hive",
    title: "Notes App",
    description:
      "Create, edit, and manage notes with local storage using Hive.",
    link: "https://github.com/iYoussefAdly/notes_app.git",
  },
  {
    id: 5,
    image: card5,
    category: "Flutter / Firebase",
    title: "Chat App",
    description:
      "Real-time chat with Firebase authentication and messaging.",
    link: "https://github.com/iYoussefAdly/Chat_app.git",
  },
  {
    id: 6,
    image: card6,
    category: "Flutter / Portfolio",
    title: "More Projects",
    description:
      "Find additional apps and experiments on my GitHub profile.",
    link: "https://github.com/iYoussefAdly",
  },
];

const Portfolio = () => {
  return (
    <div
      className="content mt-10 md:mt-15 xl:mt-25 mb-10 md:mb-25 max-xxl:p-2"
      id="portfolio"
    >
      <div className="xl:mb-17.5 mb-5">
        <div className="max-sm:px-2 text-center mx-auto max-w-144.25 animate-fadeInUp">
          <p className="section-title bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Projects</p>
          <p className="font-normal text-[18px] max-sm:text-[14px] pt-6 text-gray-400">
            Mobile apps I built with Flutter & Dart, focusing on clean UI and robust integrations.
          </p>
        </div>
      </div>
      <div className="mx-auto flex justify-center">
        <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-6 animate-fadeInUp">
          {projectData.map((data, index) => (
            <div key={index} className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <Projects data={data} />
            </div>
          ))}
        </div>
      </div>
      <div className="text-center animate-fadeInUp">
        <a
          href="https://github.com/iYoussefAdly"
          target="_blank"
          className="btn btn-primary py-3 px-6 mt-12.5 text-center text-[16px] font-semibold"
        >
          View GitHub
        </a>
      </div>
    </div>
  );
};

export default Portfolio;
