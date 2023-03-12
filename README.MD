# **Ajude um microempreendedor**

Projeto desenvolvido em grupo para conclusão do curso de WebDev Full-Stack do edital "Programadores Cariocas". Uma parceria entre a Prefeitura do Rio de Janeiro com o Senac Rio, tendo como metodologia de ensino a Resília Educação.

---

## **Status do projeto**

Conteúdo fictício.
Em desenvolvimento.

## **Detalhamento do projeto**

ChocoAlícia produz chocolates artesanais desde 1993, mas foi a partir de 2004 que ela começou a vender suas delícias como venda direta para um público mais amplo, fazendo chocolates para festas e eventos. Em 2014, ela resolveu dar um passo na expansão do seu negócio, e abriu sua loja no Shopping Bangu, onde seus clientes encontram opções pronta-entrega para consumo próprio e presentes.
ChocoAlícia precisava de um endereço virtual para contar sua história, uma vitrine para apresentar seus produtos e criar um canal de contato com seus clientes.

O site conta com (out/2022),:
- Apresentação da história da ChocoAlícia
- Apresentação do time que compõe a empresa
- Vitrine para produtos destinados à presentes
- Formulário de contato e encaminhamento para suas redes sociais

Atualização (jan/2023):
- Área de Administrador
- API para inserção de produtos.

Atualização (mar/2023):
- Substituição da API por um banco de dados em sql
- Cadastro de linhas comerciais e produtos (diretamente inseridas no site).

Os próximos passos serão desenvolver um sistema de loja virtual, com acesso de usuário e carrinho. 

### **Tecnologias utilizadas**
- React
- SQL

### **Desafios**
- Transportar o site para react
- Integração com banco de dados
- Formulário de contato com validação e retorno ao usuário
- Carrossel de imagens
- Interação na página "Presentes", nas linhas comerciais
- Responsividade
<br><br>

---

## **Instruções de uso**

*FRONT:*
- Acessar no node prompt a pasta "ChocoaliciaSite"
- Comando "npm run dev"

*BACK:*
- Acessar em outra janela do node prompt a pasta "chocoserver"
- Comando "node index.js"

*BANCO DE DADOS:*
- Importar o arquivo "chocoalicia.sql" em um SGBD (Sistema Gerenciador de Banco de Dados)

Tudo precisar estar rodando ao mesmo tempo.

...
> A área de Admin, onde cadastramos linhas comerciais e produtos da parte de Presentes, encontra-se na rota "/Admin". 
> Também há um link no rodapé do site, que redireciona o usuário para esta rota.