// importar o react e o react dom e importar o arquvio BomDia.jsx
import React from 'react'
import ReactDom from 'react-dom'

// import BomDia PLEASE LITLE CODE
import BomDia from './componentes/BomDia'




ReactDom.render(<BomDia nome="humilde" idade={10} />, document.getElementById('root'))