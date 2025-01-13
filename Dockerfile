FROM node:18 AS build

# Definir o diretório de trabalho dentro do container
WORKDIR /app

# Copiar os arquivos necessários para o diretório de trabalho
COPY . .

# Instalar dependências necessárias
RUN npm install prompt-sync

# Definir o arquivo principal do seu código
CMD ["node", "script.js"]