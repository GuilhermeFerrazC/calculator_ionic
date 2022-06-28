import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
    valor="0"
    memoria="0";
    operacao="";
    mostrarValor(botao){
     if(this.valor=="0"){
         this.valor=botao } 
     else{
      this.valor=this.valor+botao;} 
        }
  botaoPonto(){
    if(this.valor.indexOf(".")== -1)
       if(this.valor=="0"){
         this.mostrarValor("0.");
       }else{
         this.mostrarValor(".");
       }
  }
 botaoCalculo(parametroOperacao){
      if(this.operacao==""){
        this.memoria=this.valor;

      }else{
        if(this.operacao=="+"){
          this.memoria = ""+(parseFloat(this.memoria)+parseFloat(this.valor))

        }else if(this.operacao=="-"){
          this.memoria = ""+(parseFloat(this.memoria)-parseFloat(this.valor))

        }else if(this.operacao=="*"){
          this.memoria = ""+(parseFloat(this.memoria)*parseFloat(this.valor))
        }else if(this.operacao=="/"){
          if(this.valor!="0"){
             this.memoria = ""+(parseFloat(this.memoria)/parseFloat(this.valor))}
        }else if(this.operacao=="M"){
          this.memoria=""+(parseFloat(this.memoria)*221041031 )
        
        
        }else if(this.operacao=="R"){
          this.memoria=""+(parseFloat(this.memoria)*Math.floor(Math.random()*250))
        
        
        }else if(this.operacao=="Xy"){
          this.memoria=""+(parseFloat(this.memoria)**parseFloat(this.valor))
        }else if(this.operacao=="%"){
          this.memoria=""+(parseFloat(this.memoria)/100*parseFloat(this.valor))
        }                    
      }
      this.operacao=parametroOperacao;
      if(parametroOperacao==""){
        this.valor=this.memoria
        this.memoria="0";
      }else{
            this.valor="0";
      }
  }
  botaoLimpa(){
    this.valor="0";
    this.operacao="";
    this.memoria="0"
  }
  constructor() {}
}
