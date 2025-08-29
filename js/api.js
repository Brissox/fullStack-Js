const contenedorFeriados = document.getElementById("feriados")

fetch("http://api.boostr.cl/holidays.json")
    .then((res) => res.json())
    .then((json) => {
        if (json.status != "success" || !Array.isArray(json.data)) {
            throw new Error("Error en la respuesta de la api");
        }
        
        const feriados = json.data;
        
        contenedorFeriados.innerHTML = "";

        const htmlFeriados = feriados
            .map(
            (f) => `
            <div class="card mb-3">
                <div class="card-body">
                    <h5 class="card-title"> ${f.title} ${f.date}</h5>
                </div>
            </div>
                `
            ).join("");

        contenedorFeriados.innerHTML = htmlFeriados;
    })