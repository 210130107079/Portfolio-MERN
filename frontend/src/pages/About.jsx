import React from "react";
import { GraduationCap, Calendar, Award, Briefcase, Contact } from "lucide-react";
import {assets} from '../assets/assets.js'

const educationData = [
  {
    institution: "Alembic Vidyalaya",
    location: "Vadodara",
    degree: "Secondary School Certification",
    duration: "Mar 2018 - Mar 2019",
    grade: "92.5 %",
    description: "Secured an impressive 92.5% in SSC examinations from Alembic Vidyalaya in Vadodara.",
    logo: "https://www.alembicgroupschools.org/wp-content/uploads/2024/02/Alembic_Vidyalaya_Logo-1024x1024_webp.webp",
    position: "left",
  },
  {
    institution: "Parth School of Science and Competition",
    location: "Vadodara",
    degree: "Higher Secondary Education (XII), Science",
    duration: "Mar 2020 - Mar 2021",
    grade: "89.73%",
    description: "Achieved an outstanding 89% in HSC examinations from Parth School of Science and Competition in Vadodara. Demonstrated consistent academic excellence and a strong grasp of core subjects",
    logo: "https://scontent.famd15-2.fna.fbcdn.net/v/t39.30808-6/302343819_460845892725427_7104845145471700312_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=ns4obnSuz0UQ7kNvgH2KMwl&_nc_oc=AdiOpFTvk63OCq7nneO6KGYoz14Jbo0PqdXm7LsUK_4-vCVCoGXanI23mqpj0RgWkMwg4VEfzt-NarMbPtpQNBLO&_nc_zt=23&_nc_ht=scontent.famd15-2.fna&_nc_gid=AXaboeMeArv-iiTRggaMd8Z&oh=00_AYCV9pbrATfrIgn-KeQxsvIe_xh5ESAYpFit-JFFt8nWMw&oe=67C10069",
    position: "right",
  },
  {
    institution: "GEC Gandhinagar",
    location: "Gandhinagar",
    degree: "Bachelor of Engineering",
    duration: "Sept 2021 - Present...",
    grade: "7.67 CGPA",
    description: "Currently maintaining a 7.83 CGPA in my BE program at GEC Gandhinagar. Committed to furthering my education and honing my technical skills",
    logo: "https://gecg28.ac.in/Gandhinagar_files/img/GECG_logo.png",
    position: "left",
  },
];

const internshipData = [
  {
    institution: "CodSoft",
    location: "Ahmedabad",
    degree: "Android Development",
    duration: "Mar 2024 - Apr 2024",
    description: "Completed a 1-month Android Development internship at CodSoft, gaining experience in building and debugging Android apps",
    logo: "https://scontent.famd15-1.fna.fbcdn.net/v/t39.30808-6/358136597_117822154699953_3641829578259871145_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=Urrg75AhefEQ7kNvgFgdskA&_nc_oc=AdhAJCfNZZKngPa8f9CtfNyk6qLHVhnpC_kKV7YPE3VC0DVtldbqwwPXBJwt-ohqj-c&_nc_zt=23&_nc_ht=scontent.famd15-1.fna&_nc_gid=AGPgCwFfLYxqidUTeJORXQm&oh=00_AYA0cz6tnPgWl5P3-_9zaXnAkguvJCcTrUZh7G9R8eINVg&oe=67C0E4EF",
    position: "right",
  },
  {
    institution: "STYPIPX",
    location: "Ahmedabad",
    degree: "Android Development",
    duration: "June 2024 - July 2024",
    description: "Completed a 1-month internship at STYPIX specializing in Android development. Gained experience in app development.",
    logo: "https://media.glassdoor.com/sql/2328612/stypix-squarelogo-1540816898025.png",
    position: "left",
  },
  {
    institution: "Web-brain Technologies",
    location: "Vadodara",
    degree: "Full Stack (MERN)",
    duration: "Jan 2025 - Present...",
    description: "My ongoing MERN Stack internship at Web-brain Technologies, Vadodara, has been a journey of hands-on learning, skill development, and professional growth. I am gaining expertise in MongoDB, Express.js, React, and Node.js while working on real-world projects, enhancing my problem-solving abilities, and collaborating with a dynamic development team.",
    logo: "https://scontent.famd15-2.fna.fbcdn.net/v/t39.30808-6/304994274_576363527614404_2635560141303497959_n.png?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=zQeRBOy3dSQQ7kNvgHZuTBC&_nc_oc=AdgODhpifILzbUXCEHgML8JeMV8hBgyymksgLsCxbuBbDmK37pnFsLYXyOR2P1N0P3k&_nc_zt=23&_nc_ht=scontent.famd15-2.fna&_nc_gid=Ax2ZG0Fw7agSN5xsHLLxY0b&oh=00_AYAVYpoxqgnqnvfFDfNg0IvBxbRSSsb4w_548ddzJrUq4Q&oe=67C111D4",
    position: "right",
  },
];

export const About = () => {
  return (
    <div className="min-h-screen text-white py-16 px-4">

        {/* EDUCATION */}
      <div className="max-w-4xl mx-auto mb-30">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 flex text-center justify-center gap-3 text-[#FFEB00] items-center">
            <GraduationCap className="w-10 h-10 text-[#FFEB00]" />
            Education
          </h1>
          <p className="text-[#1b1c21] bg-[#FFEB00] px-3 py-1 rounded-sm text-center text-lg">
            My education has been a journey of self-discovery, growth and skill development.<br/>
            My educational details are as follows.
          </p>
        </div>

        <div className="relative">
          <div className="absolute w-1 bg-white h-full left-1/2 transform -translate-x-1/2"></div>

          {educationData.map((education, index) => (
            <div
              key={index}
              className={`mb-12 flex ${
                education.position === "left" ? "justify-start" : "justify-end"
              } relative`}
            >
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full mt-8 z-10" />

              <div
                className={`w-1/2 ${
                  education.position === "left" ? "pr-8" : "pl-8"
                }`}
              >
                <div className="bg-[#1c1b21] backdrop-blur-sm rounded-xl p-6 shadow-xl hover:shadow-[#454754] hover:shadow-xl transition-all duration-300 border border-white">
                  <div className="flex items-start gap-4">
                    <img
                      src={education.logo}
                      alt={education.institution}
                      className="w-14 h-14 rounded-lg object-cover"
                    />
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-1">
                        {education.institution}
                      </h3>
                      <p className="text-white text-sm mb-2">
                        {education.location}
                      </p>
                    </div>
                  </div>

                  <div className="mt-4">
                    <p className="text-blue-400 font-medium mb-2">
                      {education.degree}
                    </p>
                    <div className="flex items-center gap-2 text-gray-400 text-sm mb-3">
                      <Calendar className="w-4 h-4" />
                      <span>{education.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-white text-sm mb-4">
                      <Award className="w-4 h-4" />
                      <span>{education.grade}</span>
                    </div>
                    <p className="text-white text-sm">
                      {education.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* HORIZONTAL LINE B/W EDUCATION AND INTERNSHIP */}
      <hr className="mt-20 w-full h-1 rounded-sm"/>

      {/* INTERNSHIP DATA */}
      <div className="max-w-4xl mx-auto mt-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 flex items-center justify-center gap-3 text-[#FFEB00]">
            <Briefcase className="w-10 h-10 text-[#FFEB00]" />
            Internships
          </h1>
          <p className="text-[#1b1c21] bg-[#FEEB00] rounded-sm px-3 py-1 text-center text-lg">
            My internship has been a journey of hands-on learning, professional growth, and skill enhancement. It has provided me with valuable hands-on experience.
          </p>
        </div>

        <div className="relative">
          <div className="absolute w-1 bg-white h-full left-1/2 transform -translate-x-1/2"></div>

          {internshipData.map((internship, index) => (
            <div
              key={index}
              className={`mb-12 flex ${
                internship.position === "left" ? "justify-start" : "justify-end"
              } relative`}
            >
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full mt-8 z-10" />

              <div
                className={`w-1/2 ${
                  internship.position === "left" ? "pr-8" : "pl-8"
                }`}
              >
                <div className="bg-[#1c1b21] backdrop-blur-sm rounded-xl p-6 shadow-xl hover:shadow-[#454754] hover:shadow-xl transition-all duration-300 border border-white">
                  <div className="flex items-start gap-4">
                    <img
                      src={internship.logo}
                      alt={internship.institution}
                      className="w-14 h-14 rounded-lg object-cover"
                    />
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-1">
                        {internship.institution}
                      </h3>
                      <p className="text-white text-sm mb-2">
                        {internship.location}
                      </p>
                    </div>
                  </div>

                  <div className="mt-4">
                    <p className="text-blue-400 font-medium mb-2">
                      {internship.degree}
                    </p>
                    <div className="flex items-center gap-2 text-gray-400 text-sm mb-3">
                      <Calendar className="w-4 h-4" />
                      <span>{internship.duration}</span>
                    </div>
                    <p className="text-white text-sm">
                      {internship.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <hr className="mt-20 w-full h-1 rounded-sm"/>

      {/* SKILLS */}
      <div className="min-h-screen bg-transparent flex flex-col items-center p-8 gap-8 mt-10">
        <h1 className="text-5xl flex font-bold text-[#FFEB00]">
          <img className="w-12 h-13 mr-2 justify-center align-middle " src={assets.Skill} alt="" />SKILLS</h1> 
        <p className=" text-lg bg-[#FFEB00] text-[#1b1c21] px-3 py-2 rounded-sm">The Skills, Tools and Technologies I Use </p>

            
            {/* First 3 */}
          <div className="flex justify-center gap-7 mb-1 mt-10">
            <img className="w-16 h-16 hover:shadow-xl hover:shadow-[#da3528] rounded-full" src={assets.Java} alt="" />
            <img className="w-16 h-16 rounded-full hover:shadow-xl hover:shadow-[#f3be20]" src={assets.Python} alt="" />
            <img className="w-16 h-16 hover:shadow-xl hover:shadow-[#ffde01] rounded-md" src={assets.Javascript} alt="" />
          </div>


            {/* 5 Image */}
          <div className="flex justify-center gap-7 mb-1">
            <img className="w-16 h-16 hover:shadow-xl hover:shadow-[#700fbc] rounded-full" src={assets.Node1} alt="" />
            <img className="w-16 h-16 hover:shadow-xl hover:shadow-white rounded-full" src={assets.Express} alt="" />
            <img className="w-16 h-16 hover:shadow-xl hover:shadow-[#83c7eb] rounded-full" src={assets.React} alt="" />
            <img className="w-16 h-16 hover:shadow-xl hover:shadow-white rounded-full" src={assets.Mongo} alt="" />
            <img className="w-16 h-16 hover:shadow-xl hover:shadow-white rounded-full" src={assets.Tailwind} alt="" />
          </div>


          {/* Last Row */}
          <div className="flex justify-center gap-7">
            <img className="w-16 h-16 hover:shadow-xl hover:shadow-[#6e64c4] rounded-full" src={assets.Vscode} alt="" />
            <img className="w-16 h-16 hover:shadow-xl hover:shadow-[#2fdd82] rounded-full" src={assets.Android} alt="" />
            <img className="w-16 h-16 hover:shadow-xl hover:shadow-[#ed6d3e] rounded-full" src={assets.Postman} alt="" />
          </div>
      </div>


    </div>
  );
};

export default About;