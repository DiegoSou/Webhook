const clientAccountColumns = [
    { label:'id', developerName:'id', },
    { label:'name', developerName:'name', },
    { label:'description', developerName:'description', },
    { label:'created at', developerName:'createdAt', },
];

const webhookLogColumns = [
    { label:'id', developerName:'id', },
    { label:'created at', developerName:'createdAt', },
    { label:'url', developerName:'requestUrl', },
    { label:'method', developerName:'requestMethod', },
    { label:'params', developerName:'requestParams', },
    { label:'external id', developerName:'externalId', },
    { label:'body', developerName:'requestBody', },
];

let clientAccountsReport;
async function fetchClientAccountsReport()
{
    try
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
    } catch (e) { console.log(e.message, e.stack); }
}

let webhookLogsReport;
async function fetchWebhookLogsReport()
{
    let urlFetch = await fetch(location.origin + '/logs/report');
    webhookLogsReport = await urlFetch.json();

    let firstRowsContainer = document.getElementById('rows-container-1');
    firstRowsContainer.innerHTML = '';

    for(let webhookLog of webhookLogsReport.data.allWebhookLogs)
    {
        let row = document.createElement('tr');
        row.classList.add('slds-hint-parent');

        for(let webhookLogColumn of webhookLogColumns)
        {
            let columnHeader = document.createElement('th');
            columnHeader.dataset.label = webhookLogColumn.label;
            columnHeader.setAttribute('scope', 'row');

            let columnHeaderDiv = document.createElement('div');
            columnHeaderDiv.classList.add('slds-text-heading_small');
            columnHeaderDiv.innerText = webhookLog[webhookLogColumn.developerName];

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
    await fetchWebhookLogsReport();

    // Client Accounts Report - Columns setup
    const firstColumnsContainer = document.getElementById('columns-container-1');
    for(let webhookLogColumn of webhookLogColumns)
    {
        let columnHeader = document.createElement('th');
        columnHeader.setAttribute('scope', 'col');
        columnHeader.setAttribute('style', 'width: 110px; font-size: 12pt; font-weight: 500;')

        let columnHeaderDiv = document.createElement('div');
        columnHeaderDiv.classList.add('slds-truncate');
        columnHeaderDiv.innerText = webhookLogColumn.label;

        columnHeader.appendChild(columnHeaderDiv);
        firstColumnsContainer.appendChild(columnHeader);
    }
});
