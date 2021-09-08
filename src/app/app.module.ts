import {LOCALE_ID, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {RouterModule} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {CardFlexBoxComponent} from "./card-flex-box/card-flex-box.component";
import {AppRoutingModule} from "./app-routing.module";
import {CardByGridComponent} from "./card-by-grid/card-by-grid.component";
import {LayoutUseGridComponent} from "./layout-use-grid/layout-use-grid.component";
import {LightBoxComponent} from "./light-box/light-box.component";
import {ResponsiveByGridComponent} from "./responsive-by-grid/responsive-by-grid.component";
import {CrystalLightboxModule} from "@crystalui/angular-lightbox";
import {IonicModule} from "@ionic/angular";
import {ReactiveFormsModule} from "@angular/forms";
import {UseGridTipComponent} from './grid/use-grid-tip/use-grid-tip.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    CardFlexBoxComponent,
    HomeComponent,
    CardByGridComponent,
    LayoutUseGridComponent,
    LightBoxComponent,
    ResponsiveByGridComponent,
    UseGridTipComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    CrystalLightboxModule,
    IonicModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
