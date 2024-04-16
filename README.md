FACULDADE PROJEÇÃO
TECNOLOGIA E ANÁLISE EM DESENVOLVIMENTO DE 
SISTEMAS
Gabryel Silva Santos de Carvalho
HVV - Histórico Veicular Virtual
Brasília, 02 de 2024
FACULDADE PROJEÇÃO
TECNOLOGIA EM ANÁLISE E DESENVOLVIMENTO DE SISTEMAS
TEMA
Trabalho de Conclusão de Curso apresentado ao Curso de Tecnologia 
em Análise e Desenvolvimento de Sistemas da Faculdade Projeção, 
como requisito complementar na disciplina de Projeto Integrado para 
Desenvolvimento Web e obrigatório à obtenção do título de 
Tecnólogo em Análise e Desenvolvimento de Sistemas.
Brasília, 15 de abril de 2024.
Sumário
RESUMO ..................................................................................................................4
CAPÍTULO I...............................................................................................................5
VISÃO INICIAL...........................................................................................................5
1. Introdução ...................................................................................................................5
2. Contextualização..........................................................................................................5
3. Problemática................................................................................................................5
4. Solução Proposta .........................................................................................................6
5. O que se esperar ..........................................................................................................6
6. Objetivo Geral..............................................................................................................6
6.1 Objetivos Específicos....................................................................................................... 6
7. Estrutura do Projeto.....................................................................................................7
CAPÍTULO II..............................................................................................................8
TECNOLOGIAS UTILIZADAS ...............................................................................................8
1.1.1. React............................................................................................................................ 8
1.1.2. Express.js..................................................................................................................... 8
1.1.3. SQL............................................................................................................................... 8
1.1.4. Figma........................................................................................................................... 8
1.1.5. Notion.......................................................................................................................... 8
CAPÍTULO III.............................................................................................................9
MODELAGEM DE DADOS..................................................................................................9
1. Modelo de Entidade e Relacionamento.........................................................................9
2. Modelo Lógico de Dados................................................................................................. 10
3.1 Dicionário de Dados .................................................................................................11
3.1.1 tb_pessoa ................................................................................................................... 11
3.1.2 tb_funcionario............................................................................................................ 11
3.1.3 tb_empresa ................................................................................................................ 12
3.1.4 tb_endereco............................................................................................................... 12
3.1.5 tb_empresa_has_tb_contato..................................................................................... 13
3.1.6 tb_contato.................................................................................................................. 13
3.1.7 tb_pessoa_has_tb_contato........................................................................................ 14
3.1.8 tb_empresa_has_tb_peca.......................................................................................... 14
3.1.9 tb_peca....................................................................................................................... 14
3.1.10 tb_revisao................................................................................................................. 15
3.1.11 tb_veiculo................................................................................................................. 15
CAPÍTULO IV........................................................................................................... 17
4
RESUMO
O Histórico Veicular Virtual ou HVV, é um sistema de consultas veiculares onde é possível pesquisar 
todo o histórico de um veículo, nele pode-se obter informações uteis na hora de comprar um 
veículo usado ou na venda, isso permite que os usuários possam tomar decisões com mais 
facilidade. O HVV tem como finalidade centralizar informações como especificações do veículo, 
histórico de manutenções, proprietário atual ou anterior e locais onde foram feitas as revisões e 
manutenções.
Palavras-Chave: HVV, veículo, histórico.
5
CAPÍTULO I
VISÃO INICIAL
1. Introdução
O HVV é um sistema com objetivo de concentrar todas as informações
veiculares em um só lugar, e pode por sua vez ajudar na tomada de decisão das 
pessoas na hora de escolher um veículo para comprar. Com isso conseguimos obter 
informações como histórico de manutenções, sinistro, acidentes, quilometragem, ano 
de fabricação e dentre outras informações presentes em um carro. Outra coisa que 
faz esse sistema ser muito útil é a possibilidade implementações podem ser 
acrescentado a ele, como por exemplo integrar com outros sistemas para obter 
outras fontes de dados ou fornecê-las através de uma API.
2. Contextualização
A centralização de informações é uma forma de facilitar o acesso do usuário 
a fontes de dados de maneira que, o usuário não precise buscar em diversas fontes 
de dados, este ato de centralização das informações também gera uma grande 
vantagem para diversas empresas fazerem a utilização destes dados, seja para criar 
soluções a partir destes dados ou na realização da análise destes dados através de 
dashboards.(CONCUR, 2023; disponível em: < 
https://www.concur.com.br/blog/article/qual-importancia-da-centralizacao-deinformacoes-e-como-garanti-la >).
No HVV, será utilizada a ideia de centralização de informações, com o HVV 
os usuários poderão acessar tudo sobre o veículo, e podem até utilizar estes dados 
para alimentar outras bases de dados. Com isso pode ser implementado várias 
modelos de negócios, como uma forma de anunciar veículos através de anúncios o 
que seria uma forma de lucrar com este sistema e atrair empresas automobilística.
3. Problemática
Ao se deparar com o cenário atual de compra e venda no Brasil, percebe-se 
que o valor aquisitivo de veículos aumentou consideravelmente, o que fez com que 
as pessoas buscassem veículos com melhor custo benefício no mercado de usados, 
para isso muitas pessoas passaram a comprar carros com base em seus preços e 
6
tendo pouco conhecimento sobre este veículo em si, e isso pode ser um problema 
para os clientes mais leigos.
4. Solução Proposta
Com o HVV as pessoas podem passar a ter mais conhecimento sobre o 
veículo tomar decisões mais assertivas, além disso facilita os anunciantes a precificar 
o seus carros tendo em conta a situação do veículo, podendo oferecer a melhor 
proposta aos seus clientes.
5. O que se esperar
Espera-se ao final do projeto entregar um sistema capaz de exibir informações 
sobre os veículos de forma mais acessível e prática, podendo encontrar tudo a 
respeito do carro desde o histórico de manutenções até as especificações do carro. 
6. Objetivo Geral
O objetivo geral do projeto HVV (Histórico Veicular Virtual) é desenvolver um sistema 
abrangente e centralizado que concentre todas as informações relevantes sobre 
veículos, oferecendo aos usuários uma plataforma acessível e prática para a 
obtenção de dados cruciais na tomada de decisões relacionadas à compra, venda e 
manutenção de automóveis.
6.1 Objetivos Específicos
• Centralização de Informações Veiculares:
Desenvolver uma estrutura que permita a centralização de todas as 
informações veiculares em um só lugar, proporcionando aos usuários 
acesso fácil e rápido a dados essenciais.
• Facilitar a Tomada de Decisão:
Fornecer aos usuários dados detalhados sobre o histórico de manutenções, 
sinistros, acidentes, quilometragem e outras informações relevantes, visando 
aprimorar a capacidade de tomada de decisão informada na escolha de um 
veículo.
• Integração com Outros Sistemas:
Possibilitar a integração do HVV com outros sistemas, permitindo a obtenção 
7
de informações adicionais por meio de fontes externas ou a disponibilização 
de dados por meio de APIs, ampliando assim a abrangência do sistema.
7. Estrutura do Projeto
• Visão inicial do projeto;
• Definição das tecnologias utilizadas;
• Modelagem do banco de dados;
• Banco de dados;
• Prototipagem;
• Caso de uso;
• Desenvolvimento do sistema; 
• Apresentação do projeto final.
8
CAPÍTULO II
TECNOLOGIAS UTILIZADAS
Este projeto será desenvolvido com as seguintes tecnologias: 
1.1.1. React
Essa é uma biblioteca muito utilizada no desenvolvimento do front-end, com 
essa biblioteca é possível fazer o uso de componentes que servem para ser 
reutilizados em uma mesma aplicação, e esses componentes serão exibidos 
em uma SPA (Single Page Aplication), ou seja ao invés do react fazer o uso 
de diversas páginas, tendo que carregar todos os componentes dá pagina 
todas as vezes que uma ação for feita, ele somente irá renderizar um novo 
componente sem precisar recarregar tudo novamente, isso trás ao react um 
a melhora na performance significativa.
1.1.2. Express.js
Essa é um framework minimalista trabalhado no lado do backend, com ele 
podemos utilizar uma série de recursos que facilita na hora de criar as 
requisições e interações com o banco de dados.
1.1.3. SQL
Essa é uma linguagem utilizada para o registro de dados, e com essa 
linguagem é possível realizar diversas coisas como por exemplo, criar banco 
de dados, tabelas, consultar registros, inserir novo registros, alterar registros, 
deletar registros e muito mais. O SQL geralmente é utilizado em um SGBD 
(Sistema de Gerenciamento de Banco de Dados), e temos por exemplos 
alguns bem famoso como MySQL Workbench, PostgreSQL e SQL Server.
1.1.4. Figma
Este é um software de design utilizado geralmente na criação de protótipos 
de interfaces, e ele serve para ajudar na organização, apresentação e na 
visualização de interações que um usuário pode ter no sistema.
1.1.5. Notion
Essa é uma ferramenta para gestão de projetos e tarefas, com e ele é 
possível criar quadros para cada etapa do projeto e dividir as tarefas dentro 
de cada uma dessas etapas, dessa forma possibilitando um maior controle 
9
CAPÍTULO III
MODELAGEM DE DADOS
1. Modelo de Entidade e Relacionamento
10
2. Modelo Lógico de Dados
11
3.1 Dicionário de Dados
3.1.1 tb_pessoa
Campo Tipo/Tamanho Obrigatório Comentário
id_pessoa chave primária S Este campo é 
responsável pela 
identificação da 
tabela
nome char(100) S Este campo é 
responsável por 
registrar o nome do 
usuário
cpf int(11) S Campo que registra 
o número de 
identificação de 
pessoa física, que 
será preenchido 
pelo usuário
dt_nascimento date S Campo onde será 
registrado a data de 
nascimento do 
usuário
RELACIONAMENTOS
Tabela Descrição 
tb_funcionario
tb_pessoa recebe chave estrangeira da tb_funcionario em um 
relacionamento de um pra um.
tb_veiculo
tb_veiculo recebe chave estrangeira de tb_pessoa em um 
relacionamento de muitos pra um.
3.1.2 tb_funcionario
Campo Tipo/Tamanho Obrigatório Comentário
id_funcionario chave primaria S Campo de 
identificação da 
tabela
cargo varchar(100) S Campo de registro 
do cargo exercido 
pelo funcionário
RELACIONAMENTOS
Tabela Descrição 
tb_pessoa
tb_pessoa recebe chave estrangeira da tb_funcionario em um 
relacionamento de um pra um.
Tb_empresa
Tb_empresa recebe chave estrangeira de tb_funcionario em um 
relacionamento de um pra muitos.
12
3.1.3 tb_empresa
Campo Tipo/Tamanho Obrigatório Comentário
id_empresa chave primária S Este campo é 
responsável pela 
identificação da 
tabela
nome char(100) S Este campo é 
responsável por 
registrar o nome da 
empresa
cnpj int(11) S Campo que registra 
o número de 
identificação da 
empresa
categoria enum S Campo onde será 
registrado a 
categoria em que a 
empresa está 
inserida
 RELACIONAMENTOS
Tabela Descrição 
tb_funcionario
tb_empresa recebe chave estrangeira da tb_funcionario em um 
relacionamento de um pra muitos.
tb_endereco
tb_empresa recebe chave estrangeira da tb_endereco em um 
relacionamento de um pra muitos.
tb_empresa_has_tb
_peca
tb_empresa_has_tb_peca recebe chave estrangeira de tb_empresa 
em um relacionamento de um pra muitos.
tb_empresa_has_tb
_contato
tb_empresa_has_tb_contato recebe chave estrangeira da tb_empresa 
em um relacionamento de um pra muitos.
tb_revisao
Tb_revisao recebe chave estrangeira da tb_empresa em um 
relacionamento de um pra muitos.
3.1.4 tb_endereco
Campo Tipo/Tamanho Obrigatório Comentário
id_endereco chave primária S Este campo é 
responsável pela 
identificação da 
tabela
cep int(8) S Campo que registra 
o número de 
identificação única 
do local inserido na 
tabela
uf varchar(100) S Responsável por 
registrar o estado
13
cidade varchar(100) S Campo onde será 
registrado a cidade 
inserida
bairro varchar(100) S Campo onde será 
registrado o bairro 
inserido
logradouro varchar(255) S Campo onde será 
registrado o 
logradouro inserido
RELACIONAMENTOS
Tabela Descrição 
tb_empresa
tb_empresa recebe chave estrangeira da tb_endereco em um 
relacionamento de um pra muitos
3.1.5 tb_empresa_has_tb_contato
Campo Tipo/Tamanho Obrigatório Comentário
Não possuí Não possuí Não possuí Não possuí
RELACIONAMENTOS
Tabela Descrição 
tb_empresa
tb_empresa_has_tb_contato recebe chave estrangeira da tb_empresa 
em um relacionamento de um pra muitos.
tb_contato
tb_empresa_has_tb_contato recebe chave estrangeira da tb_contato
em um relacionamento de um pra muitos.
3.1.6 tb_contato
Campo Tipo/Tamanho Obrigatório Comentário
id_contato chave primária S Este campo é 
responsável pela 
identificação da 
tabela
telefone int(11) S Campo que registra 
o número de 
contato
e-mail varchar(100) S Campo responsável 
pelo registro do 
endereço de e-mail
site varchar(255) S Campo onde será 
registrado o 
endereço do site da 
empresa 
cadastrada
RELACIONAMENTOS
14
Tabela Descrição 
tb_empresa_has_tb
_contato
tb_empresa_has_tb_contato recebe chave estrangeira da tb_contato
em um relacionamento de um pra muitos.
tb_pessoas_has_tb_
contato
tb_pessoa_has_tb_contato recebe chave estrangeira da tb_contato
em um relacionamento de um pra muitos.
3.1.7 tb_pessoa_has_tb_contato
Campo Tipo/Tamanho Obrigatório Comentário
Não possuí Não possuí Não possuí Não possuí
RELACIONAMENTOS
Tabela Descrição 
tb_pessoa
tb_pessoa_has_tb_contato recebe chave estrangeira da tb_pessoa em 
um relacionamento de um pra muitos
tb_contato
tb_pessoa_has_tb_contato recebe chave estrangeira da tb_contato 
em um relacionamento de um pra muitos.
3.1.8 tb_empresa_has_tb_peca
Campo Tipo/Tamanho Obrigatório Comentário
Não possuí Não possiuí Não possuí Não possuí
RELACIONAMENTOS
Tabela Descrição 
tb_empresa
tb_empresa_has_tb_peca recebe chave estrangeira da tb_empresa
em um relacionamento de um pra muitos
tb_peca
tb_empresa_has_tb_peca recebe chave estrangeira da tb_peca em 
um relacionamento de um pra muitos
3.1.9 tb_peca
Campo Tipo/Tamanho Obrigatório Comentário
id_peca chave primária S Este campo é 
responsável pela 
identificação da 
tabela
nome varchar(45) S Campo que registra 
o nome da peça
marca varchar(45) S Campo que registra 
o nome da marca
modelo varchar(45) S Campo que registra 
o modelo da peça
15
preco FLOAT S Campo onde será 
registrado o valor 
monetário da peça
RELACIONAMENTOS
Tabela Descrição 
tb_empresa_has_tb
_peca
tb_empresa_has_tb_peca recebe chave estrangeira da tb_peca em 
um relacionamento de um pra muitos
3.1.10 tb_revisao
Campo Tipo/Tamanho Obrigatório Comentário
id_revisao chave primária S Este campo é 
responsável pela 
identificação da 
tabela
Tipo_servico varchar(100) S Campo que registra 
o tipo de serviço 
que foi feito no 
veiculo
RELACIONAMENTOS
Tabela Descrição 
tb_empresa
tb_revisao recebe chave estrangeira da tb_empresa em um 
relacionamento de um pra um
tb_veiculo
tb_revisao recebe chave estrangeira da tb_veiculo em um 
relacionamento de um pra um
3.1.11 tb_veiculo
Campo Tipo/Tamanho Obrigatório Comentário
id_veiculo chave primária S Este campo é 
responsável pela 
identificação da 
tabela
marca varchar(60) S Campo que registra 
a marca do veiculo
modelo varchar(100) S Responsável por 
registrar o modelo 
do veículo
ano int(4) S Campo onde será 
registrado o ano do 
carro
cor char(45) S Campo onde será 
registrado a cor do 
veículo
16
quilometragem decimal(6) S Campo onde será 
registrado a
quilometragem do 
veículo
placa varchar(7) S Campo que registra 
a placa o veículo
RELACIONAMENTOS
Tabela Descrição 
tb_pessoa
tb_pesoa recebe chave estrangeira da tb_veiculo em um 
relacionamento de um pra muitos.
tb_revisao
tb_revisao recebe chave estrangeira da tb_veiculo em um 
relacionamento de um pra um.
17
CAPÍTULO IV
Protótipos mobile, tablet, desktop
Logar no sistema
Caso de Uso: UC001 – Validar usuário
Funcionalidades:
• RF001 – Validar dados de acesso a conta
Esta tela tem como funcionalidade validar dados de acesso do usuário como e-mail e senha 
que foi cadastrados no sistema.
1. O e-mail deverá ser verificado da seguinte forma, é obrigatório possuir “@” e o domínio 
do provedor para que seja um e-mail válido, além disso tem que estar cadastrado no 
banco de dados do sistema.
2. A Senha tem que possuir no mínimo 8 caracteres, pelo menos 1 número, uma letra 
maiúscula e um caractere especial. Além disso, é preciso estar cadastrado no banco de 
dados do sistema.
18
Logar no sistema
Caso de Uso: UC002 –manter usuário comum
Funcionalidades:
• RF001 – Obter dados pelo usuário
• RF002 – Validar os dados obtidos pelo usuário
• RF003 – Manter os dados do usuário no sistema
Esta tela tem como objetivo obter e validar os dados do usuário, e após a validação fazer uma 
requisição para enviar os dados obtidos ao servidor e assim armazenar no banco de dados.
1. Todos os campos são obrigatórios a serem preenchidos pelo o usuário.
2. Só será valido o e-mail que conter um “@” com o domínio do e-mail.
3. A Senha tem que possuir no mínimo 8 caracteres, pelo menos 1 número, uma letra 
maiúscula e um caractere especial. Além disto a senha o usuário precisará confirmar 
digitar a senha novamente no campo seguinte para confirmar a senha digitada.
4. Só poderá ser feita a requisição para salvar os dados após todos os campos do 
formulário serem validados.
19
Logar no sistema
Caso de Uso: UC003 – manter empresa
Funcionalidades:
• RF001 – Obter dados pela a empresa
• RF002 – Validar os dados obtidos pela empresa em múltiplas etapas
• RF003 – Manter os dados da empresa no sistema
Esta tela tem como objetivo obter e validar os dados da empresa, e após a validação fazer uma 
requisição para enviar os dados obtidos ao servidor e assim armazenar no banco de dados.
1. Todos os campos são obrigatórios a serem preenchidos pelo usuário.
2. Fazer a comunicação da API via cep para verificar se o CEP existe e obter os dados de 
endereço da aplicação.
3. Só será valido o e-mail que conter um “@” com o domínio do e-mail.
4. A Senha tem que possuir no mínimo 8 caracteres, pelo menos 1 número, uma letra 
maiúscula e um caractere especial. Além disto a senha o usuário precisará confirmar 
digitar a senha novamente no campo seguinte para confirmar a senha digitada.
5. Só poderá ser feita a requisição para salvar os dados após todos os campos do 
formulário serem validados.
20
Logar no sistema
Caso de Uso: UC004 – manter veículo
Funcionalidades:
• RF001 – Obter dados do veículo
• RF002 – Validar os dados obtidos do veículo
• RF003 – Manter os dados do veículo no sistema
• RF004 – Relacionar ou não o veículo a ser cadastrado à conta
Esta tela tem como objetivo obter e validar os dados do veículo, e após a validação fazer uma 
requisição para enviar os dados obtidos ao servidor e assim armazenar no banco de dados.
1. Todos os campos são obrigatórios a serem preenchidos pelo usuário, exceto o campo 
de checkbox que relaciona o proprietário da conta ao veículo.
2. Não é permitido que os campos de “Ano” e “KM”, estejam com números negativos.
21
Logar no sistema
Caso de Uso: UC005 – visualizar perfil
Funcionalidades:
• RF001 – Mostrar os dados relacionados ao perfil do usuário cadastrado.
• RF002 – Editar os dados relacionados ao perfil do usuário
Esta tela tem como objetivo mostrar os dados que foram cadastrados pelo usuário ou 
empresa, como uma espécie de identificação.
1. Exibir na interface gráfica os dados formatados do perfil armazenados no banco de 
dados.
22
Logar no sistema
Caso de Uso: UC006 – consultar veículo
Funcionalidades:
• RF001 – Filtrar a partir dos dados digitados pelo usuário
Esta tela tem como objetivo pesquisar e filtrar as informações que foram pesquisadas pelo 
usuário.
1. A cada letra digitada deverá ser mostrado um resultado de pesquisa na tela.
23
Logar no sistema
Caso de Uso: UC003 – manter veículo
Funcionalidades:
• RF001 – Exibir todos os resultados referentes aos tópicos pesquisados
• RF002 – Formatar as informações que serão exibidas na tela
Esta tela tem como objetivo mostrar todos os resultados com base nos valores que foram 
obtidos na barra de pesquisa.
24
CONCLUSÃO
Ao concluir este trabalho, é evidente o impacto positivo que o Histórico Veicular Virtual (HVV) pode 
ter no universo automotivo. O sistema desenvolvido proporciona aos usuários uma plataforma 
abrangente e centralizada, reunindo informações cruciais que auxiliam na tomada de decisões 
informadas na compra, venda e manutenção de veículos. Os resultados obtidos com o HVV refletem 
uma melhoria significativa na acessibilidade e transparência das informações veiculares, tornando o 
processo de pesquisa e análise mais eficiente e confiável para os usuários.
25
BIBLIOGRAFIA
Site:
CONCUR. Qual a importância da centralização de informações e como garantila. Disponível em: https://www.concur.com.br/blog/article/qual-importancia-dacentralizacao-de-informacoes-e-como-garanti-la. Acesso em: 04 mar. 2024.
HOSTINGER. O que é react Javascript. Disponível em: 
https://www.hostinger.com.br/tutoriais/o-que-e-react-javascript. Acesso em: 16 
mar. 2024.
MDN WEB DOCS. Introdução Express/Node. Disponível em: 
https://developer.mozilla.org/pt-BR/docs/Learn/Serverside/Express_Nodejs/Introduction. Acesso em: 16 mar. 2024.
