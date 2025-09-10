import { useState } from "react";

const skillsData = [
  {
    category: "Core Development",
    skills: [
      { name: "Flutter", level: 90, color: "bg-blue-500" },
      { name: "Dart", level: 85, color: "bg-cyan-500" },
      { name: "UI/UX Implementation", level: 80, color: "bg-green-500" },
      { name: "APIs Integration", level: 85, color: "bg-purple-500" },
    ]
  },
  {
    category: "Backend & Storage",
    skills: [
      { name: "Firebase", level: 80, color: "bg-orange-500" },
      { name: "Shared Preferences", level: 85, color: "bg-yellow-500" },
      { name: "Hive", level: 80, color: "bg-red-500" },
      { name: "Local Storage", level: 75, color: "bg-indigo-500" },
    ]
  },
  {
    category: "State Management",
    skills: [
      { name: "Cubit", level: 85, color: "bg-pink-500" },
      { name: "BLoC", level: 80, color: "bg-teal-500" },
      { name: "State Management", level: 85, color: "bg-emerald-500" },
      { name: "Provider", level: 75, color: "bg-violet-500" },
    ]
  },
  {
    category: "Tools & Others",
    skills: [
      { name: "Git & GitHub", level: 85, color: "bg-gray-700" },
      { name: "VS Code", level: 90, color: "bg-blue-600" },
      { name: "Figma", level: 75, color: "bg-pink-600" },
      { name: "Debugging", level: 80, color: "bg-yellow-600" },
    ]
  }
];

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <div className="content py-15 lg:py-25 max-xxl:px-4" id="skills">
      <div className="text-center mb-15 animate-fadeInUp">
        <p className="section-title bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Skills & Technologies</p>
        <p className="font-normal text-[18px] max-sm:text-[14px] pt-6 text-gray-400 max-w-2xl mx-auto">
          My expertise in Flutter development, state management, and backend integration
        </p>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-10 animate-fadeInUp">
        {skillsData.map((category, index) => (
          <button
            key={index}
            onClick={() => setActiveCategory(index)}
            className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
              activeCategory === index
                ? "bg-primary text-white shadow-lg"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            {category.category}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 animate-fadeInUp">
        {skillsData[activeCategory].skills.map((skill, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 animate-pulse-slow"
          >
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-semibold text-gray-800">{skill.name}</h3>
              <span className="text-sm text-gray-500">{skill.level}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className={`h-2 rounded-full transition-all duration-1000 ${skill.color}`}
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>

      {/* Additional Info */}
      <div className="mt-15 text-center animate-fadeInUp">
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Always Learning & Growing
          </h3>
          <p className="text-gray-600 mb-6">
            I'm constantly improving my Flutter skills and exploring new technologies. 
            Currently focusing on advanced state management patterns, clean architecture, and performance optimization.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="bg-white px-4 py-2 rounded-full text-sm font-medium text-gray-700 shadow-sm">
              🚀 Flutter Performance
            </span>
            <span className="bg-white px-4 py-2 rounded-full text-sm font-medium text-gray-700 shadow-sm">
              🏗️ Clean Architecture
            </span>
            <span className="bg-white px-4 py-2 rounded-full text-sm font-medium text-gray-700 shadow-sm">
              🎨 Advanced UI/UX
            </span>
            <span className="bg-white px-4 py-2 rounded-full text-sm font-medium text-gray-700 shadow-sm">
              🔧 State Management
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
