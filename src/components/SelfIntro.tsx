import ManPfp from "../assets/easlo-laptop.svg";

interface SelfIntroProps {
  aboutRef: React.RefObject<HTMLHeadingElement>;
}

const SelfIntro: React.FC<SelfIntroProps> = ({ aboutRef }) => {
  return (
    <div className="flex flex-row w-full h-max space-x-2 items-center justify-center mb-4">
      <div className="flex-1 flex flex-col space-y-4 items-center justify-center">
        <h1
          ref={aboutRef}
          className="text-CustomGrey text-xl md:text-4xl font-bold text-left md:text-center py-4"
        >
          Vishal Karangale
        </h1>
        <p className="text-CustomGrey font-semibold text-sm text-left md:text-center">{`Hey, I'm Vishal, a software developer driven by curiosity and a love for creating groundbreaking solutions. With hands-on experience in various frameworks like React JS, Next JS, and Django, along with expertise in libraries such as Numpy, Pandas, and TensorFlow, I'm well-versed in navigating the diverse tech landscape.`}</p>
        <p className="hidden md:block text-CustomGrey font-semibold text-sm text-left md:text-center">{`Currently exploring the exciting realms of AI and web development at Jio Platforms, I'm passionate about harnessing technology to craft impactful solutions.`}</p>
        <p className="text-CustomYellow font-semibold text-sm text-left md:text-center">{`Let's collaborate and build something extraordinary together!`}</p>
      </div>
      <div className="hidden md:flex flex-1 flex-row items-center justify-center">
        <img src={ManPfp} className="w-1/2 h-1/3 object-cover" />
      </div>
    </div>
  );
};

export default SelfIntro;
