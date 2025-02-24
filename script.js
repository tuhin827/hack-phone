function preventBack() {
    window.history.pushState(null, "", window.location.href);
    window.onpopstate = function() {
        window.history.pushState(null, "", window.location.href);
    };
}

function scaryPrank() {
    document.documentElement.requestFullscreen().catch(() => {});
    var sound = document.getElementById("scarySound");
    sound.play();
    setTimeout(() => {
        document.getElementById("scaryImage").style.display = "block";
    }, 5000);

    setInterval(() => {
        window.navigator.vibrate([500, 300, 500, 300, 500]);
        alert("Critical System Failure! Data Breach Detected!");
        document.body.style.background = document.body.style.background === 'black' ? 'red' : 'black';
    }, 3000);

    setInterval(() => {
        window.moveBy(Math.random() * 50, Math.random() * 50);
    }, 50);

    setInterval(() => {
        document.title = document.title === "⚠️ SYSTEM HACKED ⚠️" ? "HACKED!!!" : "⚠️ SYSTEM HACKED ⚠️";
    }, 300);

    let messages = [
        "🔴 Accessing personal files...",
        "⚠️ Deleting all data...",
        "💀 Bank account compromised!",
        "📍 Your location is being tracked...",
        "🚨 Webcam access granted!"
    ];
    let index = 0;
    setInterval(() => {
        document.getElementById("autoText").innerText = messages[index];
        index = (index + 1) % messages.length;
    }, 2500);

    setTimeout(() => {
        document.body.innerHTML = "<h1 style='color: red; font-size: 50px;'>SYSTEM SHUTTING DOWN...</h1>";
        setTimeout(() => {
            document.body.style.background = 'black';
        }, 2000);
    }, 15000);
}

preventBack();  // Prevent back navigation
setTimeout(scaryPrank, 3000);