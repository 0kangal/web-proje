// api kismi
function rastgeleAktiviteGetir() {
    fetch("https://www.boredapi.com/api/activity")
        .then(response => response.json())
        .then(data => {
            document.getElementById("randomActivity").innerText = data.activity;
        })
        .catch(error => {
            console.log("Hobi alınırken bir hata oluştu:", hata);
        });
}
// api kismi bitis

function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
        alert("Tüm alanları doldurunuz.");
        return;
    }

    if (!validateEmail(email)) {
        alert("Geçerli bir e-posta adresi giriniz.");
        return;
    }

    // Form doğrulandı, sonuçları göster
    document.getElementById("resultName").innerText = name;
    document.getElementById("resultEmail").innerText = email;
    document.getElementById("resultMessage").innerText = message;
    document.getElementById("contactForm").style.display = "none";
    document.getElementById("result").style.display = "block";
}

function clearForm() {
    document.getElementById("contactForm").reset();
}

function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}
