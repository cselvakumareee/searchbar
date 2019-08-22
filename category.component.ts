import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
deals: any[] = ['Home', 'Fashion', 'gym', 'car', 'world', 'fine', 'cool', 'bike', 'scooty', 'book', 'mobile', 'stove' ];
  constructor() {
    // tslint:disable-next-line: only-arrow-functions
    $(document).ready(function() {
      // tslint:disable-next-line: only-arrow-functions
      $('#btn-nav-previous').click(function() {
        $('.menu-inner-box').animate({ scrollLeft: '-=240px'});
      });

      // tslint:disable-next-line: only-arrow-functions
      $('#btn-nav-next').click(function() {
        $('.menu-inner-box').animate({ scrollLeft: '+=240px'});
      });
    });
   }

  ngOnInit() {
  }

}

