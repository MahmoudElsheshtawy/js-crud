var names = document.getElementById("name");
var price = document.getElementById("price");
var cat = document.getElementById("cat");
var info = document.getElementById("info");
var productList = [];
var items;
if (localStorage.getItem("product") != null) {
  productList = JSON.parse(localStorage.getItem("product"));
  displyItem(productList);
}

  function addproduct() {
    if (  valdtaeProduct()==true) {

      var product = {
        names: names.value,
        price: price.value,
        cat: cat.value,
        info: info.value,
      };
      productList.push(product);
      localStorage.setItem("product", JSON.stringify(productList));
    
      console.log(productList);
      displyItem(productList);
      clrerform();
    }
    else{
      alert("الاسم مش شغال")
    }
  
  }
  


function clrerform() {
  names.value = "";
  price.value = "";
  cat.value = "";
  info.value = "";
}
function displyItem(arr) {
  var container = "";
  for (var i = 0; i < arr.length; i++) {
    container += `
    <tr>
    <td>${arr[i].names}</td>
    <td>${arr[i].price}</td>
    <td>${arr[i].cat}</td>
    <td>${arr[i].info}</td>
    <td><button class="btn btn-success" onclick="Ubdate(${i})">ubdate</button></td>
    <td><button class="btn btn-danger" onclick="deleteproduct(${i})">delete</button></td>
   </tr>
  
  `;
  }
  document.getElementById("product").innerHTML = container;
}
function deleteproduct(indexproduct) {
  productList.splice(indexproduct, 1);
  localStorage.setItem("product", JSON.stringify(productList));

  displyItem(productList);
}

// search for products
var searchInput = document.getElementById("search").innerHTML;
function search(item) {
  var findproduct = [];
  for (let i = 0; i < productList.length; i++) {
    if (
      productList[i].names.toLowerCase().includes(item.toLowerCase()) === true
    ) {
      // console.log(i);
      findproduct.push(productList[i]);
    }
  }
  //  console.log( findproduct);
  displyItem(findproduct);
}
// search(searchInput.value);

// ubdate

var addButton = document.getElementById("add");
var ubdate = document.getElementById("ubdate");
function Ubdate(i) {
  addButton.classList.replace("d-block", "d-none");
  ubdate.classList.replace("d-none", "d-block");

  names.value = productList[i].names;
  price.value = productList[i].price;
  cat.value = productList[i].cat;
  info.value = productList[i].info;

  items =i;
}
function Ubdateproduct() {
  addButton.classList.replace( "d-none","d-block");
  ubdate.classList.replace("d-block","d-none");

var product = {
  names: names.value,
  price: price.value,
  cat: cat.value,
  info: info.value,
};
productList.splice(items,1,product)

console.log(product);
console.log(productList);
localStorage.setItem("product", JSON.stringify(productList));

displyItem(productList)


clrerform()

  }
function valdtaeProduct() {

  var regex=/^[A-Z][a-z]{3,8}$/
  
 return regex.test(names.value);
    
  

  
}