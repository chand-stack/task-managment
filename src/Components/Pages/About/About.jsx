import bg from "../../../assets/logo-taskio-tasklogo.png";
import img from "../../../assets/logo-taskio-tasklogo.png";
import { MdRoundaboutRight } from "react-icons/md";
import { LuArrowRightFromLine } from "react-icons/lu";
import NewsLetter from "../../Shared/NewsLetter/NewsLetter";
const About = () => {
  return (
    <div>
      <div
        className="h-52 md:h-96"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="h-full w-full bg-[#1e90ff] bg-opacity-90 flex justify-center items-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            About Us
          </h1>
        </div>
      </div>
      <div className=" container mx-auto grid grid-cols-1 md:grid-cols-2 my-20 md:gap-5">
        <div className="relative">
          <img
            className="mx-auto rounded-xl max-h-screen p-5 md:p-0"
            src={img}
            alt=""
          />
          <div className="p-1 absolute right-5 bottom-0 bg-base-100 shadow-xl">
            <div className="">
              <h2 className="card-title text-white bg-[#34cceb] text-2xl">
                Task managment
              </h2>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:pr-20">
          <p className="text-[#34cceb] text-lg md:text-2xl font-medium flex-grow flex items-center gap-3">
            <MdRoundaboutRight />
            TaskNinja
          </p>
          <h1 className="text-2xl md:text-5xl font-semibold text-black flex-grow">
            Best TaskManagment system for you
          </h1>
          <p className="leading-8 flex-grow">
            TaskNinja - Unleashing Productivity Mastery
          </p>
          <div className="space-y-3 flex-grow">
            <p className="flex items-center gap-2">
              <LuArrowRightFromLine className="text-white bg-orange-400 rounded-full text-3xl p-1" />
              Intuitive Task Management: Effortlessly organize your tasks with
              our user-friendly interface. Drag and drop tasks between
              &quot;To-Do,&quot; &quot;Ongoing,&quot; and &quot;Completed&quot;
              categories, making task management a breeze.
            </p>
            <p className="flex items-center gap-2">
              <LuArrowRightFromLine className="text-white bg-orange-400 rounded-full text-3xl p-1" />
              Flexible Workflows: Tailor TaskNinja to your unique workflow.
              Adapt the system to fit your specific project needs, ensuring a
              personalized and efficient task management experience.
            </p>
            <p className="flex items-center gap-2">
              <LuArrowRightFromLine className="text-white bg-orange-400 rounded-full text-3xl p-1" />
              Deadline Tracking: Stay on top of your deadlines. TaskNinja
              provides tools to set and track deadlines, ensuring that you meet
              your goals and deliverables on time.
            </p>
          </div>
          <div className="bg-white flex items-center p-2 gap-2">
            {/* <img className="w-24 h-24 rounded-full" src={img1} alt="" /> */}
            <div>
              <h1 className="font-bold">Chand Rahman</h1>
              <p className="flex items-center gap-2 text-gray-500">Founder</p>
            </div>
          </div>
        </div>
      </div>
      <NewsLetter />
    </div>
  );
};

export default About;
