import {Component, OnInit} from '@angular/core';
import {NlpService} from "../nlp.service";
import {Subject} from "rxjs/Subject";
import {Observable} from "rxjs/Observable";

@Component({
  moduleId: module.id,
  selector: 'aisles',
  templateUrl: 'aisles.component.html',
  styleUrls: ['aisles.component.css']
})
export class AislesComponent implements OnInit {
  private aisleNameStream = new Subject<string>();

  constructor(private nlpService:NlpService) {
  }

  ngOnInit() {
  }

  private getAisles(term:string) {
    if (term) {
      return this.aisleNameStream.next(term);
    }
  }

  public items:Observable<string[]> =
    this.aisleNameStream
      .debounceTime(300)
      .distinctUntilChanged()
      .switchMap((term:string) => this.nlpService.getAisles(term));

  public getAllAisles():Observable<string[]> {
    return this.nlpService.getAllAisles();
  }
}
