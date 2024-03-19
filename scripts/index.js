function typeHello() {
  const introductionH1 = document.getElementById("introduction");
  const textToType = "Hello!";
  let currentIndex = 0;

  function typeNextCharacter() {
    if (currentIndex < textToType.length) {
      introductionH1.textContent = textToType.slice(0, currentIndex + 1);
      currentIndex++;
    } else {
      clearInterval(typingInterval);
    }
  }

  // Typing interval (milliseconds between each character)
  const typingInterval = setInterval(typeNextCharacter, 175);
}

window.addEventListener("load", typeHello);

const currentCompanyElement = document.getElementById('current-company');
const currentJobElement = document.getElementById('current-job');

const startDateCompany = new Date('June 2021');
const startDateJob = new Date('January 2024');

const currentDate = new Date();

let companyDiffYears = currentDate.getFullYear() - startDateCompany.getFullYear();
let companyDiffMonths = currentDate.getMonth() - startDateCompany.getMonth() + 1;

if (companyDiffMonths < 0) {
    companyDiffYears--;
    companyDiffMonths += 12;
}

let jobDiffYears = currentDate.getFullYear() - startDateJob.getFullYear();
let jobDiffMonths = currentDate.getMonth() - startDateJob.getMonth() + 1;

if (jobDiffMonths < 0) {
    jobDiffYears--;
    jobDiffMonths += 12;
}

currentCompanyElement.textContent = `${companyDiffYears > 0 ? companyDiffYears + ' years ' : ''}${companyDiffMonths} months`;
currentJobElement.textContent += `(${jobDiffYears > 0 ? jobDiffYears + ' years ' : ''}${jobDiffMonths} months)`;