
let func = null

form.onsubmit = (event) => {
    event.preventDefault()
    
    ul.innerHTML = null
    if(problem.value) {
        for(let l = 0; l < 10; l++) {
            num = +problem.value
            // let res = func( allProblems[+problem.value - 1].tests[l].test)
            switch(num) {
                case 1: 
                     func = new Function('a', `
                    ${textArea.value}
            
                    return isPalindrome(a)
                    `)
                    break;
                case 2: 
                     func = new Function('a', `
                    ${textArea.value}
            
                    return numPower(a)
                    `)
                    break;
                case 3: 
                     func = new Function('a', `
                        ${textArea.value}
            
                        return biggest(a)
                        `)
                    break;
                case 4: 
                     func = new Function('a', `
                        ${textArea.value}
            
                        return sum(a)
                        `)
                    break;
                case 5: 
                     func = new Function('a', `
                        ${textArea.value}
            
                        return longestStr(a)
                        `)
                    break;
            }
            
            const [li, span, i] = createELement("li", "span", "i")

            span.classList.add("status")
            try {

                if(func(allProblems[+problem.value - 1].tests[l].test) == allProblems[+problem.value - 1].tests[l].answer) {
                    i.classList.add("fas", "fa-check")
                    span.textContent = "Success"
                } else {
                    i.classList.add("fas", "fa-times")
                    span.textContent = "Fail"
                }
    
                span.append(i)
                li.append(span)
                ul.append(li)
            } catch(error) {
                alert(error.message)
                break;
            }
        }
    }
}

// function isPalindrome(a){
//     return [...""+a].reverse().join("") == a
//     }