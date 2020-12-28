

var productNameInput = document.getElementById("productNameInput");
var productPriceInput = document.getElementById("productPriceInput");
var productCategoryInput = document.getElementById("productCategoryInput");
var productDescInput = document.getElementById("productDescInput");
var mainBtn = document.getElementById("mainBtn");
var test = "";
console.log(typeof(test))

var productsContainer;




if(localStorage.getItem("myProducts") == null)
{
    productsContainer = [];
}
else
{
    productsContainer = JSON.parse(localStorage.getItem("myProducts"));
    displayProducts(productsContainer);
}


function addProduct()
{
    if(mainBtn.innerHTML == "add Product")
    {
        if(validateProductName() == true)
        {
            var product = 
            {
                name:productNameInput.value,
                price:productPriceInput.value,
                category:productCategoryInput.value,
                desc:productDescInput.value
            }
    
            productsContainer.push(product);
            localStorage.setItem("myProducts", JSON.stringify(productsContainer));
    
            clearProduct();
            displayProducts(productsContainer);
            productNameInput.classList.remove("is-valid");
        }
        

    }
    else
    {
        updateProduct();
    }
}


function clearProduct()
{
    productNameInput.value = ""
    productPriceInput.value = ""
    productCategoryInput.value = ""
    productDescInput.value = ""
}
function displayProducts(productList)
{

    var cartoona = ``;
    for(var i = 0; i < productList.length; i++)
    {
        cartoona += `<tr>
        <td>${i+1}</td>
        <td>${productList[i].name}</td>
        <td>${productList[i].price}</td>
        <td>${productList[i].category}</td>
        <td>${productList[i].desc}</td>
        <td><button class="btn btn-outline-warning" onclick="setupProduct(${i})">update</button></td>
        <td><button class="btn btn-outline-danger" onclick="deleteProduct(${i})">delete</button></td>
    </tr>`
    }
    document.getElementById("tableBody").innerHTML = cartoona;
}

