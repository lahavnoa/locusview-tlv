import {Component, OnDestroy, OnInit} from '@angular/core';
import {Images} from 'angular-responsive-carousel/lib/interfaces';

@Component({
  selector: 'lv-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class LvHeaderComponent implements OnInit, OnDestroy {
  selectedImage = '';
  imageCounter = 0;
  images = [
    './../../assets/header-image-1920-1.png',
    './../../assets/header-image-1920-2.png',
    './../../assets/header-image-1920-3.png',
  ];
  slideImages: Images = [
    {
      path: './../../assets/header-image-1920-1.png'
    },
    {
      path: './../../assets/header-image-1920-2.png'
    },
    {
      path: './../../assets/header-image-1920-3.png'
    }
  ];
  interval = 0;

  constructor() {
  }

  ngOnInit(): void {
    this.selectedImage = './../../assets/header-image-1920.png';
    // this.interval = setInterval(() => {
    //   this.imageCounter++;
    //   if (this.imageCounter === this.images.length) {
    //     this.imageCounter = 0;
    //   }
    //   this.selectedImage = this.images[this.imageCounter];
    // }, 3000);
  }

  public scrollToJobs(): void {
    document.getElementById('jobs')?.scrollIntoView({behavior: 'smooth'});
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }
}
