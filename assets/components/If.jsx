function GolPerdido (){
    return(
        <>
    
        <h1>Errou!</h1>

        </>
    )
}

function GolFeito (){
    return(
        <>
    
        <h1>GOOOOOL!</h1>

        </>
    )
}

function GolTentativa (props){
    const eGol=props.eGol

    if (eGol) {
        return <GolFeito/>;
    } 
    return 
    <GolPerdido/>;
}

export default GolTentativa