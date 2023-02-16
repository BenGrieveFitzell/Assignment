import Sidebar from "../components/Sidebar";
import "tailwindcss/tailwind.css";
import User from "../components/User";
import UserFunctions from "../components/UserFunctions";

const IndexPage = ({ data }) => (
  <div className="h-screen bg-gray-100 flex">
    <Sidebar />
    <div className="w-full ml-[140px] mt-[50px] px-10">
      <h1 className="text-3xl font-semibold">Our Users</h1>
      <UserFunctions data={data} />
    </div>
  </div>
);

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`https://test-front-p6cqni7znq-uc.a.run.app/`);
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}

export default IndexPage;
