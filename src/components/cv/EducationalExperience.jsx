
import { educationalExperienceInputs } from "../../data"

function EducationalExperience({data}) {
  return (
    <>
      {
        educationalExperienceInputs.map(({label, id}) => (
          <div className="d-flex column-gap-1" key={id}>
            <strong>{label}:</strong>
            <span>{data[id]}</span>
          </div>
        ))
      }
    </>
  )
}

export default EducationalExperience