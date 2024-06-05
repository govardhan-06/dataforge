import React, { useState,useContext,useEffect } from 'react';
import {useNavigate,useLocation} from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Navigationbar from "../components/Navigationbar";
import Form from 'react-bootstrap/Form';
import { UserContext } from '../components/UserContext';
import "../styles/solveCTF.css"
import api from "../api"

function SolveCTF() {
    const location = useLocation();
    const { data } = location.state || {};

    useEffect(() => {
        data
    }, []);

    const { currentUser } = useContext(UserContext);
    const [userflag,setUserFlag]=useState('');
    const navigate=useNavigate();

    const handleflag=(e)=>{
        e.preventDefault();
        if(userflag==data.flag){
            alert("Correct Flag!");
            const api_data={"user": currentUser.id,"points": data.points}
            api
                .patch("/api/update/points/", api_data)
                .then((res) => {
                    if (res) console.log("Points updated");
                    else console.log("Failed to update Points");})
                .catch((err) => alert(err));
            
            const solved_challenge={
                "user":currentUser.id,
                "challenge":data.id
            }    
            console.log(solved_challenge)
            api
                .post("/api/CTF/solved/", solved_challenge)
                .then((res) => {
                    if (res) console.log("Updated");
                    else console.log("Failed");})
                .catch((err) => alert(err));
            navigate("/")
        }
        else{
            alert("Incorrect Flag!");
        }
    }

    return (
        <div className="bg-dark text-light display-CTF">
            <Navigationbar/>
            <div className="CTF-card">
                <Card className="CTF-details" data-bs-theme="dark" >
                    <Card.Header>{data.category}</Card.Header>
                    <Card.Body>
                        <Card.Title>{data.title}</Card.Title>
                        <div className="description-CTF"><Card.Text>{data.description}</Card.Text></div>
                        <Card.Text>Author : {data.author}</Card.Text>
                         <Card.Text>Difficulty : {data.difficulty}</Card.Text>
                         <Card.Text>Points : {data.points}</Card.Text>
                         <Form onSubmit={handleflag}>
                            <Form.Control type="text" placeholder="Submit your Flag" name='userflag'
                            value={userflag}
                            className='flag-submit'
                            onChange={(e)=>{setUserFlag(e.target.value)}}/>
                            <Button type="submit" variant="success">Submit flag</Button>
                         </Form>
                         </Card.Body>
                </Card>
                </div>
        </div>
    );
}

export default SolveCTF
