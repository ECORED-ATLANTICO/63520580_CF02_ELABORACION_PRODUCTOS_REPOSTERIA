<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Fundamentos de decoración en repostería

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-5.col-md-8.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema5/img01.png", alt="Decoración en repostería").mx-auto
      .col-lg-7
        .bg-color-7.p-4.br-15
          .row.justify-content-center
            .col-auto.mb-3.mb-lg-0.d-none.d-lg-flex
              figure
                img(src="@/assets/curso/tema5/img02.png", data-aos="zoom-in").img-50.mx-auto
            .col-lg
              p.mb-0(data-aos="fade-right") La decoración constituye el aspecto visual que completa la experiencia de un producto de repostería, integrando principios de diseño, color y textura. El dominio de las técnicas básicas de decoración, así como la comprensión de los fundamentos estéticos, permite al profesional presentar sus creaciones de manera atractiva y profesional, aumentando su valor percibido.
              
    separador
    
    .bg-full-width.bg-fondo-1

      #t_5_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
        h2 5.1 Círculo cromático: colores primarios, secundarios e intermedios

      p.mb-4 La decoración en repostería no escapa a los principios del diseño. El color es fundamental para crear atractivo visual y transmitir sensaciones.

      .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
        .col-lg-4.col-md-8.mb-3.mb-lg-0
          figure
            img(src='@/assets/curso/tema5/img04.png', alt='')
        .col-lg-8
          SlyderF(columnas="col-md-12 col-lg-6")
            .tarjeta.bg-color-7.h-100
              img(src='@/assets/curso/tema5/img05.png' alt='Helado')
              .p-4
                h4.text-center Colores primarios: 
                p.mb-0 rojo, azul y amarillo. No se obtienen por mezcla y son la base para crear todos los demás colores.
                
            .tarjeta.bg-color-7.h-100
              img(src='@/assets/curso/tema5/img06.png' alt='Sorbete')
              .p-4
                h4.text-center Colores secundarios: 
                p.mb-0 verde (azul + amarillo), naranja (amarillo + rojo), violeta (rojo + azul).
                
            .tarjeta.bg-color-7.h-100
              img(src='@/assets/curso/tema5/img07.png' alt='Semifrío')
              .p-4
                h4.text-center Colores intermedios o terciarios: 
                p.mb-0 mezcla de un primario y un secundario adyacente (ej: amarillo verdoso, rojo anaranjado, azul violáceo).

            .tarjeta.bg-color-7.h-100
              img(src='@/assets/curso/tema5/img08.png' alt='Semifrío')
              .p-4
                h4.text-center Armonías de color: 
                p.mb-0 combinaciones agradables a la vista, como complementarios (opuestos en el círculo: rojo-verde, azul-naranja) o análogos (vecinos en el círculo: amarillo, amarillo-naranja, naranja).


      .row.mb-5.justify-content-center.align-items-center
        .bg-color-1.p-4.br-15
          .row.justify-content-center.align-items-center
            .col-lg
              p.mb-0(data-aos="fade-right") <b>Aplicación en repostería:</b> un pastel decorado con frutos rojos puede combinarse con crema verde (menta) para un contraste complementario. Un postre de chocolate (marrón) puede realzarse con toques de naranja o frutos amarillos.
            .col-auto.mb-3.mb-lg-0.d-none.d-lg-flex
              figure
                img(src="@/assets/curso/tema5/img09.png", data-aos="zoom-in").img-100.mx-auto
              
    
    separador
    
    #t_5_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.2 Técnicas básicas de decoración: manga pastelera, boquillas, glaseado

    p.mb-4 Las técnicas básicas de decoración en repostería permiten mejorar la presentación y el acabado final de los productos elaborados. A través del uso de herramientas como la manga pastelera y diferentes tipos de boquillas, es posible aplicar cremas, rellenos y coberturas para crear diseños y detalles decorativos en tortas, cupcakes y otros postres.
    

    .row.align-items-center.justify-content-center.mb-5(data-aos="fade-right")
      .col-lg-8.mb-4.mb-lg-0
        AcordionA(tipo="a" clase-tarjeta="tarjeta bg-color-6")
          div(titulo="Manga pastelera (Piping bag)")
            .row.justify-content-center.align-items-center
              .col-lg-7.mb-4.mb-lg-0
                p.ms-5 Herramienta fundamental para aplicar cremas, masas y glaseados con precisión. El manejo correcto incluye llenar solo hasta la mitad, eliminar burbujas de aire y aplicar presión uniforme con una mano mientras la otra guía la manga.
              .col-lg-5
                figure
                  img(src="@/assets/curso/tema5/img10.png", alt="Manga pastelera").mx-auto

          div(titulo="Boquillas (Tips)")
            .row.justify-content-center.align-items-center
              .col-lg-7.mb-4.mb-lg-0
                p.ms-5.mb-2 Determinan la forma de la decoración. Las más comunes son:
                ul.lista-ul--color.ms-5
                  li
                    i.fas.fa-circle-right.bg-color-4
                    | Lisa (round): para escribir, bordes, rellenar, churros, éclairs.
                  li
                    i.fas.fa-circle-right.bg-color-4
                    | Estrella (star): para rosetones, conchas, bordes decorativos (abierta o cerrada).
                  li
                    i.fas.fa-circle-right.bg-color-4
                    | Rizada o pétalo (petal): para formar flores y pétalos (rosas, claveles).
                  li
                    i.fas.fa-circle-right.bg-color-4
                    | Hoja (Leaf): para formar hojas.
                  li
                    i.fas.fa-circle-right.bg-color-4
                    | Rellena (Bismarck): para inyectar rellenos en el interior de masas.
              .col-lg-5
                figure
                  img(src="@/assets/curso/tema5/img11.png", alt="Boquillas").mx-auto

          div(titulo="Glaseado (Icing)")
            .row.justify-content-center.align-items-center
              .col-lg-7.mb-4.mb-lg-0
                p.ms-5 Puede ser fluido (para cubrir) o más espeso (para decorar con manga). El glaseado real (royal icing) se elabora con clara de huevo o merengue en polvo y azúcar glass, y se endurece al secar, ideal para decoraciones finas.
              .col-lg-5
                figure
                  img(src="@/assets/curso/tema5/img12.png", alt="Glaseado").mx-auto
      .col-md-8.col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema5/img13.png", data-aos="fade-down").mx-auto
          
    separador
    
    .bg-full-width.bg-fondo-1

      #t_5_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
        h2 5.3 Presentación y emplatado de postres

      p.mb-4 Son aspectos importantes en la repostería, ya que influyen en la percepción y el atractivo visual de las preparaciones. Un postre bien presentado no solo resalta sus colores, formas y texturas, sino que también genera una experiencia más agradable para quien lo consume. La primera impresión es visual. Un emplatado cuidado realza la experiencia gastronómica. Entre los principios básicos para esto, tenemos: 
      
      .row.justify-content-center.align-items-center.mb-0(data-aos="fade-right")
        .col-lg-4.col-md-8.mb-3.mb-lg-0
          figure
            img(src='@/assets/curso/tema5/img14.png', alt='Presentación y emplatado')
        .col-lg-8
          SlyderF(columnas="col-md-12 col-lg-6")
            .tarjeta.bg-color-7.h-100
              img(src='@/assets/curso/tema5/img15.png' alt='Altura y estructura')
              .p-4
                h4.text-center Altura y estructura: 
                p.mb-0 Crear dimensión apilando elementos (bizcocho, crema, fruta) o utilizando aros de emplatar.
                
            .tarjeta.bg-color-7.h-100
              img(src='@/assets/curso/tema5/img16.png' alt='Contraste')
              .p-4
                h4.text-center Contraste: 
                p.mb-0 Combinar texturas (crujiente con cremoso, suave con crocante), temperaturas (helado caliente con salsa fría o viceversa) y colores.
                
            .tarjeta.bg-color-7.h-100
              img(src='@/assets/curso/tema5/img17.png' alt='Salsas y coulis')
              .p-4
                h4.text-center Salsas y coulis: 
                p.mb-0 Aplicar con pulso firme, creando diseños (puntos, hilos, espejos, barridos). Utilizar biberones o cucharas para controlar el flujo.

            .tarjeta.bg-color-7.h-100
              img(src='@/assets/curso/tema5/img18.png' alt='Elementos decorativos')
              .p-4
                h4.text-center Elementos decorativos: 
                p.mb-0 Hojas de menta, flores comestibles, polvos de colores (cacao, matcha, frutos rojos liofilizados), frutas frescas laminadas, crocantes, caramelos.

            .tarjeta.bg-color-7.h-100
              img(src='@/assets/curso/tema5/img19.png' alt='Limpieza')
              .p-4
                h4.text-center Limpieza: 
                p.mb-0 El borde del plato debe estar impecable, sin manchas ni huellas. Menos, es más: la sencillez elegante suele ser más efectiva.



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
