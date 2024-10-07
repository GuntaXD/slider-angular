import { Component, ElementRef, Input, OnInit, Renderer2, ViewChild } from '@angular/core';

interface ImageInfo{
  image: string,
  thumbImage: string,
  alt: string,
  title: string
}

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit{
  @Input() images: Array<ImageInfo>
  @Input() imageSize = { width: '200px' , height: '200px' }

  thumbnailMargin = 4;
  thumbnailWidth = Number(this.imageSize.width.slice(0,-2))

  @ViewChild('carousel') carousel!: ElementRef;

  visible = false;

  srcImage: string = "";
  titleImage: string = "";
  altImage: string = "";
  indexImage: number = 0;

  constructor( 
    //private carousel: ElementRef
  ){
    
  }

  ngAfterViewInit(){
    console.log(this.carousel )
  }

  ngOnInit(){
    
  }

  onClickRight(){
    this.carousel.nativeElement.scrollLeft += this.thumbnailWidth + this.thumbnailMargin;
  }

  onClickLeft(){
    this.carousel.nativeElement.scrollLeft -= this.thumbnailWidth + this.thumbnailMargin;
  }

  showImage(index: number){
    this.visible = true;
    this.indexImage = index;
    this.srcImage = this.images[index].image;
    this.titleImage = this.images[index].title;
    this.altImage = this.images[index].alt;
  }

  nextButton(){
    if( this.indexImage + 1 <= this.images.length - 1){
      this.showImage( this.indexImage + 1 );
    }
  }

  prevButton(){
    if( this.indexImage - 1 >= 0 ){
      this.showImage( this.indexImage - 1 );
    }
  }

  exitButton(){
    this.visible = false;
  }
}
