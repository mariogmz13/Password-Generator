const passwordExample =
  "092895-557480-631895-461879-330132-074635-475541-363704";
const passwordSize = 48;

// html
const btnGenerate = document.getElementById('btnGenerate');
btnGenerate.addEventListener('click', () =>{
    paswordGenerator();
    
});

const btnDownload = document.getElementById('btnDownload');
btnDownload.addEventListener('click', () => {
    // Generate download of hello.txt file with some content
    var password = document.getElementById("generated").textContent;
    var filename = "Bitlocker.txt";
    
    download(filename, password);
}, false);

//Oculta el btnDownload si aun no se genera el passwod
btnDownload.style.display = 'none';

// btnDownload.style.display = ''

function download(filename, password) {
  let text = 'Clave de recuperación de Cifrado de unidad BitLocker\n\n' +
  password + '\n\n' + 
  'Recomendamos guardar la contraseña en un lugar seguro para evitar su extravio.';
  // text+= password
    var element = document.createElement('a');
    element.setAttribute('href', 'data:password/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

//Generar contraseña
function paswordGenerator() {
  // console.log(passwordExample);
  let password = "";

  for (let i = 1; i < passwordSize + 1; i++) {
    password = password.concat(random(0, 9));
    if (i % 6 == 0 && i != passwordSize) {
      password += "-";
    }

    let pass = document.getElementById("generated");
    pass.textContent = password;
    
    btnDownload.style.display = ''
  }

  function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  // console.log(password);

  return password;
}

