import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { HttpClientModule } from "@angular/common/http";
import { CanActivateRouteGuard } from './guards/auth.guard';
import { LoggedGuard } from './guards/logged.guard';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ CanActivateRouteGuard, LoggedGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
