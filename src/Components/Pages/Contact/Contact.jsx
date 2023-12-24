import bg from "../../../assets/logo-taskio-tasklogo.png";
const Contact = () => {
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
        <div className="h-full w-full bg-[#1e90ff] bg-opacity-70 flex justify-center items-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white">
            Contact Us
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Contact;
