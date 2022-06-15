const letters = [...'abcdefghijklmnopqrstuvwxyz'];
const charArray = letters.concat(letters.map(letter => letter.toUpperCase()),
                                [...'1234567890&#,+()$~%.:*?<>{}']);
let passwords = ["...", "...", "...", "..."];
document.getElementById('password-one').value = passwords[0];
document.getElementById('password-two').value = passwords[1];
document.getElementById('password-three').value = passwords[2];
document.getElementById('password-four').value = passwords[3];

generatePassword = () => {
    let passwordLength = document.getElementById('length').value 
    let password = '';
    for (let i = 0; i < passwordLength; i++) {
        password += charArray[Math.floor(Math.random() * charArray.length)];
    }
    return password;
}

populatePassword = () => {
    for (let i = 0; i < 4; i++) {
        passwords[i] = generatePassword();
    }
    document.getElementById('password-one').value = passwords[0];
    document.getElementById('password-two').value = passwords[1];
    document.getElementById('password-three').value = passwords[2];
    document.getElementById('password-four').value = passwords[3];
    document.getElementById('copied').innerHTML = '';
}

// on click copy to clipboard
document.getElementById('password-one').addEventListener('click', () => {
    document.getElementById('copied').innerHTML = '';
    setTimeout(() => {
        document.getElementById('password-one').select();
        document.execCommand('copy');
        document.getElementById('copied').innerHTML = 'Copied to clipboard!';
    }, 500)
});
document.getElementById('password-two').addEventListener('click', () => {
    document.getElementById('copied').innerHTML = '';
    setTimeout(() => {
        document.getElementById('password-two').select();
        document.execCommand('copy');
        document.getElementById('copied').innerHTML = 'Copied to clipboard!';
    }, 500)
});
document.getElementById('password-three').addEventListener('click', () => {
    document.getElementById('copied').innerHTML = '';
    setTimeout(() => {
        document.getElementById('password-three').select();
        document.execCommand('copy');
        document.getElementById('copied').innerHTML = 'Copied to clipboard!';
    }, 500)
});
document.getElementById('password-four').addEventListener('click', () => {
    document.getElementById('copied').innerHTML = '';
    setTimeout(() => {
        document.getElementById('password-four').select();
        document.execCommand('copy');
        document.getElementById('copied').innerHTML = 'Copied to clipboard!';
    }, 500)
});

