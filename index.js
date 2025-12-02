function castVote(number){
    let name = "";
    let img = "";

    if(number === 1){
        name = "ASHOKAN";
        img = "Hand_INC_1.jpg";
    }

    // Show LED effect
    const led = document.getElementById("led" + number);
    led.style.width = "20px";
    led.style.height = "20px";
    led.style.background = "green";
    led.style.borderRadius = "50%";
    led.style.margin = "auto";

    // Save vote info to localStorage
    const voteInfo = { number, name, img };
    localStorage.setItem("lastVote", JSON.stringify(voteInfo));

    // Redirect to confirmation page after short delay
    setTimeout(() => {
        window.location.href = "confirm.html";
    }, 500);
}
