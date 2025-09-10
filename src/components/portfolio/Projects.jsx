import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Projects = ({ data }) => {
  // Get project icon based on title
  const getProjectIcon = (title) => {
    switch (title.toLowerCase()) {
      case 'bookly app':
        return '📚';
      case 'news app':
        return '📰';
      case 'weather app':
        return '🌤️';
      case 'notes app':
        return '📝';
      case 'chat app':
        return '💬';
      default:
        return '📱';
    }
  };

  // Get gradient colors based on project
  const getGradientColors = (title) => {
    switch (title.toLowerCase()) {
      case 'bookly app':
        return 'from-amber-500 to-orange-600';
      case 'news app':
        return 'from-blue-500 to-indigo-600';
      case 'weather app':
        return 'from-cyan-500 to-blue-600';
      case 'notes app':
        return 'from-green-500 to-emerald-600';
      case 'chat app':
        return 'from-purple-500 to-pink-600';
      default:
        return 'from-blue-500 to-purple-600';
    }
  };

  return (
    <div className="max-w-106 rounded-xl outline-[#FFFFFF] hover:shadow-2xl duration-300 transition-all shadow-gray-300 border border-gray-200 overflow-hidden bg-white">
      {/* Project Image with gradient overlay */}
      <div className={`relative h-48 bg-gradient-to-br ${getGradientColors(data?.title)} flex items-center justify-center`}>
        <div className="text-white text-center">
          <div className="text-5xl mb-2">{getProjectIcon(data?.title)}</div>
          <div className="text-sm font-medium opacity-90">{data?.title}</div>
        </div>
        {/* Tech stack badges */}
        <div className="absolute top-3 right-3 flex gap-1">
          <span className="bg-white/20 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full">
            Flutter
          </span>
          <span className="bg-white/20 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full">
            Dart
          </span>
        </div>
      </div>
      
      <div className="p-4 xs:p-8">
        <p className="text-gray-400 text-xs font-medium mb-2">{data?.category}</p>
        <p className="text-gray-900 text-md xxs:text-lg font-semibold pt-1 mb-3">
          {data?.title}
        </p>
        <p
          style={{ lineHeight: "20px", letterSpacing: "0%" }}
          className="text-gray-600 text-xs xxs:text-[14px] text-wrap mb-4"
        >
          {data?.description}
        </p>
        
        {/* Tech stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {data?.category?.split(' / ').map((tech, index) => (
            <span key={index} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full">
              {tech}
            </span>
          ))}
        </div>
        
        <a
          href={data?.link}
          target="_blank"
          rel="noopener noreferrer"
          className="btn hover:border-picto-primary hover:text-picto-primary bg-white text-sm xs:text-[16px] font-semibold hover:gap-3 xs:hover:gap-4 transition-all duration-300 mt-5 xs:py-5.75 px-6 max-sm:w-full border border-gray-200 hover:border-blue-500"
        >
          View Project
          <span className="ms-1 xs:ms-3">
            <FontAwesomeIcon icon={faArrowRight} size="l" className="" />
          </span>
        </a>
      </div>
    </div>
  );
};

export default Projects;
