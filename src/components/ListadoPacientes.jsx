import Pacientes from './Pacientes'

const ListadoPacientes = ({pacientes, setPaciente, eliminarPaciente}) => {
  return (

    <div className="md:w-1/2 lg:w-3/5">

      {pacientes && pacientes.length ? (
        <>
          <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Administra tus {""}
            <span className="text-indigo-500 font-bold">Pacientes y Citas</span>
          </p>

          <div className='-mt-3 mb-10 md:h-screen md:overflow-y-scroll'>
            
            {pacientes.map( paciente => {
              return <Pacientes
                key={paciente.id}
                paciente={paciente}
                setPaciente={setPaciente}
                eliminarPaciente={eliminarPaciente}
              />
            })}
          </div>
        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center">No Hay Pacientes</h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Empieza agregando tus pacientes {""}
            <span className="text-indigo-500 font-bold">y Apareceran Aquí</span>
          </p>
        </>
      )}
    </div>
  )
}

export default ListadoPacientes