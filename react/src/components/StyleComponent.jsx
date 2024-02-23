// React supporta l'inline style, con la prop 'style'
// La prop 'style' riceve un oggetto, contenente coppie di chiave-valore, cioè le regole da applicare al componente

export function StyleComponent() {
  const MyStyle = {
    // backgroundColor: name ? 'greenyellow' : 'darkgray',
    backgroundColor: '#333',
    // color: name ? '#333' : 'fff'
    color: 'white',
    margin: '10px 20px'
  }

  return <div style={MyStyle}>Hello!</div>
}

// Inline style dinamici > si comportano in base ai valori a cui il componente ha accesso, attraverso le prop 
// Operatore ternario > per renderizzare uno stile piuttosto che un altro, in base alla condizione esplicitata

{/* <p className={counter % 2 === 0 ? classes.evenBg : classes.oddBg}>I have counted to {count}</p> */}