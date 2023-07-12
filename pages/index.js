import Head from "next/head";
import {Fragment} from 'react';
import MongoClient from "mongodb/lib/mongo_client";
import MeetupList from "@/components/meetups/MeetupList"


function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>React meetups</title>
        <meta 
        name='description'
        content="Browse a huge list of highly active meetups" />
      </Head>
      <MeetupList meetups={props.meetups} />
    </Fragment>
  )
  
}

// export async function getServerSideProps(context){
//   const req=context.req;
//   const res=context.res;
//   return {
//     props:{
//       meetups:DUMMY_MEETUPS
//     }
//   }
// }
export async function getStaticProps(){

  const client = await MongoClient.connect(
    "mongodb+srv://razikha02:hCw7UaLlsYZNG2dc@cluster0.wvoc4st.mongodb.net/meetups?retryWrites=true&w=majority"
  );

  const db = client.db();

  const meetupCollections = db.collection("meetups");

  const meetups=await meetupCollections.find().toArray()
  client.close()
  return {
    props: {
      meetups:meetups.map((meetup)=>({
        title:meetup.title,
        address:meetup.address,
        image:meetup.image,
        id:meetup._id.toString(),

      }))
    },
    revalidate:1
  }
} 

export default HomePage;
