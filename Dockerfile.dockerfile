# 1. Usa uma versão leve do Node.js (o motor do site)
FROM node:18-alpine

# 2. Cria uma pasta chamada 'app' dentro do contêiner
WORKDIR /app

# 3. Copia a sua pasta 'src' do computador para dentro do contêiner
# O primeiro 'src/' é o do seu PC. O segundo './src/' é o do contêiner.
COPY src/ ./src/

# 4. Avisa que o site roda na porta 3000
EXPOSE 3000

# 5. O comando para ligar o servidor
# Note que ele aponta para 'src/app.js' porque copiamos a pasta inteira
CMD ["node", "src/app.js"]