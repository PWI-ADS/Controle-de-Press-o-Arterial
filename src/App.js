import React from "react";

class pressaoArterial extends React.Component{

  constructor(){
    super()
    this.state = {
      pressaoSistolica: 0,
      pressaoDiastolica: 0,
      result: null
    }
  }    

   onChangeInput(event){
    const field = event.target.name
    this.setState({
      [field]: event.target.value
    })
   }

    verificarPressao(){
      let resultPressao;
      if(this.state.pressaoSistolica < 130 && this.state.pressaoDiastolica < 85){
        resultPressao = 'Pressão Normal'
      } else if (this.state.pressaoSistolica < 140 && this.state.pressaoDiastolica < 90){
        resultPressao = 'Pressão Normal Límitrofe'
      } else if(this.state.pressaoSistolica < 160 && this.state.pressaoDiastolica < 110){
        resultPressao = 'Pressão Hipertensão Leve'
      } else if(this.state.pressaoSistolica < 180 && this.state.pressaoDiastolica){
        resultPressao = "Pressão Hipertensão Moderada"
      }else{
        resultPressao = 'Pressão Hipertensão Grave'
      }

      this.setState({
        result: resultPressao
      })
    }
  
    render(){
    return(
    <div>
      <h1>Controle de Pressão Arterial</h1>
      <br/>
      Pressão Sistólica: <br />
      <input type="number" name=" pressaoSistolica" onChange={(event) => this.onChangeInput(event)}/>
      <br />
      <br />
      Pressão Diastólica: <br />
      <input type="number" name="pressaoDiastolica" onChange={(event) => this.onChangeInput(event)}/>
      <br/>
      <br/>
      <input type="button" value="Verificar" 
      onClick={() => this.verificarPressao() }/>
      <br />
      <br/>
     {
     this.state.result !== ""
          ?<p>Seu resultado é: {this.state.result}</p> 
          :null
     }
       <br>
     
      </br>
    </div>
    )
  }
}

export default pressaoArterial;
