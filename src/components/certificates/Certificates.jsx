import { useState } from "react";

const certificatesData = [
  {
    id: 1,
    title: "Complete Flutter & Dart Development Course",
    provider: "Udemy",
    language: "Arabic",
    date: "05/21/2025",
    description: "Comprehensive Flutter and Dart development course covering mobile app development fundamentals, UI/UX implementation, and best practices.",
    skills: ["Flutter", "Dart", "Mobile Development", "UI/UX"],
    color: "from-blue-500 to-cyan-500"
  },
  {
    id: 2,
    title: "Master Git & GitHub: Essential Skills for Developers",
    provider: "Udemy", 
    language: "Arabic",
    date: "06/14/2025",
    description: "Complete guide to version control with Git and GitHub, including collaboration workflows, branching strategies, and project management.",
    skills: ["Git", "GitHub", "Version Control", "Collaboration"],
    color: "from-orange-500 to-red-500"
  },
  {
    id: 3,
    title: "Flutter Advanced Course: BLoC and MVVM Pattern",
    provider: "Udemy",
    language: "Arabic", 
    date: "08/01/2025",
    description: "Advanced Flutter development focusing on BLoC state management, MVVM architecture patterns, and scalable app architecture.",
    skills: ["BLoC", "MVVM", "State Management", "Architecture"],
    color: "from-purple-500 to-pink-500"
  }
];

const Certificates = () => {
  const [activeCertificate, setActiveCertificate] = useState(0);

  return (
    <div className="content py-15 lg:py-25 max-xxl:px-4" id="certificates">
      <div className="text-center mb-15 animate-fadeInUp">
        <p className="section-title bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Certificates & Achievements
        </p>
        <p className="font-normal text-[18px] max-sm:text-[14px] pt-6 text-gray-400 max-w-2xl mx-auto">
          Professional certifications and courses that validate my expertise in Flutter development and modern software practices
        </p>
      </div>

      {/* Certificate Navigation */}
      <div className="flex flex-wrap justify-center gap-2 mb-10 animate-fadeInUp">
        {certificatesData.map((cert, index) => (
          <button
            key={index}
            onClick={() => setActiveCertificate(index)}
            className={`px-4 py-2 rounded-full font-medium transition-all duration-300 text-sm ${
              activeCertificate === index
                ? "bg-primary text-white shadow-lg"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            {cert.provider}
          </button>
        ))}
      </div>

      {/* Active Certificate Display */}
      <div className="max-w-4xl mx-auto animate-fadeInUp">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Certificate Header */}
          <div className={`bg-gradient-to-r ${certificatesData[activeCertificate].color} p-8 text-white`}>
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-bold mb-2">
                  {certificatesData[activeCertificate].title}
                </h3>
                <div className="flex items-center gap-4 text-sm opacity-90">
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 bg-white rounded-full"></span>
                    {certificatesData[activeCertificate].provider}
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 bg-white rounded-full"></span>
                    {certificatesData[activeCertificate].language}
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 bg-white rounded-full"></span>
                    {certificatesData[activeCertificate].date}
                  </span>
                </div>
              </div>
              <div className="text-6xl opacity-20">
                🏆
              </div>
            </div>
          </div>

          {/* Certificate Content */}
          <div className="p-8">
            <p className="text-gray-600 mb-6 leading-relaxed">
              {certificatesData[activeCertificate].description}
            </p>
            
            {/* Skills Tags */}
            <div className="mb-6">
              <h4 className="text-sm font-semibold text-gray-700 mb-3">Skills Covered:</h4>
              <div className="flex flex-wrap gap-2">
                {certificatesData[activeCertificate].skills.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Certificate Status */}
            <div className="flex items-center justify-between pt-4 border-t border-gray-200">
              <div className="flex items-center gap-2 text-green-600">
                <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                <span className="text-sm font-medium">Certificate Completed</span>
              </div>
              <div className="text-sm text-gray-500">
                Issued: {certificatesData[activeCertificate].date}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* All Certificates Grid */}
      <div className="mt-15 animate-fadeInUp">
        <h3 className="text-xl font-semibold text-center mb-8 text-gray-800">
          All Certificates
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificatesData.map((cert, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className={`w-full h-2 bg-gradient-to-r ${cert.color} rounded-full mb-4`}></div>
              <h4 className="font-semibold text-gray-800 mb-2 text-sm">
                {cert.title}
              </h4>
              <div className="text-xs text-gray-500 mb-3">
                {cert.provider} • {cert.date}
              </div>
              <div className="flex flex-wrap gap-1">
                {cert.skills.slice(0, 3).map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded"
                  >
                    {skill}
                  </span>
                ))}
                {cert.skills.length > 3 && (
                  <span className="text-xs text-gray-400">
                    +{cert.skills.length - 3} more
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certificates;
