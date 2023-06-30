export const initZoomMap = (ymap) => {
  const messageBlock = document.querySelector('.map__message');

  if (!messageBlock) {
    return;
  }

  let CTRL_KEY = 'Control';
  let isCtrlKeyDown;
  let timer;

  const showMessageBlock = () => {
    messageBlock.classList.add('is-active');
    clearTimeout(timer);
    timer = setTimeout(hiddenMessage, 2000);
  };

  const hiddenMessage = () => {
    messageBlock.classList.remove('is-active');
  };

  const enableScrollMapZoomOnKeydown = (event) => {
    if (event.key === CTRL_KEY && !isCtrlKeyDown) {
      isCtrlKeyDown = true;
      ymap.behaviors.enable('scrollZoom');
      hiddenMessage();
    }
  };

  const disableScrollMapZoomOnKeyup = (event) => {
    if (event.key === CTRL_KEY) {
      isCtrlKeyDown = false;
      ymap.behaviors.disable('scrollZoom');
    }
  };

  const onMapWheel = () => {
    if (!isCtrlKeyDown) {
      showMessageBlock();
    } else {
      hiddenMessage();
    }
  };

  document.addEventListener('keydown', enableScrollMapZoomOnKeydown);
  document.addEventListener('keyup', disableScrollMapZoomOnKeyup);
  messageBlock.addEventListener('mousedown', hiddenMessage);
  messageBlock.addEventListener('wheel', onMapWheel);
  ymap.events.add('wheel', onMapWheel);
};
