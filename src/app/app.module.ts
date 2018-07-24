import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { NavbarComponent } from './navbar/navbar.component';
import { JumbotonComponent } from './jumboton/jumboton.component';
import { BlogComponent } from './blog/blog.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { environment } from '../environments/environment';

const myRouters:Routes = [
  {path: '', component:HomeComponent},
  {path: 'about', component:AboutComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    NavbarComponent,
    JumbotonComponent,
    BlogComponent,
    FooterComponent,
    AboutComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    RouterModule.forRoot(myRouters)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
