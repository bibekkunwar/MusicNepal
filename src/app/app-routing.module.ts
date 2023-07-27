import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AudiopageComponent } from './Audio/audiopage/audiopage.component';
import { HomepageComponent } from './homepage/homepage.component';
import { GazalComponent } from './Audio/audiopage/gazal/gazal.component';



const routes: Routes = [
  {path:'',pathMatch:"full",component:HomepageComponent},
  { path: "audiopage", component: AudiopageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
