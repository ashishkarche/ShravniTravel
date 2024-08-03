// Function to update the booking summary
function updateBookingSummary() {
    const pickupLocation = document.getElementById('pickupLocation').value;
    const dropLocation = document.getElementById('dropLocation').value;
    const pickupDate = document.getElementById('pickupDate').value;
    const pickupTime = document.getElementById('pickupTime').value;

    document.getElementById('pickupLocationSummary').textContent = pickupLocation || 'Location A';
    document.getElementById('dropLocationSummary').textContent = dropLocation || 'Location B';
    document.getElementById('pickupDateSummary').textContent = pickupDate || 'Date';
    document.getElementById('pickupTimeSummary').textContent = pickupTime || 'Time';
}

// Function to validate email
function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

// Function to validate phone number
function validatePhoneNumber(phone) {
    const phonePattern = /^[0-9]{10}$/;
    return phonePattern.test(phone);
}

// Function to check if all required fields are filled and valid
function checkFormValidity() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const contact = document.getElementById('contact').value.trim();
    const pickupLocation = document.getElementById('pickupLocation').value.trim();
    const dropLocation = document.getElementById('dropLocation').value.trim();
    const pickupDate = document.getElementById('pickupDate').value.trim();
    const pickupTime = document.getElementById('pickupTime').value.trim();

    const isEmailValid = validateEmail(email);
    const isPhoneValid = validatePhoneNumber(contact);
    const isValid = name !== '' && isEmailValid && isPhoneValid && pickupLocation !== '' && dropLocation !== '' && pickupDate !== '' && pickupTime !== '';

    document.querySelector('.btn-primary.btn-block').disabled = !isValid;
    
    // Display validation messages
    document.getElementById('emailError').textContent = isEmailValid ? '' : 'Email is incorrect';
    document.getElementById('contactError').textContent = isPhoneValid ? '' : 'Phone number must be 10 digits';
    document.getElementById('formError').textContent = isValid ? '' : 'Please fill in all required fields correctly';

    return {
        isEmailValid,
        isPhoneValid,
        isValid
    };
}

// Function to print the receipt
function printReceipt() {
    const printWindow = window.open('', '', 'height=600,width=800');
    
    const bookingSummaryHTML = `
        <html>
        <head>
            <title>Booking Receipt</title>
            <style>
                body { font-family: Arial, sans-serif; margin: 20px; }
                .container { width: 80%; margin: 0 auto; }
                h1 { text-align: center; }
                .summary { border: 1px solid #ccc; padding: 20px; border-radius: 5px; }
                .summary h3 { margin-top: 0; }
                .summary ul { list-style-type: none; padding: 0; }
                .summary li { padding: 10px 0; border-bottom: 1px solid #eee; }
            </style>
        </head>
        <body>
            <div class="container">
                <h1>Booking Receipt</h1>
                <div class="summary">
                    <h3>Booking Summary</h3>
                    <ul>
                        <li><strong>Car Model:</strong> Car1</li>
                        <li><strong>PickUp Location:</strong> ${document.getElementById('pickupLocationSummary').textContent}</li>
                        <li><strong>Drop Location:</strong> ${document.getElementById('dropLocationSummary').textContent}</li>
                        <li><strong>PickUp Date:</strong> ${document.getElementById('pickupDateSummary').textContent}</li>
                        <li><strong>PickUp Time:</strong> ${document.getElementById('pickupTimeSummary').textContent}</li>
                        <li><strong>Total Amount:</strong> ${document.getElementById('totalAmount').innerHTML}</li>
                    </ul>
                </div>
            </div>
        </body>
        </html>
    `;

    printWindow.document.open();
    printWindow.document.write(bookingSummaryHTML);
    printWindow.document.close();
    
    printWindow.print();
}

// Event listeners for form inputs to update booking summary and check form validity
document.getElementById('name').addEventListener('input', checkFormValidity);
document.getElementById('email').addEventListener('input', checkFormValidity);
document.getElementById('contact').addEventListener('input', checkFormValidity);
document.getElementById('pickupLocation').addEventListener('input', () => {
    updateBookingSummary();
    checkFormValidity();
});
document.getElementById('dropLocation').addEventListener('input', () => {
    updateBookingSummary();
    checkFormValidity();
});
document.getElementById('pickupDate').addEventListener('input', () => {
    updateBookingSummary();
    checkFormValidity();
});
document.getElementById('pickupTime').addEventListener('input', () => {
    updateBookingSummary();
    checkFormValidity();
});

// Event listener for the Book Now button
document.getElementById('bookNowBtn').addEventListener('click', () => {
    // Perform final validation before proceeding
    const { isEmailValid, isPhoneValid, isValid } = checkFormValidity();

    if (!isEmailValid || !isPhoneValid) {
        let alertMessage = '';
        if (!isEmailValid) alertMessage += 'Email is incorrect.\n';
        if (!isPhoneValid) alertMessage += 'Phone number must be 10 digits.\n';

        alert(alertMessage);
    } else if (!isValid) {
        alert('Please fill in all required fields correctly.');
    } else {
        // Perform booking action
        // For example, you might redirect the user or submit the form here
    }
});

// Event listener for the Print Receipt button
document.querySelector('.btn-primary.btn-block').addEventListener('click', printReceipt);

// Initial state of the Print Receipt button
checkFormValidity();
