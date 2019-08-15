import { Component, OnInit } from '@angular/core';
import { BestiesService } from '../../../services/besties.service';

@Component({
  selector: 'app-besties',
  templateUrl: './besties.component.html',
  styleUrls: ['./besties.component.css'],
  providers: [BestiesService]
})
export class BestiesComponent implements OnInit {
  bestie;

  constructor(
    private bestiesService: BestiesService
  ) { }

  ngOnInit() {
    this.bestiesService.bestieSelected.subscribe(
      (bestie) => {
        this.bestie = bestie;
        console.log(bestie);
      }
    )
  }

}
