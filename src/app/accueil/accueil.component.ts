import { Component, OnInit } from '@angular/core';
import { ChansonsService } from '../chansons.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit{

  isResultLoaded = false;
  currentPage: number = 1;
  chanssonsArray:any=[]





  constructor( private chansonService: ChansonsService) {  }


  ngOnInit(): void {
    this.getAllChansons();
  }



  getAllChansons() {
    this.chansonService.getListOfSongs(this.currentPage)
      .subscribe((resultData: any) => {
        this.isResultLoaded = true;
        this.chanssonsArray = resultData.data;
        this.chanssonsArray.forEach((chanson:any) => {
          chanson.nomsaArtistescCollaborateurs = Array.isArray(chanson.nomsaArtistescCollaborateurs)
            ? chanson.nomsaArtistescCollaborateurs
            : [chanson.nomsaArtistescCollaborateurs];
        });
      });
  }

}
