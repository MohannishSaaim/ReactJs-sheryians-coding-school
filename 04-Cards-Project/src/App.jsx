import React from 'react'
import Card from './components/Card'

function App() {

 const jobOpenings = [
  {
    brandLogo: "https://unavatar.io/google.com",
    companyName: "Google",
    datePosted: "2 days ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    location: "Bangalore, India",
    hourlyRate: "$120/hr"
  },
  {
    brandLogo: "https://unavatar.io/microsoft.com",
    companyName: "Microsoft",
    datePosted: "3 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    location: "Hyderabad, India",
    hourlyRate: "$100/hr"
  },
  {
    brandLogo: "https://unavatar.io/amazon.com",
    companyName: "Amazon",
    datePosted: "1 week ago",
    post: "Backend Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    location: "Pune, India",
    hourlyRate: "$150/hr"
  },
  {
    brandLogo: "https://unavatar.io/meta.com",
    companyName: "Meta",
    datePosted: "4 days ago",
    post: "React Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    location: "Remote",
    hourlyRate: "$110/hr"
  },
  {
    brandLogo: "https://unavatar.io/netflix.com",
    companyName: "Netflix",
    datePosted: "5 days ago",
    post: "Full Stack Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    location: "Remote",
    hourlyRate: "$130/hr"
  },
  {
    brandLogo: "https://unavatar.io/apple.com",
    companyName: "Apple",
    datePosted: "1 day ago",
    post: "iOS Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    location: "Bangalore, India",
    hourlyRate: "$125/hr"
  },
  {
    brandLogo: "https://unavatar.io/uber.com",
    companyName: "Uber",
    datePosted: "6 days ago",
    post: "Backend Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    location: "Hyderabad, India",
    hourlyRate: "$140/hr"
  },
  {
    brandLogo: "https://unavatar.io/airbnb.com",
    companyName: "Airbnb",
    datePosted: "1 week ago",
    post: "Node.js Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    location: "Remote",
    hourlyRate: "$115/hr"
  },
  {
    brandLogo: "https://unavatar.io/stripe.com",
    companyName: "Stripe",
    datePosted: "3 days ago",
    post: "API Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    location: "Remote",
    hourlyRate: "$135/hr"
  },
  {
    brandLogo: "https://unavatar.io/adobe.com",
    companyName: "Adobe",
    datePosted: "2 days ago",
    post: "Cloud Engineer",
    tag1: "Part Time",
    tag2: "Junior Level",
    location: "Noida, India",
    hourlyRate: "$90/hr"
  }
];


  return (
    <div className='parent'>
      {
      jobOpenings.map((job, index) => (
        <Card key={index} job={job} />
      ))
      }
    </div>
  )
}

export default App
