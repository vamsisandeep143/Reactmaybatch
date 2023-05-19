import React,{Link} from 'react'

const Profile = () => {
  return (
    <div>
      profile
      <Link to={{ pathname: "https://herewecode.io/" }} target="_blank">Click to open HereWeCode (new tab)</Link>
    </div>
  )
}

export default Profile
