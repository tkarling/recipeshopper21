import { Component, OnInit } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';

import {MdButton} from '@angular2-material/button';
import {MdIcon} from '@angular2-material/icon';
import {MdIconRegistry} from '@angular2-material/icon/icon-registry';

@Component({
  moduleId: module.id,
  selector: 'app-testing',
  directives: [MdButton, MdIcon],
  providers: [HTTP_PROVIDERS],
  viewProviders: [MdIconRegistry],
  template: `
  <div>Hallo from app testing</div>
  <md-icon svgIcon="thumb-up" class="green"></md-icon>
  <div><md-icon>home</md-icon></div>
  <div><button md-fab class="md-primary md-hue-2" aria-label="Profile">
    <md-icon>android</md-icon>
  </button></div>`,
  styleUrls: ['testing.component.css']
})
export class TestingComponent implements OnInit {

  constructor(mdIconRegistry: MdIconRegistry) {
        mdIconRegistry
        .addSvgIcon('thumb-up', '/app/assets/thumbup-icon.svg')
        .addSvgIconSetInNamespace('core', '/demo-app/icon/assets/core-icon-set.svg')
        .registerFontClassAlias('fontawesome', 'fa');
  }


  ngOnInit() {
  }

}
