# Descrição

Webhook de simulação de um sistema externo

## Sobre o código

Representa um servidor externo que possui as rotas para:

<details>
    <summary>relatório de conta (clientes)</summary>
<pre><code>curl --request GET \
  --url https://diego-webhook-node-dev-v0-2.onrender.com/clientAccounts/report
</code></pre>
</details>

<p></p>

<details>
    <summary>envio de nova conta para ser integrada</summary>
<pre><code>curl --request POST \
  --url https://diego-webhook-node-dev-v0-2.onrender.com/clientAccounts/create \
  --header 'Content-Type: application/json' \
  --data '{
	"name": "Secondary Department Helpers",
	"description": "",
	"salesforce_id": "0012"
  }'
</code></pre>
</details>

<p></p>

<details>
    <summary>envio de nova ação/atividade de engajamento rastreada</summary>
<pre><code>curl --request POST \
  --url https://diego-webhook-node-dev-v0-2.onrender.com/clientAccounts/engagement/register_new \
  --header 'Content-Type: application/json' \
  --data '{
	"ownerId": 2,
	"actionDescribe": "Just entered in the CRM system. Welcome!",
	"additionalInfo": ""
  }'
</code></pre>
</details>

<p></p>

<details>
    <summary>atualização da atividade de engajamento</summary>
<pre><code>curl --request PATCH \
  --url https://diego-webhook-node-dev-v0-2.onrender.com/clientAccounts/engagement/update \
  --header 'Content-Type: application/json' \
  --data '{
	"id": 2,
	"additionalInfo": "New info"
  }'
</code></pre>
</details>

## Caso exemplo

1. 🪪 O cliente é <b>registrado</b> no sistema Salesforce e enviado para o <b>sistema externo</b> por meio de uma flag de integração.
2. 📑 Junto ao cliente, vai um registro de atividade de engajamento afirmando que ele chegou no CRM.
3. 💬 Ao registrar essa ação do cliente, o sistema externo faz uma chamada para <b>adicionar um novo Caso</b> no Salesforce, solicitando que seja feito seu primeiro atendimento.
4. ⌛ Essa chamada gera uma <b>notificação</b> para os agentes no salesforce.
5. ☑️ Ao fechar o caso, o sf registra no sistema externo a atividade de engajamento afirmando que o <b>cliente foi atendido<b>.

## Links

<a href="https://hub.docker.com/repository/docker/diegosous/webhook-node/general">Docker image</a> do webhook
<br/>
<a href="https://webhook-node-dev-0-1.onrender.com">Online server</a> (pode estar indisponível)
