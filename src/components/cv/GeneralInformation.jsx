
import { generalInformationInputs } from "../../data"

function GeneralInformation({data}) {
  return (
    <>
      {
        generalInformationInputs.map(({label, id}) => (
          <div className="d-flex column-gap-1" key={id}>
            <strong>{label}:</strong>
            <span>{data[id]}</span>
          </div>
        ))
      }
    </>
  )
}

export default GeneralInformation