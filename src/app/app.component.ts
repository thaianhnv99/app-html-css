import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myApp';
  constructor() {
    // translate.addLangs(['en-US', 'fr-FR']);
    // translate.setDefaultLang('en-US');
    //
    // const browserLang = translate.getBrowserLang();
    // translate.use(browserLang.match(/fr|fr-FR/) ? 'fr-FR' : 'en-US');
  }
}
