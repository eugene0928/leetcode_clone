const problem = document.querySelector("#problem")
const problemHeading = document.querySelector("#problem-heading")
const probContent = document.querySelector("#prob-content")
const li1 = document.querySelector("#li1")
const divContent = document.querySelector("#stdio-content")
const divContent2 = document.querySelector("#stdio-content2")
const li2 = document.querySelector("#li2")


problem.onclick = () => {
    
    renderProblems(problem.value)

}


function renderProblems( value ) {
    let problem = allProblems.find( obj => obj.id == value)

    // first example
    divContent.innerHTML = null
    const [div1, div2, span1, span2, code1, code2] = createELement('div', 'div', 'span', 'span', 'code', 'code')
    div1.classList.add('stdio-code')
    div2.classList.add('stdio-code')

    span1.textContent = 'Input: '
    code1.textContent = `${problem.example1.input}`

    span2.textContent = "Output: "
    code2.textContent = `${problem.example1.answer}`

    div1.append(span1, code1)
    div2.append(span2, code2)
    divContent.append(div1, div2)


    // second example
    divContent2.innerHTML = null
    const [div1_, div2_, span1_, span2_, code1_, code2_] = createELement('div', 'div', 'span', 'span', 'code', 'code')
    div1_.classList.add('stdio-code')
    div2_.classList.add('stdio-code')

    span1_.textContent = 'Input: '
    code1_.textContent = `${problem.example2.input}`

    span2_.textContent = "Output: "
    code2_.textContent = `${problem.example2.answer}`

    div1_.append(span1_, code1_)
    div2_.append(span2_, code2_)
    divContent2.append(div1_, div2_)



    problemHeading.textContent = problem.heading
    probContent.textContent = problem.definition
}