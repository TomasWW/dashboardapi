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

4. Los datos de tráfico se muestran en el componente `DashboardTrafico`.

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
