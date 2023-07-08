// our-domain.com/new-meetup
import NewMeetupForm from "@/components/meetups/NewMeetupForm";


const NewMeetupPage=()=>{
  function addMeetupHandler(enteredMeetupData) {
    console.log(enteredMeetupData);
  }

  return <NewMeetupForm onAddMeetup={addMeetupHandler} />
}

export default NewMeetupPage;