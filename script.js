const tombol = document.querySelector('#btnHitung');
const hasilElement = document.getElementById('boxHasil');

tombol.addEventListener('click' , () => {
    const beratbadan = parseFloat(document.getElementById('Weight').value);
    const tinggi_Cm =  parseFloat(document.getElementById('Height').value);

    if(!beratbadan || !tinggi_Cm) {
        hasilElement.textContent = 'Isi dulu dong!';
        hasilElement.style.color = 'red';
        return; 
    }
} ) 