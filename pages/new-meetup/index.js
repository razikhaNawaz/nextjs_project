// our-domain.com/new-meetup

import NewMeetupForm from "@/components/meetups/NewMeetupForm";
import Head from "next/head";
 import { useRouter } from "next/router";
import { Fragment } from "react";

function NewMeetupPage() {
  const router = useRouter();

  async function addMeetupHandler(enteredMeetupData) {
    const response = await fetch('/api/newmeetup', {
      method: 'POST',
      body: JSON.stringify(enteredMeetupData),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const data = await response.json();

    console.log(data);

     router.push('/');
  }

  return (
    <Fragment>
      <Head>
        <title>Add a new meetups</title>
        <meta 
        name='description'
        content="Add your own meetups and create amazing opportunities" />
      </Head>
        <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </Fragment>

  )
}

export default NewMeetupPage;