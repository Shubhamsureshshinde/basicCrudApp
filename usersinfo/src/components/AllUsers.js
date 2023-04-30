import React, { useState, useEffect } from 'react'
import { Button, Table, TableBody, TableCell, TableHead, TableRow, styled } from '@mui/material'
import { getUsers, deleteUser } from '../service/api'
import { Link } from 'react-router-dom'



const StyledTable = styled(Table)`
    width: 90%;
    margin:  50px 0 0 50px;`
    ;

const Thead = styled(TableRow)`
   & > th {
        font-size: 20px;
        background: #000000;
        color: #FFFFFF;
         
    }
 `
const TRow = styled(TableRow)`
    & > td{
        font-size: 18px
    }
`;


function AllUsers() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getAllUsers()
        // Empty dependancy array means componentDidMount
    }, [])

    const getAllUsers = async () => {
        try {
            const response = await getUsers();
            setUsers(response?.data);
        } catch (error) {
        }
    }
    const deleteUserDetails = async (userName) => {
        await deleteUser(userName)
        getAllUsers()
    }



    return (
        <StyledTable>
            <TableHead>
                <Thead>
                    <TableCell>Id</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>userName</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Phone</TableCell>
                    <TableCell>Actions</TableCell>

                </Thead>
            </TableHead>
            <TableBody>
                {users?.map(user =>

                (
                    <TRow>
                        <TableCell>{user._id}</TableCell>
                        <TableCell>{user.name}</TableCell>
                        <TableCell>{user.userName}</TableCell>
                        <TableCell>{user.email}</TableCell>
                        <TableCell>{user.phone}</TableCell>
                        <TableCell>
                            <Button color='primary' style={{ marginRight: 10 }} component={Link} to={`/edit/${user?.userName}`} variant='contained'>Edit</Button>
                            <Button color='secondary' onClick={() => deleteUserDetails(user.userName)} variant='contained'>Delete</Button>
                        </TableCell>

                    </TRow>
                )


                )}
            </TableBody>
        </StyledTable>
    )
}

export default AllUsers