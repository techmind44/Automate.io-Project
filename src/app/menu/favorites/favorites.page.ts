import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
})
export class FavoritesPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  //array of labels' notes
  notes = [
    {
      title: 'fav note',
      label: '',
      content: 'need to finish homework today'
    },
    {
      title: 'weekly specials',
      label: 'groceries',
      content: 'must buy coffee from this week\'s specials\' catalogue'
    },
    {
      title: 'to watch again',
      label: 'series',
      content: 'mr.robot!!!'
    }
  ];

}
