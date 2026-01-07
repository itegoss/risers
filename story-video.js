document.addEventListener('DOMContentLoaded', () => {
  const modal = document.querySelector('.story-video-modal');
  if (!modal) return;

  const iframe = modal.querySelector('.story-video-embed');
  const video = modal.querySelector('.story-video-file');
  const closeButton = modal.querySelector('.story-video-close');
  const backdrop = modal.querySelector('.story-video-backdrop');
  const dialog = modal.querySelector('.story-video-dialog');

  function resetMedia() {
    dialog?.classList.remove('portrait');
    if (iframe) {
      iframe.src = '';
      iframe.classList.remove('is-active');
    }
    if (video) {
      video.pause();
      video.removeAttribute('src');
      video.load();
      video.classList.remove('is-active');
    }
  }

  function closeModal() {
    modal.setAttribute('aria-hidden', 'true');
    resetMedia();
    document.body.style.overflow = '';
  }

  function openModal(videoUrl) {
    resetMedia();
    const isFile = /\.mp4($|\?)/i.test(videoUrl || '');

    if (isFile && video) {
      video.src = videoUrl;
      video.classList.add('is-active');
      dialog?.classList.add('portrait');
      video.play().catch(() => {});
    } else if (iframe) {
      iframe.src = videoUrl;
      iframe.classList.add('is-active');
    }

    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  document.addEventListener('click', (event) => {
    const button = event.target.closest('.story-play');
    if (!button) return;
    const videoUrl = button.getAttribute('data-video');
    if (!videoUrl) return;
    openModal(videoUrl);
  });

  [closeButton, backdrop].forEach((el) => {
    el?.addEventListener('click', closeModal);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && modal.getAttribute('aria-hidden') === 'false') {
      closeModal();
    }
  });
});
