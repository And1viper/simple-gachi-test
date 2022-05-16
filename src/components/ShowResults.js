import React, { useState, useEffect} from 'react'

const ShowResults = ( {score, maxScore} ) => {
  const [isMaster, setIsMaster] = useState(false);
  const [text, setText] = useState('');

  useEffect(() => { if(score >= 0.8 * maxScore) {
    setIsMaster(true);
  }}, [score, maxScore])
    
  const onSubmit = (e) => {
      e.preventDefault();

      if(!text) {
          alert("Зря зря зря...");   
          return;
      }

      setText('');
      alert("CONGRATULATIONS! YOU ARE IN THE MASTER LIST.");
      window.location.reload(false);
  };
  
  return (
    <div>
        {isMaster ? (
            <div>
                <h2>You have proven yourself, <strong>MASTER!</strong></h2>
                <h3>Now, you shall enter your name, MASTER.</h3>
                <form className="add-form" onSubmit={onSubmit}>
                    <div>
                        <label>Your name</label>
                        <br/>
                        <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter your name"/>
                        <input type="submit" value="Submit"/>
                    </div>
                </form>

            </div>
        ) : (
            <div>
                <h2>HAHAHAHA, YOU are just</h2>
                <h1 className="fucking-slave">FUCKING SLAVE!</h1>
            </div>
        )}
    </div>
  )
}

export default ShowResults