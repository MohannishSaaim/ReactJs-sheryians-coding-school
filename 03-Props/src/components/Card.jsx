import React from 'react'

const Card = (props) => {
    console.log(props);
  return (
    <div className='card'>
      <img src="https://plus.unsplash.com/premium_photo-1772048933498-d143b4808f18?q=80&w=1046&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="profile-pic" />
      <h1>{props.user.name}</h1>
      <h6>{props.user.email}</h6>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, reiciendis</p>
      <button>View Profile</button>
    </div>
  )
}

export default Card
