import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  AfterViewInit,
  OnDestroy,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss'],
})
export class ImgComponent
  implements OnInit, OnChanges, AfterViewInit, OnDestroy
{
  imge  : string = '';
  @Input('imge')
  set changeImg(newImg: string) {
    this.imge = newImg;
    console.log('change just imge =>', this.imge);
  }
  @Input() img: string = 'valor inicial';
  @Output() loaded = new EventEmitter<string>();
  imageDefault = './../../../assets/default.png';
  counter = 0;
  counterFn: number | undefined;
  constructor() {
    //before render
    // NO async -- once time
    console.log('constructor', 'imgValue =>', this.img);
  }
  ngOnChanges(changes: SimpleChanges) {
    //before render
    // changes inputs -- time
    console.log('ngOnChanges', 'imgValue =>', this.img);
    console.log(changes);
  }
  ngOnInit(): void {
    //before render
    //  async - fetch -- once time
 /*    console.log('ngOnInit', 'imgValue =>', this.img);
    this.counterFn = window.setInterval(() => {
      this.counter += 1;
      console.log('run counter');
    }, 1000); */
  }
  ngAfterViewInit(): void {
    //after render
    //handler children
  /*   console.log('ngAfterViewInit'); */
  }
  ngOnDestroy() {
    //delete component
   /*  console.log('ngOnDestroy'); */
    window.clearInterval(this.counterFn);
  }

  imgError() {
    this.img = this.imageDefault;
  }

  imgLoaded() {
   /*  console.log('log hijo'); */
    this.loaded.emit(this.img);
  }
}
