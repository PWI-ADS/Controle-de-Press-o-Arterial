import { useState } from "react"

const PressaoArterial = () => {
    const [Sistolica, setSistolica] = useState(0)
    const [Diastolica, setDiastolica] = useState(0)
    const [result, setResult] = useState('')

    const calcularPressao = () => {
      if(Sistolica < 130 && Diastolica < 85){
        setResult ('Pressão Normal')
      } else if (Sistolica < 140 && Diastolica < 90){
        setResult ('Pressão Normal Límitrofe')
      } else if(Sistolica < 160 && Diastolica < 110){
        setResult ('Pressão Hipertensão Leve')
      } else if(Sistolica < 180 && Diastolica){
        setResult ("Pressão Hipertensão Moderada")
      }else{
        setResult ('Pressão Hipertensão Grave')
      }

    }
    return(
        <div>
          <h1>Controle de Pressão Arterial</h1>
          <br/>
          Pressão Sistólica: <br />
          <input type="number" onChange={(event) => setSistolica(event.target.value)}/>
          <br />
          <br />
          Pressão Diastólica: <br />
          <input type="number" onChange={(event) => setDiastolica(event.target.value)}/>
          <br/>
          <br/>
          <input type="button" value="Verificar"
          onClick={calcularPressao}/>
          <br />
          <br/>
          Seu resultado é {result}
          <br/>
        </div>
        )
}

export default PressaoArterial