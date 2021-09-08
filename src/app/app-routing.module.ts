import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {CardFlexBoxComponent} from "./card-flex-box/card-flex-box.component";
import {ResponsiveByGridComponent} from "./responsive-by-grid/responsive-by-grid.component";
import {CardByGridComponent} from "./card-by-grid/card-by-grid.component";
import {LayoutUseGridComponent} from "./layout-use-grid/layout-use-grid.component";
import {LightBoxComponent} from "./light-box/light-box.component";
import {UseGridTipComponent} from "./grid/use-grid-tip/use-grid-tip.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'card-flex-box',
    component: CardFlexBoxComponent
  },
  {
    path: 'grid-responsive',
    component: ResponsiveByGridComponent
  },
  {
    path: 'grid-responsive-for-card',
    component: CardByGridComponent
  },
  {
    path: 'layout-use-grid',
    component: LayoutUseGridComponent
  },
  {
    path: 'light-box',
    component: LightBoxComponent
  },
  {
    path: 'use-grid-tip',
    component: UseGridTipComponent
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
