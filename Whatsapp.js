function sendWhatsapp(){
    var phone= +905338525077;
    var name = document.getElementById("name").value;
    var date = document.getElementById("date").value;
    var address = document.getElementById("address").value;
    var inputState = document.getElementById("inputState").value;
    var numofPassenger = document.getElementById("numofPassenger").value;
    var numofLuggage = document.getElementById("numofLuggage").value;
    var link= "https://wa.me/" +phone + "?text="+
    "Name and Surname: " + name + "%0a"+ "\nDate: " + date + "%0a"+
    "\nAddress: " + address + "%0a"+"\nCar type: " + inputState + "%0a"+
    "\nNumber of Passengers: " + numofPassenger +"%0a"+
     "\nNumber of Luggage: " + numofLuggage;
    window.open(link, '_blank').focus();
}

function sendemail(){
    document.getElementById('gmail').addEventListener('submit', function(event) {
        event.preventDefault(); 
      
        const FirstName = document.getElementById('First Name').value;
        const LastName = document.getElementById('Last Name').value;
        const Email = "mutimert2002@gmail.com";
        const subject = document.getElementById('Subject').value;
        const Message = document.getElementById('Your Message').value;
        const mailtoLink = `mailto:${Email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(FirstName+" "+LastName+" "+Message)}`;
        window.location.href = mailtoLink;
      });
}
