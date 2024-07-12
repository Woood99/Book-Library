import React, { useState, useEffect } from 'react';

const mapData = {
   coordinates: [45.00963912132335, 39.15492313419865],
   zoom: 9,
   placemarks: [
      {
         id: 21,
         coordinates: [44.995865925143, 39.066783172215],
         minPrice: 'от 3 491 649 ₽',
      },
      {
         id: 22,
         coordinates: [45.002841356843, 38.925537450315],
         minPrice: 'от 3 541 400 ₽',
      },
      {
         id: 23,
         coordinates: [44.918267693725, 37.963273812619],
         minPrice: 'от 3 566 000 ₽',
      },
      {
         id: 24,
         coordinates: [45.130777306907, 38.978333473206],
         minPrice: 'от 3 613 620 ₽',
      },
      {
         id: 25,
         coordinates: [44.304008169939, 38.752103680006],
         minPrice: 'от 3 650 500 ₽',
      },
      {
         id: 26,
         coordinates: [45.115166435389, 38.642964741171],
         minPrice: 'от 2 311 500 ₽',
      },
      {
         id: 27,
         coordinates: [45.370270729932, 40.719300899411],
         minPrice: 'от 2 343 000 ₽',
      },
      {
         id: 28,
         coordinates: [44.610027846435, 40.048190613342],
         minPrice: 'от 2 626 250 ₽',
      },
      {
         id: 29,
         coordinates: [45.421453222241, 40.554361408761],
         minPrice: 'от 2 641 320 ₽',
      },
      {
         id: 30,
         coordinates: [45.095610741581, 38.945255095717],
         minPrice: 'от 2 937 250 ₽',
      },
      {
         id: 31,
         coordinates: [45.15172907228, 38.974753729999],
         minPrice: 'от 2 953 104 ₽',
      },
      {
         id: 32,
         coordinates: [45.013554226124, 38.919347547234],
         minPrice: 'от 2 975 300 ₽',
      },
      {
         id: 33,
         coordinates: [45.159874985415, 39.022300714122],
         minPrice: 'от 3 031 380 ₽',
      },
      {
         id: 34,
         coordinates: [44.845499986573, 38.656417540663],
         minPrice: 'от 3 046 350 ₽',
      },
   ],
};

const stylesMap = {
   width: '100%',
   height: '100vh',
   backgroundColor: '#cfcfcf',
};

function ListingMap() {
   const [isLoaded, setIsLoaded] = useState(false);
   const [map, setMap] = useState(null);

   function fetchScript(url) {
      return new Promise((resolve, reject) => {
         const script = document.createElement('script');

         script.type = 'text/javascript';
         script.onload = resolve;
         script.onerror = reject;
         script.src = `https://api-maps.yandex.ru/2.1/?lang=ru_RU`;
         script.async = 'async';

         document.head.appendChild(script);
      });
   }

   // загрузка скрипта
   useEffect(() => {
      fetchScript().then(() => setIsLoaded(true));
   }, []);

   const createMap = () => {
      try {
         ymaps.ready(() => {
            const newMap = new ymaps.Map('customMap', {
               center: mapData.coordinates,
               zoom: mapData.zoom,
            });

            const placemarks = mapData.placemarks.map(item => {
               return new ymaps.Placemark(
                  [parseFloat(item['coordinates'][0]), parseFloat(item['coordinates'][1])],
                  {
                     id: item.id,
                     minPrice: item.minPrice,
                  },
                  {
                     iconLayout: ymaps.templateLayoutFactory.createClass(`<div class="rbs-map__circle" data-placemark-id="${item.id}"></div>`),
                     iconShape: {
                        type: 'Rectangle',
                        coordinates: [
                           [0, 0],
                           [15, 15],
                        ],
                     },
                  }
               );
            });

            placemarks.forEach(item => {
               newMap.geoObjects.add(item);
            });

            setMap(newMap);
         });
      } catch (error) {
         console.log('error is', error);
      }
   };

   // если скрипт карты подключен, инициализировать карту
   useEffect(() => {
      if (isLoaded && !map) {
         createMap();
      }
   }, [isLoaded, map]);

   return (
      <>
         <div id="customMap" style={stylesMap}></div>
      </>
   );
}

export default ListingMap;
