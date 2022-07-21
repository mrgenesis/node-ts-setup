
SWA
- O arquivo de configuração do Static Web App (staticwebapp.config.json) deve ficar dentro da pasta do React
- adicionar a propriedade proxy no arquivo package.json: "proxy": "http://localhost:7071/"

Func
- A pasta api deve ter o projeto Func


Teste local:
$ cd api && func start


Deploy:
https://docs.microsoft.com/pt-br/azure/static-web-apps/build-configuration?tabs=github-actions
