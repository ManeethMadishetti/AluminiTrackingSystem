import { Container, Paper, Table, TableContainer,TableHead,TableRow } from '@material-ui/core'
import React from 'react'
import { Tab } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/userSlice'
import './Profile.css'

function Profile() {
    const user = useSelector(selectUser);
    const Names = user.user.displayName;
    return (
        <div>
            <Container id="Profile">
            <Table id="Profile_container">
            <table class="table">
                <tbody>
                    <tr>
                    <th>Name</th>
                    <td>{Names}</td>
                    </tr>
                    <tr>
                    </tr>
                    <tr>
                    <th>Email</th>
                    <td>{user.user.email}</td>
                    </tr>
                </tbody>
                </table>
            </Table>
            </Container>
        </div>
    )
}

export default Profile
