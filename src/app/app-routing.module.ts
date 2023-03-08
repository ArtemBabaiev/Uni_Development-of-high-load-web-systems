import {Injectable, NgModule} from '@angular/core';
import {RouterModule, RouterStateSnapshot, Routes, TitleStrategy} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {AboutComponent} from "./about/about.component";
import {ContactsComponent} from "./contacts/contacts.component";
import {Page404Component} from "./page404/page404.component";
import {Title} from "@angular/platform-browser";

const routes: Routes = [
  {path: "home", component: HomeComponent, title: "Home Page"},
  {path: "about", component: AboutComponent, title: "About Page"},
  {path: "contacts", component: ContactsComponent, title: "Contacts Page"},
  {path: "", redirectTo: "/home", pathMatch: "full"},
  {path: "**", component: Page404Component, title: "404 Page"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

@Injectable({providedIn: 'root'})
export class TemplatePageTitleStrategy extends TitleStrategy {
  constructor(private readonly title: Title) {
    super();
  }

  override updateTitle(routerState: RouterStateSnapshot) {
    const title = this.buildTitle(routerState);
    if (title !== undefined) {
      this.title.setTitle(`My Application | ${title}`);
    }
  }
}
