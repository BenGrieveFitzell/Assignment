import Sidebar from "../../components/Sidebar";
import "tailwindcss/tailwind.css";
import UserInfo from "./UserInfo";

function AddUser() {
  return (
    <div className="h-screen bg-gray-100 flex">
      <Sidebar />
      <div className="w-full">
        <div className="px-10 py-2">
          <UserInfo />
        </div>
      </div>
    </div>
  );
}

export default AddUser;
