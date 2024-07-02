document.addEventListener('DOMContentLoaded', (event) => {
    const infoButtons = document.querySelectorAll('.info-btn');

    infoButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const infoDiv = event.target.nextElementSibling.nextElementSibling; // Find the corresponding info div
            if (infoDiv.style.display === 'none') {
                infoDiv.style.display = 'block';
                infoDiv.innerHTML = `
                    <p><b>Scientific Name:</b> Epipremnum aureum</p>
                    <p><b>Family:</b> Araceae</p>
                    <p><b>Light:</b> Bright, indirect light</p>
                    <p><b>Water:</b> Water when the top inch of soil feels dry</p>
                `;
            } else {
                infoDiv.style.display = 'none';
                infoDiv.innerHTML = '';