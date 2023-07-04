const initMapPins = () => {
  const maps = document.querySelector('[data-map=map-pins]');

  if (!maps) {
    return;
  }

  ymaps.ready(function () {
    let myMap = new ymaps.Map(maps, {
      center: [52.605728197196484, 39.60492042189785],
      zoom: 18,
      controls: [],
    });

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
      myMap.geoObjects.add(objectManager);
      objectManager.add(data);

    };

    request.send();
    myMap.behaviors.disable('scrollZoom');
  });
};

export {initMapPins};
