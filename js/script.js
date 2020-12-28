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

productNameInput.addEventListener("keyup" ,validateProductName );;