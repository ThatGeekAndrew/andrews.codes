import {
  BrowserModule,
  BrowserTransferStateModule
} from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

// Firestarter App Modules
import { CoreModule } from './core/core.module';
import { UploadsModule } from './uploads/uploads.module';
import { UiModule } from './ui/ui.module';
import { NotesModule } from './notes/notes.module';

// @angular/fire/ Modules
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireFunctionsModule } from '@angular/fire/functions';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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

// IMPORTANT
// Add your own project credentials to environments/*.ts

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserTransferStateModule,
    AppRoutingModule,
    CoreModule,
    UiModule,
    NotesModule,
    UploadsModule,
    AngularFireModule.initializeApp(environment.firebase, 'firestarter'),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    AngularFireFunctionsModule,
    BrowserAnimationsModule,
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
    ServiceWorkerModule.register('/ngsw-worker.js', {
      enabled: environment.production
    })
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
