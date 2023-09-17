import './App.css';
import {useState} from 'react'
import Calendar from 'react-calendar'; 


function App() {
  
  const [event, setEvent] = useState(false)
  const [eventTitle, setEventTitle] = useState("")
  const [eventDate, setEventDate] = useState("")
  const [allEvents, setAllEvents] = useState([])

  const [date, setDate] = useState(new Date())


  function createNewEvent(){
    setEvent(true)
  }

  function saveEvent(){
    const newEvent={
      eventTitle,
      eventDate
    }
    setAllEvents((prevEvents) => [...prevEvents, newEvent]);
    setEvent(false); 
  }


  return (
    <div className="App">
  
      <div className='events'>
        <button id="new" onClick={createNewEvent}>New</button>
        
        {event && (
          <form>
            <input placeholder='Event Title' name='Title' type='text' onChange={event => setEventTitle(event.target.value)}/>
            <input name='Event Date' type='date' onChange={event => setEventDate(event.target.value)}/>
            <button onClick={saveEvent}>Save</button>
            <button onClick={()=>{setEvent(false); }}>Cancel</button>
          </form>
        )}

        {allEvents.map((event, index) => (
          <div key={index}>
            <h3>{event.eventTitle}</h3>
            <p>{event.eventDate}</p>
          </div>
        ))}
      </div>
      

      {/* calendar */}
      <div className='Calendar'> 
        <div className="app">
          
          <div className="calendar-container">
            <Calendar onChange={setDate} value={date}/>
          </div>
          <div className="text-center">
              Selected date: {date.toDateString()}
          </div>
        </div>
      </div>
  

    </div>
  );
}

export default App;
 







