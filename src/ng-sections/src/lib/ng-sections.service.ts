import {Injectable, TemplateRef} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";

interface SectionData {
  name: string;
  subject: BehaviorSubject<TemplateRef<any> | null>;
}

@Injectable({
  providedIn: 'root'
})
export class NgSectionsService {

  private sections: { [key: string]: SectionData; } = {};

  constructor() {
  }

  public registerSection(name: string, template: TemplateRef<any> | null): Observable<TemplateRef<any> | null> {
    if (!this.sections[name]) {
      this.sections[name] = {
        name: name,
        subject: new BehaviorSubject<TemplateRef<any> | null>(template)
      };
    }

    return this.sections[name].subject.asObservable();
  }

  public addTemplate(section: string, template: TemplateRef<any>): void {
    if (!this.sections[section]) {
      this.registerSection(section, template);
    } else {
      this.sections[section].subject.next(template);
    }
  }

  public removeTemplate(section: string): void {
    this.sections[section].subject.next(null);
  }
}
