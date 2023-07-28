import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AudiopageComponent } from './Audio/audiopage/audiopage.component';
import { HomepageComponent } from './homepage/homepage.component';
import { VideoPageComponent } from './videoPage/videoPage.component';



const routes: Routes = [
  {path:'',pathMatch:"full",component:HomepageComponent},
  { path: "audio", component: AudiopageComponent},
  {path: 'video', component: VideoPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
