# Usa uma imagem leve do Node.js
FROM node:18-alpine

# Cria a pasta dentro do contêiner
WORKDIR /app

# Copia os arquivos do seu computador para o contêiner
COPY src/ ./src/

# Expõe a porta para a internet
EXPOSE 3000

# Comando para ligar o servidor
CMD ["node", "src/app.js"]