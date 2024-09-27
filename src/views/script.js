document.addEventListener("DOMContentLoaded", function(event) 
{
    const clientAccountsReportContent = document.getElementById('clientAccountsReportContent');

    const paragraph = document.createElement("p");
    paragraph.classList.add('container-content-element');
    paragraph.innerText = 'Paragrafo';

    clientAccountsReportContent.appendChild(paragraph);
});
