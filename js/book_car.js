
function openWhatsApp() {
    const phoneNumber = '+91988140654'; // Replace with your company's phone number in international format
    const message = 'Hello, I would like to inquire about your services.'; // Replace with your custom message
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}

function openPhone() {
    const phoneNumber = '+91988140654'; // Replace with your company's phone number in international format
    window.open(`tel:${phoneNumber}`);
}
