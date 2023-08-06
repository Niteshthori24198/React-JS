function Mybutton(props) {

    const { handleclick, count } = props;

    return <>

        <button onClick={handleclick}>button clicked : {count} times</button>

    </>

}


export default Mybutton