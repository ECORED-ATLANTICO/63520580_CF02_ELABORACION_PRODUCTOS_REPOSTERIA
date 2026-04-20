<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 7
      h1 Costos de producción en repostería

    .row.justify-content-center.align-items-center.mb-0(data-aos="fade-down")
      .bloque-texto-g.bg-color-6.p-3.p-sm-4.p-md-5
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/tema7/img01.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 La gestión financiera es un aspecto clave para la viabilidad y sostenibilidad de cualquier negocio de repostería. El conocimiento de los conceptos básicos de costos, el cálculo de rendimientos y la adecuada fijación de precios permiten al profesional tomar decisiones informadas que garanticen la rentabilidad sin comprometer la calidad de los productos ofrecidos.

    separador
    .bg-full-width.bg-fondo-1
      #t_7_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 7.1 Conceptos básicos: costo directo, indirecto, fijo, variable

      .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
        .col-lg-12
          p.mb-0 Para comprender la estructura de costos en repostería, es necesario diferenciar los conceptos fundamentales que la componen:


      .row.align-items-center.justify-content-center.mb-5(data-aos="fade-right")
        .col-md-8.col-lg-4.mb-3.mb-lg-0
          figure
            img(src="@/assets/curso/tema7/img02.png", data-aos="zoom-in")
        .col-lg-8.mb-4.mb-lg-0
          AcordionA(tipo="a" clase-tarjeta="tarjeta bg-color-6")
            div(titulo="Costo directo")
              .row.justify-content-center.align-items-center
                .col-lg-7.mb-4.mb-lg-0
                  p.ms-5 Son aquellos que pueden identificarse y asignarse de manera precisa a un producto específico. En repostería, los costos directos incluyen las materias primas utilizadas en una receta (harina, huevos, mantequilla, azúcar, chocolate, frutas), así como los empaques individuales de cada producto. Estos costos varían en proporción directa al volumen de producción y son fácilmente cuantificables mediante el escandallo o ficha técnica de costos.
                .col-lg-5.col-md-8
                  figure
                    img(src="@/assets/curso/tema7/img03.png", alt="Costo directo").mx-auto

            div(titulo="Costo indirecto")
              .row.justify-content-center.align-items-center
                .col-lg-7.mb-4.mb-lg-0
                  p.ms-5 Corresponden a aquellos gastos necesarios para la operación pero que no pueden asignarse directamente a un producto en particular, sino que deben distribuirse entre todos los productos elaborados. Ejemplos de costos indirectos en repostería son: servicios públicos (energía eléctrica, gas, agua), materiales de limpieza y desinfección, mantenimiento de equipos, arriendo del local, salarios del personal administrativo y de supervisión, y publicidad.
                .col-lg-5.col-md-8
                  figure
                    img(src="@/assets/curso/tema7/img04.png", alt="Costo indirecto").mx-auto

            div(titulo="Costo fijo")
              .row.justify-content-center.align-items-center
                .col-lg-7.mb-4.mb-lg-0
                  p.ms-5 Son aquellos que permanecen constantes independientemente del volumen de producción, dentro de un rango determinado de operación. En un negocio de repostería, los costos fijos incluyen el arriendo del local, los salarios del personal con contrato fijo, los seguros, las licencias de funcionamiento, y la depreciación de equipos. Estos costos deben cubrirse incluso en períodos de baja producción.
                .col-lg-5.col-md-8
                  figure
                    img(src="@/assets/curso/tema7/img05.png", alt="Costo fijo").mx-auto

            div(titulo="Costo variable")
              .row.justify-content-center.align-items-center
                .col-lg-7.mb-4.mb-lg-0
                  p.ms-5 Son aquellos que fluctúan en proporción directa al volumen de producción. A mayor cantidad de productos elaborados, mayores serán los costos variables. En repostería, los principales costos variables son las materias primas, los empaques, el combustible (gas) y, en algunos casos, la mano de obra por horas o por destajo.
                .col-lg-5.col-md-8
                  figure
                    img(src="@/assets/curso/tema7/img06.png", alt="Costo variable").mx-auto


    separador
    #t_7_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 7.2 Cálculo de rendimientos y mermas

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-12
        p.mb-0 El cálculo preciso de rendimientos y mermas es esencial para determinar el costo real de las preparaciones y para establecer controles que minimicen las pérdidas.


    .container.mb-5
      .titulo-con-imagen.mb-0(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/tema6/img4.png")
          h3.titulo-con-imagen__texto Rendimiento

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-8.mb-4.mb-lg-0
        p.mb-4 El rendimiento se define como la relación entre la cantidad de producto terminado y la cantidad de materia prima utilizada, expresada generalmente en porcentaje. Su fórmula es:
        
        .container
          .row.mb-4.justify-content-center.align-items-center
            .bg-color-7.p-4.br-15
              p.mb-0(data-aos="fade-right") <b>*Rendimiento (%) = (Peso del producto terminado / Peso de la materia prima) × 100*</b>
              
          .row.mb-4.justify-content-center.align-items-center
            .bg-color-1.p-4.br-15
              p.mb-0(data-aos="fade-right") <b>Ejemplo práctico:</b> si para elaborar un bizcocho se utilizan 1.200 gramos de mezcla (materia prima) y después del horneado se obtienen 1.080 gramos de bizcocho (producto terminado), el rendimiento es: <br> (1.080 g / 1.200 g) × 100 = 90 %
            
        p.mb-0 Esto significa que se perdió el 10 % del peso inicial durante el proceso (principalmente por evaporación de agua durante el horneado).

      .col-lg-4.col-md-8
        figure
          img(src="@/assets/curso/tema7/img07.png", alt="Rendimiento").mx-auto
        

    .container
      .row.mb-5.justify-content-center.align-items-center
        .bg-color-7.p-4.br-15
          p.mb-4(data-aos="fade-right") <b>Merma:</b> la merma corresponde a la pérdida de materia prima durante el proceso productivo y puede clasificarse en:
          ul.lista-ul--color
            li
              i.fas.fa-circle-right.bg-color-4
              | Merma técnica o inevitable: es aquella que no puede evitarse por la naturaleza del proceso. Ejemplos: pérdida de humedad durante el horneado, recortes de masa en la elaboración de galletas (aunque estos pueden reutilizarse en algunos casos), cáscaras de frutas, huesos o semillas.
            li
              i.fas.fa-circle-right.bg-color-4
              | Merma evitable: es aquella que resulta de errores en el proceso, malas prácticas o falta de control. Ejemplos: productos quemados, masas sobre batidas que no desarrollan correctamente, cremas cortadas, derrames, o desperdicio por mal almacenamiento de materias primas.


    .container.mb-5
      .titulo-con-imagen.mb-0(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/tema6/img4.png")
          h3.titulo-con-imagen__texto Cálculo del costo real de una receta

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-12
        p.mb-4 Para determinar el costo real de una preparación, debe seguirse el siguiente procedimiento:
        ul.lista-ul--color
          li
            i.fas.fa-circle-right.bg-color-4
            | Elaborar una lista detallada de todos los ingredientes con sus cantidades exactas (preferiblemente en gramos para mayor precisión).
          li
            i.fas.fa-circle-right.bg-color-4
            | Determinar el costo de cada ingrediente según el precio de compra (por kilogramo, litro o unidad).
          li
            i.fas.fa-circle-right.bg-color-4
            | Calcular el costo parcial multiplicando la cantidad utilizada por el precio unitario.
          li
            i.fas.fa-circle-right.bg-color-4
            | Sumar todos los costos parciales para obtener el costo total de la receta.
          li
            i.fas.fa-circle-right.bg-color-4
            | Ajustar por mermas si es necesario (algunos ingredientes como frutas pierden peso al ser pelados o deshuesados).
          li
            i.fas.fa-circle-right.bg-color-4
            | Dividir el costo total entre el número de porciones o unidades obtenidas para determinar el costo por porción.


    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-12
        .titulo-sexto.color-acento-contenido.mb-4
          h5.text-bold Tabla 7.
          span Ejemplo de escandallo básico para una torta
        .tabla-a.color-acento-contenido.mb-0
          table
            caption Nota. SENA, (2026).
            thead
              tr
                th Ingrediente
                th Cantidad
                th Precio unitario
                th Costo parcial
            tbody
              tr
                td Harina.
                td 500 g
                td $4.000 / kg
                td $2.000
              tr
                td Huevos.
                td 4 unidades
                td $500 / unidad
                td $2.000
              tr
                td Azúcar.
                td 300 g
                td $3.500 / kg
                td $1.050
              tr
                td Mantequilla.
                td 250 g
                td $12.000 / kg
                td $3.000
              tr
                td Vainilla.
                td 10 ml
                td $20.000 / L
                td $200
              tr
                td <b>Costo total de la receta.</b>
                td n/a
                td n/a
                td <b>$8.250</b>

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-12
        .bg-color-1.p-4.br-15
          p.mb-0 <b>Si la torta rinde 12 porciones, el costo por porción es: $8.250 ÷ 12 = $687.50</b>


    separador

    #t_7_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 7.3 Fijación de precios de venta

    p.mb-4 Una vez determinado el costo de producción, es necesario establecer el precio de venta al público. Existen diversos métodos para realizar esta fijación:


  
    .row.align-items-stretch.justify-content-center.mb-3
      .col-md-12.col-lg-12.col-xl-12.mb-4(data-aos="fade-down")
        .tarjeta.p-4.rounded-4.tarjeta-label.border-color-1.h-100
          .row.justify-content-center.align-items-center.mb-3
            .col-12.col-md-auto.mb-3.mb-md-0
              figure.img-100
                img(src="@/assets/curso/tema7/img08.png", alt="Método de costo más margen").mx-auto
            .col
              p.mb-0 <b>Método del factor (sobre costo de materia prima):</b> este método consiste en multiplicar el costo de la materia prima por un factor que cubra los demás costos (mano de obra, costos indirectos, gastos fijos) y la utilidad deseada.

          .row.justify-content-center.align-items-center.mb-3(data-aos="fade-right")
            .col-lg-12
              .bg-color-7.p-4.br-15
                p.mb-0 <b>Precio de venta = Costo de materia prima × Factor</b>


          .row.justify-content-center.align-items-center.mb-3(data-aos="fade-right")
            .col-lg-12
              .bg-color-1.p-4.br-15
                p.mb-0 <b>Ejemplo:</b> Si el costo de materia prima de una torta es $8.250 y se aplica un factor de 4, el precio de venta sería: $8.250 × 4 = $33.000.

          p.mb-0 El factor varía según el tipo de establecimiento y producto. En repostería, los factores suelen oscilar entre 3 y 5, dependiendo de la complejidad del producto, el mercado objetivo y los costos indirectos de operación.
          

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-4.col-md-8.mb-4.mb-lg-0
        figure
          img(src="@/assets/curso/tema7/img09.png", alt="Método de costo más margen").mx-auto

      .col-lg-8
        .row.align-items-center.justify-content-center
          .col-md-12.col-lg-12.col-xl-12(data-aos="fade-down")
            .tarjeta.p-4.rounded-4.tarjeta-label.border-color-3.h-100
              .row.justify-content-center.align-items-center.mb-3
                .col-12.col-md-auto.mb-3.mb-md-0
                  figure.img-100
                    img(src="@/assets/curso/tema7/img10.png", alt="Método de costo más margen").mx-auto
                .col
                  p.mb-0 <b>Método del costo total más margen:</b> este método considera todos los costos asociados al producto (materia prima, mano de obra directa, costos indirectos asignados) y sobre ese total se aplica un margen de utilidad.
                  
              .row.justify-content-center.align-items-center.mb-3(data-aos="fade-right")
                .col-lg-12
                  .bg-color-7.p-4.br-15
                    p.mb-0 <b>*Precio de venta = Costo total por unidad × (1 + Margen de utilidad deseado) *</b>

              .row.justify-content-center.align-items-center.mb-0(data-aos="fade-right")
                .col-lg-12
                  .bg-color-1.p-4.br-15
                    p.mb-0 <b>Ejemplo:</b> Si el costo total por unidad (incluyendo todos los costos) es $15.000 y se desea un margen de utilidad del 40 %: <br>
                    | $15.000 × 1.4 = $21.000
              


    .row.align-items-stretch.justify-content-center.mb-3
      .col-md-12.col-lg-12.col-xl-12.mb-4(data-aos="fade-down")
        .tarjeta.p-4.rounded-4.tarjeta-label.border-color-1.h-100
          .row.justify-content-center.align-items-center.mb-3
            .col-12.col-md-auto.mb-3.mb-md-0
              figure.img-100
                img(src="@/assets/curso/tema7/img11.png", alt="Método de costo más margen").mx-auto
            .col
              p.mb-0 <b>Método basado en el mercado:</b> este método parte del análisis de los precios de la competencia y de la disposición a pagar del mercado objetivo. El precio se fija en un rango competitivo, y luego se verifica que los costos permitan operar con rentabilidad dentro de ese rango. Si los costos son superiores al precio de mercado, es necesario reducir costos, mejorar la eficiencia o diferenciar el producto para justificar un precio superior.
              
          .row.justify-content-center.align-items-center.mb-0(data-aos="fade-right")
            .col-lg-12
              p.mb-3 Consideraciones adicionales para la fijación de precios:

              .lista-ul--color
                li
                  i.fas.fa-circle-right.bg-color-4
                  | Precio psicológico: en muchos mercados, los precios terminados en 9, 5 o 7 (ejemplo: $19.900 en lugar de $20.000) tienen mejor aceptación.
                li
                  i.fas.fa-circle-right.bg-color-4
                  | Descuentos por volumen: pueden ofrecerse precios especiales para pedidos grandes o para clientes frecuentes.
                li
                  i.fas.fa-circle-right.bg-color-4
                  | Estacionalidad: algunos productos pueden tener precios diferentes según la temporada (ejemplo: productos navideños).
                li
                  i.fas.fa-circle-right.bg-color-4
                  | Posicionamiento: el precio debe ser coherente con la imagen del negocio (repostería económica, de gama media o alta gama).

            


    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-8
        .row.bg-fondo-2.align-items-center.justify-content-center.br-15.p-3
          .col-md-6.col-lg-4.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema2/img11.png", data-aos="zoom-in").mx-auto.w-75
          .col-lg-8.p-4.p-lg-5  
            p.mb-3 A continuación, el siguiente podcast, Masas batidas, técnica y control de calidad en bizcochos; se encuentra en la carpeta Anexos.
            TarjetaAudio.color-acento-contenido.bg-color-white.mb-3(
              texto="Masas batidas, técnica y control de calidad en bizcochos"
              tiempo
              :audio="require('@/assets/curso/audio/1.mp3')"
            )
        


</template>

<script>
export default {
  name: 'Tema7',
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
