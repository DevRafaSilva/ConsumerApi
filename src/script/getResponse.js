export default class getResponseApi {
  constructor(response, dataBtn, spanAnimate, textSpan) {
    this.response = response;
    this.dataBtn = document.querySelector(dataBtn);
    this.spanAnimate = document.querySelector(spanAnimate);
    this.textSpan = document.querySelector(textSpan);
  }

  hiddenBtn() {
    this.dataBtn.classList.add('hidden');
    this.textSpan.classList.remove('text-orange-800');
    this.dataBtn.classList.remove('bg-orange-400');
    this.textSpan.classList.remove('text-green-900');
    this.dataBtn.classList.remove('bg-green-400');
  }

  animeBtn() {
    console.log(this.idInterval);
    console.log(this.spanAnimate);
    this.textSpan.innerText = this.response.status;

    this.dataBtn.classList.remove('hidden');
    this.dataBtn.classList.add(
      'relative',
      'block',
      'px-3',
      'py-2',
      'rounded-md',
      'font-medium',
      'overflow-hidden',
    );
    this.spanAnimate.classList.add(
      'absolute',
      'inset-0',
      'border-b-4',
      'animate-contract',
      'scale-x-[1]',
      'animate-contract',
      'transform',
      'origin-center',
    );

    console.log(this.response.status);

    if (
      this.response.status === 200 ||
      this.response.status === 201 ||
      this.response.status === 204
    ) {
      this.textSpan.classList.add('text-green-900');
      this.dataBtn.classList.add('bg-green-400');
    } else if (this.response.status === 404) {
      console.log('else');
      this.textSpan.classList.remove('text-green-900');
      this.textSpan.classList.add('text-orange-800');
      this.dataBtn.classList.add('bg-orange-400');
    }
  }

  init() {
    this.animeBtn();
    let idInterval = setInterval(() => {
      this.hiddenBtn();
      clearInterval(idInterval);
    }, 1980);
  }
}
