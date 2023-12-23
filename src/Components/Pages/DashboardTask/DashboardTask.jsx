const DashboardTask = () => {
  return (
    <div className="grid md:grid-cols-3 min-h-screen">
      <div className="border border-blue-500 h-52 md:h-screen">
        <h1 className="text-lg md:text-2xl font-bold">Todo</h1>
      </div>
      <div className="border border-blue-500 h-52 md:h-screen">
        <h1 className="text-lg md:text-2xl font-bold">Ongoing</h1>
      </div>
      <div className="border border-blue-500 h-52 md:h-screen">Completed</div>
    </div>
  );
};

export default DashboardTask;
