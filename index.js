const button = document.getElementById('changeTextButton');
        const output = document.getElementById('output');
        let isTextChanged = false;

        button.addEventListener('click', () => {
            if (isTextChanged) {
                output.style.fontSize = '24px'; // Decrease the font size
                output.textContent = 'Hello World !';
                button.style.backgroundColor = '#4caf50';
                document.body.classList.remove('animate-background');
            } else {
                output.style.fontSize = '36px'; // Enlarge the font size
                output.textContent = 'Hello World! I am Vishnu';
                button.style.backgroundColor = '#ff5722';
                document.body.classList.add('animate-background');
            }

            // Toggle the text state
            isTextChanged = !isTextChanged;

            // Add an animation class
            output.classList.add('animated');
            setTimeout(() => {
                output.classList.remove('animated');
            }, 1000);
        });