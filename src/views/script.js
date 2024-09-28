const clientAccountColumns = [
    { label:'id', developerName:'id', },
    { label:'salesforce id', developerName:'salesforce_id', },
    { label:'name', developerName:'name', },
    { label:'description', developerName:'description', },
    { label:'integration flag', developerName:'integration_flag', },
    { label:'created at', developerName:'createdAt', },
    { label:'integrated at', developerName:'integratedAt', },
];

let clientAccountsReport;
async function fetchClientAccountsReport()
{
    let urlFetch = await fetch(location.origin + '/clientAccounts/report');
    clientAccountsReport = await urlFetch.json();

    let firstRowsContainer = document.getElementById('rows-container-1');
    firstRowsContainer.innerHTML = '';

    for(let clientAccount of clientAccountsReport.data.allClientAccounts)
    {
        let row = document.createElement('tr');
        row.classList.add('slds-hint-parent');

        for(let clientAccountColumn of clientAccountColumns)
        {
            let columnHeader = document.createElement('th');
            columnHeader.dataset.label = clientAccountColumn.label;
            columnHeader.setAttribute('scope', 'row');

            let columnHeaderDiv = document.createElement('div');
            columnHeaderDiv.classList.add('slds-text-heading_small');
            columnHeaderDiv.innerText = clientAccount[clientAccountColumn.developerName];

            columnHeader.appendChild(columnHeaderDiv);
            row.appendChild(columnHeader)
            firstRowsContainer.appendChild(row);
        }
    }
}

// On Load
document.addEventListener("DOMContentLoaded", async function(event) 
{
    // Refresh
    document.getElementById('refresh-button').addEventListener("click", async function(event) {
        document.getElementById('refresh-button').classList.add('image-rotation');
        await fetchClientAccountsReport();
        document.getElementById('refresh-button').classList.remove('image-rotation');
    });

    // Client Accounts Report - Columns setup
    const firstColumnsContainer = document.getElementById('columns-container-1');
    for(let clientAccountColumn of clientAccountColumns)
    {
        let columnHeader = document.createElement('th');
        columnHeader.setAttribute('scope', 'col');
        columnHeader.setAttribute('style', 'width: 110px; font-size: 12pt; font-weight: 500;')

        let columnHeaderDiv = document.createElement('div');
        columnHeaderDiv.classList.add('slds-truncate');
        columnHeaderDiv.innerText = clientAccountColumn.label;

        columnHeader.appendChild(columnHeaderDiv);
        firstColumnsContainer.appendChild(columnHeader);
    }

    document.getElementById('refresh-button').click();
});
