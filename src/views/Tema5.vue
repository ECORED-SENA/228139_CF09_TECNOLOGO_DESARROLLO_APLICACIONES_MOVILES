<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-botones
      .titulo-principal__numero
        span 5
      h1 Etapas en el desarrollo de apps

    .row.justify-content-center.mb-5.slideInUp
      .col-lg-10
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/t5-i1.jpg')})`}"
          )
          .bloque-texto-g__texto.p-4.shadow-box
            p.mb-0 Para desarrollar una aplicación móvil, se deben seguir una serie de etapas, similares a las que se realizan cuando se desarrolla cualquier tipo de software, pero aplicadas a una app móvil. Es fundamental conocerlas para desarrollar un producto de calidad. El desarrollo de aplicaciones móviles no se limita solo a la generación del código fuente o la interfaz de usuario, está compuesto por otras etapas que se ilustran a continuación en la siguiente figura:

    .row.justify-content-center.mb-5
      .col-lg-10
        .titulo-sexto.color-acento-contenido
          h5 Figura 3.
          span Etapas del desarrollo de apps

        figure
          img.nW(src='@/assets/curso/temas/t5-it2.svg', alt='tipos de contenidos móviles')

    #t_5_1
    h3.mb-5 #[i.fas.fa-angle-double-right.txt--color-acento-contenido] Conceptualización

    p.mb-3  Concebir la idea de la aplicación. Por lo general, esta etapa se fundamenta en la identificación de las necesidades y/o problemas de los usuarios que se pretende resolver a través de la app. Se debe realizar una investigación preliminar y un levantamiento de información que debe permitir la comprobación y viabilidad del concepto o idea.
    p.mb-5  La conceptualización define de manera general la funcionalidad de la aplicación. La siguiente figura representa este concepto.

    .row.justify-content-center.mb-5(data-aos="flip-down")
      .col-lg-8
        .titulo-sexto.color-acento-contenido
          h5 Figura 4.
          span Funcionalidad de una aplicación

        figure
          img.nW(src='@/assets/curso/temas/t5-p1.png', alt='tipos de contenidos móviles')
        figcaption  <b>Nota.</b> Tomada de CuponU (2021).

    p.mb-5  La conceptualización incluye elementos como los especificados en la siguiente tabla:

    .row.justify-content-center.mb-5
      .col-lg-10

        .titulo-sexto.color-acento-botones
          h5 Tabla 1.
          span Conceptualización de la aplicación

        .tabla-a.color-acento-botones
          table
            thead
              tr
                th Ideación
                th Investigación
                th Formalización de la idea
            tbody
              tr
                td
                  ul.lista-ul--color
                    li
                      i.fas.fa-check
                      span Definir la idea.
                    li
                      i.fas.fa-check
                      span Inventar, pensar una solución nueva para un problema detectado. Mejorar un proceso ya existente.
                td
                  ul.lista-ul--color
                    li
                      i.fas.fa-check
                      span Investigar si ya existe en el mercado.
                    li
                      i.fas.fa-check
                      span Generar un valor agregado.
                    li
                      i.fas.fa-check
                      span Inventar, pensar algo nuevo.
                    li
                      i.fas.fa-check
                      span Identificar las necesidades y problemas de los usuarios.

                td La idea corresponde a la necesidad detectada en la investigación preliminar y se comprueba la viabilidad de desarrollar la aplicación móvil.


    Separador

    #t_5_2
    h3.mb-5 #[i.fas.fa-angle-double-right.txt--color-acento-contenido] Definición

    p.mb-5  Se identifica y define el grupo de usuarios objetivo que serán los que utilizarán la aplicación trabajando sobre sus características generales.  Con el resultado de esta caracterización, se establece la funcionalidad y alcance del proyecto, especificando el diseño y la interfaz gráfica a trabajar.  En la siguiente tabla se definen algunos de los aspectos incluidos en esta etapa.

    .row.justify-content-center.mb-5(data-aos="flip-down")
      .col-lg-10

        .titulo-sexto.color-acento-botones
          h5 Tabla 2.
          span Definición de aplicación

        .tabla-a.color-acento-botones.mb-5
          table
            thead
              tr
                th Alcance de la app
                th Definición de usuarios
                th Definición funcional
            tbody
              tr
                td Se determina el alcance del proyecto, diseño y desarrollo de la app.
                td Se describen detalladamente las características de los usuarios para quienes se diseñará la aplicación.
                td Usando la metodología viaje del usuario, se identifican las características y se establece la funcionalidad óptima de la aplicación.


    p.mb-5  En la siguiente figura se muestran los elementos relacionados con la metodología del viaje del usuario, los cuales describen de manera general el comportamiento de un usuario frente al uso de una app.

    .row.justify-content-center.mb-5
      .col-lg-8

        .titulo-sexto.color-acento-contenido
          h5 Figura 5.
          span Metodología viaje del usuario

        figure
          img.nW(src='@/assets/curso/temas/t5-t2.svg', alt='tipos de contenidos móviles')


    Separador

    #t_5_3
    h3.mb-5 #[i.fas.fa-angle-double-right.txt--color-acento-contenido] El viaje de usuario

    .row.mb-5
      .col-lg-7
        p.mb-3  Permite realizar una previsualización de cómo se desarrollará la aplicación, generando la secuencia de pasos que representan el escenario en el que un usuario puede interactuar con el proyecto. Sirve para entender la dinámica de la aplicación y permite diseñar una mejor experiencia de usuario.
        p.mb-3  Permite comunicar de manera clara la idea del proyecto a todas las partes interesadas, simulando el comportamiento del usuario: cómo va a interactuar con el proyecto, detectando errores tempranos antes de iniciar el diseño.
        p.mb-3  Ayuda a definir la interfaz y el flujo de trabajo sobre los diferentes escenarios, clarificando las tareas que el usuario va a realizar y qué tipo de interfaz de usuario es óptima para llevar a cabo las operaciones.
        .cajon.color-acento-contenido.p-4
          p Por lo general, se utiliza al inicio del proyecto para visualizar los requisitos y funcionalidad, ayuda a sustentar otras actividades importantes en el diseño, también se utiliza al finalizar el desarrollo para verificar la funcionalidad, desempeño y nivel de satisfacción del cliente.
      .col-lg-5
        figure
          img(src='@/assets/curso/temas/t5-i2.jpg', alt='Dos personas charlando frente a un computador')

    p.mb-5  Los viajes de usuario representan el recorrido que van a realizar los clientes con el producto, por lo que se debe pensar primero en cómo son y cómo se comportan, con el fin de crear un viaje de usuario eficaz.
    p.mb-5  La siguiente tabla incluye las preguntas a responder con un viaje de usuario.

    .row.justify-content-center.mb-5
      .col-lg-12

        .titulo-sexto.color-acento-botones
          h5 Tabla 3.
          span Preguntas para resolver en un viaje de usuario

        .tabla-a.color-acento-botones.mb-5
          table
            thead
              tr
                th Contexto
                th Progresión
                th Dispositivos
                th Funcionalidad
                th Emoción
            tbody
              tr
                td
                  ul.lista-ul--color
                    li
                      i.fas.fa-check
                      span ¿Dónde está el usuario?
                    li
                      i.fas.fa-check
                      span ¿Qué hay a su alrededor?
                    li
                      i.fas.fa-check
                      span ¿Existen factores externos que puedan distraerlo?
                    li
                      i.fas.fa-check
                      span ¿Cuál es su motivación?

                td
                  ul.lista-ul--color
                    li
                      i.fas.fa-check
                      span ¿De qué manera cada paso le permite llegar al siguiente?
                    li
                      i.fas.fa-check
                      span ¿La actividad se hace más sencilla con el uso de la aplicación?
                td
                  ul.lista-ul--color
                    li
                      i.fas.fa-check
                      span ¿Qué dispositivo está utilizando?
                    li
                      i.fas.fa-check
                      span ¿Qué características tiene el dispositivo?

                td
                  ul.lista-ul--color
                    li
                      i.fas.fa-check
                      span ¿Qué tipo de funcionalidades está esperando?
                    li
                      i.fas.fa-check
                      span ¿Solucionó el problema?
                td
                  ul.lista-ul--color
                    li
                      i.fas.fa-check
                      span ¿Cuál es su estado emocional en cada paso?
                    li
                      i.fas.fa-check
                      span ¿Está entretenido, aburrido, enfadado?
                    li
                      i.fas.fa-check
                      span ¿Cumplió con sus expectativas?

    .row.mb-5.justify-content-center
      .col-lg-2
        figure
          img.nW(src='@/assets/curso/temas/t5-ic1.svg', alt='imagen decorativa')
      .col-lg-6
        ul.lista-ul--color
          li
            i.fas.fa-check
            span Una imagen de la persona que va a hacer ese viaje.
          li
            i.fas.fa-check
            span Un título que resuma el viaje.
          li
            i.fas.fa-check
            span Un resumen en texto o en imágenes de cada paso.
          li
            i.fas.fa-check
            span Un ejemplo de lo que está sucediendo en cada paso (si se considera necesario).
          li
            i.fas.fa-check
            span El dispositivo utilizado.
          li
            i.fas.fa-check
            span Los cambios en el trayecto actual (toma de decisiones).
          li
            i.fas.fa-check
            span Beneficios para el usuario y/o negocio.
          li
            i.fas.fa-check
            span Identificar dificultades o cuellos de botella.

    Separador

    #t_5_4
    h3.mb-5 #[i.fas.fa-angle-double-right.txt--color-acento-contenido] Diseño

    .row.justify-content-center.mb-5(data-aos="flip-down")
      .col-lg-10
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/t5-i3.jpg')})`}"
          )
          .bloque-texto-g__texto.p-4.shadow-box
            p.mb-0 Es el aspecto visual de la aplicación, se genera utilizando <i>wireframes</i> o <i>mockups</i>, se crea un prototipo, permitiendo de esta manera que el cliente y/o los usuarios puedan visualizar y probar la estructura gráfica y funcional de la aplicación. Es el momento oportuno para realizar cambios o modificaciones recomendadas por el cliente o los usuarios sin afectar el proceso de desarrollo.  La siguiente tabla resume los elementos incluidos en el proceso de diseño.
    .row.justify-content-center.mb-5
      .col-lg-10

        .titulo-sexto.color-acento-botones
          h5 Tabla 4.
          span Elementos del diseño de una aplicación

        .tabla-a.color-acento-botones
          table
            thead
              tr
                th Wireframes
                th Prototipos
                th Test con usuarios
                th Diseño visual
            tbody
              tr
                td
                  ul.lista-ul--color
                    li
                      i.fas.fa-check
                      span Define el contenido y la posición de los elementos de la app.
                    li
                      i.fas.fa-check
                      span Representa cómo será la interacción de los elementos y los módulos.
                td Se definen los prototipos para ser probados con usuarios.
                td
                  ul.lista-ul--color
                    li
                      i.fas.fa-check
                      span Análisis funcionales.
                    li
                      i.fas.fa-check
                      span Pruebas de movilidad.
                    li
                      i.fas.fa-check
                      span Pruebas de interfaz.
                    li
                      i.fas.fa-check
                      span Pruebas de accesibilidad.
                    li
                      i.fas.fa-check
                      span Pruebas de usabilidad del prototipo.
                td
                  ul.lista-ul--color
                    li
                      i.fas.fa-check
                      span Diseño visual acabado que será provisto al desarrollador.
                    li
                      i.fas.fa-check
                      span Pantallas modelo, para la programación del código.


    Separador

    #t_5_5
    h3.mb-5 #[i.fas.fa-angle-double-right.txt--color-acento-contenido] Desarrollo

    .row.justify-content-center.mb-5(data-aos="flip-down")
      .col-lg-10
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/t5-i4.jpg')})`}"
          )
          .bloque-texto-g__texto.p-4.shadow-box
            p.mb-0 Corresponde al inicio de todo el proceso de construcción y desarrollo de la app en el lenguaje de desarrollo y plataforma definidos en las etapas previas.  La siguiente tabla ilustra las fases involucradas en el desarrollo de la aplicación.

    .row.justify-content-center.mb-5
      .col-lg-10

        .titulo-sexto.color-acento-botones
          h5 Tabla 5.
          span Fases del desarrollo de una aplicación

        .tabla-a.color-acento-botones
          table
            thead
              tr
                th Programación
                th Base de datos
                th Integración de API
                th Corrección de errores en código
            tbody
              tr
                td
                  ul.lista-ul--color
                    li
                      i.fas.fa-check
                      span Lenguaje de programación y <i>framework</i>.
                    li
                      i.fas.fa-check
                      span El desarrollador crea la estructura sobre la cual construirá el funcionamiento de la aplicación.
                td Integración de la aplicación a la base de datos.
                td Integración de las API a la aplicación.
                td Corrección de errores funcionales para asegurar el correcto funcionamiento y desempeño de la app.

    Separador

    #t_5_6
    h3.mb-5 #[i.fas.fa-angle-double-right.txt--color-acento-contenido] Pruebas

    .row.justify-content-center.mb-5(data-aos="flip-down")
      .col-lg-10
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/t5-i5.jpg')})`}"
          )
          .bloque-texto-g__texto.p-4.shadow-box
            p.mb-0 Para garantizar el correcto funcionamiento de la app, es importante realizar una serie de pruebas; a través de ellas, se puede medir la aceptación y usabilidad de la aplicación. Estas fases se describen en la siguiente tabla.

    .row.justify-content-center.mb-5
      .col-lg-12

        .titulo-sexto.color-acento-botones
          h5 Tabla 6.
          span Pruebas de la aplicación

        .tabla-a.color-acento-botones
          table
            thead
              tr
                th Prueba de usabilidad
                th Pruebas de compatibilidad
                th Pruebas de seguridad
                th Pruebas de recuperabilidad
                th Pruebas de regresión
            tbody
              tr
                td Identificar problemas en la experiencia del usuario para poder determinar su nivel de satisfacción.
                td
                  ul.lista-ul--color
                    li
                      i.fas.fa-check
                      span Rendimiento de la app en función a los diferentes dispositivos.
                    li
                      i.fas.fa-check
                      span Evaluar aspectos como el sistema operativo, resolución de la pantalla, memoria.
                td
                  ul.lista-ul--color
                    li
                      i.fas.fa-check
                      span Evitar el acceso a datos personales.
                    li
                      i.fas.fa-check
                      span Analizar y evaluar la seguridad para evitar amenazas de virus o hackers.
                td Efectividad de recuperación de posible error o fallo (<i>software</i>, red, <i>hardware</i>).
                td Modificar el código para eliminar errores encontrados en las etapas anteriores.

    Separador


    #t_5_7
    h3.mb-5 #[i.fas.fa-angle-double-right.txt--color-acento-contenido] Publicación

    .row.justify-content-center.mb-5(data-aos="flip-down")
      .col-lg-10
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/t5-i6.jpg')})`}"
          )
          .bloque-texto-g__texto.p-4.shadow-box
            p.mb-0 Al llegar a esta fase, se asume que la aplicación se encuentra lista para publicación. Se definen los requerimientos de publicación, realizando la configuración según las políticas de la tienda de aplicaciones.  En la siguiente tabla se describen sus fases.

    .row.justify-content-center.mb-5
      .col-lg-10

        .titulo-sexto.color-acento-botones
          h5 Tabla 7.
          span Publicación de la aplicación

        .tabla-a.color-acento-botones.mb-5
          table
            thead
              tr
                th Lanzamiento
                th Seguimiento
                th Actualización
            tbody
              tr
                td La aplicación es puesta a disposición de los usuarios en las tiendas digitales.
                td Seguimiento a través de analíticas, estadísticas y comentarios de usuarios.
                td Se mide el desempeño de la app, se corrigen errores, se realizan mejoras y se actualizan futuras versiones.

</template>

<script>
export default {
  name: 'Tema5',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
