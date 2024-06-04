import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api";
import Button from 'react-bootstrap/Button';
import UserAlert from "../components/UserAlert";
import Card from 'react-bootstrap/Card';
import Navigationbar from "../components/Navigationbar";
import "../styles/Home.css"

function Home() {
    const [ctf, setCTF] = useState([]);
    const navigate=useNavigate();

    useEffect(() => {
        getCTF();
    }, []);

    const getCTF = () => {
        api
            .get("/api/CTF/view/")
            .then((res) => res.data)
            .then((data) => {
                setCTF(data);
                console.log(data);
            })
            .catch((err) => alert(err));
    };

    const solve = (data)=>{
        navigate('/solveCTF', { state: { data } });
    }

    const edit =(data)=>{
        navigate('/updateCTF', { state: { data } });
    }

    return (
        <div className="bg-dark text-light">
            <Navigationbar/>
            <div className="CTF-cards">
                {ctf.map((c,id) => (
                //note={note} onDelete={deleteNote} key={note.id} 
                <Card key={id} className="CTF-details" data-bs-theme="dark" >
                    <Card.Header>{c.category}</Card.Header>
                    <Card.Body>
                        <Card.Title>{c.title}</Card.Title>
                        <div className="description-CTF"><Card.Text>{c.description}</Card.Text></div>
                        <Card.Text>Author : {c.author}</Card.Text>
                         <Card.Text>Difficulty : {c.difficulty}</Card.Text>
                         <Card.Text>Points : {c.points}</Card.Text>
                         <Button className="me-3" variant="success" onClick={()=>{
                            solve(c)
                         }}>Solve</Button>
                         <Button variant="warning" onClick={()=>{
                            edit(c)
                         }}>Edit</Button>
                         </Card.Body>
                </Card>
                ))}
                </div>
            {ctf.length ? "":<UserAlert/>}
            <div className="footer_CTF"></div>
        </div>
    );
}

export default Home;
