<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-botones
      .titulo-principal__numero
        span 4
      h1 <i>Frameworks</i> para el desarrollo de aplicaciones móviles híbridas

    .row.justify-content-center.mb-5.slideInUp
      .col-lg-10
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/t4-i1.jpg')})`}"
          )
          .bloque-texto-g__texto.p-4.shadow-box
            p.mb-0 Usar un <i>framework</i> para el desarrollo de aplicaciones móviles híbridas facilita el trabajo de los desarrolladores, permiten que las <i>apps</i> móviles se ejecuten en las principales plataformas (iOS y Android). El código se puede reutilizar para el desarrollo de aplicaciones web progresivas y en aplicaciones de escritorio.

    p.mb-5  A continuación, se muestran algunos <i>frameworks</i> disponibles para el desarrollo de <i>apps</i> móviles híbridas:

    .titulo-sexto.color-acento-contenido
      h5 <i>Frameworks</i> de desarrollo de <i>apps</i> móviles híbridas

    .row.mb-5.justify-content-center
      .col-lg-3
        .nav-holder.align-items-center.justify-content-center
          img(src="@/assets/curso/temas/t4-p1-logo.svg", alt="Logo React Native").logo-1
          .indicador--click(v-if="mostrarIndicador")
          .text.p-lg-2.p-4
            .row.px-lg-3.mb-lg-2
              p.small
                span.h4 React Native<br>
                | Creación de <i>apps</i> solo JavaScript, interfaz de usuario móvil enriquecida.
      .col-lg-3
        .nav-holder.align-items-center
          img(src="@/assets/curso/temas/t4-p2-logo.svg", alt="Ionic").logo-2
          .text.p-lg-2.p-4
            .row.px-lg-3.mb-lg-2
              p.small
                span.h4 Ionic<br>
                | Desarrollo con tecnologías web como CSS, HTML5 y Sass, para instalarse en dispositivos utilizando Cordova.
      .col-lg-3
        .nav-holder.align-items-center
          img(src="@/assets/curso/temas/t4-p3-logo.svg", alt="NativeScript").logo-3
          .text.p-lg-2.p-4
            .row.px-lg-3.mb-lg-2
              p.small
                span.h4 NativeScript<br>
                | Aplicaciones nativas, usan las mismas API de Xcode o Android Studio. La interfaz de usuario nativa sin <i>WebViews</i> ejecuta como si fuera desarrollo nativo.

      .col-lg-3
        .nav-holder.align-items-center
          img(src="@/assets/curso/temas/t4-p4-logo.svg", alt="Quasar").logo-4
          .text.p-lg-2.p-4
            .row.px-lg-3.mb-lg-2
              p.small
                span.h4 Quasar<br>
                | Se implementa simultáneamente como un sitio web y como aplicación móvil iOS, Android y escritorio, usando Electron, con una sola  base de código.

    .row.mb-5.justify-content-center
      .col-lg-3
        .nav-holder.align-items-center
          img(src="@/assets/curso/temas/t4-p5-logo.svg", alt="Kendo UI").logo-5
          .text.p-lg-2.p-4
            .row.px-lg-3.mb-lg-2
              p.small
                span.h4 Kendo UI<br>
                | Colección de componentes de interfaz de usuario de JavaScript, dirigida a clientes empresariales. No hay ninguna versión gratuita.
      .col-lg-3
        .nav-holder.align-items-center
          img(src="@/assets/curso/temas/t4-p6-logo.svg", alt="Framework").logo-6
          .text.p-lg-2.p-4
            .row.px-lg-3.mb-lg-2
              p.small
                span.h4 Framework7<br>
                | <i>Framework</i> HTML móvil gratuito y de código abierto, prototipos para generar el diseño de aplicaciones.

      .col-lg-3
        .nav-holder.align-items-center
          img(src="@/assets/curso/temas/t4-p7-logo.svg", alt="Aurelia").logo-7
          .text.p-lg-2.p-4
            .row.px-lg-3.mb-lg-2
              p.small
                span.h4 Aurelia<br>
                | Colección de módulos JavaScript modernos. Se puede utilizar de manera independiente en cualquier proyecto de JavaScript.

      .col-lg-3
        .nav-holder.align-items-center
          img(src="@/assets/curso/temas/t4-p8-logo.svg", alt="Ext JS").logo-8
          .text.p-lg-2.p-4
            .row.px-lg-3.mb-lg-2
              p.small
                span.h4 Ext JS<br>
                | Soluciones empresariales para crear aplicaciones web móviles multiplataforma con HTML5 y JavaScript.

    .row.mb-5.justify-content-center
      .col-lg-3
        .nav-holder.align-items-center
          img(src="@/assets/curso/temas/t4-p9-logo.svg", alt="Xamarin").logo-9
          .text.p-lg-2.p-4
            .row.px-lg-3.mb-lg-2
              p.small
                span.h4 Xamarin<br>
                | Aplicaciones nativas de Android, iOS y Windows con interfaces de usuario nativas, principal <i>framework</i> de desarrollo de aplicaciones móviles híbridas.

      .col-lg-3
        .nav-holder.align-items-center
          img(src="@/assets/curso/temas/t4-p10-logo.svg", alt="Unity").logo-10
          .text.p-lg-2.p-4
            .row.px-lg-3.mb-lg-2
              p.small
                span.h4 Unity<br>
                | Motores de videojuegos. Entornos de desarrollo más populares. Compila para gran número de plataformas, entre ellas Android, iOS, Windows Phone.


    .row.justify-content-center
      .col-lg-10
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")
          .row.justify-content-center.align-items-center(titulo="React Native")
            .col-md-2
              figure
                img(src='@/assets/curso/temas/t4-ic1.svg', alt='Texto que describa la imagen')
            .col-md-8
              p Es uno de los <i>frameworks</i> más recientes para el desarrollo de <i>apps</i> móviles híbridas, permite la creación de <i>apps</i> solo JavaScript. Utiliza el mismo diseño que React, lo que le permite componer una interfaz de usuario móvil enriquecida. Con este <i>framework</i>, no se crea una aplicación web móvil, tampoco una aplicación basada en HTML5 o una aplicación híbrida típica. Es posible crear una aplicación móvil muy similar a una nativa, casi idéntica a una aplicación desarrollada con Objective-C o Java. React Native utiliza los mismos bloques de creación de interfaz de usuario nativa que las aplicaciones iOS y Android.


          .row.justify-content-center.align-items-center(titulo="Ionic")
            .col-md-2
              figure
                img(src='@/assets/curso/temas/t4-ic2.svg', alt='Texto que describa la imagen')
            .col-md-8
              p Es un SDK de código abierto para el desarrollo de aplicaciones móviles híbridas mediante tecnologías web como CSS, HTML5 y Sass. Las aplicaciones pueden distribuirse a través de tiendas de aplicaciones nativas para instalarse en dispositivos aprovechando Cordova.

          .row.justify-content-center.align-items-center(titulo="NativeScript")
            .col-md-2
              figure
                img(src='@/assets/curso/temas/t4-ic3.svg', alt='Texto que describa la imagen')
            .col-md-8
              p Las aplicaciones nativescript se crean con JavaScript o mediante cualquier lenguaje que utilice JavaScript, como TypeScript.  Tiene buena integración con las versiones Angular más recientes, incluidas las características de full-stack, la integración con la CLI Angular, la compatibilidad con enrutadores y la generación de código. También incluye la integración con Vue, que permite el uso de la VUE CLI, Vuex, y otras características útiles de Vue.js. Las aplicaciones móviles desarrolladas con nativescript son aplicaciones totalmente nativas y usan las mismas API desarrolladas para Xcode o Android Studio. Esto significa que obtiene la interfaz de usuario nativa de la plataforma sin WebViews y se ejecuta con el rendimiento nativo.

          .row.justify-content-center.align-items-center(titulo="Quasar")
            .col-md-2
              figure
                img(src='@/assets/curso/temas/t4-ic4.svg', alt='Texto que describa la imagen')
            .col-md-8
              p Está soportado y sustentado por Vue.js y permite a los desarrolladores escribir código una sola vez e implementar simultáneamente, como un sitio web (SPA, PWA, SSR), aplicación móvil iOS, Android  y escritorio, usando Electron, con una sola base de código. Utiliza HTML/CSS/JS, optimiza el uso de caché, permite optimizar el código utilizando Tree shaking. Es 100% libre, es de código abierto y tiene licencia bajo el MIT, tiene buena documentación y una comunidad activa trabajando en mejorar su funcionalidad.

          .row.justify-content-center.align-items-center(titulo="Kendo UI")
            .col-md-2
              figure
                img(src='@/assets/curso/temas/t4-ic5.svg', alt='Texto que describa la imagen')
            .col-md-8
              p Proporciona una colección extensa de componentes de interfaz de usuario de JavaScript, con bibliotecas para jQuery, Angular, React y Vue para crear aplicaciones móviles híbridas. Cuenta con una buena base de <i>widgets</i> que se pueden usar con jQuery, Angular, React y Vue. Está dirigido a clientes empresariales, no cuenta con versión gratuita disponible, por ahora.

          .row.justify-content-center.align-items-center(titulo="Framework7")
            .col-md-2
              figure
                img(src='@/assets/curso/temas/t4-ic6.svg', alt='Texto que describa la imagen')
            .col-md-8
              p <i>Framework</i> HTML móvil gratuito y de código abierto, permite desarrollar <i>apps</i> móviles híbridas, web y web progresivas (PWAs) con aspecto y sensación nativas. Se puede integrar con herramientas adicionales como Electron y NW.js, lo que le permite crear aplicaciones de escritorio nativas.  Se utiliza como herramienta para desarrollo de prototipos para generar el diseño de aplicaciones. Se centra en el diseño de materiales para iOS y Google, ofreciendo mejor experiencia y simplicidad.

          .row.justify-content-center.align-items-center(titulo="Aurelia")
            .col-md-2
              figure
                img(src='@/assets/curso/temas/t4-ic7.svg', alt='Texto que describa la imagen')
            .col-md-8
              p Se podría definir como una colección de módulos JavaScript modernos que, cuando se utilizan juntos, conforman una plataforma de desarrollo ideal para crear aplicaciones web, programas de escritorio y aplicaciones móviles. La particularidad que presenta este <i>framework</i> es que cualquiera de los módulos de Aurelia se puede utilizar de manera independiente en cualquier proyecto de JavaScript o Node.js.  Está enfocado para desarrolladores que prefieren utilizar JavaScript o TypeScript.

          .row.justify-content-center.align-items-center(titulo="Ext JS")
            .col-md-2
              figure
                img(src='@/assets/curso/temas/t4-ic8.svg', alt='Texto que describa la imagen')
            .col-md-8
              p Enfocado en el desarrollo de soluciones empresariales para crear aplicaciones web móviles multiplataforma con HTML5 y JavaScript que consumen muchos datos. Se define como uno de los mejores <i>frameworks</i> JavaScript.


          .row.justify-content-center.align-items-center(titulo="Xamarin")
            .col-md-2
              figure
                img(src='@/assets/curso/temas/t4-ic9.svg', alt='Texto que describa la imagen')
            .col-md-8
              p Tiene implementaciones multiplataforma de la infraestructura de lenguaje común (CLI) y las especificaciones de lenguaje Microsoft .NET.  Tiene su base de código compartida con C#, los desarrolladores pueden usar herramientas de Xamarin para escribir aplicaciones nativas de Android, iOS y Windows, con interfaces de usuario nativas y compartir código en varias plataformas.

          .row.justify-content-center.align-items-center(titulo="Unity")
            .col-md-2
              figure
                img(src='@/assets/curso/temas/t4-ic10.svg', alt='Texto que describa la imagen')
            .col-md-8
              p Es uno de los motores de videojuegos más reconocidos. Se puede utilizar en los tres entornos de desarrollo más populares: Linux, Windows, OS X. Y tiene la posibilidad de compilar para gran número de plataformas, entre ellas Android, iOS, Windows Phone. La facilidad que ofrece este motor gráfico permite el desarrollo de videojuegos 2D y 3D, cuenta con unas herramientas de optimización de desarrollo y desempeño que incluso permiten añadir compras, publicidad y realizar analíticas de una manera sencilla y completamente integrada. Posee una de las comunidades de desarrolladores más activa, tiene disponible su propia tienda.


</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    // variables de vue
    mostrarIndicador: true,
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

<style lang="sass">

.logo-1
  width: 112px
  height: 120px


.logo-2
  width: 220px
  height: 74px
  @media screen and (max-width: $bp-max-xl)
    width: 180px
    height: 60px

.logo-3
  width: 220px
  height: 76px
  @media screen and (max-width: $bp-max-xl)
    width: 180px
    height: 62px

.logo-4
  width: 235px
  height: 55px
  @media screen and (max-width: $bp-max-xl)
    width: 190px
    height: 44px

.logo-5
  width: 220px
  height: 71px
  @media screen and (max-width: $bp-max-xl)
    width: 180px
    height: 58px

.logo-6
  width: 210px
  height: 112px
  @media screen and (max-width: $bp-max-xl)
    width: 170px
    height: 91px

.logo-7
  width: 230px
  height: 66px
  @media screen and (max-width: $bp-max-xl)
    width: 180px
    height: 52px

.logo-8
  width: 220px
  height: 50px
  @media screen and (max-width: $bp-max-xl)
    width: 180px
    height: 41px

.logo-9
  width: 194px
  height: 110px
  @media screen and (max-width: $bp-max-xl)
    width: 141px
    height: 80px

.logo-10
  width: 214px
  height: 80px
  @media screen and (max-width: $bp-max-xl)
    width: 170px
    height: 64px
</style>
