<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 8
      h1 Formatos y registros de producción
 
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-5.col-md-8.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema8/img01.png", alt="Decoración en repostería").mx-auto
      .col-lg-7
        .bg-color-2.p-4.br-15
          .row.justify-content-center
            .col-auto.mb-3.mb-lg-0
              figure
                img.d-none.d-lg-flex(src="@/assets/curso/tema5/img02.svg", data-aos="zoom-in")
            .col-lg
              p.mb-0(data-aos="fade-right") La implementación de sistemas de registro y documentación es fundamental para garantizar la estandarización, el control y la mejora continua en los procesos de repostería. Los formatos permiten capturar información crítica que, debidamente analizada, facilita la toma de decisiones y el cumplimiento de requisitos normativos y de calidad.
               
    separador

    .bg-full-width.bg-fondo-1
      #t_8_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
        h2 8.1 Tipos de formatos

      p.mb-4 En un establecimiento de repostería, se utilizan diversos formatos según las necesidades de control y gestión:

      .row.align-items-stretch.justify-content-center.mb-3
        .col-md-12.col-lg-12.col-xl-12.mb-4(data-aos="fade-down")
          .tarjeta.p-4.rounded-4.tarjeta-label.border-color-1.h-100
            .row.justify-content-center.align-items-center.mb-0
              .col-auto
                figure
                  img(src="@/assets/curso/tema7/img05.svg", alt="Icono formato").mx-auto
              .col
                p.mb-0 <b>Orden de producción:</b> documento que autoriza formalmente la elaboración de determinados productos, especificando cantidades, fechas de elaboración y entrega, responsable de la producción, y observaciones especiales. Este formato permite planificar la producción y coordinar el abastecimiento de materias primas.

        .col-md-12.col-lg-12.col-xl-12.mb-4(data-aos="fade-down")
          .tarjeta.p-4.rounded-4.tarjeta-label.border-color-3.h-100
            .row.justify-content-center.align-items-center.mb-0
              .col-auto
                figure
                  img(src="@/assets/curso/tema7/img05.svg", alt="Icono formato").mx-auto
              .col
                p.mb-0 <b>Hoja de costos o escandallo:</b> formato técnico donde se registra la composición detallada de cada producto: ingredientes con sus cantidades exactas, costos unitarios y totales, rendimiento esperado, y costo por porción o unidad. Este documento es la base para la fijación de precios y para el control de rentabilidad.

        .col-md-12.col-lg-12.col-xl-12.mb-4(data-aos="fade-down")
          .tarjeta.p-4.rounded-4.tarjeta-label.border-color-1.h-100
            .row.justify-content-center.align-items-center.mb-0
              .col-auto
                figure
                  img(src="@/assets/curso/tema7/img05.svg", alt="Icono formato").mx-auto
              .col
                p.mb-0 <b>Control de inventarios:</b> registro sistemático de entradas y salidas de materias primas, que incluye fechas, cantidades, proveedores, lotes, fechas de vencimiento y saldos actualizados. Este control permite prevenir desabastecimientos, detectar pérdidas por vencimiento y optimizar las compras.

        .col-md-12.col-lg-12.col-xl-12.mb-4(data-aos="fade-down")
          .tarjeta.p-4.rounded-4.tarjeta-label.border-color-3.h-100
            .row.justify-content-center.align-items-center.mb-0
              .col-auto
                figure
                  img(src="@/assets/curso/tema7/img05.svg", alt="Icono formato").mx-auto
              .col
                p.mb-0 <b>Control de temperaturas:</b> formato diario para registrar las temperaturas de los equipos de refrigeración y congelación, así como de los productos durante la recepción y el almacenamiento. Este registro es esencial para verificar el cumplimiento de las condiciones de conservación y para detectar desviaciones a tiempo.

    .row.align-items-stretch.justify-content-center.mb-3
      .col-md-12.col-lg-12.col-xl-12.mb-4(data-aos="fade-down")
        .tarjeta.p-4.rounded-4.tarjeta-label.border-color-1.h-100
          .row.justify-content-center.align-items-center.mb-0
            .col-auto
              figure
                img(src="@/assets/curso/tema7/img05.svg", alt="Icono formato").mx-auto
            .col
              p.mb-0 <b>Registro de limpieza y desinfección:</b> formato donde se consignan las actividades de limpieza realizadas en las diferentes áreas, incluyendo fecha, hora, área intervenida, productos utilizados, responsable y verificación. Este registro es exigido por las autoridades sanitarias y constituye evidencia del cumplimiento de las BPM.

      .col-md-12.col-lg-12.col-xl-12.mb-4(data-aos="fade-down")
        .tarjeta.p-4.rounded-4.tarjeta-label.border-color-3.h-100
          .row.justify-content-center.align-items-center.mb-0
            .col-auto
              figure
                img(src="@/assets/curso/tema7/img05.svg", alt="Icono formato").mx-auto
            .col
              p.mb-0 <b>Reporte de producción diaria:</b> formato que resume los productos elaborados en una jornada, con cantidades, lotes de producción, fechas de elaboración y vencimiento, y responsable. Permite llevar un histórico de la producción y facilita la trazabilidad.

      .col-md-12.col-lg-12.col-xl-12.mb-4(data-aos="fade-down")
        .tarjeta.p-4.rounded-4.tarjeta-label.border-color-1.h-100
          .row.justify-content-center.align-items-center.mb-0
            .col-auto
              figure
                img(src="@/assets/curso/tema7/img05.svg", alt="Icono formato").mx-auto
            .col
              p.mb-0 <b>Control de calidad:</b> formato para registrar los resultados de las verificaciones de calidad realizadas a materias primas, productos en proceso y productos terminados. Incluye parámetros como color, olor, textura, temperatura, peso, entre otros.


    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-12
        .titulo-sexto.color-acento-contenido.mb-4
          h5.text-bold Tabla 8.
          span Ejemplo de formato de control de temperaturas
        .tabla-a.color-acento-contenido.mb-0
          table
            caption Nota. SENA, (2026).
            thead
              tr
                th Fecha
                th Hora
                th Equipo
                th Temperatura (°C)
                th Verificación
                th Responsable
                th Observaciones
            tbody
              tr
                td 15/03
                td 08:00
                td Nevera 1.
                td 3.5
                td OK.
                td Ana Pérez.
                td N/A
              tr
                td 15/03
                td 08:00
                td Congelador.
                td -20
                td OK.
                td Ana Pérez.
                td N/A
              tr
                td 15/03
                td 14:00
                td Nevera 1.
                td 5.0
                td Alarma.
                td Ana Pérez.
                td Puerta mal cerrada, se ajustó.

    separador
    
    .bg-full-width.bg-fondo-1
      #t_8_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 8.2 Diligenciamiento correcto de formatos

      .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
        .col-lg-12
          p.mb-0 Para que los formatos cumplan su función como herramientas de gestión y control, es indispensable que sean diligenciados correctamente:

      .row.mb-5.justify-content-center.align-items-center
        .col-md-8.col-lg-3.mb-3.mb-lg-0
          figure
            img(src="@/assets/curso/tema8/img02.png", data-aos="zoom-in")
        .col-lg-9
          TabsA.color-acento-botones
            .tarjeta.color-acento-botones--borde.p-4(titulo="Legibilidad")
              h4 Legibilidad
              p.mb-0 La información debe registrarse con letra clara y legible cuando se utiliza formato físico, o mediante digitación precisa en formatos digitales. La información ilegible es equivalente a información inexistente.
            .tarjeta.color-acento-botones--borde.p-4(titulo="Completitud")
              h4 Completitud
              p.mb-0 No deben dejarse espacios en blanco. Si algún campo no aplica, debe escribirse "N/A" (no aplica) para indicar que no fue omitido por olvido.
            .tarjeta.color-acento-botones--borde.p-4(titulo="Precisión")
              h4 Precisión en fechas y horas
              p.mb-0 Las fechas deben registrarse completas (día, mes, año) y las horas deben ser exactas, especialmente en registros de temperaturas y procesos críticos.
            .tarjeta.color-acento-botones--borde.p-4(titulo="Unidades de medida")
              h4 Unidades de medida
              p.mb-0 Todas las cantidades deben expresarse con unidades de medida claras y estandarizadas (kg, g, L, mL, unidades, °C). Evitar expresiones ambiguas como "un poco" o "al gusto" en registros formales.
            .tarjeta.color-acento-botones--borde.p-4(titulo="Responsable")
              h4 Identificación del responsable
              p.mb-0 Cada registro debe incluir el nombre o firma de la persona que realiza el diligenciamiento, así como de quien verifica cuando corresponda.
            .tarjeta.color-acento-botones--borde.p-4(titulo="Corrección errores")
              h4 Corrección de errores
              p.mb-0 Si se comete un error al diligenciar un formato físico, no debe usarse corrector líquido ni borrar. El procedimiento correcto es tachar el error con una línea (de manera que aún sea legible), escribir el valor correcto al lado y firmar o inicialar la corrección.
            .tarjeta.color-acento-botones--borde.p-4(titulo="Frecuencia")
              h4 Frecuencia
              p.mb-0 Los formatos deben diligenciarse con la frecuencia establecida (diaria, semanal, por lote de producción) y no de manera retroactiva, pues esto resta validez a la información.


    separador
    #t_8_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 8.3 Reporte de novedades e incidencias

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-4.col-md-8.mb-4.mb-lg-0
        figure
          img(src="@/assets/curso/tema8/img03.png", alt="Reporte de novedades e incidencias").mx-auto
      .col-lg-8
        p.mb-3 Cualquier situación anormal, desviación o incidente que ocurra durante el proceso productivo debe ser documentada mediante un reporte de novedades. Este reporte tiene como objetivo:
        ul.lista-ul--color
          li.mb-2
            i.fas.fa-circle-right.bg-color-4
            | Identificar las causas de las desviaciones para implementar acciones correctivas.
          li.mb-2
            i.fas.fa-circle-right.bg-color-4
            | Prevenir la recurrencia de incidentes similares.
          li.mb-2
            i.fas.fa-circle-right.bg-color-4
            | Mantener un histórico que permita identificar patrones o problemas sistemáticos.
          li.mb-2
            i.fas.fa-circle-right.bg-color-4
            | Cumplir con requisitos legales en caso de incidentes de seguridad o salud.


    .row.align-items-stretch.justify-content-center.mb-3
      .col-md-12.col-lg-6.mb-4(data-aos="fade-down")
        .tarjeta.bg-color-5.p-4.rounded-4.tarjeta-label.border-color-1.ms-md-5.h-100
          .tarjeta-label__img-wrapper
            img(src='@/assets/curso/tema8/img04.svg' alt='Masa sucrée')
          .ms-lg-5.ms-0.ps-md-3
            h4.mb-2 Situaciones que requieren reporte:
            ul.lista-ul--color
              li.mb-2
                i.fas.fa-circle-right.bg-color-4
                | Recepción de materias primas que no cumplen especificaciones de calidad.
              li.mb-2
                i.fas.fa-circle-right.bg-color-4
                | Averías o mal funcionamiento de equipos.
              li.mb-2
                i.fas.fa-circle-right.bg-color-4
                | Incidentes de seguridad (cortes, quemaduras, caídas).
              li.mb-2
                i.fas.fa-circle-right.bg-color-4
                | Productos terminados que no cumplen los estándares de calidad.
              li.mb-2
                i.fas.fa-circle-right.bg-color-4
                | Faltantes o sobrantes significativos en inventarios.
              li.mb-2
                i.fas.fa-circle-right.bg-color-4
                | Incumplimiento de temperaturas en equipos de refrigeración.
              li.mb-2
                i.fas.fa-circle-right.bg-color-4
                | Presencia de plagas o evidencias de contaminación.
              li.mb-2
                i.fas.fa-circle-right.bg-color-4
                | Accidentes laborales.

      .col-md-12.col-lg-6.mb-4(data-aos="fade-up")
        .tarjeta.bg-color-5.p-4.rounded-4.tarjeta-label.border-color-1.ms-md-5.h-100
          .tarjeta-label__img-wrapper
            img(src="@/assets/curso/tema8/img05.svg", alt="Masa sablée")
          .ms-lg-5.ms-0.ps-md-3
            h4.mb-2 Estructura de un reporte de novedades:
            ul.lista-ul--color
              li.mb-2
                i.fas.fa-circle-right.bg-color-4
                | Fecha y hora del incidente o detección.
              li.mb-2
                i.fas.fa-circle-right.bg-color-4
                | Descripción detallada del hecho, incluyendo lugar y personas involucradas.
              li.mb-2
                i.fas.fa-circle-right.bg-color-4
                | Posible causa identificada o hipótesis.
              li.mb-2
                i.fas.fa-circle-right.bg-color-4
                | Acciones correctivas inmediatas tomadas.
              li.mb-2
                i.fas.fa-circle-right.bg-color-4
                | Acciones preventivas propuestas para evitar recurrencia.
              li.mb-2
                i.fas.fa-circle-right.bg-color-4
                | Responsable del reporte.
              li.mb-2
                i.fas.fa-circle-right.bg-color-4
                | Firma del supervisor o responsable de área.

    .row.justify-content-center.align-items-center.mb-0(data-aos="fade-right")
      .col-lg-12
        p.mb-0 La adecuada gestión de los formatos y registros no solo facilita el control operativo, sino que también constituye evidencia del cumplimiento de requisitos legales y normativos, y proporciona información valiosa para la mejora continua de los procesos.

</template>

<script>
export default {
  name: 'Tema8',
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
