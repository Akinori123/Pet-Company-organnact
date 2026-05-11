# Como realizar o Deploy da sua Aplicação Frontend da Organnact

Este tutorial (mock) é projetado para mostrar como realizar o deploy da nossa incrível Landing Page da Organnact na plataforma Vercel.

## 1. Pré-Requisitos

* Ter uma conta na [Vercel](https://vercel.com/)
* Ter seu código hospedado em um repositório no [GitHub](https://github.com/)

## 2. Passo a Passo

1. Faça Login na Vercel e vá até o seu Dashboard.
2. Clique no botão **"Add New..."** e selecione **"Project"**.
3. Na área **"Import Git Repository"**, encontre o repositório onde você enviou o código fonte da Landing Page Organnact. Exemplo: `organnact-vip`. Clique em **"Import"**.
4. Configure as opções do seu projeto:
    * **Project Name**: Pode definir como `organnact-lp`.
    * **Framework Preset**: O Vite/React normalmente é detectado automaticamente, se não, selecione `Vite`.
    * **Root Directory**: Deixe o padrão (/).
    * **Environment Variables**: Se houvesse segredos ou APIs, seria configurado aqui. No nosso caso, todas as funções são mocks estruturados.
5. Em seguida clique no botão azul **"Deploy"**.
6. A Vercel iniciará o Step "Building". Isso roda o comando `npm run build` do `package.json` para criar a pasta pronta de produção otimizada.
7. Em cerca de 1~2 minutos, aguarde a tela de "Confetes" aparecer ✨

## 3. Configurando seu Domínio Personalizado

Após finalizar, a aplicação roda em um endereço gerado automaticamente do tipo `organnact-lp.vercel.app`.
Para adicionar autoridade com seu domínio real:

1. No painel do seu projeto na Vercel vá em: **Settings > Domains**
2. Insira `www.organnact.com.br` e confirme.
3. Use os registros DNS (Type CNAME, Name `www`, Value `cname.vercel-dns.com`) exibidos pela Vercel e adicione no painel de configurações da sua provedora de domínio (Registro.br ou Hostgator/GoDaddy).
4. Prontinho, seu projeto nível Apple ganha o mundo! 🚀
