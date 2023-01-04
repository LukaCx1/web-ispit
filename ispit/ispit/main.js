// http://localhost:8080/ispit/
const port = 8080;
const table = document.querySelector('#tableContent');
const inputs = document.getElementsByName("unos");


const showData = () => {
    fetch(`./students.json`)
        .then(response => response.json())
        .then(data => {
            data.map(student => {
                var row = table.insertRow();
                row.classList.add("row");
                row.addEventListener('click', (e) => {
                    let red = e.target.closest('tr').children;
                    console.log(red);
                    document.querySelector('#izmeniBtn').addEventListener('click', () => {
                        
                        for (let i = 0; i <= inputs.length-1; i++) { 
                            console.log(inputs[i].value)
                            red[i].textContent  = inputs[i].value;
                        
                        } 
                        let ocene = inputs[inputs.length-1].value.split(",");
                        pom = 0.0;
                        for (let i = 0; i < ocene.length; i++){
                        pom = pom + Number(ocene[i]);
                        }
                        let prosek = pom / ocene.length 
                        red[inputs.length].textContent  = prosek
                        console.log(red[inputs.length])
                    }); 

                    for (let i = 0; i <= inputs.length; i++) {
                        inputs[i].value = red[i].textContent;
                    }
                    

                });
                dodajRed(student, row);




            });
        });

}
function dodajRed(student, row){
    
    for (let key in student) {
        if (key === 'prosek') {
            let ocene = student['ocene'].split(",");
            
            pom = 0.0;
            for (let i = 0; i < ocene.length; i++){
                
            pom = pom + Number(ocene[i]);
            }
            let prosek = pom / ocene.length 
            
            let cell = row.insertCell()
            cell.innerHTML = prosek;
        } else {
            let cell = row.insertCell()
            cell.innerHTML = student[key];
        }
    }
}

showData();