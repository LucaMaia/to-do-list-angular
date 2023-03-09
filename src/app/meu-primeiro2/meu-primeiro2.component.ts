import { Component } from '@angular/core';

@Component({
  selector: 'app-meu-primeiro2',
  templateUrl: './meu-primeiro2.component.html',
  styleUrls: ['./meu-primeiro2.component.css']
})
export class MeuPrimeiro2Component {

  tarefa : String = ""

  tarefas : Array<String> = []

  ngOnInit(){
    const BD: string | null = localStorage.getItem("BD")
    this.tarefas = JSON.parse(BD as string) || []
  }

  adicionar(){
    this.tarefas.push(this.tarefa);
    localStorage.setItem("BD", JSON.stringify(this.tarefas))

    this.tarefa = "";
  }

  excluir(item : any){
    // console.log("item", item)
    // console.log("valorAtual", valorAtual)

    this.tarefas.splice(item, 1)
    localStorage.setItem("BD",JSON.stringify(this.tarefas));
  }

  // editar(){
  //   this.tarefas.
  // }

}
