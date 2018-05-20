import { RhymesService } from './services/rhymes.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RhymesCreatorComponent } from './rhymes-creator/rhymes-creator.component';
import { LyricsEditorComponent } from './lyrics-editor/lyrics-editor.component';
import { BookOfRhymesComponent } from './book-of-rhymes/book-of-rhymes.component';
import { LyricsBaseComponent } from './lyrics-base/lyrics-base.component';
import { NavigationComponent } from './navigation/navigation.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RhymePageComponent } from './rhyme-page/rhyme-page.component';
import { FormsModule } from '@angular/forms';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'rhymes-creator', component: RhymesCreatorComponent },
  { path: 'lyrics-editor', component: LyricsEditorComponent },
  { path: 'book-of-rhymes', component: BookOfRhymesComponent },
  { path: 'lyrics-base', component: LyricsBaseComponent },
  { path: 'create-account', component: CreateAccountComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', component: PageNotFoundComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RhymesCreatorComponent,
    LyricsEditorComponent,
    BookOfRhymesComponent,
    LyricsBaseComponent,
    NavigationComponent,
    CreateAccountComponent,
    LoginComponent,
    FooterComponent,
    PageNotFoundComponent,
    RhymePageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    ),
    FormsModule
  ],
  providers: [
    RhymesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
