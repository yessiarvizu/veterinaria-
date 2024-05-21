document.addEventListener('DOMContentLoaded', function () {
    const registrarBtn = document.getElementById('registrarBtn');

    registrarBtn.addEventListener('click', function (event) {
        event.preventDefault();

        const nombreMascota = document.querySelector('input[placeholder="Nombre de la mascota"]').value;
        const contacto = document.querySelector('input[placeholder="Contacto"]').value;
        const fotoMascota = document.querySelector('#formFile').files[0];
        const padecimiento = document.querySelector('input[placeholder="Padecimiento"]').value;

        const listaRegistros = document.getElementById('listaRegistros');
        const nuevoRegistro = document.createElement('div');
        nuevoRegistro.classList.add('registro', 'border', 'border-primary', 'p-3');

        nuevoRegistro.innerHTML = `
            <div class="registro-izquierda">
                <h4>${nombreMascota}</h4>
                <p>Contacto: ${contacto}</p>
                <p>Padecimiento: ${padecimiento}</p>
            </div>
            <div class="registro-derecha">
                <img src="${URL.createObjectURL(fotoMascota)}" alt="Foto de la mascota" style="max-width: 200px;">
            </div>
        `;

        listaRegistros.appendChild(nuevoRegistro);

        document.querySelector('form').reset();
    });
});
