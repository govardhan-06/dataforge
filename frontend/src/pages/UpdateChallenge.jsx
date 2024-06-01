import React,{useState} from 'react';
import {useNavigate} from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "../styles/Home.css"
import Navigationbar from '../components/Navigationbar';

function UpdateChallenge(props) {
    //get data from home page and load it in the forms
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
    //get id from home page
    const id=1;
    const [title, setTitle] = useState(c.title);   
    const [desc, setDesc] = useState(c.description);
    const [flag, setFlag] = useState(c.flag);
    const [points, setPoints] = useState(c.points);
    const [difficulty, setDifficulty] = useState(c.difficulty);
    const [category, setCategory] = useState(c.category);
    const [hints, setHints] = useState(c.hints);
    const navigate=useNavigate();

    const handleEdit=(e)=>{
      e.preventDefault();
      const data={
        "title":title,
        "description":desc,
        "flag":flag,
        "points":points,
        "difficulty":difficulty,
        "category":category,
        "hints":hints
      }
      console.log(data)
    };
    
    const handleDelete = (e,id) => {
      e.preventDefault()
      console.log("Heyy")
      /*
      api
          .delete(`/api/CTF/delete//${id}/`)
          .then((res) => {
              if (res.status === 204){
                alert("Challenge deleted!");
                navigate("/");
              }
              else alert("Failed to delete the challenge.");
          })
          .catch((error) => alert(error));
      */

    }

    return (
        <div className="bg-dark text-light">
          <Navigationbar/>
        <div className='createCTF-div'>
          <div>
          <h3 className="display-4 fw-bold addCTF_title">Modify CTF Challenges</h3>
        <Form method='POST'>
          <Form.Control required className="addCTF_fields" type="text" placeholder="Title" name='title' value={title} onChange={(e)=>setTitle(e.target.value)}/>
          <Form.Control as="textarea" className="addCTF_fields" rows={3} placeholder="Description" name='description' value={desc} onChange={(e)=>setDesc(e.target.value)} />
        <Form.Control required type="text" className="addCTF_fields" placeholder="Flag" name='flag' value={flag} onChange={(e)=>setFlag(e.target.value)}/>
        <Form.Control required type="number" className="addCTF_fields" placeholder="Points" name='points' value={points} onChange={(e)=>setPoints(e.target.value)}/>
        <Form.Select required aria-label="Difficulty" className='createCTF-select' name='difficulty' value={difficulty} onChange={(e)=>setDifficulty(e.target.value)}>
          <option>Choose the level of difficulty</option>
          <option value="Easy">Easy</option>
          <option value="Medium">Medium</option>
          <option value="Difficult">Difficult</option>
        </Form.Select>
        <Form.Select required aria-label="Category" className='createCTF-select' name='cateogry' value={category} onChange={(e)=>setCategory(e.target.value)}>
          <option>Choose the domain</option>
          <option value="DataScience">Data Science</option>
          <option value="EDA">Exploratory Data Analysis</option>
          <option value="TimeSeries">Time Series</option>
          <option value="GenAI">Generative AI</option>
        </Form.Select>
        <Form.Control required as="textarea" className="addCTF_fields" rows={3} placeholder="Hints" name='hints' value={hints} onChange={(e)=>setHints(e.target.value)}/>
        <div className='button-container'>
        <div className='editCTF-btn'><Button className='align-items-right' variant="warning"
        onClick={handleEdit}>Edit Challenge</Button></div>
        <div className='editCTF-btn'><Button className='align-items-right' variant="danger"
        onClick={handleDelete}>Delete</Button></div>
        </div>
        </Form>
        </div>
        </div>
        <div className='addCTF-footer'></div>
        </div>
      )
}

export default UpdateChallenge
