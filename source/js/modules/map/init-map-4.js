import {initZoomMap} from './init-map-zoom';

const initMapFour = () => {
  const maps = document.querySelector('[data-map=map-4]');

  if (!maps) {
    return;
  }

  ymaps.ready(function () {
    let myMap = new ymaps.Map(maps, {
      center: [52.605728197196484, 39.60492042189785],
      zoom: 17,
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

    let objectManager;

    let request = new XMLHttpRequest();
    request.open('GET', 'data/pins.json', true);

    request.onload = function () {
      let data = JSON.parse(this.response);

      objectManager = new ymaps.ObjectManager({
        clusterize: true,
        clusterDisableClickZoom: true,
      });
      objectManager.clusters.options.set('preset', 'islands#invertedNightClusterIcons');
      myMap.geoObjects.add(objectManager);
      objectManager.add(data);
    };

    request.send();
    myMap.behaviors.disable('scrollZoom');
    initZoomMap(myMap);
    myMap.geoObjects.add(myPlacemark);
  });
};

export {initMapFour};
