import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AddPostComponent } from './add-post/add-post.component';
const routes: Routes = [
  {path: "about", component:AboutComponent},
  {path: "addpost", component:AddPostComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
