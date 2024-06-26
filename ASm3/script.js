`use strict`;

// Select el
const Info = document.getElementById(`info`);
const FormUser = document.getElementById(`formUser`);
const SubmitBtn = document.querySelector(`.btn-submit`);
const ErrorMail = document.querySelector(`.error-email`);
// Email submit
Info.classList.add(`hidden`);
FormUser.classList.remove(`hidden`);
SubmitBtn.addEventListener(`click`, function () {
  const email = document.getElementById(`email`).value;
  const regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  // if is email
  if (regex.test(email)) {
    Info.classList.remove(`hidden`);
    FormUser.classList.add(`hidden`);
  }
  // if not
  else if (!email) {
    ErrorMail.style.color = `red`;
    ErrorMail.innerHTML = `Hãy nhập đúng email !`;
  } else {
    ErrorMail.style.color = `red`;
    ErrorMail.innerHTML = `Hãy nhập đúng email !`;
  }
});

// View button4

function view_click(element) {
  const job_content = element.querySelector(`.job-content`);
  const view_less = element.querySelector(`.view-button >button`);
  if (view_less.innerHTML.includes(`More`)) {
    view_less.innerHTML = `<svg fill="#000000" height="16" width="16" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
	 viewBox="0 0 330 330" xml:space="preserve">
<path id="XMLID_224_" d="M325.606,229.393l-150.004-150C172.79,76.58,168.974,75,164.996,75c-3.979,0-7.794,1.581-10.607,4.394
	l-149.996,150c-5.858,5.858-5.858,15.355,0,21.213c5.857,5.857,15.355,5.858,21.213,0l139.39-139.393l139.397,139.393
	C307.322,253.536,311.161,255,315,255c3.839,0,7.678-1.464,10.607-4.394C331.464,244.748,331.464,235.251,325.606,229.393z"/>
</svg> View Less`;
    job_content.style.display = `block`;
  } else {
    view_less.innerHTML = `<svg  fill="#000000"  height="16"  width="16"  version="1.1"  id="Layer_1"  xmlns="http://www.w3.org/2000/svg"  xmlns:xlink="http://www.w3.org/1999/xlink"  viewBox="0 0 386.257 386.257"  xml:space="preserve"  >  <polygon points="0,96.879 193.129,289.379 386.257,96.879 " />  </svg>  View More`;
    job_content.style.display = `none `;
  }
}
