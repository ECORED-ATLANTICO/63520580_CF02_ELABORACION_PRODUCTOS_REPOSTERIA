<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 Control de calidad e inocuidad en la elaboración
 

    .row.justify-content-center.align-items-center.mb-0
      .col-lg-12
        img(src="@/assets/curso/tema6/img01.png", alt="")
        
        .row.justify-content-center.align-items-center.z-2.mb-0
          .col-lg-10(data-aos="fade-up")
            p.banner-text La garantía de calidad e inocuidad es un pilar fundamental en la producción de alimentos, especialmente en repostería, donde el uso de ingredientes perecederos como lácteos y huevos implica riesgos específicos. La aplicación de parámetros de control, buenas prácticas de manufactura y la identificación de puntos críticos constituyen herramientas esenciales para proteger la salud del consumidor y asegurar la excelencia del producto final.
      
    separador
    
    #t_6_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 6.1 Parámetros de calidad en productos de repostería

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        p.mb-0 La calidad en repostería se evalúa a través de diferentes dimensiones que garantizan la satisfacción del consumidor y la seguridad del producto. Según el INVIMA (2020), los productos de repostería deben cumplir con especificaciones organolépticas, fisicoquímicas y microbiológicas para ser considerados aptos para consumo humano.
    
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-12
        .titulo-sexto.color-acento-contenido.mb-4
          h5.text-bold Tabla 4.
          span Parámetros de calidad
        .tabla-a.color-acento-contenido.mb-0
          table
            caption Nota. SENA, (2026).
            thead
              tr
                th Categoría
                th Característica
                th Descripción
            tbody
              tr
                td(rowspan="4") <b>Organolépticas</b>
                td Color
                td Debe ser uniforme y característico del producto. Un bizcocho debe tener un dorado homogéneo; una crema pastelera, un amarillo pálido uniforme sin grumos oscuros ni quemados.
              tr
                td Olor
                td Aroma fresco, agradable y característico a los ingredientes utilizados (vainilla, chocolate, frutas, cítricos). Debe estar ausente cualquier olor a rancio, quemado, fermentado o extraño.
              tr
                td Sabor
                td Balanceado, con la intensidad adecuada de dulzor, sin sabores extraños a ingredientes en mal estado, a quemado o a productos químicos de limpieza.
              tr
                td Textura
                td Varía según el producto, pero debe ser la esperada: un bizcocho debe ser esponjoso y húmedo; una masa quebrada, crujiente y arenosa; una mousse, aireada y suave en boca.
              tr
                td(rowspan="3") <b>Fisicoquímicas</b>
                td pH (potencial de hidrógeno)
                td Mide la acidez o alcalinidad. Influye en el sabor y en la conservación. Valores bajos (ácidos) inhiben el crecimiento microbiano.
              tr
                td Humedad
                td Contenido de agua en el producto. Afecta la textura y la vida útil. Un bizcocho muy seco es inaceptable; uno muy húmedo puede fermentar o desarrollar moho rápidamente.
              tr
                td Actividad de agua (aw)
                td Mide el agua disponible para el crecimiento microbiano. La mayoría de las bacterias requieren aw &gt; 0.85. Los productos de repostería con aw baja (galletas, bizcochos secos) se conservan más tiempo.
              tr
                td(rowspan="5") <b>Microbiológicas</b>
                td Mesófilos aerobios
                td Indicador de higiene general del proceso.
              tr
                td Coliformes y E. coli
                td Indicador de contaminación fecal, generalmente por malas prácticas de higiene.
              tr
                td Salmonella spp.
                td Patógeno de alto riesgo, asociado a huevos y lácteos mal procesados.
              tr
                td Staphylococcus aureus
                td Indicador de contaminación por manipuladores (mala higiene de manos).
              tr
                td Mohos y levaduras
                td Responsables de deterioro (enmohecimiento, fermentación) y posibles productores de micotoxinas.

    .row.justify-content-center.align-items-center.mb-0(data-aos="fade-right")
      .col-lg-12
        .titulo-sexto.color-acento-contenido.mb-4
          h5.text-bold Tabla 5.
          span Criterios microbiológicos para productos de repostería (Ejemplo)
        .tabla-a.color-acento-contenido.mb-0
          table
            caption Nota. Basado en normativa INVIMA (2020) y Codex Alimentarius (1993). UFC: Unidades Formadoras de Colonia.
            thead
              tr
                th Microorganismo
                th Límite aceptable
                th Criterio
            tbody
              tr
                td Mesófilos aerobios.
                td &lt; 10.000 UFC/g
                td Higiene general adecuada.
              tr
                td Coliformes.
                td &lt; 10 UFC/g
                td Buenas prácticas de higiene.
              tr
                td E. coli.
                td Ausencia.
                td Libre de contaminación fecal.
              tr
                td Salmonella.
                td Ausencia en 25g
                td Producto seguro.
              tr
                td Mohos y levaduras.
                td &lt; 100 UFC/g
                td Control de deterioro.

    separador

    .bg-full-width.bg-fondo-1
      #t_6_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
        h2 6.2 Aplicación de BPM durante la elaboración

      .row.justify-content-center.align-items-center.mb-5
        .col-lg-12
          p.mb-0 Las Buenas Prácticas de Manufactura (BPM), establecidas en el Decreto 3075 de 1997, deben aplicarse rigurosamente durante toda la elaboración de productos de repostería:
      
      .row.justify-content-center.align-items-center.mb-0(data-aos="fade-right")
        .col-lg-4.col-md-8.mb-3.mb-lg-0
          figure
            img(src='@/assets/curso/tema6/img02.png', alt='')
        .col-lg-8
          SlyderF.custom(columnas="col-md-12 col-lg-6")
            .tarjeta.tarjeta--slyder.p-4
              .row.mb-3
                .col-auto.mx-auto
                  img(src='@/assets/curso/tema6/img03.svg' alt='Recepción de materias primas')
              h4.text-center Recepción de materias primas
              p.mb-0 Verificar temperaturas (≤ 4 °C para perecederos), integridad de empaques, fechas de vencimiento y calidad organoléptica. Rechazar productos que no cumplan.

            .tarjeta.tarjeta--slyder.p-4
              .row.mb-3
                .col-auto.mx-auto
                  img(src='@/assets/curso/tema6/img03.svg' alt='Almacenamiento')
              h4.text-center Almacenamiento
              p.mb-0 Respetar temperaturas (refrigeración ≤ 4 °C, congelación ≤- 18 °C), fechas de vencimiento, rotación PEPS (primero en entrar, primero en salir) y separación de crudos y cocidos.

            .tarjeta.tarjeta--slyder.p-4
              .row.mb-3
                .col-auto.mx-auto
                  img(src='@/assets/curso/tema6/img03.svg' alt='Preparación (mise en place)')
              h4.text-center Preparación (mise en place)
              p.mb-0 Aplicar código de colores (tablas y cuchillos), lavado de manos frecuente (5 momentos), evitar contaminación cruzada, mantener superficies limpias y desinfectadas.

            .tarjeta.tarjeta--slyder.p-4
              .row.mb-3
                .col-auto.mx-auto
                  img(src='@/assets/curso/tema6/img03.svg' alt='Cocción')
              h4.text-center Cocción
              p.mb-0 Verificar temperaturas internas con termómetro: 74 °C para preparaciones con huevo (flan, natillas), 85 °C para crema pastelera, 74 °C para carnes (si se usan).

            .tarjeta.tarjeta--slyder.p-4
              .row.mb-3
                .col-auto.mx-auto
                  img(src='@/assets/curso/tema6/img03.svg' alt='Enfriamiento')
              h4.text-center Enfriamiento
              p.mb-0 Enfriar rápidamente preparaciones calientes: de 60 °C a 21 °C en máximo 2 horas, y de 21 °C a 4 °C en máximo 4 horas. Utilizar baños de hielo, recipientes poco profundos o abatidores de temperatura.

            .tarjeta.tarjeta--slyder.p-4
              .row.mb-3
                .col-auto.mx-auto
                  img(src='@/assets/curso/tema6/img03.svg' alt='Servicio y conservación')
              h4.text-center Servicio y conservación
              p.mb-0 Mantener temperaturas seguras: fríos ≤ 4 °C, calientes ≥ 60 °C.

    separador
    
    #t_6_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 6.3 Puntos críticos de control en procesos de repostería

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        p.mb-0 Según el sistema HACCP (análisis de peligros y puntos críticos de control), se deben identificar etapas donde el control es esencial para prevenir, eliminar o reducir un peligro a niveles aceptables (Codex Alimentarius, 1993).
    
    .row.justify-content-center.align-items-center.mb-0(data-aos="fade-right")
      .col-lg-12
        .titulo-sexto.color-acento-contenido.mb-4
          h5.text-bold Tabla 6.
          span Puntos críticos de control en procesos de repostería
        .tabla-a.color-acento-contenido.mb-0
          table
            caption Nota. SENA, (2026).
            thead
              tr
                th Proceso
                th Peligro
                th Medida de control
                th Límite crítico
                th Monitoreo
            tbody
              tr
                td Recepción de huevos.
                td Biológico (Salmonella).
                td Verificar proveedor, rechazar huevos sucios o rotos.
                td Procedencia certificada, cascarón intacto.
                td Inspección visual.
              tr
                td Elaboración de crema pastelera.
                td Biológico (supervivencia de patógenos).
                td Cocción adecuada.
                td Temperatura ≥ 85 °C en el centro.
                td Termómetro.
              tr
                td Enfriamiento de cremas.
                td Biológico (proliferación).
                td Enfriamiento rápido.
                td 60 °C a 21 °C en ≤ 2 horas; 21°C a 4 °C en ≤ 4 horas.
                td Reloj, termómetro.
              tr
                td Montaje de tortas con crema.
                td Biológico (contaminación cruzada).
                td Higiene de superficies y manos.
                td Superficies desinfectadas, lavado de manos.
                td Inspección visual.
              tr
                td Almacenamiento en refrigeración.
                td Biológico (proliferación).
                td Control de temperatura.
                td ≤ 4°C en todo el equipo.
                td Termómetro de nevera, registros.

    separador
    
    .bg-full-width.bg-fondo-1
      
      #t_6_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
        h2 6.4 Normas de seguridad ocupacional en la cocina

      .row.justify-content-center.align-items-center.mb-5
        .col-lg-12
          p.mb-0 La cocina es un entorno con múltiples riesgos laborales. La prevención es responsabilidad de todos los trabajadores y empleadores, según lo establecido en la Ley 1562 de 2012 y el Decreto 1072 de 2015 (Sistema de Gestión de Seguridad y Salud en el Trabajo).

      .container
        .titulo-con-imagen.mb-0(data-aos="fade-right")
          .titulo-con-imagen__fondo
            img.titulo-con-imagen__imagen(src="@/assets/curso/tema6/img04.svg")
            h3.titulo-con-imagen__texto Prevención de accidentes
      
      .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
        .col-lg-8.mb-3.mb-lg-0
          SlyderF.custom(columnas="col-md-12 col-lg-6")
            .tarjeta.tarjeta--slyder.p-4
              .row.mb-3
                .col-auto.mx-auto
                  img(src='@/assets/curso/tema6/img03.svg' alt='Cortes')
              h4.text-center Cortes
              p.mb-0 Usar cuchillos bien afilados (los cuchillos sin filo causan más accidentes al requerir mayor fuerza), utilizar la técnica correcta de corte ("mano de garra" para guiar el alimento), almacenar cuchillos en guardas, rieleras o tablas magnéticas, nunca dejarlos sumergidos en agua.

            .tarjeta.tarjeta--slyder.p-4
              .row.mb-3
                .col-auto.mx-auto
                  img(src='@/assets/curso/tema6/img03.svg' alt='Quemaduras')
              h4.text-center Quemaduras
              p.mb-0 Usar agarraderas secas (la humedad conduce el calor), abrir las tapas de las ollas en dirección opuesta al cuerpo para evitar quemaduras por vapor, tener cuidado con el aceite caliente (no agregar agua), usar mangas largas de algodón.

            .tarjeta.tarjeta--slyder.p-4
              .row.mb-3
                .col-auto.mx-auto
                  img(src='@/assets/curso/tema6/img03.svg' alt='Caídas')
              h4.text-center Caídas
              p.mb-0 Limpiar derrames inmediatamente, usar calzado antideslizante con puntera de seguridad, mantener pasillos y áreas de circulación libres de obstáculos, usar señalización en pisos recién trapeados.

            .tarjeta.tarjeta--slyder.p-4
              .row.mb-3
                .col-auto.mx-auto
                  img(src='@/assets/curso/tema6/img03.svg' alt='Golpes')
              h4.text-center Golpes
              p.mb-0 Abrir puertas de armarios con cuidado, no almacenar objetos pesados en estantes altos sin asegurarlos.

            .tarjeta.tarjeta--slyder.p-4
              .row.mb-3
                .col-auto.mx-auto
                  img(src='@/assets/curso/tema6/img03.svg' alt='Sobre esfuerzos')
              h4.text-center Sobre esfuerzos
              p.mb-0 Utilizar técnica correcta para levantar objetos pesados (doblar rodillas, mantener la espalda recta), usar carros de transporte para cargas pesadas, solicitar ayuda cuando sea necesario.
        .col-lg-4.col-md-8
          figure
            img(src='@/assets/curso/tema6/img02.png', alt='')

 
    .bg-full-width.bg-fondo-1
      .container.mb-5
        .titulo-con-imagen.mb-0(data-aos="fade-right")
          .titulo-con-imagen__fondo
            img.titulo-con-imagen__imagen(src="@/assets/curso/tema6/img04.svg")
            h3.titulo-con-imagen__texto Uso correcto de elementos de protección personal (EPP)
    
      .row.align-items-center.justify-content-center.mb-5(data-aos="fade-right")
        .col-md-8.col-lg-4.order-2.order-lg-1
          figure
            img(src='@/assets/curso/tema6/img02.png', alt='')
        .col-lg-8.mb-4.mb-lg-0.order-1.order-lg-2
          SlyderF.custom(columnas="col-md-12 col-lg-6")
            .tarjeta.tarjeta--slyder.p-4
              .row.mb-3
                .col-auto.mx-auto
                  img(src='@/assets/curso/tema6/img03.svg' alt='Cortes')
              h4.text-center Calzado antideslizante
              p.mb-0 Obligatorio en toda cocina, con puntera de seguridad recomendada.

            .tarjeta.tarjeta--slyder.p-4
              .row.mb-3
                .col-auto.mx-auto
                  img(src='@/assets/curso/tema6/img03.svg' alt='Cortes')
              h4.text-center Delantal
              p.mb-0 Protege la ropa de trabajo y la piel de salpicaduras calientes y líquidos.

            .tarjeta.tarjeta--slyder.p-4
              .row.mb-3
                .col-auto.mx-auto
                  img(src='@/assets/curso/tema6/img03.svg' alt='Cortes')
              h4.text-center Gorro o cofia
              p.mb-0 Contiene el cabello y evita su caída en los alimentos. Debe cubrir todo el cabello.

            .tarjeta.tarjeta--slyder.p-4
              .row.mb-3
                .col-auto.mx-auto
                  img(src='@/assets/curso/tema6/img03.svg' alt='Cortes')
              h4.text-center Guantes
              p.mb-0 Para manipulación de alimentos listos para consumo, nunca como sustituto del lavado de manos. Deben cambiarse frecuentemente.

            .tarjeta.tarjeta--slyder.p-4
              .row.mb-3
                .col-auto.mx-auto
                  img(src='@/assets/curso/tema6/img03.svg' alt='Cortes')
              h4.text-center Tapabocas
              p.mb-0 Obligatorio en áreas de preparación de alimentos listos para consumo y cuando se tenga alguna afección respiratoria.


    separador
    
    #t_6_5.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 6.5 Normativa ambiental aplicada

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        p.mb-0 La producción de alimentos genera un impacto ambiental que debe ser gestionado responsablemente, en cumplimiento de la normativa colombiana.

    .container
      .row.mb-4.justify-content-center.align-items-center
        .bg-color-2.p-4.br-15
          .row.justify-content-center.align-items-center
            .col-auto.mb-3.mb-lg-0.d-none.d-lg-flex
              figure
                img(src="@/assets/curso/tema6/img05.svg", data-aos="zoom-in")
            .col-lg
              p.mb-0(data-aos="fade-right") <b>Ley 1259 de 2008:</b> establece el Comparendo Ambiental como instrumento de cultura ciudadana para sancionar a quienes infrinjan la normativa de aseo y limpieza (mal manejo de residuos).
    
      .row.mb-4.justify-content-center.align-items-center
        .bg-color-5.p-4.br-15
          .row.justify-content-center.align-items-center
            .col-auto.mb-3.mb-lg-0.d-none.d-lg-flex
              figure
                img(src="@/assets/curso/tema6/img05.svg", data-aos="zoom-in")
            .col-lg
              p.mb-0(data-aos="fade-right") <b>Decreto 2981 de 2013:</b> regula la prestación del servicio público de aseo y la gestión integral de residuos sólidos, incluyendo la obligación de los generadores de realizar separación en la fuente.

      .row.mb-4.justify-content-center.align-items-center
        .bg-color-2.p-4.br-15
          .row.justify-content-center.align-items-center
            .col-auto.mb-3.mb-lg-0.d-none.d-lg-flex
              figure
                img(src="@/assets/curso/tema6/img05.svg", data-aos="zoom-in")
            .col-lg
              p.mb-0(data-aos="fade-right") <b>Resolución 2184 de 2019:</b> adopta el código de colores para la separación de residuos sólidos: verde (orgánicos aprovechables), blanco (aprovechables como plástico, vidrio, papel) y negro (no aprovechables).

      .row.mb-4.justify-content-center.align-items-center
        .bg-color-5.p-4.br-15
          .row.justify-content-center.align-items-center
            .col-auto.mb-3.mb-lg-0.d-none.d-lg-flex
              figure
                img(src="@/assets/curso/tema6/img05.svg", data-aos="zoom-in")
            .col-lg
              p.mb-0(data-aos="fade-right") <b>Ley 99 de 1993:</b> crea el Sistema Nacional Ambiental (SINA) y establece principios generales de protección ambiental aplicables a toda actividad productiva.
</template>

<script>
export default {
  name: 'Tema6',
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
