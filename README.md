# 🚀 Primeira API em Node.js

Uma API RESTful simples construída com **Node.js**, **Express**, **Prisma** e **MongoDB**.

---

## 📦 Tecnologias Utilizadas

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [Prisma ORM](https://www.prisma.io/)
- [MongoDB](https://www.mongodb.com/)

---

## ⚙️ Como Rodar o Projeto

### 1. Clone o repositório

```bash
git clone https://github.com/Thierryvinicius/api_rest_node.git
```

### 2. Instale as dependências

```bash
npm init -y
npm install express
npm install prisma --save-dev
npm install @prisma/client
```

### 3. Configure o Prisma

```bash
npx prisma init
```

Edite o arquivo.env para configurar sua conexão com o MongoDB:
DATABASE_URL="mongodb+srv://<usuario>:<senha>@<cluster>.mongodb.net/<database>?retryWrites=true&w=majority"

### 4. Crie o modelo e gere o banco de dados

No arquivo prisma/schema.prisma, defina seu modelo. No meu caso eu defini como User:

```bash
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "mongodb"
  url      = env("DATABASE_URL")
}

model User {
  id      String   @id @default(auto()) @map("_id") @db.ObjectId
  email   String   @unique
  name    String
  age     String
}
```

Após isso, rode:

```bash
npx prisma db push
```

Você pode visualizar seus dados com Prisma Studio:

```bash
npx prisma studio
```

### 5. Inicialize o servidor:

```bash
node --watch ./server.js
```

### 6. Exemplos de Rotas da API:

✅ Criar Usuário (POST /usuarios)

```bash
{
  "name": "João",
  "age": 37,
  "email": "joao@email.com"
}
```

✏️ Atualizar Usuário (PUT /usuarios/:id)

```bash
{
  "name": "João",
  "age": 37,
  "email": "joao@email.com"
}
```

❌ Deletar Usuário (DELETE /usuarios/:id)

Resposta:

```bash
{
  "message": "Usuário deletado com Sucesso!"
}
```

📄 Listar Usuários (GET /usuarios)

Opcional: pode passar filtros por name, email ou age como query params.

Exemplo:
/usuarios?name=João
