import Rx from 'rxjs/Rx';

function zundoko() {
  document.querySelector('.zundoko').innerText = '';
  // ズンドコ本体
  Rx.Observable.interval(100)
    .map(() => Math.random() > 0.5 ? 'ずん' : 'どこ')
    .do(zd => document.querySelector('.zundoko').innerText += zd)
    .bufferCount(5, 1)
    .takeWhile(zds => zds.join('') !== 'ずんずんずんずんどこ')
    .subscribe(
      () => {},
      () => {},
      () => document.querySelector('.zundoko').innerText += 'きよし！'
    );
}

zundoko();

Rx.Observable
  .fromEvent(document.querySelector('button'), 'click')
  .subscribe(() => {
    zundoko();
  });