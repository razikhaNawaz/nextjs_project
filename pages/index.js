import MeetupList from "@/components/meetups/MeetupList";

const dummy_meetups = [
  {
    id: "m1",
    title: "a first meet up",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg",
    address: " a some address, 49A",
    description: "This is the first meetup",
  },
  {
    id: "m2",
    title: "a second meet up",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg",
    address: " a some address, 84A",
    description: "This is the second meetup",
  }
];
const HomePage = () => {
  return <MeetupList meetups={dummy_meetups} />;
};
export default HomePage;
