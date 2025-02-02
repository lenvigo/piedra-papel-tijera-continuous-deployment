# Usar una imagen base ligera de Nginx
FROM nginx:alpine

# Copiar los archivos de la carpeta public al directorio de Nginx
COPY public /usr/share/nginx/html

# Exponer el puerto 80 para servir la app
EXPOSE 80

# Iniciar Nginx
CMD ["nginx", "-g", "daemon off;"]
