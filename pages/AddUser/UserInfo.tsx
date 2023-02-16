import { useState } from "react";
import axios from "axios";
import { User } from "./types/User";
import { v4 as uuidv4 } from "uuid";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { useRouter } from "next/router";

function UserInfo() {
  const router = useRouter();
  function goBack() {
    router.back();
  }

  const [first_name, setFirst_name] = useState<string>("");
  const [last_name, setLast_name] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [role, setRole] = useState<string>("");

  const createUser = async () => {
    const newUser: User = { id: uuidv4(), first_name, last_name, email, role };
    try {
      const response = await axios.post(
        "https://test-front-p6cqni7znq-uc.a.run.app/",
        newUser
      );
      console.log("User created", response.data);
      // Reset the form
      setFirst_name("");
      setLast_name("");
      setEmail("");
      setRole("");
      router.back();
    } catch (error) {
      console.error("Failed to create user", error);
    }
  };

  return (
    <div>
      <div className="my-5 bg-white rounded-lg p-4 flex items-center justify-between">
        <div className="flex items-center space-x-[60px] ">
          <BsFillArrowLeftCircleFill
            className="h-8 w-8 text-[#DCA97C] cursor-pointer"
            onClick={goBack}
          />
          <h2 className="font-semibold text-xl">Add new user</h2>
        </div>
        <button
          onClick={createUser}
          className="bg-[#52D8B1] text-gray-100 font-medium rounded-md p-2"
        >
          save and add
        </button>
      </div>
      <div className="px-10 grid space-y-20 bg-white rounded-lg pt-10 pb-[300px]">
        <h2 className="text-xl font-medium">User information</h2>
        <div className="grid grid-cols-3 space-x-4">
          <div className="grid space-y-10">
            <div>
              <h3 className="text-gray-400 font-medium">FIRST NAME</h3>
              <div className="border w-[200px] hover:shadow-md">
                <input
                  placeholder="insert first name"
                  className="p-2 outline-none"
                  value={first_name}
                  onChange={(e) => setFirst_name(e.target.value)}
                />
              </div>
            </div>
            <div>
              <h3 className="text-gray-400 font-medium">ROLE</h3>
              <div className="text-gray-400 border w-[200px] hover:shadow-md">
                <select
                  className="p-2 outline-none w-[180px] "
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                >
                  <option value="">select role</option>
                  <option value="ADMIN">Administrator</option>
                  <option value="DEV">Regular user</option>
                </select>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-gray-400 font-medium">LAST NAME</h3>
            <input
              placeholder="insert last name"
              className="p-2 outline-none border hover:shadow-md"
              value={last_name}
              onChange={(e) => setLast_name(e.target.value)}
            />
          </div>
          <div>
            <h3 className="text-gray-400 font-medium">EMAIL</h3>
            <input
              placeholder="insert email address"
              className="p-2 outline-none border hover:shadow-md"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserInfo;
