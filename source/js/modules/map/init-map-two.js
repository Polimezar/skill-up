const getImage = (name) => {
  switch (name) {
    case 'theater':
      return 'img/content/icon-theater.png';
    case 'swing':
      return 'img/content/icon-swing.png';
    case 'ice':
      return 'img/content/icon-ice-cream.png';
    case 'ferris':
      return 'img/content/icon-ferris-wheel.png';
  }
};

const initMapTwo = () => {
  const maps = document.querySelector('[data-map=map-2]');

  if (!maps) {
    return;
  }

  ymaps.ready(function () {
    let myMap = new ymaps.Map(maps, {
      center: [52.60555216754011, 39.60705053548296],
      zoom: 18,
      controls: [],
      clusterize: true,
    });

    let myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
      balloonContent: 'Акватеррариум - Липецкий зоопарк',
    },
    {
      iconLayout: 'default#image',
      iconImageHref: 'img/content/icon-map.png',
      iconImageSize: [38, 45],
      iconImageOffset: [-19, -25],
    });

    let myPlacemarkTwo = new ymaps.Placemark([52.60590456608306, 39.60577712955094], {
      balloonContentHeader: '<a href = "#">Зеленый театр.</a><br>' +
            '<span>Липецк, аллея Быханова</span>',
      balloonContentBody: '<img src="img/content/theater.jpg" height="150" width="200">',
    }, {
      iconLayout: 'default#imageWithContent',
      iconImageHref: 'img/content/icon-theater.png',
      iconImageSize: [38, 68],
      iconImageOffset: [-24, -24],
      iconContentOffset: [15, 15],
    });

    let myPlacemarkThree = new ymaps.Placemark([52.60564247398761, 39.606099364439636], {
      balloonContentHeader: '<a href = "#">Тут вкусное мороженое</a><br>' +
            '<span>Липецкое мороженое</span>',
      balloonContentBody: '<img src="img/content/ice.jpg" height="150" width="200">',
    }, {
      iconLayout: 'default#imageWithContent',
      iconImageHref: 'img/content/icon-ice-cream.png',
      iconImageSize: [38, 68],
      iconImageOffset: [-24, -24],
      iconContentOffset: [15, 15],
    });

    let myPlacemarkFour = new ymaps.Placemark([52.604598057903615, 39.60557800952635], {
      balloonContentHeader: '<a href = "#">Колесо обозрения</a><br>' +
            '<span>Отсюда открывается прекрасный вид на город</span>',
      balloonContentBody: '<img src="img/content/ferris.jpg" height="150" width="200">',
    }, {
      iconLayout: 'default#imageWithContent',
      iconImageHref: 'img/content/icon-ferris-wheel.png',
      iconImageSize: [50, 50],
      iconImageOffset: [-24, -24],
      iconContentOffset: [15, 15],
    });

    let myPlacemarkFive = new ymaps.Placemark([52.60564247398761, 39.604404208342224], {
      balloonContentHeader: '<a href = "#">Качели в парке</a><br>' +
            '<span>Отдохните после прогулки</span>',
      balloonContentBody: '<img src="img/content/swing.jpg" height="150" width="200">',
    }, {
      iconLayout: 'default#imageWithContent',
      iconImageHref: 'img/content/icon-swing.png',
      iconImageSize: [40, 50],
      iconImageOffset: [-24, -24],
      iconContentOffset: [15, 15],
    });

    let myPlacemarkSix = new ymaps.Placemark([52.60545799564745, 39.60206901604345], {
      balloonContentHeader: '<a href = "#">Качели в парке</a><br>' +
            '<span>Отдохните после прогулки</span>',
      balloonContentBody: '<img src="img/content/swing.jpg" height="150" width="200">',
    }, {
      iconLayout: 'default#imageWithContent',
      iconImageHref: 'img/content/icon-swing.png',
      iconImageSize: [40, 50],
      iconImageOffset: [-24, -24],
      iconContentOffset: [15, 15],
    });

    myMap.behaviors.disable('scrollZoom');
    myMap.geoObjects.add(myPlacemark).add(myPlacemarkTwo).add(myPlacemarkThree).add(myPlacemarkFour).add(myPlacemarkFive).add(myPlacemarkSix);
  });
};
export {initMapTwo};
