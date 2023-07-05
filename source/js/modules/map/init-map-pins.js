export const initMapPins = (ymap) => {
  ymaps.ready(function () {
    let objectManager;

    let request = new XMLHttpRequest();
    request.open('GET', 'data/pins.json', true);

    request.onload = function () {
      let data = JSON.parse(this.response);

      objectManager = new ymaps.ObjectManager({
        clusterize: false,
        // gridSize: 50,
        // clusterDisableClickZoom: false,
      });
      objectManager.clusters.options.set('preset', 'islands#invertedNightClusterIcons');
      ymap.geoObjects.add(objectManager);
      objectManager.add(data);
    };

    request.send();
  });
};
