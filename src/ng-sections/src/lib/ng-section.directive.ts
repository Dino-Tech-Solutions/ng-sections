import {Directive, Input, OnDestroy, OnInit, TemplateRef} from '@angular/core';
import {NgSectionsService} from "./ng-sections.service";

@Directive({
  selector: 'ng-template[ng-section]'
})
export class NgSectionDirective implements OnInit, OnDestroy {

  @Input('ng-section') sectionName!: string;

  constructor(public templateRef: TemplateRef<any>,
              private sectionsService: NgSectionsService) {
  }

  ngOnInit(): void {
    this.sectionsService.addTemplate(this.sectionName, this.templateRef);
  }

  ngOnDestroy(): void {
    this.sectionsService.removeTemplate(this.sectionName);
  }
}
