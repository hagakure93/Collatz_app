# Collatz App

Aplicación web para calcular y mostrar la secuencia de Collatz de un número entero positivo.  
Frontend desarrollado con **Ionic React** y backend en **Python** (Flask).

## Características

- Introduce un número y genera su secuencia de Collatz.
- Interfaz moderna y responsiva con Ionic.
- Mensajes de error y carga amigables.
- Comunicación con backend Flask para el cálculo.

## Estructura del proyecto

```
collatz_app/
│
├── backend/      # Código del backend Flask
├── frontend/     # Código del frontend Ionic React
├── venv/         # Entorno virtual de Python
└── README.md     # Este archivo
```

## Instalación y ejecución

### Backend (Flask)

1. Ve a la carpeta `backend`:
   ```sh
   cd backend
   ```

2. Activa el entorno virtual:
   ```sh
   source ../venv/bin/activate
   ```

3. Instala dependencias:
   ```sh
   pip install -r requirements.txt
   ```

4. Ejecuta el servidor:
   ```sh
   flask run --port 5001
   ```

### Frontend (Ionic React)

1. Ve a la carpeta `frontend`:
   ```sh
   cd frontend
   ```

2. Instala dependencias:
   ```sh
   npm install
   ```

3. Ejecuta la app:
   ```sh
   npm start
   ```

4. Accede a [http://localhost:8100](http://localhost:8100) en tu navegador.

## Uso

1. Introduce un número entero positivo.
2. Haz clic en "Generar Secuencia".
3. Visualiza la secuencia de Collatz generada.

## Notas

- Asegúrate de que el backend esté corriendo antes de usar la app.
- El puerto del backend por defecto es `5001`.  
  **Si cambias el puerto del backend, recuerda actualizar también la URL correspondiente en el código del frontend** (en la carpeta `frontend`) para que apunte al nuevo puerto.



---

Desarrollado por Pablo Aliaño.