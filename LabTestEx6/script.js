function buyNow() {
    // Get form data
    const cardNumber = document.getElementById('cardNumber').value;
    const expiryDate = document.getElementById('expiryDate').value;
    const cvv = document.getElementById('cvv').value;

    // Validate form data (you may want to implement more robust validation)
    if (!cardNumber || !expiryDate || !cvv) {
        alert('All fields are mandatory');
        return;
    }

    // Send data to the server
    fetch('/processPayment', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ cardNumber, expiryDate, cvv }),
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('resultMessage').innerText = data.message;
    })
    .catch(error => {
        console.error('Error:', error);
    });
}
