

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

function searchProducts(searchTirm)
{
    var matchingProducts = [];
    for(var i = 0; i < productsContainer.length; i++)
    {
        if(productsContainer[i].name.toLowerCase().includes( searchTirm.toLowerCase()) == true)
        {
            matchingProducts.push( productsContainer[i] );
        }

    }

    displayProducts(matchingProducts);
}

function deleteProduct(productIndex)
{
    productsContainer.splice(productIndex, 1);
    localStorage.setItem("myproducts", JSON.stringify(productsContainer));
    displayProducts(productsContainer);
}

function setupProduct(productIndex)
{
    productNameInput.value = productsContainer[productIndex].name;
    productPriceInput.value = productsContainer[productIndex].price;
    productCategoryInput.value = productsContainer[productIndex].category;
    productDescInput.value = productsContainer[productIndex].desc;

    mainBtn.innerHTML = "update";
    currentIndex=productIndex;
}

function updateProduct()
{
    productsContainer[currentIndex].name = productNameInput.value;
    productsContainer[currentIndex].price = productPriceInput.value;
    productsContainer[currentIndex].category = productCategoryInput.value;
    productsContainer[currentIndex].desc = productDescInput.value;
    localStorage.setItem("myProducts", JSON.stringify(productsContainer));
    clearProduct();
    displayProducts(productsContainer);
    mainBtn.innerHTML = "add Product";

}

function validateProductName()
{
    var regex = /^[A-Z][a-z]{3,8}$/;
    var productNameAlert = document.getElementById("productNameAlert");
    if( regex.test(productNameInput.value) == true && productNameInput.value != "" ) 
    {

        productNameInput.classList.add("is-valid")
        productNameInput.classList.remove("is-invalid")
        productNameAlert.classList.replace("d-block", "d-none");
        return true
    }
   else
    {
        productNameInput.classList.add("is-invalid")
        productNameInput.classList.remove("is-valid")
        productNameAlert.classList.replace("d-none", "d-block");
        return false
    }

}

productNameInput.addEventListener("keyup" ,validateProductName );