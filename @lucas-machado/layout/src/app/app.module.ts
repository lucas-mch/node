import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavBarLeftComponent } from './nav-bar-left/nav-bar-left.component';
import { NavBarRightComponent } from './nav-bar-right/nav-bar-right.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent, HeaderComponent, FooterComponent, NavBarLeftComponent, NavBarRightComponent, DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent,]
})
export class AppModule { }
