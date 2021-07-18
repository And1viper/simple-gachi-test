import { useState } from "react";

const FormName = ( {onAdd} ) => {
    const [text, setText] = useState('');
    
    const onSubmit = (e) => {
        e.preventDefault();

        if(!text) {
            alert("Не пытайся обмануть Dungeon Master'a, напиши свое имя!");   
            return
        }
        onAdd({ text });

        setText('');
    };

    return (
        <form className="add-form" onSubmit={onSubmit}>
            <div>
                <label>Your name</label>
                <br/>
                <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter your name"/>
                <input type="submit" value="Submit"/>
            </div>
        </form>
    );
}

export default FormName