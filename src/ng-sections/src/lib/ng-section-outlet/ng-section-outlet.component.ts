import {Component, Input, OnDestroy, OnInit, TemplateRef} from '@angular/core';
import {Subscription} from "rxjs";
import {NgSectionsService} from "../ng-sections.service";

@Component({
  selector: 'ng-section-outlet',
  templateUrl: './ng-section-outlet.component.html'
})
export class NgSectionOutletComponent implements OnInit, OnDestroy {
  @Input() name!: string;

  public templateRef: TemplateRef<any> | null = null;
  private sub!: Subscription;

  constructor(private sectionsService: NgSectionsService) {
  }

  ngOnInit(): void {
    this.sub = this.sectionsService.registerSection(this.name, null)
      .subscribe((templateRef) => {
        this.templateRef = templateRef;
      });
  }

  ngOnDestroy(): void {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }
}
