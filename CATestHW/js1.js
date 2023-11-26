function msg(n) {
    alert("Here at : " + n);
}

function msg(txt) {
    alert(txt);
}

var productPrice = 250;
   
function qtyChg() {
    price = productPrice;
    let qty = document.querySelector('#qty').value;
    document.querySelector('#x').innerHTML = "x";
    document.querySelector('#qtyEnt').innerHTML = qty;
    productAmt = qty * price;
    document.querySelector('#productAmt').innerHTML = productAmt;
    fee = 0.1 * price;
    document.querySelector('#fee').innerHTML = fee;
    totalAmt = productAmt + fee;
    document.querySelector('#totalAmt').innerHTML = totalAmt;  
    document.querySelector('#btnPlaceOrder').classList.remove('disabled');
}


function reset() {
    document.querySelector('#qty').value = "";
    document.querySelector('#x').innerHTML = "";
    document.querySelector('#qtyEnt').innerHTML = "";
    document.querySelector('#productAmt').innerHTML = "";
    document.querySelector('#fee').innerHTML = "";
    document.querySelector('#totalAmt').innerHTML = "";
}

function confirmOrder() {
    msg("Thank You. \nYour order will be delivered soon!");
}

function placeOrder() {   
    if (typeof (localStorage) !== "undefined") {
        storeLocalBilling();     
    }
    else {
        msg("Sorry, local storage Un defined");
    }
}

function storeLocalBilling() {   
    let fname = document.querySelector('#fname').value;
    localStorage.setItem("fname", fname);
    let lname = document.querySelector('#lname').value;
    localStorage.setItem("lname", lname);
    let email = document.querySelector('#email').value;
    localStorage.setItem("email", email);
    let coyname = document.querySelector('#coyname').value;
    localStorage.setItem("coyname", coyname);
    let street = document.querySelector('#street').value;
    localStorage.setItem("street", street);
    let city = document.querySelector('#city').value;
    localStorage.setItem("city", city);
    let country = document.querySelector('#country').value;
    localStorage.setItem("country", country);
    let zip = document.querySelector('#zip').value;
    localStorage.setItem("zip", zip);
    let zipcode = document.querySelector('#zipcode').value;
    localStorage.setItem("zipcode", zipcode);
    let productCat = document.querySelector('#productCat').innerHTML;
    localStorage.setItem("productCat", productCat);
    let qty = document.querySelector('#qty').value;
    localStorage.setItem("qty", qty);
    let productName = document.querySelector('#productName').innerHTML;
    localStorage.setItem("productName", productName);
    let productCost = document.querySelector('#productCost').innerHTML;
    localStorage.setItem("productCost", productCost);
    let productAmt = document.querySelector('#productAmt').innerHTML;
    localStorage.setItem("productAmt", productAmt);
    let fee = document.querySelector('#fee').innerHTML;
    localStorage.setItem("fee", fee);
    let totalAmt = document.querySelector('#totalAmt').innerHTML;
    localStorage.setItem("totalAmt", totalAmt);
}

function getPrevEntries() {
    document.querySelector('#fname').value = localStorage.getItem("fname");
    document.querySelector('#lname').value = localStorage.getItem("lname");
    document.querySelector('#email').value = localStorage.getItem("email");
    document.querySelector('#coyname').value = localStorage.getItem("coyname");
    document.querySelector('#street').value = localStorage.getItem("street");
    document.querySelector('#city').value = localStorage.getItem("city");
    document.querySelector('#country').value = localStorage.getItem("country");
    document.querySelector('#zip').value = localStorage.getItem("zip");
    document.querySelector('#zipcode').value = localStorage.getItem("zipcode");
    document.querySelector('#productCat').innerHTML = localStorage.getItem("productCat");
    document.querySelector('#qty').value = localStorage.getItem("qty");
    document.querySelector('#productName').innerHTML = localStorage.getItem("productName");    
    document.querySelector('#productCost').innerHTML = localStorage.getItem("productCost");  
    document.querySelector('#productAmt').innerHTML = "Rs " + localStorage.getItem("productAmt");
    document.querySelector('#fee').innerHTML = "Rs " + localStorage.getItem("fee");
    document.querySelector('#totalAmt').innerHTML = "Rs " + localStorage.getItem("totalAmt");
}

  p1Txt = "Product 1 description ";
  p2Txt = "Product 2 description ";
  p3Txt = "Product 3 description ";
  p4Txt = "Product 4 description ";
  p5Txt = "Product 5 description ";
  p6Txt = "Product 6 description ";
  p7Txt = "Product 7 description ";
  p8Txt = "Product 8 description ";
 
 function onLoadHomePage()
 {
    document.querySelector('#p1').innerHTML = p1Txt;    
    document.querySelector('#p2').innerHTML = p2Txt;    
    document.querySelector('#p3').innerHTML = p3Txt;    
    document.querySelector('#p4').innerHTML = p4Txt;  
    document.querySelector('#p5').innerHTML = p5Txt;    
    document.querySelector('#p6').innerHTML = p6Txt;    
    document.querySelector('#p7').innerHTML = p7Txt;    
    document.querySelector('#p8').innerHTML = p8Txt;   
 }

 function onLoadBillingPage()
 {
    document.querySelector('#productCost').innerHTML = productPrice;
 }

function setImageSrc(imgId) {  
    let imgSrc = document.getElementById(imgId).src;;
    localStorage.setItem("imgSrc", imgSrc); 
}

function getImageSrc(imgId) {      
      document.getElementById(imgId).src = localStorage.getItem("imgSrc");      
      loadProductDesc();
}

pDescTxt = "<p>Wellness product</p> " +
            "<br><br><p>Country of origin : India</p> " +
            "<p>M.R.P : Rs 325.00</p>" +
            "<p>Price : " + productPrice + "- Free delivery</p>" +
            "<p>You save Rs 75.00 </p>" +
            "<p>Discount : 15%</p>";

function loadProductDesc() {    
    document.querySelector('#p1').innerHTML = p1Txt;     
    document.querySelector('#pd1').innerHTML = pDescTxt;
}

