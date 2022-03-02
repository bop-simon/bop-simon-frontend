import { useState } from 'react'
import { useUser } from '../../context/userContext'
import styles from './profile.css'
import circle from '../../assets/CircleBB2.png'
import triangle from '../../assets/TriangleBB.png'
import hex from '../../assets/HexBB2.png'
import { editsProfile, getProfileById } from '../../services/profile'
import { useEffect } from 'react'
import { IconButton, Avatar, TextField } from '@mui/material'
import { Box } from '@mui/system'


export default function About() {
//  const [password, setPassword]=useState('')
//  const {user, setUser}= useUser() 
const [changeAvatar, setChangeAvatar]=useState(false)
const [currentAvatar, setCurrentAvatar]=useState(hex)





//  useEffect(()=>{
  //    getProfileById(user.id)
  //    .then((res) => {
    //      setPassword(res.password)
    //    })
    //  }, [user.id])
    
    //  const handleUpdatePassword = async() => {
      //    const updatePass = confirm('Would you like to update your password?');
      //    if(updatePass){
        //      editsProfile(id,{password})
        //    }
        //  }
    // const handleClick = (e) => { 
      //   onSubmit("password", e)
       // }
        
//what do I want to happen
//when the user clicks on the profile image, it brings up a selection of images
//that image gets saved as the user's profile image
//we will see that appear in the nav and in the profile view

//this will be set up locally until we implement userContext
function handleAvatarChange(name){
  setCurrentAvatar(name)
}
//Erich's Challenge: going to be setting some way to reference avatar in user db-- user is using circle, so in the user table, we might need an avatar column and a string that says "circle"
//because we are importing circle as a varaible, we need logic that will translate the variable circle into the string
//maybe a switch statement

//maybe import all the images into the userContext so that they live there and live throughout the app
//then when we set the user object to state, then we can set the arctual variable in state

//maybe create an images context where they can be made avaible throughout the app
 
 
  return (
    <>
    <Box
    style={{
      width:"500px",
      height:"300px",
      border:"1px solid black",
      display:"flex",
      alignItems:"center",
      justifyContent:"center",
      position:"relative"
    }}>
 <IconButton 
 aria-label="change"
 onClick={() => setChangeAvatar(true)}
 >
 <Avatar 
  src={currentAvatar}
  style={{
    margin: "10px",
    width: "200px",
    height: "200px",

  }} 
 />
</IconButton>
{ changeAvatar && <IconButton aria-label="change"
onClick={() => {
  handleAvatarChange(circle)
  setChangeAvatar(false)
}}
 style={{
  position:"absolute",
  bottom:"0px",
  right:"0px"
 }}>
 <Avatar 
  src={circle}
  style={{
    margin: "10px",
    width: "100px",
    height: "100px",
  }} 
 />
</IconButton>}
{ changeAvatar && <IconButton aria-label="change"
onClick={() => {
  handleAvatarChange(triangle)
  setChangeAvatar(false)
}}
 style={{
  position:"absolute",
  top:"0px",
  right:"0px"
 }}>
 <Avatar 
  src={triangle}
  style={{
    margin: "10px",
    width: "100px",
    height: "100px",
  }} 
 />
</IconButton>}
{ changeAvatar && <IconButton aria-label="change"
onClick={() => {
  handleAvatarChange(hex)
  setChangeAvatar(false)
}}
 style={{
  position:"absolute",
  bottom:"0px",
  left:"0px"
 }}>
 <Avatar 
  src={hex}
  style={{
    margin: "10px",
    width: "100px",
    height: "100px",
  }} 
 />
</IconButton>}
    </Box>
    {/* <TextField 
      onChange={handlePasswordChange}
      label="password" 
      color="secondary" 
      focused />
    <Button 
      variant="outlined" 
      onClick={handleClick}
    >next</Button> */}
    </>
  
  )
}
