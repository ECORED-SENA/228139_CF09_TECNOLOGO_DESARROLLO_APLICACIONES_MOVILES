<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-botones
      .titulo-principal__numero
        span 3
      h1 La monetización de las <i>apps</i>


    .row.mb-5.slideInUp
      .col-lg-7
        p.mb-3 Existen dos tipos de <i>apps</i>: <b>gratuitas y de pago.</b>  Pero existen varias subdivisiones según los contenidos y la manera de generar recursos económicos. Hay formas de monetizar <i>apps</i> gratuitas, transformándolas en ideas de negocio muy rentables, capaces de generar un mayor recaudo que las <i>apps</i> de pago. Los modelos de monetización son los caminos que se pueden utilizar para obtener dinero a través del uso de las aplicaciones. Suele depender de si la <i>app</i> es gratuita, paga o <i>freemium</i>; también de la categoría de la aplicación, por ejemplo, <b>compras dentro de la <i>app</i> <i>(in-app purchase)</i>.</b> Algunas apps, por ejemplo, permiten pagar pequeñas cantidades de dinero por ítems (subproductos) separados, que mejoran las prestaciones básicas o generales del producto principal a comprar.
        p En la siguiente imagen se muestran ejemplos de modelos de monetización:
      .col-lg-5
        figure
          img(src='@/assets/curso/temas/t3-i1.jpg', alt='Tipos de aplicaciones móviles según funcionalidad')

    .row.mb-5.justify-content-center
      .col-lg-7

        .titulo-sexto.color-acento-contenido.mb-5
          h5 Figura 2.
          span Aplicaciones móviles y modelos de monetización

        figure
          img.nW(src='@/assets/curso/temas/t3-i2.svg', alt='Imagen que expone las aplicaciones móviles y los modelos de monetización para los que pueden ser usadas o desarrolladas.')

    p.mb-5  A continuación, se describen algunos conceptos involucrados en la monetización de <i>apps</i>:

    .row.justify-content-center
      .col-lg-10
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")
          .row.justify-content-center.align-items-center(titulo="<i>Apps</i> gratuitas")
            .col-md-2
              figure
                img(src='@/assets/curso/temas/t2-ic3.png', alt='')
            .col-md-8
              p Uno de los mayores beneficios que se logra con una aplicación gratuita es el alcance o cantidad de usuarios a los que puede llegar, debido a que no existen barreras para su descarga y uso.

          .row.justify-content-center.align-items-center(titulo="<i>Apps</i> de pago")
            .col-md-2
              figure
                img(src='@/assets/curso/temas/t2-ic4.png', alt='')
            .col-md-8
              p El éxito de una aplicación que debe ser comprada para usarse es difícil de medir; poner un precio a una aplicación es una barrera difícil de superar para un usuario, quien en ocasiones no se arriesga a pagar por algo que aún no conoce.  Habitualmente, se requiere de un número importante de descargas y comentarios positivos sobre su funcionalidad para ser confiables y rentables, lo que genera una buena reputación que atrae a nuevos usuarios.

          .row.justify-content-center.align-items-center(titulo="El modelo <em>freemium</em>")
            .col-md-2
              figure
                img(src='@/assets/curso/temas/t2-ic6.png', alt='')
            .col-md-8
              p Es una combinación de los tipos descritos previamente. Su nombre es una mezcla de las palabras inglesas #[em free] y #[em premium]. Son aplicaciones de descarga gratuita, que permiten un uso básico y limitado de sus funcionalidades, y que requieren de un pago para poder usar funcionalidades avanzadas.

          .row.justify-content-center.align-items-center(titulo="<i>Free trial</i>")
            .col-md-2
              figure
                img(src='@/assets/curso/temas/t3-ic1.png', alt='')
            .col-md-8
              p Pueden ser utilizadas de manera gratuita durante un tiempo limitado; después de finalizar el tiempo estipulado, se debe pagar para seguir utilizándola.


          .row.justify-content-center.align-items-center(titulo="Pagar por la versión completa")
            .col-md-2
              figure
                img(src='@/assets/curso/temas/t2-ic2.png', alt='')
            .col-md-8
              p Son aplicaciones que se desarrollan para diferentes perfiles de usuario; por ejemplo, incluyen una versión gratuita que permite usar funcionalidades básicas con algunas limitaciones o publicidad y otra versión paga que incluye otras funcionalidades o que elimina la publicidad.


          .row.justify-content-center.align-items-center(titulo="Publicidad")
            .col-md-2
              figure
                img(src='@/assets/curso/temas/t2-ic3.png', alt='')
            .col-md-8
              p La publicidad puede usarse en cualquier tipo de aplicaciones como mecanismo para obtener un beneficio económico. Consiste en la inclusión de avisos con información publicitaria a los que pueden ingresar los usuarios para acceder a otras <i>apps</i>, descargar otras aplicaciones, comprar productos, entre otros. El modelo de ganancia está relacionado con la cantidad de anuncios visualizados y al acceso a la información que promueve cada publicación. Algunos de sus inconvenientes son la arbitrariedad y aleatoriedad con la que se invade la privacidad del usuario al mostrar dicha publicidad, aunque no sea de temáticas de interés para quien usa la <i>app</i>. Cada sistema operativo tiene sus propias condiciones y sistema de publicidad.

          .row.justify-content-center.align-items-center(titulo="Funcionalidad")
            .col-md-2
              figure
                img(src='@/assets/curso/temas/t3-ic3.png', alt='')
            .col-md-8
              p Acceso a servicios básicos que permiten conocer la interfaz y funcionalidad de la <i>app</i>; dentro de la <i>app</i> se debe pagar para ampliar el acceso a los servicios o tener privilegios que no se tienen con el servicio básico. Este modelo es popular en servicios de #[em streaming] de video o música, como Spotify, en los cuales con una cuenta gratuita se escuchan anuncios entre canciones y con una cuenta de pago mensual (<i>premium</i> en este caso) se usa el servicio sin ningún tipo de publicidad.



</template>

<script>
export default {
  name: 'Tema3',
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
