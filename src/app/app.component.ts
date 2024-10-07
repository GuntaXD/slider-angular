import { Component } from '@angular/core';

interface ImageInfo{
  image: string,
  thumbImage: string,
  alt: string,
  title: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-components';

  // images = [
  //   "../../../assets/image-1.jpg",
  //   "../../../assets/image-2.jpg",
  //   "../../../assets/image-3.jpg",
  //   "../../../assets/image-4.jpg",
  //   "../../../assets/image-5.jpg",
  // ]

  imageObject: Array<ImageInfo> = [{
    image: 'https://picsum.photos/id/944/900/500',
    thumbImage: 'https://picsum.photos/id/944/900/500',
    alt: 'alt of image',
    title: 'title of image'
  },
  {
    image: 'https://picsum.photos/id/1011/900/500', // Support base64 image
    thumbImage: 'https://picsum.photos/id/1011/900/500', // Support base64 image
    title: 'Image title', //Optional: You can use this key if want to show image with title
    alt: 'Image alt', //Optional: You can use this key if want to show image with alt
    //order: 1 //Optional: if you pass this key then slider images will be arrange according @input: slideOrderType
  },
  {
    image: 'https://picsum.photos/id/984/900/500', // Support base64 image
    thumbImage: 'https://picsum.photos/id/984/900/500', // Support base64 image
    title: 'Image title', //Optional: You can use this key if want to show image with title
    alt: 'Image alt', //Optional: You can use this key if want to show image with alt
    //order: 1 //Optional: if you pass this key then slider images will be arrange according @input: slideOrderType
  },
  {
    image: 'https://picsum.photos/id/1011/900/500', // Support base64 image
    thumbImage: 'https://picsum.photos/id/1011/900/500', // Support base64 image
    title: 'Image title', //Optional: You can use this key if want to show image with title
    alt: 'Image alt', //Optional: You can use this key if want to show image with alt
  // order: 1 //Optional: if you pass this key then slider images will be arrange according @input: slideOrderType
  },
  {
    image: 'https://picsum.photos/id/1011/900/500', // Support base64 image
    thumbImage: 'https://picsum.photos/id/1011/900/500', // Support base64 image
    title: 'Image title', //Optional: You can use this key if want to show image with title
    alt: 'Image alt', //Optional: You can use this key if want to show image with alt
    //order: 1 //Optional: if you pass this key then slider images will be arrange according @input: slideOrderType
  },
  {
    image: 'https://picsum.photos/id/1011/900/500', // Support base64 image
    thumbImage: 'https://picsum.photos/id/1011/900/500', // Support base64 image
    title: 'Image title', //Optional: You can use this key if want to show image with title
    alt: 'Image alt', //Optional: You can use this key if want to show image with alt
    //order: 1 //Optional: if you pass this key then slider images will be arrange according @input: slideOrderType
  },{
    image: 'https://picsum.photos/id/1011/900/500', // Support base64 image
    thumbImage: 'https://picsum.photos/id/1011/900/500', // Support base64 image
    title: 'Image title', //Optional: You can use this key if want to show image with title
    alt: 'Image alt', //Optional: You can use this key if want to show image with alt
    //order: 1 //Optional: if you pass this key then slider images will be arrange according @input: slideOrderType
  },{
    image: 'https://picsum.photos/id/1011/900/500', // Support base64 image
    thumbImage: 'https://picsum.photos/id/1011/900/500', // Support base64 image
    title: 'Image title', //Optional: You can use this key if want to show image with title
    alt: 'Image alt', //Optional: You can use this key if want to show image with alt
    //order: 1 //Optional: if you pass this key then slider images will be arrange according @input: slideOrderType
  },{
    image: 'https://picsum.photos/id/1011/900/500', // Support base64 image
    thumbImage: 'https://picsum.photos/id/1011/900/500', // Support base64 image
    title: 'Image title', //Optional: You can use this key if want to show image with title
    alt: 'Image alt', //Optional: You can use this key if want to show image with alt
    //order: 1 //Optional: if you pass this key then slider images will be arrange according @input: slideOrderType
  },{
    image: 'https://picsum.photos/id/1011/900/500', // Support base64 image
    thumbImage: 'https://picsum.photos/id/1011/900/500', // Support base64 image
    title: 'Image title', //Optional: You can use this key if want to show image with title
    alt: 'Image alt', //Optional: You can use this key if want to show image with alt
    //order: 1 //Optional: if you pass this key then slider images will be arrange according @input: slideOrderType
  },
  ];
}
