function adicionarTarefa() {
      
      //receber valor do input do usuário  
      const inputTarefa = document.getElementById("inputTarefa")
      let tarefa = inputTarefa.value.trim()

      const mensagem = document.getElementById("mensagem")

      //se o valor do input for vazio então mostre uma mensagem de erro para usuário
      if (tarefa == "") {
        let mensagemErro = "Digite uma tarefa para adiciona-la a sua lista!";
      mensagem.textContent = mensagemErro;
      } else {
        //mensagem de tarefa adicionada com sucesso
      let mensagemSucesso = "Tarefa adicionada com sucesso!";
      mensagem.textContent = mensagemSucesso;

      //criar novo item (li) e insere na (listaul)
      const listaTarefas = document.getElementById("listaTarefas")
      let novaTarefa = document.createElement("li")
      novaTarefa.textContent = tarefa
      listaTarefas.appendChild(novaTarefa)

      }


      //limpa o input do usuário
      inputTarefa.value = ""



    }