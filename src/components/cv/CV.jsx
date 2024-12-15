import Section from './Section';
import GeneralInformation from './GeneralInformation';
import EducationalExperience from './EducationalExperience';
import PracticalExperience from './PracticalExperience'

function CV({data, handleEdit}) {
  return (
    <>
      <h1>My CV</h1>
      <Section title={"General Information"} handleEdit={handleEdit}>
        <GeneralInformation data={data}/>
      </Section>
      <Section title={"Educational Experience"} handleEdit={handleEdit}>
        <EducationalExperience data={data}/>
      </Section>
      <Section title={"Practical Experience"} handleEdit={handleEdit}>
        <PracticalExperience data={data}/>
      </Section>
    </>
  )
}

export default CV