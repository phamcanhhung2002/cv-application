import React from 'react'
import { practicalExperienceInputs } from '../../data'

function PracticalExperience({data}) {
  return (
    <>
      {
        practicalExperienceInputs.map(({label, id, type}) => (
          type !== "textArea" ? (
            <div className="d-flex column-gap-1" key={id}>
              <strong>{label}:</strong>
              <span>{data[id]}</span>
            </div>
          ): (
            <div key={id}>
              <strong>{label}:</strong>
              <p>{data[id]}</p>
            </div>
          ))
        )
      }
    </>
  )
}

export default PracticalExperience