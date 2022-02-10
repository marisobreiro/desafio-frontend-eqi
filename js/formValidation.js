const inputs = document.querySelectorAll("[required]");


function validateInput(input) {
    
    function verifyErrors() {
        let foundError;

        for(let error in input.validity) {
            
            if (input.validity[error] && !input.validity.valid ) {
                foundError = error;
            }
        }
        return foundError;
    }

    function customMessage(typeError) {
        const messages = {
            text: {
                valueMissing: "Por favor, preencha este campo"
            }
        }

        return messages[input.type][typeError]
    }

    function setCustomMessage(message) {
        const msgError = input.parentNode.querySelector("p.error");
        
        if (message) {
            msgError.classList.add("active");
            msgError.innerHTML = message;
        } else {
            msgError.classList.remove("active");
            msgError.innerHTML = "";
        }
    }

    return function() {

        const error = verifyErrors();

        if(error) {
            const message = customMessage(error);

            var color = input.parentNode.querySelector("label");
            color.style.color = "red";

            setCustomMessage(message);

        } else {
            setCustomMessage();
        }
    }
}




function customValidation(event) {

    const input = event.target;
    const validation = validateInput(input);

    validation();

}

for( input of inputs ){
    input.addEventListener("invalid", event => { 
      
        event.preventDefault();

        customValidation(event);
    })
    input.addEventListener("blur", customValidation)
}


document.querySelector("form").addEventListener("submit", event => {
    
    event.preventDefault();
})