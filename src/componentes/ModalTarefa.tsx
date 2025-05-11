import React, { useState } from "react";

interface ModalTarefaProps {
  onAdicionarTarefa: (titulo: string) => void;
  onFechar: () => void;
}

const ModalTarefa: React.FC<ModalTarefaProps> = ({ onAdicionarTarefa, onFechar }) => {
  const [titulo, setTitulo] = useState("");

  const handleAdicionar = () => {
    if (titulo.trim()) {
      onAdicionarTarefa(titulo);
      setTitulo(""); // Limpa o input
      onFechar(); // Fecha o modal
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-black text-xl font-bold mb-4">Adicionar Nova Tarefa</h2>
        <input
          type="text"
          className="text-black w-full p-2 border rounded mb-4"
          placeholder="Digite o título da tarefa"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
        />
        <div className="flex justify-end gap-2">
          <button
            className="bg-gray-500 text-white px-4 py-2 rounded"
            onClick={onFechar}
          >
            Cancelar
          </button>
          <button
            className="bg-blue-900 text-white px-4 py-2 rounded"
            onClick={handleAdicionar}
          >
            Adicionar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalTarefa;