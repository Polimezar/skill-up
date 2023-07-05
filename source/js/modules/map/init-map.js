const initMap = () => {
  const maps = document.querySelector('[data-map=map-1]');

  if (!maps) {
    return;
  }

  ymaps.ready(function () {
    let myMap = new ymaps.Map(maps, {
      center: [52.605728197196484, 39.60492042189785],
      zoom: 18,
      controls: [],
    });

    let myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
    },
    {
      iconLayout: 'default#image',
      iconImageHref: 'img/content/icon-pin.png',
      iconImageSize: [45, 45],
      iconImageOffset: [-19, -25],
    });

    myMap.behaviors.disable('scrollZoom');

    myMap.geoObjects.add(myPlacemark);
  });
};
export {initMap};
