
const arrayAlerts = ["success"];
const alerts = document.getElementById("alerts");
//let comments = [document.getElementById("nombre").value,document.getElementById("comentario").value,document.getElementById("fecha").value ];
function drawAlerts(){
  var name = document.getElementById("nombre").value;
  var com  = document.getElementById("comentario").value;
  var f = new Date();
  var date = f.getDate() + "/" + (f.getMonth() +1) + "/" + f.getFullYear();
  let comments = [name,com,date];
  if(name.length<3){
    if(com==""){
      alert("debes ingresar un nombre y un comentario ")
      clean();
    }else{
      alert("debes ingresar un nombre de minimo 3 caracteres");
      clean();
    }
  }else{
    if(com==""){
      alert("debes ingresar un comentario ")
      clean();
    }else{
      alerts.innerHTML = arrayAlerts.map((alert,index)=>alerta(comments,alert,index) ).join('');
      clean();
    }
    clean();
  }
  clean();
}

function alerta(comments,alert,index){
  return `<div class="container col comments-card" onclick="deleteAlert(${index})"></a>
    <div class="card py-4 h-100">
        <div class="card-body text-center">
            <div class="d-flex justify-content-between">
                <div class="name">${comments[0]}</div>
                <div class="date">${comments[2]}</div>
            </div>
            <div class="comments">${comments[1]}</div>
        </div>
    </div>
</div>`;
}


const addAlerts = (type) => {
    arrayAlerts.push(type);
    drawAlerts();
}
function deleteAlert(index){
    arrayAlerts.splice(index, 1);
    drawAlerts();
}

function clean(){
  var name = document.getElementById("nombre").value;
  var com  = document.getElementById("comentario").value;
  nombre.innerHTML = "";
  comentario.innerHTML = "";
}

function contar(){
  var name = document.getElementById("nombre").value;
  var com  = document.getElementById("comentario").value;
  num_name.innerHTML = name.length+'/15';
  num_com.innerHTML = com.length+'/200';
}