import React, { useState,useEffect} from 'react'
import { FormControl, FormGroup, InputLabel, Input, Typography, styled, Button } from '@mui/material'
import { editUser,getUser } from '../service/api';
import { useNavigate,useParams } from 'react-router-dom';



const Container = styled(FormGroup)`
width:50%;
margin: 5% auto 0 auto;

& div > {
    margin-top : 70px
}

`


function EditUser() {
    const [user, setUser] = useState( '' )
    const navigate = useNavigate();
    const { userName} =useParams()
    
    useEffect(() => {
        loadUserDetails()
        
    }, [])
    
    
    const loadUserDetails = async () => {
        const response = await getUser(userName)
        setUser(response.data)
    }

    
    const onValueChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
        
        
    }
    const editUserDetails = async () => {
        await editUser(user[0],userName, )
        
    }
    return (
        <Container>
          <Typography variant='h4'> 
              Edit User
          </Typography>
          <FormControl>
              <InputLabel>Name</InputLabel>
              <Input onChange={(e)=>onValueChange(e)} name='name' value={user[0]?.name}/>
          </FormControl>
          <FormControl>
              <InputLabel>Username</InputLabel>
              <Input  onChange={(e)=>onValueChange(e)} value={user[0]?.userName} name='userName'/>
          </FormControl>
          <FormControl>
              <InputLabel>Email</InputLabel>
              <Input  onChange={(e)=>onValueChange(e)}  value={user[0]?.email} name='email'/>
          </FormControl>
          <FormControl>
              <InputLabel>Phone</InputLabel>
              <Input  onChange={(e)=>onValueChange(e)} value={user[0]?.phone} name='phone'/>
          </FormControl>
          <FormControl>
            <Button
  variant='contained'
                    onClick={() => {
    editUserDetails()
    navigate('/all', { replace: true })
  }}
>
  Edit  USer
</Button>
          </FormControl>
   </Container>
  )
}

export default EditUser