import React, { useState } from 'react';
import {useNavigate} from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Navigationbar from "../components/Navigationbar";
import Form from 'react-bootstrap/Form';
import "../styles/solveCTF.css"

function SolveCTF(props) {
    //const { data } = props.location.state;
    //console.log(data)
    const c={
        "title": "Cryptic Cipher",
        "description": "You stumbled upon a mysterious ciphertext while investigating an abandoned building. Can you decipher it and unveil the hidden message?",
        "flag": "flag{<your_deciphered_message>}",
        "difficulty": "Easy",
        "created_at": "2024-05-27T17:38:26.056055Z",
        "author": 1,
        "points": 100,
        "category": "GenAI",
        "hints": "The message is encoded using a classic cipher.\r\nThe key to decrypt the message might be hidden in plain sight.\r\nTry to identify patterns and frequency analysis could be helpful.",
        "updated_on": "2024-05-27T17:38:26.056055Z"
    }

    const [flag,setFlag]=useState('');
    const navigate=useNavigate();

    const handleflag=()=>{
        if(flag==c.flag){
            alert("Correct Flag");
            console.log(c.points);
            navigate("/")
        }
        else{
            alert("Incorrect Flag");
        }
    }

    return (
        <div className="bg-dark text-light display-CTF">
            <Navigationbar/>
            <div className="CTF-card">
                <Card className="CTF-details" data-bs-theme="dark" >
                    <Card.Header>{c.category}</Card.Header>
                    <Card.Body>
                        <Card.Title>{c.title}</Card.Title>
                        <div className="description-CTF"><Card.Text>{c.description}</Card.Text></div>
                        <Card.Text>Author : {c.author}</Card.Text>
                         <Card.Text>Difficulty : {c.difficulty}</Card.Text>
                         <Card.Text>Points : {c.points}</Card.Text>
                         <Form onSubmit={handleflag}>
                            <Form.Control type="text" placeholder="Submit your Flag" name='flag'
                            value={flag}
                            className='flag-submit'
                            onChange={(e)=>{setFlag(e.target.value)}}/>
                            <Button type="submit" variant="success">Submit flag</Button>
                         </Form>
                         </Card.Body>
                </Card>
                </div>
        </div>
    );
}

export default SolveCTF
