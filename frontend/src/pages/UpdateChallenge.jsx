import React,{useState,useEffect} from 'react';
import {useNavigate,useLocation} from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "../styles/Home.css"
import Navigationbar from '../components/Navigationbar';
import api from "../api"

function UpdateChallenge() {
    const location = useLocation();
    const { data } = location.state || {};

    useEffect(() => {
      data
    }, []);

    const id=data.id;
    const [title, setTitle] = useState(data.title);   
    const [desc, setDesc] = useState(data.description);
    const [flag, setFlag] = useState(data.flag);
    const [points, setPoints] = useState(data.points);
    const [difficulty, setDifficulty] = useState(data.difficulty);
    const [category, setCategory] = useState(data.category);
    const [hints, setHints] = useState(data.hints);
    const navigate=useNavigate();

    const handleEdit=(e)=>{
      e.preventDefault();
      const data={
        "id":id,
        "title":title,
        "description":desc,
        "flag":flag,
        "points":points,
        "difficulty":difficulty,
        "category":category,
        "hints":hints
      }
      console.log(data)

      api
          .patch(`/api/CTF/update/${id}/`,data)
          .then((res) => {
              if (res){
                alert("Challenge updated!");
                navigate("/");
              }
              else alert("Failed to update the challenge.");
          })
          .catch((error) => alert(error));
      navigate("/")
    };
    
    const handleDelete = (e) => {
      e.preventDefault()
      console.log(id)
      api
          .delete(`/api/CTF/delete/${id}/`)
          .then((res) => {
              if (res){
                alert("Challenge deleted!");
                navigate("/");
              }
              else alert("Failed to delete the challenge.");
          })
          .catch((error) => alert(error));
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
