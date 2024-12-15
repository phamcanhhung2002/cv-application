

function Section({title, children}) {
  return (
    <section>
      <h2>{title}</h2>
      {children}
      <div className="d-flex column-gap-2">
        <button type="submit" className="btn btn-primary">Update</button>
      </div>
    </section>
  )
}

export default Section