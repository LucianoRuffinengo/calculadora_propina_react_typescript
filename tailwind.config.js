/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    //aca le especificamos en que archivos o donde va a encontrar
    //codigo HTML con clases de Tailwind CSS, por lo tanto va a tomar
    //unicamente las clases del framework a la hora de construir el proyecto
    //y va crear una hoja de estilo con esas clases, ademas solo
    //las clases que hayas utilizado entran a la hoja de estilos final
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

