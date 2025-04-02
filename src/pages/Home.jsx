import { useNavigate } from "react-router-dom";
import gifCat from "../assets/cat.gif"; // 📌 Línea 2: Importa el GIF

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="text-center p-10">
      <br />
      <br />
      <h2 className="text-2xl font-bold">¡Bienvenido a Cat Facts! 🐾</h2>
      <br />
      <br />
      <img 
        src={gifCat} 
        alt="Funny Cat" 
        className="mx-auto w-64 h-auto rounded-lg shadow-lg" 
      /> {/* 📌 Línea 7: Se agregó el GIF */}

      <br />
      <br />
      <p className="mt-2">Descubre curiosidades aleatorias sobre gatos.</p>
      <br />
      <br />
      <button
        onClick={() => navigate("/nueva-curiosidad")}
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
      >
        Ver una Curiosidad
      </button>
    </div>
  );
}
