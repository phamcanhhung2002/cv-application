import { generalInformationInputs } from '../../data'


function GeneralInformationInputs({data, handleChange}) {
  return (
    <>
      {
        generalInformationInputs.map(({id, type, label}) => (
          <div className="mb-3" key={id}>
            <label htmlFor={id} className="form-label">{label}</label>
            <input type={type} className="form-control" id={id} value={data[id]} onChange={handleChange}/>
          </div>
        ))
      }
    </>
  )
}

export default GeneralInformationInputs