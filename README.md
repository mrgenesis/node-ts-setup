Setup Node.JS com TypeScript

```bash
git clone git@github.com:mrgenesis/node-ts-setup.git
cd node-ts-setup
```

- instala as dependencias de desenvolvimento
```bash
npm install
```

- execute o comando abaixo para executar server.ts
```bash
npm run dev
```

- para executar qualquer outro arquivo, o script `file` e especifique o filename relativo
```bash
npm run file -- src/index.ts
```

- Mude o nome do arquivo para que as variáves de ambiantes possam ser definidas em mode de teste
```bash
mv .env.development.exemple .env.development
```
