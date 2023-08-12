export default function About(){

    console.log(process.env.NODE_ENV)

    console.log("==>", process.env.react_app_key)

    // console.log(process.env.REACT_APP_mera)

    return <div>

        <p>Project is in : {
            
            `${process.env.NODE_ENV}`==='development'?`${process.env.REACT_APP_lund}/ENDPOINT`:`${process.env.REACT_APP_sex}/ENDPOINT`
            
            } enviourment</p>

        <img src="https://media.tenor.com/vIKyA4gX8s4AAAAM/chala-ja.gif" alt="Nikal BSDK" style={{width:'30%', margin:'100px'}}/>
    </div>
    
    
    
}