import { Component, ElementRef, OnInit } from '@angular/core';
import { VERSION, ViewEncapsulation } from "@angular/core";
import lgZoom from 'lightgallery/plugins/zoom';
import { BeforeSlideDetail } from 'lightgallery/lg-events';
import * as $ from 'jquery';


@Component({
  selector: 'app-anniversary',
  templateUrl: './anniversary.component.html',
  styleUrls: ['./anniversary.component.css']
})
export class AnniversaryComponent   {

/* The `settings` object is defining the configuration options for the lightgallery plugin. It has two
properties: `counter` and `plugins`. The `counter` property is set to `false`, which means that the
counter will not be displayed in the lightgallery. The `plugins` property is an array that includes
the `lgZoom` plugin, which enables zoom functionality in the lightgallery. */
  // settings = {
  //   counter: false,
  //   plugins: [lgZoom]
  // };
  // onBeforeSlide = (detail: BeforeSlideDetail): void => {
  // };


}
