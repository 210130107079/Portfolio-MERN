import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";
import One from '../assets/1.json'

const Hero = () => {
  const roles = ["Full Stack Developer.", "Computer Engineer."];
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (subIndex === roles[index].length + 1 && !isDeleting) {
      setTimeout(() => setIsDeleting(true), 1000);
      return;
    }
    if (subIndex === 0 && isDeleting) {
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % roles.length);
      return;
    }

    const timeout = setTimeout(
      () => {
        setText(roles[index].substring(0, subIndex));
        setSubIndex((prev) => prev + (isDeleting ? -1 : 1));
      },
      isDeleting ? 50 : 150
    );

    return () => clearTimeout(timeout);
  }, [subIndex, index, isDeleting]);

  return (
    <section className="flex flex-col md:flex-row items-center justify-center min-h-screen px-6 md:px-20 bg-[#1c1b21] text-white">
      
      {/* LEFT CONTENT */}
      <div className="w-full md:w-[70%] space-y-6 text-center md:text-left md:mr-[100px]">
        <h1 className="text-3xl md:text-5xl font-bold lg:whitespace-nowrap">Hi, I Am <span className="text-[#FFEB00]">Soham Tarabda</span>
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold">I Am A <span className="bg-[#FFEB00] text-[#1c1b21] px-2 rounded">{text}</span>
        </h2>
        <hr className="opacity-0"/>
        <p className="text-base md:text-lg leading-relaxed">
          Skilled Full Stack Developer with over six months of experience in 
          building scalable and high-performance web applications. Proficient 
          in MongoDB, Express.js, React.js, Tailwind CSS, and Node.js, with a 
          strong ability to create seamless user experiences, optimize 
          application performance, and integrate APIs effectively. Passionate 
          about problem-solving and continuous learning.
        </p>
      </div>

      {/* RIGHT ANIMATION */}
      <div className="mt-10 mb-10 rounded-full md:mt-0 flex justify-center md:justify-end">
        <Lottie className="hover:scale-110 transition-all duration-500 shadow-[5px_5px_10px_#1b1c21_5px_5px_4px_#1b1c21] shadow-[#22242a] w-[250px] md:w-[400px] lg:w-[450px]"animationData={One}loop={true}/>
      </div>
    </section>
  );
};

export default Hero;
