import { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { useRouter } from "next/router";
import { AiOutlinePlus } from "react-icons/ai";
import User from "./User";

function UserFunctions(props) {
  const { data } = props;
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  // Filter users based on search query
  const filteredUsers = data.filter((user) =>
    `${user.first_name} ${user.last_name}`
      .toLowerCase()
      .includes(searchQuery.toLowerCase())
  );

  return (
    <div className="max-w-[900px]">
      <div className="grid space-y-5 sm:space-y-0 sm:flex sm:items-center sm:justify-between sm:px-4 mt-10">
        <div className="bg-white p-2 py-3 shadow-xl rounded-2xl flex items-center md:scale-[120%] w-[220px]">
          <BiSearch className="text-xl" />
          <input
            placeholder="Search for a user"
            className="placeholder-gray-800 text-left text-sm ml-3 outline-none"
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
          />
        </div>
        <button
          className="bg-white shadow-lg rounded-2xl flex items-center p-2 py-2 md:scale-[120%]"
          onClick={() => router.push("/AddUser/AddUser")}
        >
          <AiOutlinePlus className="text-gray-100 bg-[#3F6BEC] border border-[#3F6BEC] rounded-lg p-1 w-7 h-7" />
          <h3 className="ml-2 text-sm">add new user</h3>
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 mt-10 sm:scale-[110%] sm:justify-items-center">
        {filteredUsers.map((user) => (
          <div key={user.id}>
            <User
              key={user.id}
              first_name={user.first_name}
              last_name={user.last_name}
              email={user.email}
              role={user.role}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserFunctions;
