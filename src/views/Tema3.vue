<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Jarabes, fondant, cremas, coberturas y salsas básicas

    .row.mb-5.justify-content-center.align-items-center
      .col-lg-12
        .bloque-texto-g.bg-color-1.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema3/img01.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Estos elementos complementan las masas, aportando humedad, sabor, textura y atractivo visual a los productos de repostería. Su dominio permite al profesional crear preparaciones completas y equilibradas.

    separador

    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.1 Jarabes: simple, aromatizado, de azúcar invertido

    p.mb-4 Los jarabes son disoluciones de azúcar en agua, cuya concentración y preparación determinan su aplicación.

    .row.align-items-center.justify-content-center.mb-5(data-aos="fade-right")
      .col-md-8.col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/img02.png", data-aos="zoom-in")
      .col-lg-8
        AcordionA(tipo="a" clase-tarjeta="tarjeta bg-color-6")
          div(titulo="Jarabe simple")
            p.ms-5 Mezcla de agua y azúcar en proporción 1:1 (puede ser también 2:1), llevada a ebullición hasta disolver completamente el azúcar. Se utiliza para humedecer bizcochos (almibarar), aportando jugosidad sin endulzar excesivamente.
          div(titulo="Jarabe aromatizado")
            p.ms-5 Al jarabe simple se le añaden infusiones de vainilla, café, hierbas aromáticas (menta, hierbabuena), cáscaras de cítricos o licores, enriqueciendo su perfil de sabor.
          div(titulo="Jarabe de azúcar invertido")
            p.ms-5 El azúcar (sacarosa) se hidroliza parcialmente en glucosa y fructosa mediante calor y un ácido (jugo de limón, cremor tártaro o ácido cítrico). Este proceso evita la cristalización, mantiene los productos más húmedos por más tiempo y proporciona un dulzor más intenso. Es muy utilizado en heladería y repostería industrial.
        
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-12
        .titulo-sexto.color-acento-contenido.mb-4
          h5.text-bold Tabla 3.
          span Tipos de jarabe y sus aplicaciones
        .tabla-a.color-acento-contenido
          table
            caption Nota. Basado en Gisslen (2014).
            thead
              tr
                th Tipo de jarabe
                th Proporción agua: azúcar
                th Aplicaciones principales
            tbody
              tr
                td Jarabe ligero.
                td 2:1
                td Almibarado de bizcochos ligeros, cócteles.
              tr
                td Jarabe estándar.
                td 1:1
                td Almibarado general, conservación de frutas.
              tr
                td Jarabe denso.
                td 1:2
                td Confitado de frutas, glaseados.
              tr
                td Azúcar invertido.
                td Variable.
                td Helados, masas que requieren mayor retención de humedad.

    separador

    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.2 Cremas: pastelera, mantequilla, chantilly, diplomática, muselina

    p.mb-4 Las cremas son preparaciones fundamentales que actúan como rellenos, coberturas o bases para otros postres.

    .bg-full-width.bg-fondo-3.tarjeta.mb-5
      .py-4.px-lg-0
        SlyderA(tipo="b").bg-color-white.p-3.p-lg-4.tarjeta
          .row.justify-content-center.align-items-center.p-2
            .col-lg-7.mb-4.mb-lg-0.mb-3.mb-lg-0
              h4.mb-3 Crema pastelera (Crème pâtissière): 
              p.mb-0 Base de leche, yemas, azúcar, almidón (maicena o harina) y vainilla. Se cocina hasta que espesa por la gelatinización del almidón y la coagulación de las yemas. Es fundamental para milhojas, cañas, profiteroles, tartas de frutas. Su temperatura de cocción alcanza los 85 - 90 °C.
              
            .col-md-8.col-lg-5
              figure
                img(src="@/assets/curso/tema3/img04.png", alt="Crema pastelera").mx-auto

          .row.justify-content-center.align-items-center.p-2
            .col-lg-7.mb-4.mb-lg-0
              h4.mb-3 Crema mantequilla (Crème au beurre)
              p.mb-0 Mantequilla batida con un almíbar a punto de bola (merengue italiano) o con crema pastelera (crema mantequilla con base de crema pastelera). Utilizada para decoración y rellenos de pasteles elegantes. Su textura es suave y sedosa.

            .col-md-8.col-lg-5
              figure
                img(src="@/assets/curso/tema3/img05.png", alt="Crema mantequilla").mx-auto

          .row.justify-content-center.align-items-center.p-2
            .col-lg-7.mb-4.mb-lg-0
              h4.mb-3 Crema chantilly (Crème Chantilly)
              p.mb-0 Crema de leche (mínimo 35 % de grasa) batida con azúcar glass y vainilla, logrando una textura aireada y ligera. Es fundamental que todos los elementos (crema, bowl, batidores) estén muy fríos para un montado exitoso.

            .col-md-8.col-lg-5
              figure
                img(src="@/assets/curso/tema3/img06.png", alt="Crema chantilly").mx-auto

          .row.justify-content-center.align-items-center.p-2
            .col-lg-7.mb-4.mb-lg-0
              h4.mb-3 Crema diplomática (Crème diplomate)
              p.mb-0 Mezcla de crema pastelera y crema chantilly, generalmente en proporción 2:1 o 3:1. Puede añadirse gelatina para darle mayor firmeza. Es ideal para rellenar hojaldres, tartas y postres en vaso.

            .col-md-8.col-lg-5
              figure
                img(src="@/assets/curso/tema3/img07.png", alt="Crema diplomática").mx-auto

          .row.justify-content-center.align-items-center.p-2
            .col-lg-7.mb-4.mb-lg-0
              h4.mb-3 Crema muselina (Crème mousseline)
              p.mb-0 Crema pastelera enriquecida con mantequilla en proporción 1:1 (peso de crema: peso de mantequilla). Más firme que la diplomática, ideal para rellenos de pasteles que requieren estructura.

            .col-md-8.col-lg-5
              figure
                img(src="@/assets/curso/tema3/img08.png", alt="Crema muselina").mx-auto
          
    separador
    
    .bg-full-width.bg-fondo-1.px-4.px-md-5.pb-4
      #t_3_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
        h2 3.3 Coberturas: chocolate, ganache, espejo

      p.mb-4 Las coberturas son preparaciones utilizadas en repostería para recubrir, decorar y realzar la apariencia de diferentes productos como tortas, postres y pasteles. Además de aportar un acabado atractivo, también contribuyen al sabor, la textura y la presentación final de las preparaciones.

      .row.mb-5.justify-content-center.align-items-center
        .bg-color-7.p-4.br-15
          .row.justify-content-center.align-items-center
            .col-lg
              p.mb-0(data-aos="fade-right") Entre las coberturas más utilizadas se encuentran el chocolate, la ganache y el glaseado espejo. Cada una posee características particulares en cuanto a consistencia, brillo y aplicación, lo que permite utilizarlas en diferentes tipos de productos y técnicas de decoración dentro de la repostería.
            .col-auto.mb-3.mb-lg-0.d-none.d-lg-flex
              figure
                img(src="@/assets/curso/tema3/img09.png", data-aos="zoom-in").img-100.mx-auto
              

      .row.align-items-center.justify-content-center.mb-5(data-aos="fade-right")
        .col-md-8.col-lg-4.mb-3.mb-lg-0
          figure
            img(src="@/assets/curso/tema3/img10.png", data-aos="zoom-in")
        .col-lg-8
          AcordionA(tipo="a" clase-tarjeta="tarjeta bg-color-6")
            div(titulo="Cobertura de chocolate")
              .row.justify-content-center.align-items-center
                .col-lg-7.mb-4.mb-lg-0
                  p.ms-5 Chocolate de alta calidad con mayor contenido de manteca de cacao (32 - 39 %), ideal para templar y moldear. Requiere un proceso de templado para lograr brillo y textura crujiente.
                .col-lg-5
                  figure
                    img(src="@/assets/curso/tema3/img11.png", alt="Cobertura de chocolate").mx-auto

            div(titulo="Ganache")
              .row.justify-content-center.align-items-center
                .col-lg-7.mb-4.mb-lg-0
                  p.ms-5 Mezcla de chocolate y crema de leche caliente. La proporción determina su uso final:
                  .lista-ul--color.ms-5
                    li
                      i.fas.fa-circle-right.bg-color-4
                      | Proporción 1:1 (chocolate: crema): ganache líquida, ideal para glaseados y salsas.
                    li
                      i.fas.fa-circle-right.bg-color-4
                      | Proporción 2:1: ganache de textura media, perfecta para rellenos de tartas y bombones.
                    li
                      i.fas.fa-circle-right.bg-color-4
                      | Proporción 3:1: ganache firme, utilizada para trufas y bombones moldeados.

                .col-lg-5
                  figure
                    img(src="@/assets/curso/tema3/img12.png", alt="Ganache").mx-auto

            div(titulo="Cobertura espejo (Glaçage miroir)")
              .row.justify-content-center.align-items-center
                .col-lg-7.mb-4.mb-lg-0
                  p.ms-5 Glaseado brillante y liso, elaborado con chocolate, leche condensada, gelatina y glucosa, que se vierte sobre pasteles congelados para obtener una superficie reflectante y profesional.
                .col-lg-5
                  figure
                    img(src="@/assets/curso/tema3/img13.png", alt="Glaseado espejo").mx-auto
          
    separador

    #t_3_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.4 Salsas dulces: caramelo, frutos rojos, chocolate, inglesa

    .row.align-items-center.justify-content-center.mb-5(data-aos="fade-right")
      .col-lg-12
        .bloque-texto-g.bloque-texto-g.bg-color-7.p-3.p-sm-4.p-md-5.mb-0
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema3/img14.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Las salsas dulces son preparaciones utilizadas en repostería para complementar y realzar el sabor de diferentes postres y productos horneados. Estas salsas aportan humedad, aroma y contraste de sabores, además de mejorar la presentación de los platos. Entre las más utilizadas se encuentran la salsa de caramelo, la de frutos rojos, la de chocolate y la salsa inglesa. Cada una ofrece características particulares de sabor, textura y color, lo que permite acompañar y decorar diversos postres, aportando mayor variedad y atractivo a las preparaciones de repostería.


    .row.align-items-center.justify-content-center.mb-5(data-aos="fade-right")
      .col-lg-8.mb-4.mb-lg-0
        AcordionA(tipo="a" clase-tarjeta="tarjeta bg-color-6")
          div(titulo="Salsa de caramelo")
            .row.justify-content-center.align-items-center
              .col-lg-7.mb-4.mb-lg-0
                p.ms-5 Azúcar caramelizada con crema de leche y mantequilla. Puede añadirse sal para obtener caramelo salado.
              .col-lg-5
                figure
                  img(src="@/assets/curso/tema3/img15.png", alt="Salsa de caramelo").mx-auto

          div(titulo="Salsa de frutos rojos")
            .row.justify-content-center.align-items-center
              .col-lg-7.mb-4.mb-lg-0
                p.ms-5 Pulpa de frutas (fresas, frambuesas, moras) cocida con azúcar, puede espesarse ligeramente con almidón o reducirse por evaporación.
              .col-lg-5
                figure
                  img(src="@/assets/curso/tema3/img16.png", alt="Salsa de frutos rojos").mx-auto

          div(titulo="Salsa de chocolate")
            .row.justify-content-center.align-items-center
              .col-lg-7.mb-4.mb-lg-0
                p.ms-5 Similar a la cobertura ganache, pero más líquida, con mayor proporción de líquido (leche, crema o agua).
              .col-lg-5
                figure
                  img(src="@/assets/curso/tema3/img17.png", alt="Salsa de chocolate").mx-auto

          div(titulo="Crema inglesa (Crème anglaise)")
            .row.justify-content-center.align-items-center
              .col-lg-7.mb-4.mb-lg-0
                p.ms-5 Crema ligera a base de leche, yemas y azúcar, cocida hasta 82 - 85 °C para espesar ligeramente sin hervir. Sirve como base para helados o como salsa para acompañar postres.
              .col-lg-5
                figure
                  img(src="@/assets/curso/tema3/img18.png", alt="Crema inglesa").mx-auto
      .col-md-8.col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/img22.png", data-aos="zoom-in")

    separador
    
    #t_3_5.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.5 Fondant: cubierta y modelable

    p.mb-4 El fondant es una preparación utilizada en repostería principalmente para cubrir y decorar tortas, pasteles y otros productos dulces. Se caracteriza por su textura suave y flexible, lo que permite extenderlo fácilmente sobre las superficies de los postres para lograr acabados lisos y uniformes.
      
    .container
      .row.mb-5.justify-content-center.align-items-center
        .bg-color-7.p-4.br-15
          .row.justify-content-center.align-items-center
            .col-lg
              p.mb-0(data-aos="fade-right") Además de su uso como cubierta, el fondant también puede moldearse para crear figuras, decoraciones y detalles personalizados. Gracias a estas características, se convierte en un recurso muy utilizado en la decoración de repostería, permitiendo obtener presentaciones creativas y atractivas en diferentes tipos de preparaciones; entre los más utilizados tenemos:
            .col-auto.mb-3.mb-lg-0.d-none.d-lg-flex
              figure
                img(src="@/assets/curso/tema3/img19.png", data-aos="zoom-in").img-100.mx-auto
              

    .row.justify-content-center.mb-0
      .col-md-6.col-lg-6.mb-4(data-aos="fade-right")
        .tarjeta.bg-color-5.p-4.rounded-4.tarjeta-label.border-color-1.ms-md-5.h-100
          .tarjeta-label__img-wrapper
            img(src='@/assets/curso/tema3/img20.png' alt='Fondant cubierta')
          .ms-lg-5.ms-0.ps-md-3
            p.mb-2 <b>Fondant cubierta (Fondant pâtissier)</b>: pasta de azúcar líquida y brillante que se vierte sobre pasteles (petits fours, bizcochos) para obtener una capa lisa y brillante. Se utiliza caliente (35 - 40 °C).

            
      .col-md-6.col-lg-6.mb-4(data-aos="fade-left")
        .tarjeta.bg-color-5.p-4.rounded-4.tarjeta-label.border-color-1.ms-md-5.h-100
          .tarjeta-label__img-wrapper
            img(src="@/assets/curso/tema3/img21.png", alt="Fondant modelable")
          .ms-lg-5.ms-0.ps-md-3
            p.mb-2 <b>Fondant modelable (Sugar paste)</b>: pasta de azúcar más firme que se extiende con rodillo y se moldea para cubrir tortas (fondant de cobertura) y crear figuras decorativas. Contiene glucosa, gelatina y grasa vegetal que le otorgan plasticidad.
            
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
