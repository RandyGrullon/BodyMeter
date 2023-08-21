import MedidasCorporalesCRUD from "../components/BodyForm/MedidasCorporalesCRUD";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className="bg-white h-screen">
      <div>
        <Navbar />
      </div>
      <div>
        <MedidasCorporalesCRUD />
      </div>
    </div>
  );
}
