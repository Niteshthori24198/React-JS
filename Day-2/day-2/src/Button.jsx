
import style from './btn.module.css'

function Button(props){

    const {text,handleclick}=props.data;

    return <>
    
        <button className={style.App} onClick={handleclick}>{text}</button>
    
    </>

}

export default Button;