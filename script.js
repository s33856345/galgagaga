document.addEventListener("DOMContentLoaded", function () {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    
    // Додаємо в кошик
    document.querySelectorAll(".add-to-cart").forEach(button => {
        button.addEventListener("click", function () {
            const name = this.getAttribute("data-name");
            const price = parseInt(this.getAttribute("data-price"));

            cart.push({ name, price });
            localStorage.setItem("cart", JSON.stringify(cart));
            alert(name + " додано в кошик!");
        });
    });

    // Відображення кошика на сторінці cart.html
    if (document.getElementById("cart-items")) {
        const cartItems = document.getElementById("cart-items");
        const totalPriceEl = document.getElementById("total-price");

        let totalPrice = 0;
        cart.forEach(item => {
            const li = document.createElement("li");
            li.textContent = `${item.name} - ${item.price} грн`;
            cartItems.appendChild(li);
            totalPrice += item.price;
        });

        totalPriceEl.textContent = totalPrice;

        // Очистити кошик
        document.getElementById("clear-cart").addEventListener("click", function () {
            localStorage.removeItem("cart");
            location.reload();
        });
    }
});
document.getElementById("order-all").addEventListener("click", function () {
    if (cart.length === 0) {
        alert("Ваш кошик порожній!");
        return;
    }

    // Симуляція оформлення замовлення
    alert("Замовлення оформлено! Дякуємо за покупку!");
    
    // Очистити кошик після замовлення
    localStorage.removeItem("cart");
    location.reload();
});
