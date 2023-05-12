const initMap = () => {
  const maps = document.querySelector('[data-map=map-1]');

  if (!maps) {
    return;
  }

  ymaps.ready(function () {
    let myMap = new ymaps.Map(maps, {
      center: [52.60555216754011, 39.60705053548296],
      zoom: 19,
      controls: [],
    });

    let myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
    },
    {
      iconLayout: 'default#image',
      iconImageHref: 'img/content/icon-map.png',
      iconImageSize: [38, 45],
      iconImageOffset: [-19, -25],
    });

    myMap.behaviors.disable('scrollZoom');

    myMap.geoObjects.add(myPlacemark);
  });
};
export {initMap};
