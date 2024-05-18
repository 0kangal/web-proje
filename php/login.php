<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST['username'];
    $password = $_POST['password'];

    // Kullanıcı adının e-posta formatında olup olmadığını kontrol et
    if (!filter_var($username, FILTER_VALIDATE_EMAIL)) {
        header("Location: ../documents/login.html");
        exit();
    }

    // Öğrenci numarası ve şifre kontrolü
    $student_number = "g231210019";
    $expected_username = $student_number . "@ogr.sakarya.edu.tr";
    $expected_password = $student_number;

    if ($username === $expected_username && $password === $expected_password) {
        // Doğru giriş yapıldığında kullanıcıyı karşılayacak ve ana sayfa linki verecek mesaj
        echo "Hoşgeldiniz " . $student_number . "! <br>";
        echo '<a href="../index.html">Ana Sayfaya Git</a>';
    } else {
        header("Location: ../documents/login.html");
        exit();
    }
}
?>
