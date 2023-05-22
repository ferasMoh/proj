let x = false;
let unit = 0;
let totalPrice = 0;
let totalCash = parseInt(localStorage.cashValue);
let ta_tcash = document.getElementById("ta_tcash");

//text areas
let ta1 = document.getElementById("ta1");
let ta2 = document.getElementById("ta2");

//orders
let B1 = document.getElementById("b1");
let B2 = document.getElementById("b2");
let B3 = document.getElementById("b3");
let B4 = document.getElementById("b4");
let B5 = document.getElementById("b5");
let B6 = document.getElementById("b6");
let B7 = document.getElementById("b7");
let B8 = document.getElementById("b8");
let B9 = document.getElementById("b9");
let B10 = document.getElementById("b10");
let B11 = document.getElementById("b11");


//prices into variables
//each price into localStorage to save it

let taCof = document.getElementById("tacof");
taCof.value = parseInt(localStorage.tacof);

let taTea = document.getElementById("tatea");
taTea.value = parseInt(localStorage.tatea);

let taHot = document.getElementById("tahot");
taHot.value = parseInt(localStorage.tahot);

let taCap = document.getElementById("tacap");
taCap.value = parseInt(localStorage.tacap);

let taMin = document.getElementById("tamin");
taMin.value = parseInt(localStorage.tamin);

let taGing = document.getElementById("taging");
taGing.value = parseInt(localStorage.taging);

let taStr = document.getElementById("tastr");
taStr.value = parseInt(localStorage.tastr);

let taOra = document.getElementById("taora");
taOra.value = parseInt(localStorage.taora);

let taMan = document.getElementById("taman");
taMan.value = parseInt(localStorage.taman);

let taApp = document.getElementById("taapp");
taApp.value = parseInt(localStorage.taapp);

let taCoc = document.getElementById("tacoc");
taCoc.value = parseInt(localStorage.tacoc);



//create date and time

let dt = new Date();
let ampm = dt.getHours() >= 12 ? "pm" : "am";
let datetime = "       Date : "+dt.getDay()+"/"+dt.getMonth()+"/"+dt.getFullYear()+" |||  Time : "+dt.getHours()+":"+dt.getMinutes()+":"+dt.getSeconds()+" "+ampm+"\n";



//press on your order
//Calulate number of units
//Calculate number of units price
//Calculate total price
//Add it to ta1

function b(id){
	
	//Coffee_Button
	
	if(id == 'b1'){
		if(ta1.value.includes('Coffee')){
			unit++;
            ta1.value = "";
            ta1.value += "\n" + unit + " " + B1.innerHTML + "       | Unit Price : " +  taCof.value + " | All Price : " +  taCof.value*unit;
            totalPrice += (taCof.value*unit)/unit;
			}
		else{
			unit = 0;
            unit++;
            ta1.value = "";
            ta1.value += "\n" + unit + " " + B1.innerHTML + "       | Unit Price : " +  taCof.value + " | All Price : " +  taCof.value*unit;
            totalPrice += (taCof.value*unit)/unit;
		}
    }
	
	
	//Tea_button
	
	if(id == 'b2'){
		if(ta1.value.includes('Tea')){
            unit++;
            ta1.value = "";
            ta1.value += "\n" + unit + " " + B2.innerHTML + "          | Unit Price : " + taTea.value + " | All Price : " + taTea.value*unit;
            totalPrice += (taTea.value*unit)/unit;
		}else{
	        unit = 0;
	        unit++;
            ta1.value = "";
            ta1.value += "\n" + unit + " " + B2.innerHTML + "          | Unit Price : " + taTea.value + " | All Price : " + taTea.value*unit;
            totalPrice += (taTea.value*unit)/unit;
		}
	}
	
	//Hot-Chocolate_button
	
	if(id == 'b3'){
		if(ta1.value.includes('Hot-Chocolate')){
            unit++;
            ta1.value = "";
            ta1.value += "\n" + unit + " " + B3.innerHTML + "| Unit Price : " + taHot.value + " | All Price : " + taHot.value*unit;
            totalPrice += (taHot.value*unit)/unit;
		}else{
	        unit = 0;
	        unit++;
            ta1.value = "";
            ta1.value += "\n" + unit + " " + B3.innerHTML + "| Unit Price : " + taHot.value + " | All Price : " + taHot.value*unit;
            totalPrice += (taHot.value*unit)/unit;
		}
	}
	
	
	//Capuccino_button
	
	if(id == 'b4'){
		if(ta1.value.includes('Capuccino')){
            unit++;
            ta1.value = "";
            ta1.value += "\n" + unit + " " + B4.innerHTML + "    | Unit Price : " + taCap.value + " | All Price : " + taCap.value*unit;
            totalPrice += (taCap.value*unit)/unit;
		}else{
	        unit = 0;
            unit++;
            ta1.value = "";
            ta1.value += "\n" + unit + " " + B4.innerHTML + "    | Unit Price : " + taCap.value + " | All Price : " + taCap.value*unit;
            totalPrice += (taCap.value*unit)/unit;
		}
	}
	
	
	
	//Mint_button
	
	if(id == 'b5'){
		if(ta1.value.includes('Mint')){
            unit++;
            ta1.value = "";
            ta1.value += "\n" + unit + " " + B5.innerHTML + "         | Unit Price : " + taMin.value + " | All Price : " + taMin.value*unit;
            totalPrice += (taMin.value*unit)/unit;
		}else{
	        unit = 0;
            unit++;
            ta1.value = "";
            ta1.value += "\n" + unit + " " + B5.innerHTML + "         | Unit Price : " + taMin.value + " | All Price : " + taMin.value*unit;
            totalPrice += (taMin.value*unit)/unit;
		}
	}


	//Ginger_button

	if(id == 'b6'){
		if(ta1.value.includes('Ginger')){
            unit++;
            ta1.value = "";
            ta1.value += "\n" + unit + " " + B6.innerHTML + "       | Unit Price : " + taGing.value + " | All Price : " + taGing.value*unit;
            totalPrice += (taGing.value*unit)/unit;
		}else{
	        unit = 0;
            unit++;
            ta1.value = "";
            ta1.value += "\n" + unit + " " + B6.innerHTML + "       | Unit Price : " + taGing.value + " | All Price : " + taGing.value*unit;
            totalPrice += (taGing.value*unit)/unit;
		}
	
	}
	
	//Strawberry_button
	
	if(id == 'b7'){
		if(ta1.value.includes('Strawberry')){
            unit++;
            ta1.value = "";
            ta1.value += "\n" + unit + " " + B7.innerHTML + "   | Unit Price : " + taStr.value + " | All Price : " + taStr.value*unit;
            totalPrice += (taStr.value*unit)/unit;
		}else{
	        unit = 0;
            unit++;
            ta1.value = "";
            ta1.value += "\n" + unit + " " + B7.innerHTML + "   | Unit Price : " + taStr.value + " | All Price : " + taStr.value*unit;
            totalPrice += (taStr.value*unit)/unit;
		}
	}
	
	//Orange_button
	
	if(id == 'b8'){
		if(ta1.value.includes('Orange')){
            unit++;
            ta1.value = "";
            ta1.value += "\n" + unit + " " + B8.innerHTML + "       | Unit Price : " + taOra.value + " | All Price : " + taOra.value*unit;
            totalPrice += (taOra.value*unit)/unit;
		}else{
	        unit = 0;
            unit++;
            ta1.value = "";
            ta1.value += "\n" + unit + " " + B8.innerHTML + "       | Unit Price : " + taOra.value + " | All Price : " + taOra.value*unit;
            totalPrice += (taOra.value*unit)/unit;
		}
	}
	
	//Mango_button
	
	if(id == 'b9'){
		if(ta1.value.includes('Mango')){
            unit++;
            ta1.value = "";
            ta1.value += "\n" + unit + " " + B9.innerHTML + "        | Unit Price : " + taMan.value + " | All Price : " + taMan.value*unit;
            totalPrice += (taMan.value*unit)/unit;
		}else{
	        unit = 0;
            unit++;
            ta1.value = "";
            ta1.value += "\n" + unit + " " + B9.innerHTML + "        | Unit Price : " + taMan.value + " | All Price : " + taMan.value*unit;
            totalPrice += (taMan.value*unit)/unit;
		}
	}
	
	//Apple_button
	
	if(id == 'b10'){
		if(ta1.value.includes('Apple')){
            unit++;
            ta1.value = "";
            ta1.value += "\n" + unit + " " + B10.innerHTML + "        | Unit Price : " + taApp.value + " | All Price : " + taApp.value*unit;
            totalPrice += (taApp.value*unit)/unit;
		}else{
	        unit = 0;
            unit++;
            ta1.value = "";
            ta1.value += "\n" + unit + " " + B10.innerHTML + "        | Unit Price : " + taApp.value + " | All Price : " + taApp.value*unit;
            totalPrice += (taApp.value*unit)/unit;
		}
	}
	
	//CocaCola_button
	
	if(id == 'b11'){
		let C = (taCoc.value*unit)/unit;
		if(ta1.value.includes('CocaCola')){
            unit++;
            ta1.value = "";
            ta1.value += "\n" + unit + " " + B11.innerHTML + "     | Unit Price : " + taCoc.value + " | All Price : " + taCoc.value*unit;
            totalPrice += C;
		}else{
	        unit = 0;
            unit++;
            ta1.value = "";
            ta1.value += "\n" + unit + " " + B11.innerHTML + "     | Unit Price : " + taCoc.value + " | All Price : " + taCoc.value*unit;
            totalPrice += C;
		}
	}
	

}





//Add total price to ta2 and empty unit value

function add() {
    ta2.value += ta1.value;
    ta1.value = "";
    unit = 0;
}



//Delete only ta1 value
//Make unit equal zero and total price will be same

function Delete(){
	ta1.value = '';
	totalPrice -= C;
}


//Delete ta1 and ta2 values
//Make unit and total price values equal zero

function DeleteAll() {
    ta2.value = "";
    ta1.value = "";  
    unit = 0; 
	totalPrice = 0;
}


//show prices dialog

function dial(){
    if(x^=true) {
    document.getElementById("dialog").style.display = "block";
	scroll({
		top:1200,
		behavior: 'smooth',
	})
	}
    else{
       document.getElementById("dialog").style.display = "none";
       scroll({
	    top:600,
        behavior:'smooth',		 
	   })
}}


//show all bill price on ta2
//Show date and time

function total_price(){
    ta2.value += "\n______________________________________________________\n\n               Total Price = " + totalPrice + " SDG\n\n" + datetime;
	}




//print the bill
//create total cash value
//save total cash value to local storage

ta_tcash.value = 'Total Cash = ' + parseInt(localStorage.cashValue) + ' SDG';
function prnt(){

	if (totalPrice >= 0) {
		totalCash = totalCash + totalPrice;
    	localStorage.setItem('cashValue', JSON.stringify(totalCash));
	    ta2.value = "";
        ta1.value = "";
        unit = 0;
     	totalPrice = 0;
        ta_tcash.value = '';
	    ta_tcash.value += 'Total Cash = ' + parseInt(localStorage.cashValue) + ' L.S';
        window.print();
	}else{
        totalPrice = 0;
    }
}


//enter password to clear cash

let pass = document.getElementById('currentPass');
let clearDialog = document.getElementById('clearDialog');
function clr(){

	if(x^=true){
	    clearDialog.style.display = 'block';
    }else{
	    clearDialog.style.display = 'none';  
	}
}

function confirmPass(){
	if(pass.value == localStorage.currentPass){
	    totalCash = 0;
	    ta_tcash.value = 'Total Cash = ' + totalCash + ' L.S';
	    localStorage.cashValue = 0;
		pass.value = '';
		alert('Password is right');
    }else{
	    clearDialog.style.display = 'block';
		alert('Password is wrong, please try again !!');
		pass.value = '';
	}
}


//Change your password

let dialogChangePass = document.getElementById('dialogChangePass');
let oldPass = document.getElementById('oldPass');
let newPass = document.getElementById('newPass');
function changePass(){
	if(x^=true){
		dialogChangePass.style.display = 'block';
	}else{
		dialogChangePass.style.display = 'none';
	}
}


localStorage.setItem('currentPass', JSON.Stringify(currentPass));
function confirmNewPass(){
	
	if (oldPass.value == localStorage.currentPass){
		localStorage.currentPass = newPass.value;
		oldPass.value = '';
		newPass.value = '';
		alert('Change password process has been successed');
	}else{
		dialogChangePass.style.display = 'block';
		alert('sorry old pass is wrong !!');
		oldPass.value = '';
		newPass.value = '';
	}
}


//save prices when you press on save button


function changePrices(){
	    
		localStorage.setItem('tacof', taCof.value);
		localStorage.tacof = taCof.value;
		
		localStorage.setItem('tatea', taTea.value);
		localStorage.tatea = tatea.value;
		
		localStorage.setItem('tahot', taHot.value);
		localStorage.tahot= taHot.value
		
		localStorage.setItem('tacap', taCap.value);
		localStorage.tacap = taCap.value;
		
		localStorage.setItem('tamin', taMin.value);
		localStorage.tamin = taMin.value
		
		localStorage.setItem('taging', taGing.value);
		localStorage.taging = taGing.value;
		
		localStorage.setItem('tastr', taStr.value);
		localStorage.tastr = taStr.value
		
		localStorage.setItem('taora', taOra.value);
		localStorage.taora = taOra.value;
		
		localStorage.setItem('taman', taMan.value);
		localStorage.taman = taMan.value;
		
		localStorage.setItem('taapp', taApp.value);
		localStorage.taapp = taApp.value
		
		localStorage.setItem('tacoc', taCoc.value);
		localStorage.tacoc = taCoc.value;
		
		alert('save prices has been successed');
	
}




//delete only ta1
//print table only ta2