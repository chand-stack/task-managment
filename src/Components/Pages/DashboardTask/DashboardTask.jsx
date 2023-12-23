const DashboardTask = () => {
  return (
    <div className="grid md:grid-cols-3 min-h-screen">
      <div className="border border-blue-500 h-52 md:h-screen">
        <h1 className="text-lg md:text-2xl font-bold text-center py-3 border-y">
          Todo
        </h1>
      </div>
      <div className="border border-blue-500 h-52 md:h-screen">
        <h1 className="text-lg md:text-2xl font-bold text-center py-3 border-y">
          Ongoing
        </h1>
      </div>
      <div className="border border-blue-500 h-52 md:h-screen">
        <h1 className="text-lg md:text-2xl font-bold text-center py-3 border-y">
          Completed
        </h1>
      </div>
    </div>
  );
};

export default DashboardTask;
