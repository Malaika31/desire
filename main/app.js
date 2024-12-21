
async function fetchData(){
    try{
        let carsApi=await fetch("https://www.freetestapi.com/api/v1/cars");
        carsApi = await carsApi.json();
        for (var i = 0; i < carsApi.length; i++){
            ShowRoom.innerHTML+=`<div class="card-group" style="width:20%;">
            <div class="card" >
              
              <div class="card-body" >
                <h5 class="card-title">TITLE: ${carsApi[i].make}</h5>
                <p class="card-text">MODEL: ${carsApi[i].model}</p>
                <p class="card-text">YEAR: ${carsApi[i].year}</p>
                <p class="card-text">PRICE: ${carsApi[i].price}</p>
                <p class="card-text">COLOR: ${carsApi[i].color}</p>
                <p class="card-text">ENGINE: ${carsApi[i].engine}</p>


                
              </div>
            </div>`;
            
        }
    }
    catch(error){
console.log("NETWORK ISSUE!!!")
    }
}
fetchData();