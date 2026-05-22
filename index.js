const formulario = document.querySelector(`form`)
const ul = document.getElementById(`listaRegistrada`)

//Fora do addEventListener porque se colocar dentro ele vai clonar em todos os li tlgd
const botaoApagarTudo = document.createElement(`button`)
botaoApagarTudo.textContent = `Apagar todas as tarefas`
botaoApagarTudo.addEventListener(`click`, (e) => {
    ul.remove()
})

const criacaoDeTarefa = ( valor ) => {
    const li = document.createElement(`li`)
    
    const toma = document.createElement(`span`)
    toma.textContent = valor

    const checagem = document.createElement(`input`)
    checagem.type = `checkbox`
    li.appendChild(checagem)
    
    const buttonEditar = document.createElement(`button`)
    buttonEditar.textContent = `Editar`
    const buttonExcluir = document.createElement(`button`)
    buttonExcluir.textContent = `Excluir`

    buttonEditar.addEventListener(`click`, (e) => {
        const edicao = window.prompt(`Digite sua edicao:`)
        toma.textContent = edicao
        li.appendChild(toma)
        li.appendChild(buttonEditar)
        li.appendChild(buttonExcluir)
    })

    buttonExcluir.addEventListener(`click`, (e) => {
        li.remove()
    })
    li.appendChild(toma)
    li.appendChild(buttonEditar)
    li.appendChild(buttonExcluir)
    ul.appendChild(li)
}

formulario.addEventListener(`submit`, (e) => {
    e.preventDefault()

    const valorCapturado = document.getElementById(`tarefa`).value
    criacaoDeTarefa(valorCapturado)

    ul.appendChild(botaoApagarTudo)
    document.getElementById(`tarefa`).value = ``
})