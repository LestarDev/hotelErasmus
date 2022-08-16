import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './shared/menu/menu.component';
import { ListElementComponent } from './shared/list-element/list-element.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { LogoComponent } from './shared/logo/logo.component';
import { ButtonComponent } from './shared/button/button.component';
import { HomeArrowButtonComponent } from './shared/home-arrow-button/home-arrow-button.component';
import { LoadingAnimationComponent } from './shared/loading-animation/loading-animation.component';
import { CdkVirtualScrollHorizontalExampleComponent } from './shared/cdk-virtual-scroll-horizontal-example/cdk-virtual-scroll-horizontal-example.component';

import { TitleComponent } from './shared/title/title.component';
import { BookingComponent } from './pages/booking/booking.component';
import { ArrowToSliderComponent } from './shared/arrow-to-slider/arrow-to-slider.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BookingCardComponent } from './shared/booking-card/booking-card.component';
import { SliderCommentsComponent } from './shared/slider-comments/slider-comments.component';
import { FooterComponent } from './shared/footer/footer.component';
import { GuestOptionComponent } from './shared/guest-option/guest-option.component';
import { SliderVerticalComponent } from './shared/slider-vertical/slider-vertical.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ListElementComponent,
    MainPageComponent,
    LogoComponent,
    ButtonComponent,
    HomeArrowButtonComponent,
    LoadingAnimationComponent,
    CdkVirtualScrollHorizontalExampleComponent,
    TitleComponent,
    BookingComponent,
    ArrowToSliderComponent,
    BookingCardComponent,
    SliderCommentsComponent,
    FooterComponent,
    GuestOptionComponent,
    SliderVerticalComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
