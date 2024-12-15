import { educationalExperienceInputs } from '../../data'


function EducationalExperienceInputs({data, handleChange}) {
  return (
    <>
    {
      educationalExperienceInputs.map(({id, type, label}) => (
        <div className="mb-3" key={id}>
          <label htmlFor={id} className="form-label">{label}</label>
          <input type={type} className="form-control" id={id} value={data[id]} onChange={handleChange}/>
      </div>
      ))
    }
    </>
  )
}

export default EducationalExperienceInputs