# Clima App

Esta es una aplicación web que muestra información actual y pronóstico del clima para una ubicación específica. Utiliza datos de una API de pronóstico del clima y muestra información como temperatura, humedad, velocidad del viento, y más.

## Cómo funciona

La aplicación utiliza React para el frontend y se comunica con una API de pronóstico del clima para obtener los datos más recientes. Aquí se explica cómo funciona la aplicación:

1. Cuando se carga la página, se llama a la función `fetchData` para obtener datos de la API de pronóstico del clima.

2. Una vez que se obtienen los datos, se muestran en la interfaz de usuario en diferentes componentes.

3. Los componentes incluyen:

   - `ThermometerComponent`: Muestra la temperatura actual en un termómetro.
   - `DailyTemp`: Muestra un gráfico de temperaturas por hora.
   - `CurrentWeather`: Muestra la información actual del clima, como el estado del tiempo y la fecha actual.
   - `Highlights`: Muestra datos destacados como el índice UV, velocidad del viento, humedad, amanecer y atardecer, visibilidad y temperaturas máximas y mínimas.



## Dashboard de Tráfico

El Dashboard de Tráfico es una característica adicional de esta aplicación que muestra la ubicación en tiempo real de autobuses en diferentes rutas de transporte público. Utiliza datos proporcionados por la API de tráfico de Buenos Aires.

### Cómo funciona

1. En el Dashboard de Tráfico, puedes seleccionar una línea de autobús específica de las disponibles en el menú desplegable.

2. Una vez seleccionada una línea, el mapa mostrará la ubicación en tiempo real de los autobuses en esa ruta.

3. Cada autobús se representa con un ícono en el mapa. El ícono cambia según la dirección del viaje. Por ejemplo, se utiliza un ícono de autobús estándar para la "Ida" y un ícono de autobús en espejo para la "Vuelta".

4. Al hacer clic en un ícono de autobús en el mapa, se mostrará información adicional, como el número de línea, el destino, la velocidad y la dirección del viaje.

### Actualización en tiempo real

El Dashboard de Tráfico actualiza automáticamente la ubicación de los autobuses en tiempo real a intervalos regulares para brindarte información actualizada.

### Usando los íconos

Se utilizan dos íconos de autobús para representar la dirección del viaje de cada autobús. Los íconos se muestran en el mapa de la siguiente manera:

- Ícono de autobús estándar para la "Ida" del viaje.
- Ícono de autobús en espejo para la "Vuelta" del viaje.

Estos íconos ayudan a identificar rápidamente la dirección en la que se desplaza cada autobús.


## Cómo instalar y ejecutar

1. Clona este repositorio a tu máquina local.

2. Abre una terminal en el directorio del proyecto y ejecuta el siguiente comando para instalar las dependencias:

3. Luego, inicia la aplicación con el siguiente comando:

4. La aplicación se abrirá en tu navegador web y mostrará la información del clima.

## Datos de la API

La aplicación utiliza la API de Open-Meteo para obtener datos de pronóstico del clima. La URL de la API se especifica en la función `fetchData`. Puedes ajustar la ubicación y los datos solicitados modificando esta URL.

## Tecnologías utilizadas

- React
- Styled-components para estilos
- React-bootstrap para componentes de interfaz de usuario
- Recharts para gráficos

## Autor

TW
