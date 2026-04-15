<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Masas básicas: clasificación y técnicas de elaboración

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-12
        img(src="@/assets/curso/tema2/img01.png", alt="")
        
        .row.justify-content-center.align-items-center.z-2
          .col-lg-10(data-aos="fade-up")
            p.banner-text Las masas constituyen la base estructural de innumerables preparaciones en repostería. Su clasificación responde a los ingredientes principales, el método de elaboración, los fenómenos fisicoquímicos involucrados y el resultado final esperado. Según McGee (2017), "comprender el comportamiento de los ingredientes durante la formación de las masas permite al repostero no solo seguir recetas, sino crearlas y adaptarlas con fundamento científico" (p. 562). Cada tipo de masa requiere técnicas específicas y un conocimiento profundo de las interacciones entre harinas, grasas, líquidos y agentes leudantes.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-12
        .titulo-sexto.color-acento-contenido.mb-4
          h5.text-bold Tabla 2.
          span Clasificación general de masas en repostería
        .tabla-a.color-acento-contenido.mb-0
          table
            caption Nota. Adaptado de Suas (2014) y Gisslen (2014).
            thead
              tr
                th Tipo de masa
                th Característica principal
                th Agente leudante
                th Ejemplos
            tbody
              tr
                td Masas quebradas.
                td Textura crujiente y arenosa.
                td Principalmente vapor y químico.
                td Masa brisa, masa sucrée, masa sablée.
              tr
                td Masas batidas.
                td Textura esponjosa y aireada.
                td Aire incorporado durante el batido.
                td Bizcochos, magdalenas, piononos.
              tr
                td Masas hojaldradas.
                td Múltiples capas finas y crujientes.
                td Vapor generado entre capas.
                td Hojaldre común, hojaldre invertido.
              tr
                td Masas escaldadas.
                td Interior hueco, exterior crujiente.
                td Vapor durante el horneado.
                td Pasta choux (éclairs, profiteroles).
              tr
                td Masas fermentadas.
                td Textura suave y alveolada.
                td Dióxido de carbono (levadura).
                td Brioche, roscón.

    separador

    .bg-full-width.bg-fondo-1
      #t_2_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
        h2 2.1 Masas quebradas (masa brisa, masa sucrée, masa sablee)

      .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
        .col-lg-4.col-md-8.mb-3.mb-lg-0
          figure
            img(src="@/assets/curso/tema2/img02.png", data-aos="zoom-in")
        .col-lg-8
          p.mb-3 En Las masas quebradas, también conocidas como "pastas quebradas" o "shortcrust pastries", se caracterizan por su textura crujiente y friable, que se deshace fácilmente en la boca. El término "sablée" (arenado en francés) hace referencia precisamente a esta textura arenosa. Su elaboración se basa en el principio de encapsular las partículas de grasa con harina para limitar el desarrollo del gluten, lo que resulta en una masa tierna y quebradiza (Figoni, 2012).
  
          h4.mb-3 Principios técnicos
  
          .lista-ul--color
            li
              i.fas.fa-circle-right.bg-color-4
              | La grasa (mantequilla) debe estar fría para evitar que se integre completamente con la harina.
            li
              i.fas.fa-circle-right.bg-color-4
              | El agua debe estar fría para no fundir la mantequilla.
            li
              i.fas.fa-circle-right.bg-color-4
              | El amasado debe ser mínimo, solo hasta unir los ingredientes.
            li
              i.fas.fa-circle-right.bg-color-4
              | El reposo en refrigeración es fundamental para relajar el gluten y permitir que la grasa se endurezca nuevamente.


      .row.align-items-stretch.justify-content-center.mb-5
        .col-md-6.col-lg-6.col-xl-4.mb-4(data-aos="fade-down")
          .tarjeta.bg-color-5.p-4.rounded-4.tarjeta-label.border-color-1.ms-md-5.h-100
            .tarjeta-label__img-wrapper
              img(src='@/assets/curso/tema2/img03.png' alt='Masa brisa')
            .ms-lg-5.ms-0.ps-md-3
              p.mb-2 <b>Masa brisa (<em>Pâte brisée</em>)</b>
              p.mb-0 Es la más neutra y versátil. Se elabora con harina, mantequilla, agua y sal. No contiene azúcar, lo que la hace apta tanto para preparaciones dulces como saladas (quiches, tartaletas). Su textura es firme pero quebradiza.

        .col-md-6.col-lg-6.col-xl-4.mb-4(data-aos="fade-down")
          .tarjeta.bg-color-5.p-4.rounded-4.tarjeta-label.border-color-1.ms-md-5.h-100
            .tarjeta-label__img-wrapper
              img(src='@/assets/curso/tema2/img04.png' alt='Masa sucrée')
            .ms-lg-5.ms-0.ps-md-3
              p.mb-2 <b>Masa sucrée (<em>Pâte sucrée</em>)</b>
              p.mb-0 Contiene azúcar y yemas de huevo, además de harina y mantequilla. El azúcar y las yemas aportan mayor dulzor y una textura más arenosa y delicada. Es ideal para tartas de frutas y pasteles finos.

        .col-md-6.col-lg-6.col-xl-4.mb-4(data-aos="fade-up")
          .tarjeta.bg-color-5.p-4.rounded-4.tarjeta-label.border-color-1.ms-md-5.h-100
            .tarjeta-label__img-wrapper
              img(src="@/assets/curso/tema2/img05.png", alt="Masa sablée")
            .ms-lg-5.ms-0.ps-md-3
              p.mb-2 <b>Masa sablée (<em>Pâte sablée</em>)</b>
              p.mb-0 Similar a la sucrée pero con mayor contenido de mantequilla y menor cantidad de líquido. La proporción de grasa es tan alta que la masa se vuelve extremadamente quebradiza. Es perfecta para galletas, bases de tartas muy finas y preparaciones que requieren una textura especialmente delicada.


    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-10          
        .titulo-sexto.mb-4.color-acento-contenido
          h5 
            b Figura 1. 
            span Técnica de elaboración (método de arenado)
        figure.mb-2
          img.d-none.d-lg-block(src='@/assets/curso/tema2/img20.png', alt='La figura muestra la técnica de elaboración de una masa quebrada por medio del método de arenado. Explicación debajo de la imagen. 1. Todos los ingredientes (harina, mantequilla, huevos, agua) deben estar fríos. 2. Tamizar la harina sobre la superficie de trabajo o en un bol amplio. 3. Agregar la mantequilla fría cortada en cubos pequeños. 4. Con las yemas de los dedos, frotar la mantequilla con la harina hasta obtener una textura arenosa, con grumos del tamaño de arvejas. Este proceso debe ser rápido para evitar que el calor de las manos funda la mantequilla. 5. Formar un volcán con la mezcla arenosa y agregar en el centro los líquidos (huevos batidos, agua) y el azúcar (si aplica). 6. Incorporar los líquidos con movimientos suaves, desde el centro hacia los bordes, solo hasta que la masa se una. No amasar. 7. Formar un disco, envolver en film plástico y refrigerar mínimo 30 minutos (idealmente 1-2 horas) antes de estirar y hornear.').mx-auto
          img.d-block.d-lg-none(src='@/assets/curso/tema2/img21.png', alt='La figura muestra la técnica de elaboración de una masa quebrada por medio del método de arenado. Explicación debajo de la imagen. 1. Todos los ingredientes (harina, mantequilla, huevos, agua) deben estar fríos. 2. Tamizar la harina sobre la superficie de trabajo o en un bol amplio. 3. Agregar la mantequilla fría cortada en cubos pequeños. 4. Con las yemas de los dedos, frotar la mantequilla con la harina hasta obtener una textura arenosa, con grumos del tamaño de arvejas. Este proceso debe ser rápido para evitar que el calor de las manos funda la mantequilla. 5. Formar un volcán con la mezcla arenosa y agregar en el centro los líquidos (huevos batidos, agua) y el azúcar (si aplica). 6. Incorporar los líquidos con movimientos suaves, desde el centro hacia los bordes, solo hasta que la masa se una. No amasar. 7. Formar un disco, envolver en film plástico y refrigerar mínimo 30 minutos (idealmente 1-2 horas) antes de estirar y hornear.').mx-auto

        figcaption 
          b Nota. 
          | SENA, (2026).

    separador

    .bg-full-width.bg-fondo-1
      #t_2_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
        h2 2.2 Masas batidas (bizcochos, piononos, magdalenas)

      .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
        .col-lg-4.col-md-8.mb-3.mb-lg-0
          figure
            img(src="@/assets/curso/tema2/img07.png", data-aos="zoom-in")
        .col-lg-8
          p.mb-3 Las masas batidas se caracterizan por su esponjosidad, lograda mediante la incorporación de aire durante el proceso de batido. Este aire queda atrapado en la estructura del gluten y el huevo, expandiéndose durante el horneado y generando una textura ligera y porosa. Según Friberg (2013), "el éxito de una masa batida depende casi exclusivamente de la calidad del batido inicial y del manejo cuidadoso posterior para no perder el aire incorporado" (p. 234).

          h4.mb-3 Principios técnicos
  
          .lista-ul--color
            li
              i.fas.fa-circle-right.bg-color-4
              | Los huevos (o claras) deben estar a temperatura ambiente para maximizar su capacidad de retener aire.
            li
              i.fas.fa-circle-right.bg-color-4
              | El azúcar estabiliza la espuma de huevo y contribuye a la textura final.
            li
              i.fas.fa-circle-right.bg-color-4
              | La harina debe incorporarse con movimientos envolventes para no desinflar la mezcla.
            li
              i.fas.fa-circle-right.bg-color-4
              | El horneado debe realizarse inmediatamente después de incorporar la harina.


      .row.align-items-stretch.justify-content-center.mb-3
        .col-md-12.col-lg-12.col-xl-12.mb-4(data-aos="fade-down")
          .tarjeta.bg-color-5.p-4.rounded-4.tarjeta-label.border-color-1.ms-md-5.h-100
            .tarjeta-label__img-wrapper
              img(src='@/assets/curso/tema2/img08.png' alt='Bizcocho')
            .ms-lg-5.ms-0.ps-md-3
              p.mb-3 <b>Bizcochos</b>: pueden elaborarse por diferentes métodos:
              .lista-ul--color
                li
                  i.fas.fa-circle-right.bg-color-4
                  | Método tradicional (Mantequilla y azúcar cremados): se crema la mantequilla con el azúcar, se agregan los huevos gradualmente, finalmente se incorpora la harina.
                li
                  i.fas.fa-circle-right.bg-color-4
                  | Método genovés (Huevos y azúcar batidos al calor): se baten los huevos enteros con el azúcar al baño María (40 - 45 °C) hasta que triplican su volumen y forman "cinta" al dejar caer la mezcla. Luego se incorpora la harina suavemente.
                li
                  i.fas.fa-circle-right.bg-color-4
                  | Método separado (Claras montadas): se montan las claras por separado y se incorporan al final a la mezcla de yemas, harina y mantequilla.


    .row.align-items-stretch.justify-content-center.mb-5
      .col-md-6.col-lg-6.mb-4(data-aos="fade-down")
        .tarjeta.bg-color-5.p-4.rounded-4.tarjeta-label.border-color-1.ms-md-5.h-100
          .tarjeta-label__img-wrapper
            img(src='@/assets/curso/tema2/img09.png' alt='Masa sucrée')
          .ms-lg-5.ms-0.ps-md-3
            p.mb-2 <b>Piononos</b>: bizcochos delgados y flexibles elaborados en bandejas planas (planchas), que se enrollan con crema una vez horneados y fríos. Requieren una proporción mayor de líquido para lograr la flexibilidad necesaria.

      .col-md-6.col-lg-6.mb-4(data-aos="fade-up")
        .tarjeta.bg-color-5.p-4.rounded-4.tarjeta-label.border-color-1.ms-md-5.h-100
          .tarjeta-label__img-wrapper
            img(src="@/assets/curso/tema2/img10.png", alt="Masa sablée")
          .ms-lg-5.ms-0.ps-md-3
            p.mb-2 <b>Magdalenas</b>: masas batidas con aceite o mantequilla, horneadas en cápsulas individuales. Se caracterizan por su "cogollo" o copete característico, logrado por un choque térmico (horno muy caliente al inicio) y un reposo previo de la masa en refrigeración.


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
        

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-10          
        .titulo-sexto.mb-4.color-acento-contenido
          h5 
            b Figura 2. 
            span Técnicas de elaboración. Método genovés
        figure.mb-2
          img.d-none.d-lg-block(src='@/assets/curso/tema2/img22.png', alt='Texto alternativo: La figura muestra la técnica de elaboración de una masa batida por medio del método genovés. A continuación, se explica después de la figura. 1. Calentar los huevos y el azúcar al baño María, batiendo constantemente, hasta alcanzar 40 - 45°C. 2. Retirar del fuego y batir a velocidad alta (con batidora eléctrica) hasta que la mezcla se enfríe, triplique su volumen y adquiera una textura espumosa y de color pálido. 3. Verificar el "punto de cinta": al levantar el batidor, la mezcla debe caer formando una cinta que permanece visible en la superficie durante algunos segundos. 4. Tamizar la harina sobre la mezcla y incorporarla con movimientos envolventes suaves, utilizando una espátula de goma. 5. Verter en moldes enharinados o con papel y hornear inmediatamente a 180°C.').mx-auto
          img.d-block.d-lg-none(src='@/assets/curso/tema2/img23.png', alt='Texto alternativo: La figura muestra la técnica de elaboración de una masa batida por medio del método genovés. A continuación, se explica después de la figura. 1. Calentar los huevos y el azúcar al baño María, batiendo constantemente, hasta alcanzar 40 - 45°C. 2. Retirar del fuego y batir a velocidad alta (con batidora eléctrica) hasta que la mezcla se enfríe, triplique su volumen y adquiera una textura espumosa y de color pálido. 3. Verificar el "punto de cinta": al levantar el batidor, la mezcla debe caer formando una cinta que permanece visible en la superficie durante algunos segundos. 4. Tamizar la harina sobre la mezcla y incorporarla con movimientos envolventes suaves, utilizando una espátula de goma. 5. Verter en moldes enharinados o con papel y hornear inmediatamente a 180°C.').mx-auto
        figcaption 
          b Nota. 
          | SENA, (2026).

    separador

    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.3 Masas hojaldradas (hojaldre común, hojaldre invertido)

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-4.col-md-8.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/img13.png", data-aos="zoom-in")
      .col-lg-8
        p.mb-3 El hojaldre es una de las masas más complejas y espectaculares de la repostería. Su característica principal es la multiplicidad de capas finas y crujientes, lograda mediante sucesivos plegados de una masa base (détrempe) que envuelve una capa de mantequilla (materia grasa). Según Suas (2014), "un buen hojaldre no se hornea, se construye capa por capa, y cada pliegue contribuye a la estructura final que se elevará en el horno" (p. 312).

        h4.mb-3 Principios técnicos

        .lista-ul--color
          li
            i.fas.fa-circle-right.bg-color-4
            | La mantequilla debe tener la misma consistencia que la détrempe para que se extienda uniformemente sin romperse.
          li
            i.fas.fa-circle-right.bg-color-4
            | Todos los ingredientes y el ambiente deben mantenerse fríos para evitar que la mantequilla se funda y se integre con la masa.
          li
            i.fas.fa-circle-right.bg-color-4
            | Los tiempos de reposo entre vueltas son fundamentales para relajar el gluten y evitar que la masa se encoja.
          li
            i.fas.fa-circle-right.bg-color-4
            | El horneado inicial a alta temperatura genera vapor que separa las capas, permitiendo que el hojaldre se eleve.

    .row.align-items-stretch.justify-content-center.mb-5
      .col-md-6.col-lg-6.mb-4(data-aos="fade-down")
        .tarjeta.bg-color-5.p-4.rounded-4.tarjeta-label.border-color-1.ms-md-5.h-100
          .tarjeta-label__img-wrapper
            img(src='@/assets/curso/tema2/img14.png' alt='Masa sucrée')
          .ms-lg-5.ms-0.ps-md-3
            p.mb-2 <b>Hojaldre común</b>: la mantequilla se incorpora dentro de la détrempe formando un bloque que se envuelve con la masa. Es el método tradicional y requiere mayor destreza para lograr un laminado uniforme sin que la mantequilla se salga.
      
      .col-md-6.col-lg-6.mb-4(data-aos="fade-up")
        .tarjeta.bg-color-5.p-4.rounded-4.tarjeta-label.border-color-1.ms-md-5.h-100
          .tarjeta-label__img-wrapper
            img(src="@/assets/curso/tema2/img15.png", alt="Masa sablée")
          .ms-lg-5.ms-0.ps-md-3
            p.mb-2 <b>Hojaldre invertido</b>: la mantequilla envuelve a la détrempe, es decir, se invierte el orden tradicional. Esto facilita la ejecución en climas cálidos y produce un hojaldre más regular, con mejor desarrollo y textura más crujiente.
    
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-10          
        .titulo-sexto.mb-4.color-acento-contenido
          h5 
            b Figura 3.
            span Técnica de elaboración de hojaldre
        figure.mb-2
          img.d-none.d-lg-block(src='@/assets/curso/tema2/img24.png', alt='La figura muestra el paso a paso de la técnica de elaboración de la masa de hojaldre. Texto con la explicación debajo de la figura. 1.	Vuelta simple (o de tres): la masa se estira en un rectángulo alargado y se dobla en tres partes, como si se doblara una carta. Primero se dobla un tercio hacia el centro y luego el otro tercio sobre el primero. 2.	Vuelta doble (o de cuatro): la masa se estira en un rectángulo, se doblan ambos extremos hacia el centro y luego se dobla por la mitad, obteniendo cuatro capas. 3.	Numero de capas: un hojaldre completo suele llevar 6 vueltas simples o 4 vueltas dobles, generando cientos de capas, para una textura excepcional. Con 6 vueltas simples se obtienen teóricamente 729 capas. 4.	Reposo y refrigeración: entre cada vuelta, la masa debe reposar refrigerada mínimo 30 minutos para relajar el gluten y mantener la mantequilla fría.').mx-auto
          img.d-block.d-lg-none(src='@/assets/curso/tema2/img25.png', alt='La figura muestra el paso a paso de la técnica de elaboración de la masa de hojaldre. Texto con la explicación debajo de la figura. 1.	Vuelta simple (o de tres): la masa se estira en un rectángulo alargado y se dobla en tres partes, como si se doblara una carta. Primero se dobla un tercio hacia el centro y luego el otro tercio sobre el primero. 2.	Vuelta doble (o de cuatro): la masa se estira en un rectángulo, se doblan ambos extremos hacia el centro y luego se dobla por la mitad, obteniendo cuatro capas. 3.	Numero de capas: un hojaldre completo suele llevar 6 vueltas simples o 4 vueltas dobles, generando cientos de capas, para una textura excepcional. Con 6 vueltas simples se obtienen teóricamente 729 capas. 4.	Reposo y refrigeración: entre cada vuelta, la masa debe reposar refrigerada mínimo 30 minutos para relajar el gluten y mantener la mantequilla fría.').mx-auto
        figcaption 
          b Nota. 
          | SENA, (2026).

    separador

    #t_2_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.4 Masas escaldadas (pasta choux)

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.col-md-8.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/img16.png", data-aos="zoom-in")
      .col-lg-8
        p.mb-4 La pasta choux es única porque la harina se cocina previamente en agua y mantequilla antes de incorporar los huevos. Durante el horneado, el alto contenido de humedad genera vapor que infla la masa, creando un interior hueco perfecto para rellenar. McGee (2017) explica que "la pasta choux es un ejemplo fascinante de cómo el agua, transformada en vapor, puede convertirse en el mejor agente leudante cuando se combina con una estructura de gluten y huevo capaz de retenerlo" (p. 578).
        .bg-color-2.px-4.py-3.br-15
          p.mb-0 <b>Aplicaciones:</b> éclairs, profiteroles, buñuelos, churros, parís-brest.

    .bg-full-width.bg-fondo-1
      .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
        .col-lg-10          
          .titulo-sexto.mb-4.color-acento-contenido
            h5 
              b Figura 4.
              span Técnica de elaboración de masas escaldadas (pasta choux)
          figure.mb-2
            img.d-none.d-lg-block(src='@/assets/curso/tema2/img26.png', alt='La figura muestra el paso a paso de la técnica de elaboración de la masa de hojaldre. Texto con la explicación debajo de la figura. 1.	Vuelta simple (o de tres): la masa se estira en un rectángulo alargado y se dobla en tres partes, como si se doblara una carta. Primero se dobla un tercio hacia el centro y luego el otro tercio sobre el primero. 2.	Vuelta doble (o de cuatro): la masa se estira en un rectángulo, se doblan ambos extremos hacia el centro y luego se dobla por la mitad, obteniendo cuatro capas. 3.	Numero de capas: un hojaldre completo suele llevar 6 vueltas simples o 4 vueltas dobles, generando cientos de capas, para una textura excepcional. Con 6 vueltas simples se obtienen teóricamente 729 capas. 4.	Reposo y refrigeración: entre cada vuelta, la masa debe reposar refrigerada mínimo 30 minutos para relajar el gluten y mantener la mantequilla fría.').mx-auto
            img.d-block.d-lg-none(src='@/assets/curso/tema2/img27.png', alt='La figura muestra el paso a paso de la técnica de elaboración de la masa de hojaldre. Texto con la explicación debajo de la figura. 1.	Vuelta simple (o de tres): la masa se estira en un rectángulo alargado y se dobla en tres partes, como si se doblara una carta. Primero se dobla un tercio hacia el centro y luego el otro tercio sobre el primero. 2.	Vuelta doble (o de cuatro): la masa se estira en un rectángulo, se doblan ambos extremos hacia el centro y luego se dobla por la mitad, obteniendo cuatro capas. 3.	Numero de capas: un hojaldre completo suele llevar 6 vueltas simples o 4 vueltas dobles, generando cientos de capas, para una textura excepcional. Con 6 vueltas simples se obtienen teóricamente 729 capas. 4.	Reposo y refrigeración: entre cada vuelta, la masa debe reposar refrigerada mínimo 30 minutos para relajar el gluten y mantener la mantequilla fría.').mx-auto
          figcaption 
            b Nota. 
            | SENA, (2026).

    separador

    #t_2_5.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.5 Masas fermentadas (brioche, roscones)

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-4.col-md-8.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/img17.png", data-aos="zoom-in")
      .col-lg-8
        p.mb-3 Estas masas incorporan levadura como agente leudante biológico. La fermentación produce dióxido de carbono, que queda atrapado en la red de gluten, haciendo que la masa aumente de volumen. En repostería, las masas fermentadas suelen enriquecerse con huevos, mantequilla y azúcar, lo que la diferencia del pan común (Suas, 2014).

        h4.mb-3 Principios técnicos

        .lista-ul--color
          li
            i.fas.fa-circle-right.bg-color-4
            | La temperatura de los líquidos debe ser tibia (25 - 30 °C) para activar la levadura sin matarla.
          li
            i.fas.fa-circle-right.bg-color-4
            | El desarrollo del gluten mediante amasado es fundamental para retener los gases.
          li
            i.fas.fa-circle-right.bg-color-4
            | Los tiempos de fermentación deben controlarse según temperatura ambiente.
          li
            i.fas.fa-circle-right.bg-color-4
            | El enriquecimiento con grasas y azúcares ralentiza la fermentación, por lo que se requieren tiempos más largos.


    .row.align-items-stretch.justify-content-center.mb-5
      .col-md-6.col-lg-6.mb-4(data-aos="fade-down")
        .tarjeta.bg-color-5.p-4.rounded-4.tarjeta-label.border-color-1.ms-md-5.h-100
          .tarjeta-label__img-wrapper
            img(src='@/assets/curso/tema2/img18.png' alt='Masa sucrée')
          .ms-lg-5.ms-0.ps-md-3
            p.mb-2 <b>Brioche</b>: masa francesa muy enriquecida, con alto contenido de mantequilla (hasta 50 % del peso de la harina) y huevos. Textura suave, delicada y ligeramente dulce. Puede elaborarse en diferentes formatos: brioche con cabeza, brioche nanterre, brioche mousseline.
            
      .col-md-6.col-lg-6.mb-4(data-aos="fade-up")
        .tarjeta.bg-color-5.p-4.rounded-4.tarjeta-label.border-color-1.ms-md-5.h-100
          .tarjeta-label__img-wrapper
            img(src="@/assets/curso/tema2/img19.png", alt="Masa sablée")
          .ms-lg-5.ms-0.ps-md-3
            p.mb-2 <b>Roscones</b>: masas típicas españolas, aromatizadas con azahar y decoradas con frutas confitadas. El Roscón de Reyes es el ejemplo más representativo.
            
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-10          
        .titulo-sexto.mb-4.color-acento-contenido
          h5 
            b Figura 5.
            span Técnica de elaboración de broiche o roscones
        figure.mb-2
          img.d-none.d-lg-block(src='@/assets/curso/tema2/img28.png', alt='La figura muestra el paso a paso de la técnica de elaboración de la masa de hojaldre. Texto con la explicación debajo de la figura. 1.	Vuelta simple (o de tres): la masa se estira en un rectángulo alargado y se dobla en tres partes, como si se doblara una carta. Primero se dobla un tercio hacia el centro y luego el otro tercio sobre el primero. 2.	Vuelta doble (o de cuatro): la masa se estira en un rectángulo, se doblan ambos extremos hacia el centro y luego se dobla por la mitad, obteniendo cuatro capas. 3.	Numero de capas: un hojaldre completo suele llevar 6 vueltas simples o 4 vueltas dobles, generando cientos de capas, para una textura excepcional. Con 6 vueltas simples se obtienen teóricamente 729 capas. 4.	Reposo y refrigeración: entre cada vuelta, la masa debe reposar refrigerada mínimo 30 minutos para relajar el gluten y mantener la mantequilla fría.').mx-auto
          img.d-block.d-lg-none(src='@/assets/curso/tema2/img29.png', alt='La figura muestra el paso a paso de la técnica de elaboración de la masa de hojaldre. Texto con la explicación debajo de la figura. 1.	Vuelta simple (o de tres): la masa se estira en un rectángulo alargado y se dobla en tres partes, como si se doblara una carta. Primero se dobla un tercio hacia el centro y luego el otro tercio sobre el primero. 2.	Vuelta doble (o de cuatro): la masa se estira en un rectángulo, se doblan ambos extremos hacia el centro y luego se dobla por la mitad, obteniendo cuatro capas. 3.	Numero de capas: un hojaldre completo suele llevar 6 vueltas simples o 4 vueltas dobles, generando cientos de capas, para una textura excepcional. Con 6 vueltas simples se obtienen teóricamente 729 capas. 4.	Reposo y refrigeración: entre cada vuelta, la masa debe reposar refrigerada mínimo 30 minutos para relajar el gluten y mantener la mantequilla fría.').mx-auto
        figcaption 
          b Nota. 
          | SENA, (2026).


</template>

<script>
export default {
  name: 'Tema2',
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
