import {useState} from 'react';
import Form from './components/form/Form';
;
import CV from './components/cv/CV';
import { toDateString } from './utils';

const currentDate = new Date();
const Page = {
  Edit: 'edit',
  CV: 'cv',
};

function App() {
  const [data, setData] = useState({
    name: '',
    email: '',
    phone: '',
    schoolName: '',
    studyTitle: '',
    studyDate: toDateString(currentDate),
    companyName: '',
    positionTitle: '',
    mainResponsibilities:'',
    fromDate: toDateString(currentDate),
    toDate: toDateString(currentDate)
  });

  const [page, setPage] = useState(Page.Edit);

  const submitForm = (data) => {
    setData(data)
    setPage(Page.CV);
  }

  const handleEdit = () => {
    setPage(Page.Edit);
  }

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 mx-auto col-md-8 my-3">
            {page == Page.Edit ? (
              <Form data={data} submitForm={submitForm}/>
            ): (
              <CV data={data} handleEdit={handleEdit}/>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default App
