import React from 'react'
import Card from './components/Card'
const App = () => {

  const usersData = [
    {
      "id": 1,
      "name": "Aarav Sharma",
      "email": "aarav.sharma@example.com",
      "age": 28,
      "phone": "+91-9876543210",
      "city": "Mumbai",
      "country": "India",
      "isActive": true
    },
    {
      "id": 2,
      "name": "Emma Johnson",
      "email": "emma.johnson@example.com",
      "age": 32,
      "phone": "+1-415-555-1289",
      "city": "San Francisco",
      "country": "USA",
      "isActive": false
    },
    {
      "id": 3,
      "name": "Liam Chen",
      "email": "liam.chen@example.com",
      "age": 24,
      "phone": "+86-13900001111",
      "city": "Shanghai",
      "country": "China",
      "isActive": true
    },
    {
      "id": 4,
      "name": "Sofia Martinez",
      "email": "sofia.martinez@example.com",
      "age": 29,
      "phone": "+34-612-345-678",
      "city": "Madrid",
      "country": "Spain",
      "isActive": true
    },
    {
      "id": 5,
      "name": "Noah Williams",
      "email": "noah.williams@example.com",
      "age": 35,
      "phone": "+44-7700-900123",
      "city": "London",
      "country": "UK",
      "isActive": false
    }
  ]

  return (
    <div className='parent'>
      {usersData.map((user, index) => (
        <Card key={index} user={user} />
      ))}
    </div>
  )
}

export default App
