

function Section({title, children, handleEdit}) {
  return (
    <section>
      <h2>{title}</h2>
      {children}
      <button type="button" className="btn btn-secondary" onClick={handleEdit}>Edit</button>
    </section>
  )
}

export default Section