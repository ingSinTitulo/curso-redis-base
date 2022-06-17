# Base para ejemplos del Curso de Redis
Usamos este repositorio como base para implementar los ejemplos que hacemos en mi curso de Redis alojado en Udemy.

## Estructura de archivos
Cada archivo y carpeta tiene un motivo semántico de ser

```
Raíz del proyecto
    ├Application     => Carpeta de la aplicación
    │   ├controllers     => Carpeta que contiene nuestro controladores
    │   │   └helloController.ts     => Archivo donde declaramos que hacer en cada ruta
    │   ├routers     => Carpeta que contiene los archivos de rutas
    │   │   └HelloRouter.ts     => Archivo donde definimos las rutas
    │   └index.ts     => Punto de entrada de la aplicación
    ├.env.example     => Ejemplo de archivo de entorno
    ├.gitignore     => Archivo para definir qué queremos dejar fuera de git
    ├index.ts     => Punto de entrada del proyecto
    ├package.json     => Definición del proyecto de node
    ├Readme.md     => Este archivo (Inception)
    └tsconfig.json     => Archivo de configuración de TypeScript
```

## Ejecutar el proyecto
1. Descarga en ZIP el codigo o clona el repositorio con `git clone https://github.com/ingSinTitulo/curso-redis-base.git`
2. Entra a la carpeta con `cd curso-redis-base`
3. Instala las dependencias con `npm i`
4. Ejecuta `tsc -w`
5. En otra terminal, sin detener la anterior, ejecuta `npm start`
