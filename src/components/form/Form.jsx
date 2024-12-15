import Section from "./Section";
import GeneralInformationInputs from "./GeneralInformationInputs";
import  {useState} from "react";
import EducationalExperienceInputs from "./EducationalExperienceInputs";
import PraticalExperienceInputs from "./PraticalExperienceInputs";

function Form({data, submitForm, handleEdit}) {
  const [formData, setFormData] = useState({...data});
  const { 
    name, email, phone, schoolName, 
    studyTitle, studyDate, companyName, 
    positionTitle, mainResponsibilities,
    fromDate, toDate
  } = formData;

  const handleFormDataChange = (e) => {
    setFormData({...formData, [e.target.id]: e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    submitForm(formData);
  }

  return (
    <form className="d-flex flex-column row-gap-3" onSubmit={handleSubmit}>
      <h1>Submit your apllication</h1>
      <Section title="General Information" handleEdit={handleEdit}  >
        <GeneralInformationInputs 
          data={{name, email, phone}} 
          handleChange={handleFormDataChange}
        />
      </Section>
      <Section title="Educational Experience" handleEdit={handleEdit}>
        <EducationalExperienceInputs 
          data={{schoolName, studyTitle, studyDate}} 
          handleChange={handleFormDataChange}
        />
      </Section>
      <Section title="Pratical Experience" handleEdit={handleEdit}>
        <PraticalExperienceInputs 
          data={{companyName, positionTitle, mainResponsibilities, fromDate, toDate}} 
          handleChange={handleFormDataChange}
          handleEdit={handleEdit}
        />
      </Section>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  );
}

export default Form;