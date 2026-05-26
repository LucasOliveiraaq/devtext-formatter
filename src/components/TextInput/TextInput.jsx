import "./TextInput.css";

function TextInput({text,setText}) {
    return(
        <textarea
            value={text}
            onChange={(e)=>setText(e.target.value)}
            placeholder="Digite seu texto..."
        />
    )
}

export default TextInput