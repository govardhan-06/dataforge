import { useState, useEffect } from "react";
import api from "../api";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Navigationbar from "../components/Navigationbar";
import "../styles/Home.css"

function Home() {
    const [ctf, setCTF] = useState([]);
    const [title, setTitle] = useState("");   
    const [desc, setDesc] = useState("");
    const [points, setPoints] = useState(0);
    const [difficulty, setDifficulty] = useState("");
    const [category, setCategory] = useState("");
    const [author, setAuthor] = useState("");
    const [hints, setHints] = useState(""); 

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

//Feature only for admin
    const deleteNote = (id) => {
        api
            .delete(`/api/CTF/delete//${id}/`)
            .then((res) => {
                if (res.status === 204) alert("Challenge deleted!");
                else alert("Failed to delete the challenge.");
                getCTF();
            })
            .catch((error) => alert(error));
    };

//Feature only for admin
//Separate page dedicated for this creation of CTF
    const createNote = (e) => {
        e.preventDefault();
        api
            .post("/api/notes/", { content, title })
            .then((res) => {
                if (res.status === 201) alert("Note created!");
                else alert("Failed to make note.");
                getNotes();
            })
            .catch((err) => alert(err));
    };

    return (
        <div className="bg-dark text-light">
            <Navigationbar/>
            <div className="CTF-cards">
                {ctf.map((c) => (
                //note={note} onDelete={deleteNote} key={note.id} 
                <Card className="CTF-details" data-bs-theme="dark" >
                    <Card.Header>{c.category}</Card.Header>
                    <Card.Body>
                        <Card.Title>{c.title}</Card.Title>
                        <div className="description-CTF"><Card.Text>{c.description}</Card.Text></div>
                        <Card.Text>Author : {c.author}</Card.Text>
                         <Card.Text>Difficulty : {c.difficulty}</Card.Text>
                         <Card.Text>Points : {c.points}</Card.Text>
                         <Button variant="success">Solve</Button>
                         </Card.Body>
                </Card>
                ))}
                </div>
        </div>
    );
}

export default Home;
