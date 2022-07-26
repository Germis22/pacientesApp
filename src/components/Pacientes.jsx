import React from "react";

const Pacientes = ({ paciente, setPaciente, eliminarPaciente }) => {

    const {nombre, propietario, email, fecha, sintoma, id} = paciente

    const handleEliminar = () => {
      const respuesta = confirm('Deseas eliminar este paciente?')

      if (respuesta) {
        eliminarPaciente(id)
      }
    }

  return (
    <div className="m-3 mx-5 mb-7 bg-white shadow-md px-5 py-10 rounded-xl">
      <p className="font-bold mb-3 text-gray-600 uppercase">
        Nombre: {""}
        <span className="font-normal normal-case">{nombre}</span>
      </p>

      <p className="font-bold mb-3 text-gray-600 uppercase">
        Propietario: {""}
        <span className="font-normal normal-case">{propietario}</span>
      </p>

      <p className="font-bold mb-3 text-gray-600 uppercase">
        Email: {""}
        <span className="font-normal normal-case">{email}</span>
      </p>

      <p className="font-bold mb-3 text-gray-600 uppercase">
        Fecha Alta: {""}
        <span className="font-normal normal-case">{fecha}</span>
      </p>

      <p className="font-bold mb-3 text-gray-600 uppercase">
        Síntomas: {""}
        <span className="font-normal normal-case">{sintoma}
        </span>
      </p>

      <div className="flex justify-between mt-10">
        <button 
          type="button"
          className="py-2 px-10 bg-indigo-500 hover:bg-indigo-600 text-white font-bold uppercase rounded-lg"
          onClick={() => setPaciente(paciente)}
          >
          Editar
        </button>

        <button 
          type="button"
          className="py-2 px-10 bg-red-500 hover:bg-red-600 text-white font-bold uppercase rounded-lg"
          onClick={handleEliminar}
        >
          Eliminar
        </button>
      </div>

    </div>
  );
};

export default Pacientes;
