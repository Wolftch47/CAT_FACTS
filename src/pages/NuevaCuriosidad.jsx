import { useState, useEffect } from "react";
import axios from "axios";

export default function NuevaCuriosidad() {
  const [fact, setFact] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [savedFacts, setSavedFacts] = useState(
    JSON.parse(localStorage.getItem("savedFacts")) || []
  );

  useEffect(() => {
    axios.get("https://catfact.ninja/fact").then((response) => {
      setFact(response.data.fact);
    });

    axios.get("https://cataas.com/cat").then((response) => {
      setImageUrl(`https://cataas.com/cat/${response.data.id}`);
    });
  }, []);

  const saveFact = () => {
    const newSavedFacts = [...savedFacts, { fact, imageUrl }];
    setSavedFacts(newSavedFacts);
    localStorage.setItem("savedFacts", JSON.stringify(newSavedFacts));
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(fact).then(() => {
      alert("Curiosidad copiada al portapapeles");
    });
  };

  return (
    <div className="flex flex-col items-center bg-gray-900 text-white p-8">
      <h2 className="text-3xl font-bold mb-4">Curiosidad Aleatoria</h2>
      <p className="text-lg mb-4">{fact}</p>
      <img src={imageUrl} alt="Gato curioso" className="mb-4 w-60 h-60 object-cover rounded-md shadow-lg" />
      <div className="flex space-x-4">
        <button
          onClick={saveFact}
          className="bg-green-500 px-6 py-2 text-white rounded-md hover:bg-green-400 transition duration-300"
        >
          Guardar Curiosidad
        </button>
        <button
          onClick={copyToClipboard}
          className="bg-blue-500 px-6 py-2 text-white rounded-md hover:bg-blue-400 transition duration-300"
        >
          Copiar al Portapapeles
        </button>
      </div>
    </div>
  );
}
