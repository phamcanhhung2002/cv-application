import { practicalExperienceInputs } from '../../data'


function PraticalExperienceInputs({data, handleChange}) {
  return (
    <>
      {
        practicalExperienceInputs.map(({id, type, label}) => (
          <div className="mb-3" key={id}>
            <label htmlFor={id} className="form-label">{label}</label>
            {type !== "textArea" ? (<input type={type} className="form-control" id={id} value={data[id]} onChange={handleChange}/>):
            (<textarea className="form-control" rows={5} id={id} value={data[id]} onChange={handleChange}/>)}
          </div>
        ))
      }
    </>
  )
}

export default PraticalExperienceInputs