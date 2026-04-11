<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    img(src="@/assets/curso/intro/img01.png", alt="")
    
    .row.justify-content-center.align-items-center.z-2.mb-5
      .col-lg-10(data-aos="fade-up")
        p.banner-text.bg-color-1 La capacidad de elaborar productos de repostería con técnicas estandarizadas, asegurando la calidad e inocuidad, constituye el núcleo fundamental del quehacer profesional en este campo gastronómico. El componente formativo Técnicas de elaboración de productos de repostería y gestión administrativa ambiental está diseñado para que el aprendiz desarrolle una comprensión profunda de los procesos productivos, desde la selección y manejo de ingredientes hasta la presentación final de los productos, incorporando criterios técnicos, sanitarios y administrativos que garantizan un desempeño profesional integral y responsable (SENA, 2020).
    
    .row.justify-content-center.align-items-center.mb-0
      .col-md-8.col-lg-4.mb-4.mb-lg-0
        figure
          img(src="@/assets/curso/intro/img02.png", data-aos="zoom-in")
      .col-md-12.col-lg-8
        p.mb-4 La repostería, como disciplina que combina ciencia, arte y técnica, exige del profesional no solo el dominio de las preparaciones tradicionales, sino también la capacidad de gestionar eficientemente los recursos, controlar los costos de producción, garantizar la inocuidad de los alimentos y minimizar el impacto ambiental de su actividad. Este componente formativo aborda, de manera articulada, estos cuatro ejes fundamentales: las técnicas de elaboración, el control de calidad, la gestión administrativa y el manejo ambiental, proporcionando al aprendiz las herramientas conceptuales y procedimentales necesarias para desenvolverse con éxito en el sector productivo (Gisslen, 2014).
        .bg-color-2.px-4.py-3.br-15
          p.mb-0 Durante el desarrollo de este componente, el aprendiz identificará los principios técnicos que rigen la elaboración de masas, cremas, coberturas y postres; aplicará criterios de calidad e inocuidad en cada etapa del proceso; calculará costos y rendimientos; diligenciará formatos de producción; y gestionará adecuadamente los residuos generados, todo ello en concordancia con la normativa sanitaria, laboral y ambiental vigente en Colombia. Este enfoque integral sienta las bases para un desempeño profesional ético, competitivo y sostenible en el campo de la repostería.

</template>

<script>
export default {
  name: 'Introduccion',
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
