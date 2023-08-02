import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css'],
})
export class PlayerComponent implements OnInit {
  playlist: any = {};
  playLink: any ='https://nplb.truestreamz.com/mnm-audio/713339172637/NOAPC0610280-preview.mp3/playlist.m3u8?wmsAuthSign=c2VydmVyX3RpbWU9OC8yLzIwMjMgODoyMzoxNiBBTSZoYXNoX3ZhbHVlPTFsZUpuUG94djZqR2ptS1F2SjNTb3c9PSZ2YWxpZG1pbnV0ZXM9NTAwJmlkPTE=';

  constructor(){}
  ngOnInit(){

  }








}
