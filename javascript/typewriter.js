const welcomeText = document.getElementById("welcomeText"); 

function typeWriterPC() {
    const text = "Welcome to Dev Track!";
    let index = 0;

    function typing() {
        if (index < text.length) {
            welcomeText.innerHTML += text.charAt(index);
            index++;
            setTimeout(typing, 100); 
        }
    }

    typing(); 
}

function typeWriterMob() {
    const textLine1 = "Welcome to";
    const textLine2 = "Dev Track!";
    let currentLine = 1; 
    let lineIndex = 0; 

    function typing() {
        if (currentLine === 1) {
            if (lineIndex < textLine1.length) {
                welcomeText.innerHTML += textLine1.charAt(lineIndex);
                lineIndex++;
                setTimeout(typing, 100); 
            } else {
                welcomeText.innerHTML += "<br>"; 
                currentLine++; 
                lineIndex = 0; 
                setTimeout(typing, 100); 
            }
        } else if (currentLine === 2) {
            if (lineIndex < textLine2.length) {
                welcomeText.innerHTML += textLine2.charAt(lineIndex);
                lineIndex++;
                setTimeout(typing, 100); 
            }
        }
    }

    typing(); 
}

if (window.innerWidth <= 768) {
    setTimeout(typeWriterMob, 500); 
} else {
    setTimeout(typeWriterPC, 500); 
}
