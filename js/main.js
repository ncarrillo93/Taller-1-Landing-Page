/* OPCION 1
const arrayAlerts = ["success"];
const alerts = document.getElementById("alerts");

drawAlerts();

function drawAlerts(){
    alerts.innerHTML = arrayAlerts.map((alerts,index) => alerta(alerts,index)).join('');
}

function alerta(alert,index){
    return `<div class="alerta alert-${alert}" role="alert" onclick="deleteAlert(${index})"> 
                ola. pero ola de saludo, no de ola. ${index}
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
 */

/* OPCION 2 */
const arrayAlerts = ["success"];
const alerts = document.getElementById("alerts");
let comments = [document.getElementById("nombre").value
                ,document.getElementById("comentario").value
                ,document.getElementById("fecha").value ];
function drawAlerts(){
  var name = document.getElementById("nombre").value;
  var com  = document.getElementById("comentario").value;
  var date = document.getElementById("fecha").value;
  let comments = [name,com,date];
  alerts.innerHTML = arrayAlerts.map((alert,index)=>alerta(comments,alert,index) ).join('');
}

function alerta(comments,alert,index){
  return `<div class=" col-md-4 mb-3 mb-md-0" onclick="deleteAlert(${index})></a>
    <div class="card py-4 h-100">
        <div class="card-body text-center">
            <div class="d-flex justify-content-between">
                <div>${index}</div>
                <div class="name">${comments[0]}</div>
                <div class="date">${comments[1]}</div>
            </div>
            <div class="comments">${comments[2]}</div>
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
