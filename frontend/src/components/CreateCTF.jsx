import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function CreateCTF() {
    const [title, setTitle] = useState("");   
    const [desc, setDesc] = useState("");
    const [flag, setFlag] = useState("");
    const [points, setPoints] = useState(0);
    const [difficulty, setDifficulty] = useState("");
    const [category, setCategory] = useState("");
    const [hints, setHints] = useState("");

    const handleSubmit=(e)=>{
      e.preventDefault();
      const ctfData = {
        "title": title,
        "description": desc,
        "flag": flag,
        "points": points,
        "difficulty": difficulty,
        "category": category,
        "hints":hints
    }
    console.log(ctfData)
    }

  return (
    <div>
    <div className='createCTF-div'>
      <div>
      <h3 className="display-4 fw-bold addCTF_title">Add CTF Challenges</h3>
    <Form onSubmit={handleSubmit} method='POST'>
      <Form.Control required className="addCTF_fields" type="text" placeholder="Title" name='title' value={title} onChange={(e)=>setTitle(e.target.value)}/>
      <Form.Control as="textarea" className="addCTF_fields" rows={3} placeholder="Description" name='description' value={desc} onChange={(e)=>setDesc(e.target.value)} />
    <Form.Control required type="text" className="addCTF_fields" placeholder="Flag" name='flag' value={flag} onChange={(e)=>setFlag(e.target.value)}/>
    <Form.Control required type="number" className="addCTF_fields" placeholder="Points" name='points' value={points} onChange={(e)=>setPoints(e.target.value)}/>
    <Form.Select required aria-label="Difficulty" className='createCTF-select' name='difficulty' value={difficulty} onChange={(e)=>setDifficulty(e.target.value)}>
      <option>Choose the level of difficulty</option>
      <option value="EASY">Easy</option>
      <option value="MEDIUM">Medium</option>
      <option value="HARD">Difficult</option>
    </Form.Select>
    <Form.Select required aria-label="Category" className='createCTF-select' name='cateogry' value={category} onChange={(e)=>setCategory(e.target.value)}>
      <option>Choose the level of difficulty</option>
      <option value="Data Science">Data Science</option>
      <option value="Exploratory Data Analysis">Exploratory Data Analysis</option>
      <option value="Time Series">Time Series</option>
      <option value="Generative AI">Generative AI</option>
    </Form.Select>
    <Form.Control required as="textarea" className="addCTF_fields" rows={3} placeholder="Hints" name='hints' value={hints} onChange={(e)=>setHints(e.target.value)}/>
    <div className='addCTF-btn'><Button className='align-items-right' variant="secondary" type='Submit'>Add Challenge</Button></div>
    </Form>
    </div>
    </div>
    <div className='addCTF-footer'></div>
    </div>
  )
}

export default CreateCTF
