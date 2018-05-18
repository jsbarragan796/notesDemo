import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { DetailNotePage } from '../pages/detail-note/detail-note';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { CreateNotePage } from '../pages/create-note/create-note';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IonicStorageModule } from '@ionic/storage';
import { StorageNotesProvider } from '../providers/storage-notes/storage-notes';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    DetailNotePage,
    HomePage,
    TabsPage,
    CreateNotePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    DetailNotePage,
    HomePage,
    TabsPage,
    CreateNotePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    StorageNotesProvider
  ]
})
export class AppModule {}
