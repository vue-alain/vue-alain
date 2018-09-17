
export function preloaderFinished() {
    const body = document.querySelector('body');
    const preloader = document.querySelector('.preloader');
    if (!body ) {
        return;
    }
    body.style.overflow = 'hidden';
    function remove() {
      if ( !preloader ) {
        return;
      }
      preloader.addEventListener('transitionend', () => {
        preloader.className = 'preloader-hidden';
      });

      preloader.className += ' preloader-hidden-add preloader-hidden-add-active';
    }
    ( window as any).appBootstrap = () => {
      setTimeout(() => {
        remove();
        body.style.overflow = '';
      }, 100);
    };
  }
