import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SplashScreenPage } from './pages/splash-screen/splash-screen.page';
import { HomePage } from './pages/home/home.page';
import { CharacterDetailsPage } from './pages/character-details/character-details.page';

@NgModule({
  declarations: [AppComponent, SplashScreenPage, CharacterDetailsPage],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent, SplashScreenPage],
})
export class AppModule {}
