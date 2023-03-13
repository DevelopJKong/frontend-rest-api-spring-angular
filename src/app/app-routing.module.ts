import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { CommunitiesComponent } from './communities/communities.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: "auth/login" , component: LoginComponent },
  { path: "auth/register" , component: RegisterComponent },
  { path: "communities" , component: CommunitiesComponent },
  { path: "contact" , component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
