// ahmed seif

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
