import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { useState, useEffect } from "react";

interface User {
  first_name: string;
  last_name: string;
  email: string;
  role: string;
}

function User({ first_name, last_name, role }: User) {
  const [roleState, setRoleState] = useState("");
  useEffect(() => {
    if (role == "ADMIN") {
      setRoleState("Administrator");
    } else {
      setRoleState("Regular user");
    }
  }, []);
  return (
    <div className="flex rounded-lg w-[250px] mt-8 shadow-md hover:shadow-xl hover:scale-[105%] hover:ease-out hover:duration-200 cursor-pointer">
      <div className="bg-white rounded-lg p-2 flex items-center w-[250px] justify-between px-4">
        <div>
          <div className="flex">
            <div className="font-semibold">
              {first_name} {last_name}
            </div>
          </div>
          <div className="text-gray-500">{roleState}</div>
        </div>
        <BsFillArrowRightCircleFill className="h-5 w-5 text-[#DCA97C]" />
      </div>
    </div>
  );
}

export default User;
