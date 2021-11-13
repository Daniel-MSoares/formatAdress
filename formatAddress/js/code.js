function formatAdress() {
    document.getElementById('headerFormatted').innerText = 'Address formatted:'

    let name = document.getElementById('name').value
    let street = document.getElementById('street').value
    let number = document.getElementById('number').value
    let district = document.getElementById('district').value
    let city = document.getElementById('city').value
    let zipCod = document.getElementById('zipCod').value
    if (name !== '' && street !== '' && number !== '' && district !== '' && city !== '' && zipCod !== '') {
        document.getElementById('headerFormatted').innerText = 'Address formatted:'
        document.getElementById('formatted').style = ''
        document.getElementById('Adress').innerHTML = `${name}<br>${street},${number}<br>${district},${city},     <br>${zipCod}`
    } else {
        document.getElementById('formatted').style = ''
        document.getElementById('headerFormatted').innerText = 'Ooops!!!'
        document.getElementById('Adress').innerHTML = 'Please fill in all fields and try again!'
    }



}