import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { FaTrashCan } from "react-icons/fa6";
import { FaPen } from "react-icons/fa";
import Swal from "sweetalert2";

const DashboardTask = () => {
  const { data: todolist = [], refetch: todofetch } = useQuery({
    queryKey: ["todolist"],
    queryFn: async () => {
      const res = await axios.get(
        "https://task-managment-server-eight.vercel.app/task"
      );
      return res.data;
    },
  });
  // console.log(todolist);
  const deleteHandler = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const res = axios.delete(
          `https://task-managment-server-eight.vercel.app/task/${id}`
        );
        console.log(res);
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
        todofetch();
        return;
      }
    });
  };
  return (
    <div className="grid md:grid-cols-3 h-screen">
      <div className=" h-52 md:h-full">
        <h1 className="text-lg md:text-2xl font-bold text-center py-3 border-y">
          Todo
        </h1>
        <div className="p-1">
          {todolist.map((item) => (
            <div key={item._id} className="card bg-base-100 border-2">
              <div className="card-body">
                <h2 className="card-title">{item?.title}</h2>
                <p>{item?.description}</p>
                <p>Deadline: {new Date(item?.deadline).toLocaleDateString()}</p>
                <div className="card-actions justify-center">
                  <button
                    onClick={() => deleteHandler(item?._id)}
                    className="btn bg-red-500 text-white"
                  >
                    <FaTrashCan />
                  </button>
                  <button className="btn bg-[#1e90ff] text-white">
                    <FaPen />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="border-y-2 md:border-x-2 md:border-y-0 border-blue-500 h-52 md:h-full">
        <h1 className="text-lg md:text-2xl font-bold text-center py-3 border-y">
          Ongoing
        </h1>
      </div>
      <div className=" h-52 md:h-full">
        <h1 className="text-lg md:text-2xl font-bold text-center py-3 border-y">
          Completed
        </h1>
      </div>
    </div>
  );
};

export default DashboardTask;
