import { useState, useEffect } from "react";

export default function MisCuriosidades() {
  const [savedFacts, setSavedFacts] = useState(
    JSON.parse(localStorage.getItem("savedFacts")) || []
  );
  const [selectedFact, setSelectedFact] = useState(null);

  const copyToClipboard = (fact) => {
    navigator.clipboard.writeText(fact).then(() => {
      alert("Curiosidad copiada al portapapeles");
    });
  };

  return (
    <div className="bg-gray-900 text-white p-8">
    <br />
    <br />
      <h2 className="text-3xl font-bold mb-6">Mis Curiosidades</h2>
      <br />
      <br />
      <div className="grid grid-cols-3 gap-4">
        {savedFacts.map((savedFact, index) => (
          <div
            key={index}
            className="relative"
            onClick={() => setSelectedFact(savedFact)}
          >
            <img
              src={savedFact.imageUrl}
              alt="Curiosidad guardada"
              className="w-full h-32 object-cover rounded-md shadow-lg cursor-pointer"
            />
          </div>
        ))}
      </div>

      {selectedFact && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
          onClick={() => setSelectedFact(null)}
        >
          <div className="bg-white p-6 rounded-md shadow-lg text-black w-96">
            <h3 className="text-xl font-bold mb-4">Curiosidad</h3>
            <p className="text-lg mb-4">{selectedFact.fact}</p>
            <button
              onClick={() => copyToClipboard(selectedFact.fact)}
              className="bg-blue-500 px-4 py-2 text-white rounded-md hover:bg-blue-400 transition duration-300"
            >
              Copiar al Portapapeles
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
