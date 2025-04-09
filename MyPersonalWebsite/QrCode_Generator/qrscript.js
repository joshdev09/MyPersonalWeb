const qr_text = document.getElementById('qr_text');
const sizes = document.getElementById('sizes');
const generateBTN = document.getElementById('generateBTN');
const downloadBTN = document.getElementById('donwloadBTN');
const qrContainer = document.querySelector('.qrbody');

let size = sizes.value;
generateBTN.addEventListener('click', (e)=>{
    e.preventDefault();
    isEmptyInput();
});

sizes.addEventListener('change', (e)=>{
    size = e.target.value;
    isEmptyInput();
});

function isEmptyInput(){
    if(qr_text.value.length > 0){
        generateQRCode();
    }

    else {
        alert("Enter the text or URL to generate your QR Code");
    }
}

function generateQRCode(){
    qrContainer.innerHTML = "";
    new QRCode(qrContainer, {
        text:qr_text.value,
        height: size,
        width: size,
        colorLight: "#fff",
        colorDark: "#000",
    });
}