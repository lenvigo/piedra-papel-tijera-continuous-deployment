# Piedra, Papel o Tijera - Juego Web

Este es un juego de Piedra, Papel o Tijera desarrollado en **JavaScript, HTML y CSS**, con principios de accesibilidad.

## 🚀 Características
- **Interfaz accesible**: Compatible con lectores de pantalla y navegación por teclado.
- **Diseño responsivo**: Adaptado para dispositivos móviles y escritorio.
- **Despliegue en Vercel**: Configurado para una implementación sencilla y rápida.

## 🚀 Estructura

📦 piedra-papel-tijera-continuous-deployment
 ┣ 📂 public
 ┃ ┣ 📜 index.html  # Interfaz del juego
 ┃ ┣ 📜 script.js   # Lógica del juego
 ┃ ┗ 📜 styles.css  # Estilos de la interfaz
 ┣ 📜 Dockerfile    # Configuración del contenedor
 ┣ 📜 vercel.json   # Configuración para Vercel
 ┣ 📜 .github/workflows/deploy.yml  # CI/CD con GitHub Actions
 ┣ 📜 LICENSE       # Licencia MIT
 ┗ 📜 README.md     # Documentación del proyecto

## 📦 Instalación
1. Clona el repositorio:
   ```sh
   git clone https://github.com/lenvigo/piedra-papel-tijera-continuous-deployment.git
   cd piedra-papel-tijera-continuous-deployment
   ```
2. Abre el archivo `index.html` en tu navegador o usa un servidor local:
   ```sh
   npx serve
   ```

## 🚀 Despliegue en Vercel
1. Instala Vercel CLI:
   ```sh
   npm install -g vercel
   ```
2. Inicia sesión en Vercel:
   ```sh
   vercel login
   ```
3. Despliega el proyecto:
   ```sh
   vercel
   ```

## 🛠️ GitHub Actions para CI/CD
Cada vez que realices un push a la rama master, GitHub Actions construirá la imagen Docker y la desplegará automáticamente en Vercel.

## 🌍 URL del Proyecto
https://piedra-papel-tijera-continuous-deployment.vercel.app/

## ♿ Accesibilidad
- Usa **atributos ARIA** para mejorar la accesibilidad.
- Permite la navegación mediante teclado y lectores de pantalla.

## 📜 Licencia
Este proyecto está bajo la Licencia MIT. Puedes usarlo libremente respetando los términos de la licencia.

---
💡 *Si tienes dudas o sugerencias, abre un issue o contribuye al proyecto.* 😃

