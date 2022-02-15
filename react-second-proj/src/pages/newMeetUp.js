import {useHistory} from 'react-router-dom'

import NewMeetUpForm from "../components/meetups/newMeetUpForm";

function NewMeetUpPage() {
  const history = useHistory()

  function addMeetUpHandler (meetUpData) {
    fetch('https://nonosbinroot-react-default-rtdb.asia-southeast1.firebasedatabase.app/meetups.json',{
      method: 'POST',
      body: JSON.stringify(meetUpData),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(()=> {
      history.replace('/')
    });
  }
  
  return (
  <section>
    <h1> Add New Meetup</h1>
    <NewMeetUpForm onAddMeetUp={addMeetUpHandler}/>
  </section>);
}

export default NewMeetUpPage;