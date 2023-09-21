import { NgModule } from '@angular/core';
import {NgSectionOutletComponent} from "./ng-section-outlet/ng-section-outlet.component";
import {NgSectionDirective} from "./ng-section.directive";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [
    NgSectionOutletComponent,
    NgSectionDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NgSectionOutletComponent,
    NgSectionDirective
  ]
})
export class NgSectionsModule { }
