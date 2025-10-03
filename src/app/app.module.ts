import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './modules/workbench/layout/components/header/header.component';
import { MainModule } from './modules/workbench/main/main.module';
import { HomeComponent } from './modules/workbench/main/components/home/home.component';
import { MainComponent } from './modules/workbench/main/components/main/main.component';
import { AboutMeComponent } from './modules/workbench/main/components/about-me/about-me.component';
import { LatestVideosComponent } from './modules/workbench/main/components/latest-videos/latest-videos.component';
import { ProductLinksComponent } from './modules/workbench/main/components/product-links/product-links.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    MainComponent,
    AboutMeComponent,
    LatestVideosComponent,
    ProductLinksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
