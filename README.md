# instalar github cli

# Crear el proyecto localmente con Vite

npm create vite@latest agenda-app -- --template react

# Entrar a la carpeta e instalar dependencias básicas

cd agenda-app
npm install

# Instalar React Big Calendar y date-fns

npm install react-big-calendar date-fns


1. Inicializar Git y preparar los archivos

git init
git add .
git commit -m "Commit inicial: proyecto configurado con Vite y React Big Calendar"

2. Crear y subir el repositorio a GitHub con gh

gh repo create agenda-app --public --source=. --push

3. si hago cambios en el proyecto tengo que subir los cambios a github con:

git add .
git commit -m "mensaje descriptivo de los cambios"
git push
