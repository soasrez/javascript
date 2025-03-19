class Funcionario {



    constructor(nome, idade, cargo) {



      this.nome = nome;



      this.idade = idade;



      this.cargo = cargo;



    }







    seApresentar() {



      return `Olá, meu nome é ${this.nome} e eu sou um ${this.cargo}.`;



    }







    trabalhar() {



      return `${this.nome} está trabalhando.`;



    }



  }







  class Gerente extends Funcionario {



    constructor(nome, idade, cargo, departamento) {



      super(nome, idade, cargo);



      this.departamento = departamento;



    }







    gerenciar() {



      return `${this.nome} está gerenciando o departamento ${this.departamento}.`;



    }



  }







  class Desenvolvedor extends Funcionario {



    constructor(nome, idade, cargo, linguagem) {



      super(nome, idade, cargo);



      this.linguagem = linguagem;



    }







    programar() {



      return `${this.nome} está programando em ${this.linguagem}.`;



    }



  }







 



  function criarFuncionario() {



    try {



      const nome = document.getElementById("nome").value;



      const idade = parseInt(document.getElementById("idade").value);



      const cargo = document.getElementById("cargo").value;



      const departamento = document.getElementById("departamento").value;



      const linguagem = document.getElementById("linguagem").value;







      if (!nome || !idade || !cargo) {



        throw new Error("Preencha todos os campos obrigatórios.");



      }







      let funcionario;







      if (cargo === "Gerente") {



        if (!departamento) {



          throw new Error("Informe o departamento para o gerente.");



        }



        funcionario = new Gerente(nome, idade, cargo, departamento);



      } else if (cargo === "Desenvolvedor") {



        if (!linguagem) {



          throw new Error("Informe a linguagem de programação para o desenvolvedor.");



        }



        funcionario = new Desenvolvedor(nome, idade, cargo, linguagem);



      } else {



        funcionario = new Funcionario(nome, idade, cargo);



      }







      exibirResultado(funcionario.seApresentar(), funcionario.trabalhar());



    } catch (error) {



      exibirErro(error.message);



    }



  }











  function exibirResultado(apresentacao, tarefa) {



    const resultadoDiv = document.getElementById("resultado");



    resultadoDiv.innerHTML = `<p>${apresentacao}</p><p>${tarefa}</p>`;



  }











  function exibirErro(mensagem) {



    const resultadoDiv = document.getElementById("resultado");



    resultadoDiv.innerHTML = `<p class="erro">${mensagem}</p>`;



  }

