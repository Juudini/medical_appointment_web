<div align="center">
<h1>🏥 | Clínica Online Web Project | 🩺</h1>
<h2>Esta web de gestión de turnos médicos, está desarrollada como parte del proyecto final del curso de JavaScript en Coderhouse. Este proyecto no tiene ánimo de lucro y no se hace responsable del uso que se pueda hacer del mismo. </h2>

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

<h2><a href='https://apimocha.com/paciente/data'>API</a> | <a href='https://juudini-proyecto-final-javascript.netlify.app/'>WEB</a></h2>
</div>

![Web API Page](assets/web-api-page.png)

<details>
  <summary>Índice</summary>
  <ol>
     <li>
      <a href="#descripción-del-proyecto">Descripción del proyecto</a>
     </li>
     <li>
      <a href="#instrucciones-de-uso">Instrucciones de uso</a>
     </li>
     <li>
      <a href="#tecnologías-usadas">Tecnologías usadas</a>
     </li>
     <li>
      <a href="#api">API</a></li>
     <li>
      <a href="#funciones-disponibles">Funciones Disponibles</a>
     </li>
	   <li>
      <a href="#lighthouse">Lighthouse</a>
     </li>
     <li>
      <a href="#feedback">Feedback</a>
     </li>
	   <li>
      <a href="#autor">Acerca del Autor</a>
     </li>
  </ol>
</details>

[![English](https://img.shields.io/badge/language-English-blue.svg)](README.en.md)

## Descripción del proyecto

La página web permite realizar las siguientes funciones:

-   **Agregar pacientes:** Permite agregar nuevos pacientes mediante el ingreso de su información personal y elección de su turno.

-   **Gestionar turnos:** Permite eliminar los turnos de los pacientes registrados. El sistema muestra una tabla donde se visualizan los turnos programados.

-   **Consultar pacientes:** Proporciona una funcionalidad de búsqueda para verificar si un paciente se encuentra registrado. El usuario puede ingresar el nombre, el número de teléfono o algún dato del paciente o de su turno y el sistema mostrará los resultados correspondientes.

## Instrucciones de Uso

#### ¡Bienvenido al repositorio!

1. Descarga o clona el repositorio en tu máquina local.

`git clone https://github.com/Juudini/ProyectoFinalDebandi.git
`

2. Abre el proyecto en tu entorno de desarrollo preferido.

3. Por defecto, se ha establecido el usuario y la contraseña como **"admin"** para ambos campos.

    ```
       Username: admin
       Password: admin
    ```

¡Listo! Ahora puedes explorar y utilizar este repositorio.

## Tecnologías usadas

Este proyecto final de JavaScript se desarrolló utilizando las siguientes tecnologías:

Se utilizó el framework [Bootstrap](https://getbootstrap.com/) para desarrollar la interfaz de usuario de manera rápida y eficiente.

Para implementar la funcionalidad principal del proyecto se empleó JavaScript.

Se utilizó la [API Mocha](https://apimocha.com/) para consumir la información de los de pacientes y sus turnos.

Se integró la librería [SweetAlert](https://sweetalert2.github.io/) para mostrar alertas y mensajes interactivos en la página.

Además, se ha utilizado [Granim.js](https://sarcadass.github.io/granim.js/) para fondos personalizados.

## API

Dirección: https://apimocha.com/paciente/

Los endpoints disponibles son:

-   GET `/data`: Devuelve pacientes con datos **mockeados**.

## Funciones disponibles

La página permite al usuario programar turnos y realizar cambios en la lista de turnos existente. A continuación, te presento las funciones disponibles en esta página:

#### Agregar Turnos

-   Para poder programar un turno, es necesario registrar la información del paciente. La página de "**Agregar Turnos**" permite a los usuarios ingresar los datos del paciente, tales como **_dni_**, **_apellido_**, **_nombre_**, **_email_**, **_teléfono_**. Y posterior, la selección del turno **_área_**, **_día_**, **_hora_** y **_obra social_** . Luego de registrar la información, se puede añadir el paciente a la lista de turnos programados.

#### Gestionar Turnos

-   La página "**Gestionar Turnos**" muestra en una tabla los turnos programados. El usuario puede ver cierta información destacada de cada turno, incluyendo información del paciente, la fecha y hora del turno. Esta sección permite a los usuarios tener un panorama general de los turnos programados.

-   Además, permite la cancelación de turnos programados. Si un paciente ya no puede asistir a su turno, el usuario puede cancelarlo desde esta sección.

-   En resumen, esta página de turnos ofrece una solución práctica y eficiente para la gestión de pacientes y turnos.

#### Consultar Pacientes

Proporciona una funcionalidad de búsqueda para verificar si un paciente se encuentra programado. El usuario puede ingresar ya sea el nombre,el número de teléfono, apellido del paciente, o los datos de su elección y el sistema mostrará los resultados correspondientes.

## LightHouse

[![Lighthouse Performance Badge](./assets/test_resultados/lighthouse_performance.svg)](https://github.com/Juudini/ProyectoFinalDebandi)
[![Lighthouse Accessibility Badge](./assets/test_resultados/lighthouse_accessibility.svg)](https://github.com/Juudini/ProyectoFinalDebandi)
[![Lighthouse Best Practices Badge](./assets/test_resultados/lighthouse_best-practices.svg)](https://github.com/Juudini/ProyectoFinalDebandi)
[![Lighthouse SEO Badge](./assets/test_resultados/lighthouse_seo.svg)](https://github.com/Juudini/ProyectoFinalDebandi)

## Feedback

Este proyecto fue creado para el **proyecto final** del curso de **JavaScript** en **Coderhouse**. Si tienes algún comentario o sugerencia, no dudes en contactarme.

## Autor

-   Debandi Chaves Juan Ignacio (Alumno en Coderhouse)

## 🔗 Links

[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://juudini.github.io/-portfolio/)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/juandebandi/)
[![twitter](https://img.shields.io/badge/twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/WatashiJuud)

