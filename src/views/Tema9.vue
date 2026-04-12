<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 9
      h1 Manejo y disposición de residuos
 
    .row.justify-content-center.align-items-center.mb-0
      .col-lg-12
        img(src="@/assets/curso/tema9/img01.png", alt="")
        
        .row.justify-content-center.align-items-center.z-2.mb-0
          .col-lg-10(data-aos="fade-up")
            p.banner-text La actividad repostera, como toda industria alimentaria, genera residuos que deben ser gestionados adecuadamente para minimizar el impacto ambiental, prevenir problemas sanitarios y cumplir con la normativa vigente. La gestión integral de residuos implica desde la reducción en la fuente hasta la disposición final, pasando por la segregación, el almacenamiento temporal y el aprovechamiento cuando sea posible.


    separador

    #t_9_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 9.1 Concepto y caracterización de residuos

    .row.justify-content-center.align-items-center.mb-0(data-aos="fade-right")
      .col-lg-8.mb-3.mb-lg-0
        p.mb-3 Según el Decreto 2981 de 2013, se entiende por residuo sólido cualquier objeto, material, sustancia o elemento sólido resultante del consumo o uso de un bien en actividades domésticas, industriales, comerciales, institucionales o de servicios.

        .row.align-items-stretch.justify-content-center.mb-3
          .col-md-12.col-lg-12.col-xl-12.mb-4(data-aos="fade-down")
            .tarjeta.p-4.rounded-4.tarjeta-label.border-color-1.h-100
              p.mb-3 La caracterización de residuos es el proceso mediante el cual se identifica y cuantifica los diferentes tipos de residuos generados en un establecimiento. Este diagnóstico permite:
              ul.lista-ul--color
                li
                  i.fas.fa-circle-right.bg-color-4
                  | Conocer el volumen y tipo de residuos producidos.
                li
                  i.fas.fa-circle-right.bg-color-4
                  | Planificar la infraestructura necesaria para su manejo (recipientes, espacios de almacenamiento).
                li
                  i.fas.fa-circle-right.bg-color-4
                  | Identificar oportunidades de aprovechamiento y reducción.
                li
                  i.fas.fa-circle-right.bg-color-4
                  | Establecer indicadores de gestión (kg de residuos por producto elaborado).

          .row.mb-0.justify-content-center.align-items-center
            .bg-color-5.p-4.br-15
              p.mb-0(data-aos="fade-right") Para realizar una caracterización básica, debe pesarse y clasificarse los residuos generados durante un período representativo (una semana, por ejemplo), registrando los resultados por categoría.
              
      .col-lg-4.col-md-8
        figure
          img(src="@/assets/curso/tema9/img02.png", alt="Decoración en repostería").mx-auto

    separador
    
    #t_9_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 9.2 Clasificación de residuos: orgánicos, inorgánicos, peligrosos

    p.mb-4 La clasificación adecuada de los residuos es el primer paso para su correcto manejo:
  
    .row.justify-content-center.align-items-center.mb-2
      .col-lg-12
        TabsC.color-acento-botones
          .p-3.p-md-4(titulo="Residuos orgánicos")
            .row.justify-content-center.align-items-center
              .col-lg-4.col-md-8.mb-3.mb-lg-0.order-2.order-lg-1
                figure
                  img(src='@/assets/curso/tema9/img03.png', alt='')
              .col-lg-8.mb-4.mb-lg-0.order-1.order-lg-2
                h4 Residuos orgánicos
                p.mb-3 Son aquellos de origen biológico que se descomponen naturalmente. En repostería, incluyen:
                ul.lista-ul--color
                  li.mb-2
                    i.fas.fa-circle-right.bg-color-4
                    | Cáscaras y restos de frutas y verduras.
                  li.mb-2
                    i.fas.fa-circle-right.bg-color-4
                    | Cáscaras de huevo.
                  li.mb-2
                    i.fas.fa-circle-right.bg-color-4
                    | Restos de alimentos preparados (sobrantes).
                  li.mb-2
                    i.fas.fa-circle-right.bg-color-4
                    | Posos de café y filtros de papel.
                  li.mb-2
                    i.fas.fa-circle-right.bg-color-4
                    | Residuos de jardinería (si aplica).
                p.mb-0 Estos residuos pueden ser aprovechados mediante compostaje o procesos de transformación, siempre que se manejen adecuadamente para evitar malos olores y proliferación de plagas.

          .p-3.p-md-4(titulo="Residuos inorgánicos aprovechables")
            .row.justify-content-center.align-items-center
              .col-lg-4.col-md-8.mb-3.mb-lg-0.order-2.order-lg-1
                figure
                  img(src='@/assets/curso/tema9/img03.png', alt='')
              .col-lg-8.mb-4.mb-lg-0.order-1.order-lg-2
                h4 Residuos inorgánicos aprovechables
                p.mb-3 Pueden ser reciclados o reutilizados. Incluyen:
                ul.lista-ul--color
                  li.mb-2
                    i.fas.fa-circle-right.bg-color-4
                    | Plásticos: envases de ingredientes, bolsas, film, recipientes.
                  li.mb-2
                    i.fas.fa-circle-right.bg-color-4
                    | Vidrio: botellas de esencias, licores, envases.
                  li.mb-2
                    i.fas.fa-circle-right.bg-color-4
                    | Papel y cartón: cajas de materias primas (si están limpias y sin contaminación de alimentos), papel de oficina.
                  li.mb-2
                    i.fas.fa-circle-right.bg-color-4
                    | Metales: latas de conservas, aerosoles (vacíos).
                  li.mb-2
                    i.fas.fa-circle-right.bg-color-4
                    | Tetra pak: envases de leche, crema de leche, jugos.

          .p-3.p-md-4(titulo="No aprovechables")
            .row.justify-content-center.align-items-center
              .col-lg-4.col-md-8.mb-3.mb-lg-0.order-2.order-lg-1
                figure
                  img(src='@/assets/curso/tema9/img03.png', alt='')
              .col-lg-8.mb-4.mb-lg-0.order-1.order-lg-2
                h4 No aprovechables
                p.mb-3 Aquellos que no pueden ser reciclados por su composición, estado de contaminación o ausencia de tecnología para su procesamiento.
                p.mb-0 <b>Ejemplos:</b> papeles y cartones contaminados con grasa o alimentos, envases sucios, icopor, algunos plásticos de un solo uso.

          .p-3.p-md-4(titulo="Residuos peligrosos")
            .row.justify-content-center.align-items-center
              .col-lg-4.col-md-8.mb-3.mb-lg-0.order-2.order-lg-1
                figure
                  img(src='@/assets/curso/tema9/img03.png', alt='')
              .col-lg-8.mb-4.mb-lg-0.order-1.order-lg-2
                h4 Residuos peligrosos
                p.mb-3 Son aquellos que, por sus características corrosivas, reactivas, explosivas, tóxicas, inflamables, infecciosas o radiactivas, pueden causar riesgo a la salud humana o al ambiente. En repostería, los residuos peligrosos más comunes son:
                ul.lista-ul--color
                  li.mb-2
                    i.fas.fa-circle-right.bg-color-4
                    | Envases de aerosoles (aceites en spray, desmoldantes).
                  li.mb-2
                    i.fas.fa-circle-right.bg-color-4
                    | Envases de productos de limpieza y desinfección.
                  li.mb-2
                    i.fas.fa-circle-right.bg-color-4
                    | Envases de insecticidas y rodenticidas.
                  li.mb-2
                    i.fas.fa-circle-right.bg-color-4
                    | Bombillas, tubos fluorescentes y luminarias.
                  li.mb-2
                    i.fas.fa-circle-right.bg-color-4
                    | Equipos electrónicos en desuso (RAEE: residuos de aparatos eléctricos y electrónicos).
                  li.mb-2
                    i.fas.fa-circle-right.bg-color-4
                    | Envases de pinturas, solventes o pegamentos utilizados en mantenimiento.
                p.mb-0 Estos residuos requieren un manejo especial y deben ser entregados a gestores autorizados para su disposición final.

    separador
    #t_9_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 9.3 Técnicas de manejo: segregación en la fuente, almacenamiento temporal

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8.mb-4.mb-lg-0
        p.mb-3 Segregación en la fuente: consiste en separar los residuos en el mismo lugar donde se generan, depositándolos en recipientes diferenciados según su clasificación. Esta práctica es fundamental porque:
        ul.lista-ul--color
          li.mb-2
            i.fas.fa-circle-right.bg-color-4
            | Facilita el aprovechamiento de materiales reciclables al evitar su contaminación con residuos orgánicos.
          li.mb-2
            i.fas.fa-circle-right.bg-color-4
            | Reduce el volumen de residuos que van a disposición final.
          li.mb-2
            i.fas.fa-circle-right.bg-color-4
            | Disminuye los impactos ambientales.
          li.mb-2
            i.fas.fa-circle-right.bg-color-4
            | Cumple con la normativa vigente.
      .col-lg-4.col-md-8
        figure
          img(src="@/assets/curso/tema9/img04.png", alt="Decoración en repostería").mx-auto
        

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-12
        p.mb-4 La Resolución 2184 de 2019 adoptó el código de colores para la separación de residuos sólidos en Colombia:
        .titulo-sexto.color-acento-contenido.mb-4
          h5.text-bold Tabla 9.
          span Código de colores para la separación de residuos sólidos
        .tabla-a.color-acento-contenido.mb-0
          table
            caption Nota. SENA, (2026).
            thead
              tr
                th Color
                th Tipo de residuo
                th Ejemplos
            tbody
              tr
                td Verde.
                td Orgánicos aprovechables.
                td Restos de comida, cáscaras de frutas y verduras, residuos de jardinería.
              tr
                td Blanco.
                td Aprovechables (plástico, vidrio, papel, cartón, metales).
                td Envases plásticos limpios, botellas de vidrio, cajas de cartón limpias, latas.
              tr
                td Negro.
                td No aprovechables.
                td Papel higiénico, servilletas usadas, envases contaminados con grasa, icopor.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-8.mb-4.mb-lg-0
        
        
        .row.align-items-center.justify-content-center
          .col-md-12.col-lg-12.col-xl-12(data-aos="fade-down")
            .tarjeta.p-4.rounded-4.tarjeta-label.border-color-3.h-100
              p.mb-0 Recomendaciones para la segregación:
              ul.lista-ul--color
                li.mb-2
                  i.fas.fa-circle-right.bg-color-4
                  | Los recipientes deben estar claramente identificados con el color correspondiente y con letreros que indiquen el tipo de residuo.
                li.mb-2
                  i.fas.fa-circle-right.bg-color-4
                  | Los residuos aprovechables deben estar limpios y secos para facilitar su reciclaje (enjuagar envases de plástico, vidrio y tetra pak antes de depositar).
                li.mb-2
                  i.fas.fa-circle-right.bg-color-4
                  | No mezclar residuos orgánicos con inorgánicos aprovechables.
                li.mb-2
                  i.fas.fa-circle-right.bg-color-4
                  | Los residuos peligrosos deben tener un recipiente especial, claramente identificado y separado de los demás.

      .col-lg-4.col-md-8
        figure
          img(src="@/assets/curso/tema9/img05.png", alt="Decoración en repostería").mx-auto


    .row.align-items-stretch.justify-content-center.mb-3
      .col-md-12.col-lg-12.col-xl-12.mb-4(data-aos="fade-down")
        .tarjeta.p-4.rounded-4.tarjeta-label.border-color-1.h-100
          p.mb-3 <b>Almacenamiento temporal:</b> una vez segregados, los residuos deben almacenarse temporalmente en condiciones adecuadas hasta su recolección:
          ul.lista-ul--color
            li.mb-2
              i.fas.fa-circle-right.bg-color-4
              | Recipientes: deben ser de material resistente, lavable, con tapa (preferiblemente de accionamiento con pedal para evitar contacto manual), y del tamaño adecuado según el volumen de generación.
            li.mb-2
              i.fas.fa-circle-right.bg-color-4
              | Bolsas: utilizar bolsas resistentes del color correspondiente al tipo de residuo. Las bolsas deben retirarse cuando alcancen máximo el 75 % de su capacidad.
            li.mb-2
              i.fas.fa-circle-right.bg-color-4
              | Frecuencia de retiro: los residuos orgánicos deben retirarse diariamente para evitar malos olores, proliferación de moscas y otros vectores. Los residuos aprovechables pueden tener una frecuencia menor, siempre que se almacenen en condiciones que no generen problemas sanitarios.
            li.mb-2
              i.fas.fa-circle-right.bg-color-4
              | Cuarto de basuras: debe estar ubicado en un área separada de las zonas de producción y almacenamiento de alimentos. Debe tener pisos y paredes lavables, ventilación adecuada, protección contra plagas, y fácil acceso para el servicio de recolección.
            li.mb-2
              i.fas.fa-circle-right.bg-color-4
              | Lavado y desinfección: los recipientes y el cuarto de basuras deben lavarse y desinfectarse periódicamente para evitar la acumulación de suciedad y la proliferación de plagas.

    separador
    #t_9_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 9.4 Manejo de residuos orgánicos y aprovechables

    p.mb-4 El manejo de residuos en Colombia está regulado por diversas normas que establecen obligaciones para los generadores:

    
    .row.align-items-stretch.justify-content-center.mb-3
      .col-md-12.col-lg-12.col-xl-12.mb-4(data-aos="fade-down")
        .tarjeta.p-4.rounded-4.tarjeta-label.border-color-1.h-100
          .row.justify-content-center.align-items-center.mb-0
            .col-auto
              figure
                img(src="@/assets/curso/tema7/img05.svg", alt="Normativa ambiental").mx-auto
            .col
              p.mb-0 <b>Ley 99 de 1993:</b> crea el Sistema Nacional Ambiental (SINA) y establece principios generales de protección ambiental aplicables a toda actividad productiva, incluyendo la obligación de prevenir y controlar la contaminación.

      .col-md-12.col-lg-12.col-xl-12.mb-4(data-aos="fade-down")
        .tarjeta.p-4.rounded-4.tarjeta-label.border-color-3.h-100
          .row.justify-content-center.align-items-center.mb-0
            .col-auto
              figure
                img(src="@/assets/curso/tema7/img05.svg", alt="Normativa ambiental").mx-auto
            .col
              p.mb-0 <b>Ley 1259 de 2008:</b> instaura el Comparendo Ambiental como instrumento de cultura ciudadana para sancionar a quienes infrinjan la normativa de aseo y limpieza. Las sanciones pueden ser pedagógicas (cursos, talleres) o económicas (multas), y aplican por acciones como sacar basura en horarios no autorizados, no separar residuos, arrojar basura en espacios públicos, entre otras.

      .col-md-12.col-lg-12.col-xl-12.mb-4(data-aos="fade-down")
        .tarjeta.p-4.rounded-4.tarjeta-label.border-color-1.h-100
          .row.justify-content-center.align-items-center.mb-0
            .col-auto
              figure
                img(src="@/assets/curso/tema7/img05.svg", alt="Normativa ambiental").mx-auto
            .col
              p.mb-3 <b>Decreto 2981 de 2013:</b> reglamenta la prestación del servicio público de aseo y establece las obligaciones de los usuarios, incluyendo:
              ul.lista-ul--color
                li.mb-1
                  i.fas.fa-circle-right.bg-color-4
                  | Realizar la separación en la fuente de los residuos generados.
                li.mb-1
                  i.fas.fa-circle-right.bg-color-4
                  | Presentar los residuos para recolección en los horarios y frecuencias establecidos.
                li.mb-1
                  i.fas.fa-circle-right.bg-color-4
                  | Almacenar los residuos en condiciones que no generen riesgos sanitarios o ambientales.
                li.mb-1
                  i.fas.fa-circle-right.bg-color-4
                  | Pagar las tarifas por el servicio de aseo.

      .col-md-12.col-lg-12.col-xl-12.mb-4(data-aos="fade-down")
        .tarjeta.p-4.rounded-4.tarjeta-label.border-color-3.h-100
          .row.justify-content-center.align-items-center.mb-0
            .col-auto
              figure
                img(src="@/assets/curso/tema7/img05.svg", alt="Normativa ambiental").mx-auto
            .col
              p.mb-0 <b>Resolución 2184 de 2019:</b> adopta el código de colores para la separación de residuos sólidos (verde, blanco, negro) y establece la obligatoriedad de su implementación a nivel nacional.

      .col-md-12.col-lg-12.col-xl-12.mb-4(data-aos="fade-down")
        .tarjeta.p-4.rounded-4.tarjeta-label.border-color-1.h-100
          .row.justify-content-center.align-items-center.mb-0
            .col-auto
              figure
                img(src="@/assets/curso/tema7/img05.svg", alt="Normativa ambiental").mx-auto
            .col
              p.mb-0 <b>Ley 1672 de 2013:</b> regula la gestión integral de residuos de aparatos eléctricos y electrónicos (RAEE), estableciendo responsabilidades para productores, comercializadores y consumidores. En repostería, aplica para equipos en desuso como hornos, batidoras, refrigeradores, entre otros.

      .col-md-12.col-lg-12.col-xl-12.mb-4(data-aos="fade-down")
        .tarjeta.p-4.rounded-4.tarjeta-label.border-color-3.h-100
          .row.justify-content-center.align-items-center.mb-0
            .col-auto
              figure
                img(src="@/assets/curso/tema7/img05.svg", alt="Normativa ambiental").mx-auto
            .col
              p.mb-0 <b>Decreto 1076 de 2015:</b> decreto único reglamentario del sector ambiente, que compila normas relacionadas con residuos peligrosos y no peligrosos.


    .container
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/tema6/img04.svg")
          h3.titulo-con-imagen__texto Buenas prácticas ambientales en repostería

    p.mb-4 Además del cumplimiento normativo, se recomienda implementar prácticas que reduzcan el impacto ambiental:

    .row.align-items-stretch.justify-content-center.mb-5(data-aos="fade-right")
      
      .col-md-6.col-xl-6.mb-4
        .tarjeta-numerada.bg-color-91.p-4.px-5.h-100
          .tarjeta-numerada__numero
            .h2 A
          p.mb-0 <b>Reducción en la fuente:</b> optimizar las compras para evitar generar residuos innecesarios. Planificar la producción para minimizar sobrantes.

      .col-md-6.col-xl-6.mb-4
        .tarjeta-numerada.bg-color-4.p-4.px-5.h-100
          .tarjeta-numerada__numero
            .h2 B
          p.mb-0 <b>Aprovechamiento de residuos orgánicos:</b> implementar compostaje de residuos de frutas y verduras (si se dispone de espacio) o establecer alianzas con programas de aprovechamiento.

      .col-md-6.col-xl-6.mb-4
        .tarjeta-numerada.bg-color-4.p-4.px-5.h-100
          .tarjeta-numerada__numero
            .h2 C
          p.mb-0 <b>Compra a granel:</b> cuando sea posible, adquirir ingredientes a granel para reducir envases.

      .col-md-6.col-xl-6.mb-4
        .tarjeta-numerada.bg-color-91.p-4.px-5.h-100
          .tarjeta-numerada__numero
            .h2 D
          p.mb-0 <b>Retornables:</b> preferir proveedores que utilicen envases retornables.

      .col-md-6.col-xl-6.mb-4
        .tarjeta-numerada.bg-color-91.p-4.px-5.h-100
          .tarjeta-numerada__numero
            .h2 E
          p.mb-0 <b>Donaciones:</b> establecer alianzas con bancos de alimentos para donar excedentes de producción en buen estado (cumpliendo normativa sanitaria).

      .col-md-6.col-xl-6.mb-4
        .tarjeta-numerada.bg-color-4.p-4.px-5.h-100
          .tarjeta-numerada__numero
            .h2 F
          p.mb-0 <b>Capacitación:</b> formar al personal en buenas prácticas ambientales y manejo adecuado de residuos.


    .row.align-items-stretch.justify-content-center.mb-3
      .col-md-12.col-lg-12.col-xl-12.mb-4(data-aos="fade-down")
        .tarjeta.p-4.rounded-4.tarjeta-label.bg-color-2.h-100
          .row.justify-content-center.align-items-center.mb-0
            .col
              p.mb-0 La gestión responsable de residuos no solo contribuye a la protección del ambiente y al cumplimiento legal, sino que también mejora la imagen del establecimiento frente a clientes cada vez más conscientes de la sostenibilidad.

            .col-auto.d-none.d-lg-block
              figure
                img(src="@/assets/curso/tema9/img06.svg", alt="Icono formato").mx-auto


</template>

<script>
export default {
  name: 'Tema9',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
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
