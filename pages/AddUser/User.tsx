import { BsFillArrowRightCircleFill } from "react-icons/bs";

interface User {
  first_name: string;
  last_name: string;
  email: string;
  role: string;
}

function User({ first_name, last_name, role }: User) {
  return (
    <div className="flex rounded-lg w-[250px] mt-8 shadow-md hover:shadow-xl">
      <div className="bg-white rounded-lg p-2 flex items-center w-[250px] justify-between px-4">
        <div>
          <div className="flex">
            <div className="font-semibold">
              {first_name} {last_name}
            </div>
          </div>
          <div className="text-gray-500">{role}</div>
        </div>
        <BsFillArrowRightCircleFill className="h-5 w-5 text-yellow-500" />
      </div>
    </div>
  );
}

export default User;
