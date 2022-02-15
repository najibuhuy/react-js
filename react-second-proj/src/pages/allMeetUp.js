import MeetUpList from "../components/meetups/meetUpList";
import {useState, useEffect} from 'react'


function AllMeetUpPage() {
  const [isLoading, setIsLoading] = useState(true) // [current, update]
  const [loadedMeetUps, setLoadedMeetUps] = useState([])


  useEffect(() =>{
    setIsLoading(true);
    fetch('https://nonosbinroot-react-default-rtdb.asia-southeast1.firebasedatabase.app/meetups.json',{
      method: 'GET',
    }).then(response=> {
      return response.json()
    }).then(data => {
      console.log(data, "data")
      const arrData = []
      for (const key in data){
        const objData = {
          id : key,
          ...data[key]
        }
        arrData.push(objData)
      }
      setIsLoading(false)
      setLoadedMeetUps(arrData)
    });
  }, [])


  if(isLoading){
    return (
      <section>
        <p>Loading ...</p>
      </section>
    )
  }
    return (
      <section>
        <h1> all Meet up</h1>
        <MeetUpList meetups= {loadedMeetUps}/>
        
      </section>
    )
  }
  
  export default AllMeetUpPage;

