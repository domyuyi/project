import Tarjetagrafica from '/workspaces/project/src/tarjetagraf.json';

const Singlee = () => {
    const currentRoute = window.location.pathname;
    const tarjetagrafica = Tarjetagrafica.find(it => currentRoute.includes(it.slug))

    return (<>
        <center><h1>{tarjetagrafica.namee}</h1></center>
          <hr></hr>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
          <img 
             src={tarjetagrafica.picture} 
             alt={tarjetagrafica.namee} 
             style={{ marginBottom: '10px', width: '900px', height: 'auto' }} 
           />
           </div>
          <center><p style={{ marginTop: '10px', fontSize: '16px' }}>{tarjetagrafica.description}</p></center>
        
    </>);

}


export default Singlee;
