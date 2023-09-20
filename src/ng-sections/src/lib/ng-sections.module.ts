import { NgModule } from '@angular/core';
import {NgSectionOutletComponent} from "./ng-section-outlet/ng-section-outlet.component";
import {NgSectionDirective} from "./ng-section.directive";

@NgModule({
  declarations: [
    NgSectionOutletComponent,
    NgSectionDirective
  ],
  imports: [
  ],
  exports: [
    NgSectionOutletComponent,
    NgSectionDirective
  ]
})
export class NgSectionsModule { }
