import React from 'react'
import './profile.css'
import Header2 from '../header2/Header2'
import ProfileSideBar from '../profilesidebar/ProfileSideBar'
import UserPost from '../userPost/UserPost'
const Profile = () => {
  return (
    <>
    <ProfileSideBar/>
    <Header2></Header2>
    <UserPost/>
    </>
  )
}

export default Profile;