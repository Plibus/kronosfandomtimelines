import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { FandomsListComponent } from './fandoms-list/fandoms-list.component';
import { PostComponent } from './post/post.component';
import { SearchFandomComponent } from './post/view/search-fandom/search-fandom.component';
import { FandomsGalleryComponent } from './post/view/fandoms-gallery/fandoms-gallery.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'fandoms', component: FandomsListComponent },
  { path: 'post/:fandomId/:id/:type/:catagory/:edit', component: PostComponent },
  { path: 'searchfandom/:id/:name/:type/:catagory', component: SearchFandomComponent },
  { path: 'post/gallery/:id/:name', component: FandomsGalleryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
