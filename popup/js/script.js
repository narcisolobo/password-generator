/**
 * Initialization of Bootstrap Tooltips.
 * @type {bootstrap.Tooltip}
 */
const tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map(
  (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);

/**
 * Initialization of Bootstrap Toast.
 * @type {bootstrap.Toast}
 */
const copiedToast = document.querySelector("#copiedToast");

/**
 * Selection of password paragraph element.
 * @type {HTMLParagraphElement}
 */
const password = document.querySelector("#password");
password.addEventListener("click", () => {
  clickToCopy();
});

const redo = document.querySelector('#redo');
redo.addEventListener('click', () => {
  const newPassword = generatePassword();
  password.innerText = newPassword;
})

/**
 * Function to copy the contents of the password
 * paragraph to the user's clipboard.
 */
function clickToCopy() {
  const password = document.querySelector("#password");
  navigator.clipboard.writeText(password.innerText);
  const toast = new bootstrap.Toast(copiedToast);
  toast.show();
}

function generate6(chars = '') {
  let password = '';
  for (let i = 0; i < 6; i++) {
    password += chars.charAt(
      Math.floor(Math.random() * chars.length)
    );
  }

  password += '-'
  return password;
}

function generatePassword() {
  let password = "";
  const possibleCharacters =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

  for (let i = 0; i < 3; i++) {
    password += generate6(possibleCharacters);
  }

  password = password.substring(0, password.length - 1);
  return password;
}

password.innerText = generatePassword();
