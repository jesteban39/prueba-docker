# Utiliza la imagen base de Node.js
FROM node:18.14.2

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /src

# Copia los archivos package.json y package-lock.json al directorio de trabajo
COPY package*.json ./

# Instala las dependencias del proyecto
RUN npm install

# Copia el resto de los archivos al directorio de trabajo
COPY . .

# Expone el puerto 4001 en el contenedor
EXPOSE 4001

# Define el comando para iniciar la aplicación
CMD [ "node", "index.js" ]
