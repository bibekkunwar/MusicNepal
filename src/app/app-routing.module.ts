import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AudiopageComponent } from './Audio/audiopage/audiopage.component';
import { HomepageComponent } from './homepage/homepage.component';
import { VideoPageComponent } from './videoPage/videoPage.component';
import { RadioComponent } from './Radio/Radio.component';
import { PlayerComponent } from './layouts/player/player.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactPageComponent } from './contact-page/contact-page.component';



const routes: Routes = [
  {path:'',pathMatch:"full",component:HomepageComponent},
  { path: "audio", component: AudiopageComponent},
  {path: 'video', component: VideoPageComponent},
  {path: 'radio', component: RadioComponent},
  { path: 'album', component: PlayerComponent},
  {path: 'about-us', component: AboutUsComponent},
  {path : 'contact-us', component: ContactPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
