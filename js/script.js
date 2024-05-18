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