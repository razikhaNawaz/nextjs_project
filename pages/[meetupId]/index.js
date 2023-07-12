import { MongoClient } from "mongodb";
import MeetupDetail from "@/components/meetups/MeetupDetail";
import { ObjectId } from "mongodb";
import { Fragment } from "react";
import Head from "next/head";

function MeetupDetails(props) {
  return (
    <Fragment>
      <Head>
      <title>{props.meetupData.title}</title>
      <meta name="description" content={props.meetupData.description} />
      </Head>
       <MeetupDetail
      image={props.meetupData.image}
      title={props.meetupData.title}
      address={props.meetupData.address}
      description={props.meetupData.description}
    />
    </Fragment>
   
  );
}

export async function getStaticPaths() {
  const client = await MongoClient.connect(
    "mongodb+srv://razikha02:hCw7UaLlsYZNG2dc@cluster0.wvoc4st.mongodb.net/meetups?retryWrites=true&w=majority"
  );

  const db = client.db();
  const meetupCollections = db.collection("meetups");
  const meetups = await meetupCollections.find({}, { _id: 1 }).toArray();

  client.close();

  return {
    fallback: "blocking",
    paths: meetups.map((meetup) => ({
      params: { meetupId: meetup._id.toString() }
    })),
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;

  const client = await MongoClient.connect(
    "mongodb+srv://razikha02:hCw7UaLlsYZNG2dc@cluster0.wvoc4st.mongodb.net/meetups?retryWrites=true&w=majority"
  );

  const db = client.db();
  const meetupCollections = db.collection("meetups");
  const selectedMeetup = await meetupCollections.findOne({
    _id: ObjectId(meetupId),
  });

  client.close();

  if (!selectedMeetup) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      meetupData: {
        id: selectedMeetup._id.toString(),
        title: selectedMeetup.title,
        address: selectedMeetup.address,
        image: selectedMeetup.image,
        description: selectedMeetup.description,
      },
    },
  };
}

export default MeetupDetails;
