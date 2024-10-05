const welcomeText = document.getElementById("welcomeText"); // Moved this outside

function typeWriterPC() {
    const text = "Welcome to Dev Track!";
    let index = 0;

    function typing() {
        if (index < text.length) {
            welcomeText.innerHTML += text.charAt(index);
            index++;
            setTimeout(typing, 100); // Adjust the speed of typing here (100ms)
        }
    }

    typing(); // Start typing
}

function typeWriterMob() {
    const textLine1 = "Welcome to"; // First line
    const textLine2 = "Dev Track!"; // Second line
    let currentLine = 1; // Start with the first line
    let lineIndex = 0; // Index for the current line

    function typing() {
        if (currentLine === 1) {
            if (lineIndex < textLine1.length) {
                welcomeText.innerHTML += textLine1.charAt(lineIndex);
                lineIndex++;
                setTimeout(typing, 100); // Speed of typing
            } else {
                // Move to the next line
                welcomeText.innerHTML += "<br>"; // Add a line break
                currentLine++; // Move to the next line
                lineIndex = 0; // Reset line index for the next line
                setTimeout(typing, 100); // Continue typing
            }
        } else if (currentLine === 2) {
            if (lineIndex < textLine2.length) {
                welcomeText.innerHTML += textLine2.charAt(lineIndex);
                lineIndex++;
                setTimeout(typing, 100); // Speed of typing
            }
        }
    }

    typing(); // Start typing
}

// Detect screen size and call the appropriate function
if (window.innerWidth <= 768) {
    setTimeout(typeWriterMob, 500); // 500ms delay before starting for mobile
} else {
    setTimeout(typeWriterPC, 500); // 500ms delay before starting for desktop
}
