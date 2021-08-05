export const modal = () => {
  let modal = $('.modal');
  let modal_box = $('.modal__box');
  let open_btn = $('.js-openModal');
  let close_btn = $('.modal__box__closeButton');

  open_btn.click(() => {
    modal.addClass('is-open');
  });

  close_btn.click(() => {
    modal.removeClass('is-open');
  });
};
