import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="p-4 bg-gray-800 text-white flex justify-between">
      <h1 className="text-xl">🐱 Cat Facts 🐱</h1>
      <br />
      <br />
      <div>
        <Link to="/" className="mr-4">Inicio</Link>
        <Link to="/mis-curiosidades">Mis Curiosidades</Link>
      </div>
    </nav>
  );
}

