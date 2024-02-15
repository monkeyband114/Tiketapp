function generateQRCode(ticketDetails) {
    // Generate the QR code using the ticket details
    const qrCode = new QRCode('qr-code', {
      text: JSON.stringify(ticketDetails),
      width: 200,
      height: 200,
    });
  
    // Copy the QR code text to the clipboard
    navigator.clipboard.writeText(JSON.stringify(ticketDetails))
      .then(() => {
        console.log('QR code text copied to clipboard');
      })
      .catch((error) => {
        console.error('Failed to copy QR code text: ', error);
      });
  }
  
  function buyTicket() {
    const ticketType = document.querySelector('input[name="ticket-type"]:checked');
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const cardNumber = document.getElementById('card-number').value;
    const cvv = document.getElementById('cvv').value;
  
    if (!ticketType) {
      alert('Please select a ticket type');
      return;
    }
  
    if (!name || !email || !cardNumber || !cvv) {
      alert('Please fill in all details');
      return;
    }
  
    const ticketDetails = {
      typeOfTicket: ticketType.value,
      name: name,
      email: email,
    };
    
  
    // Check if ticket details are correct
    // For simplicity, assuming card number and CVV are correct if they are non-empty
    const isTicketDetailsCorrect = cardNumber && cvv;
  
    if (isTicketDetailsCorrect) {
      saveTicketDetailsToLocalStorage(ticketDetails);
      // Redirect to the new page
      window.location.href = 'ticket.html';
    } else {
      alert('Invalid card details. Please check and try again.');
    }
  }
  
  function saveTicketDetailsToLocalStorage(ticketDetails) {
    // Convert the ticket details object to a JSON string
    const ticketDetailsString = JSON.stringify(ticketDetails);
    // Save the JSON string to local storage
    localStorage.setItem('ticketDetails', ticketDetailsString);
  }
  