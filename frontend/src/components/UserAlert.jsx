import Alert from 'react-bootstrap/Alert';

function UserAlert() {
  return (
    <div className='alert-User'>
    <Alert variant="light">
      <Alert.Heading>No More Challenges Left!!</Alert.Heading>
      <p style={{"fontWeight":"bold"}}><span>Check out these fun facts: </span></p>
      <hr/>
      <p>
      <p style={{"fontWeight":"bold"}}><span>AI is getting creative!</span></p> Not only can AI analyze and understand massive amounts of data, but it's also being used to generate creative content like art, music, and even poetry. There are AI algorithms that can create new artwork in the style of famous painters, compose music in different genres, or write poems that mimic the style of specific authors. This opens up interesting possibilities for collaboration between humans and AI in the creative fields.
      </p>
      <hr />
      <p className="mb-0">
      <p style={{"fontWeight":"bold"}}><span>The Black Box Problem:</span></p> Many complex AI models, especially those using deep learning techniques, are often referred to as "black boxes." This means that even though they produce impressive results, we don't fully understand how they arrive at those results. The inner workings of these models can be a tangled web of connections and calculations that are difficult for humans to interpret. This lack of transparency raises concerns. If we rely on AI for critical decisions, like in autonomous vehicles or financial trading, but don't understand why it makes certain choices, it could lead to unpredictable or even disastrous outcomes. It's like having a powerful tool you can't fully control.
      </p>
    </Alert>
    </div>
  );
}

export default UserAlert;