import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { UserLoginComponent } from './user-login/user-login.component';
import { HomePageComponent } from './home-page/home-page.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { NotificationMessageComponent } from './notification-message/notification-message.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserFormComponent } from './user-form/user-form.component';
import { SsrPageComponent } from './ssr-page/ssr-page.component';

import { FlexLayoutModule } from '@angular/flex-layout';

import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';

import {
  MatToolbarModule,
  MatSidenavModule,
  MatButtonModule,
  MatCheckboxModule,
  MatSlideToggleModule,
  MatMenuModule,
  MatIconModule,
  MatCardModule,
  MatBadgeModule,
  MatListModule,
  MatInputModule,
  MatGridListModule,
  MatTooltipModule,
  MatDialogModule,
  MatTabsModule,
  MatExpansionModule,
  MatRippleModule,
  MatChipsModule,
  MatSnackBarModule,
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    MatMenuModule,
    MatIconModule,
    MatCardModule,
    MatBadgeModule,
    MatListModule,
    MatInputModule,
    MatGridListModule,
    MatTooltipModule,
    MatDialogModule,
    MatTabsModule,
    MatExpansionModule,
    MatRippleModule,
    MatChipsModule,
    MatSnackBarModule,
    FlexLayoutModule,
    ScrollToModule.forRoot(),
  ],
  declarations: [
    UserLoginComponent,
    HomePageComponent,
    MainNavComponent,
    LoadingSpinnerComponent,
    NotificationMessageComponent,
    UserProfileComponent,
    UserFormComponent,
    SsrPageComponent,
  ],
  exports: [
    MainNavComponent,
    LoadingSpinnerComponent,
    NotificationMessageComponent,
    UserProfileComponent,
    UserFormComponent
  ]
})
export class UiModule {}
