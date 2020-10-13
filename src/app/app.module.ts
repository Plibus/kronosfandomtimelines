import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { QuillModule } from 'ngx-quill'
import { HomeComponent } from './home/home.component';
import { PostComponent } from './post/post.component';
import { FandomsListComponent } from './fandoms-list/fandoms-list.component';
import { FandomComponent } from './post/view/fandom/fandom.component';
import { TimelineComponent } from './post/view/timeline/timeline.component';
import { MapComponent } from './post/view/map/map.component';
import { FamilyTreeComponent } from './post/view/family-tree/family-tree.component';
import { TimelineCreateComponent } from './post/edit/forms/timeline-create/timeline-create.component';
import { MapCreateComponent } from './post/edit/forms/map-create/map-create.component';
import { PostCreateComponent } from './post/edit/forms/post-create/post-create.component';
import { ListElementComponent } from './post/page-components/list/list-element/list-element.component';
import { ListComponent } from './post/page-components/list/list.component';
import { SearchFandomComponent } from './post/view/search-fandom/search-fandom.component';
import { DefaultComponent } from './post/view/default/default.component';
import { FandomsGalleryComponent } from './post/view/fandoms-gallery/fandoms-gallery.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModalModule } from 'ngx-bootstrap/modal'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PostComponent,
    FandomsListComponent,
    FandomComponent,
    TimelineComponent,
    MapComponent,
    FamilyTreeComponent,
    TimelineCreateComponent,
    MapCreateComponent,
    PostCreateComponent,
    ListElementComponent,
    SearchFandomComponent,
    ListComponent,
    DefaultComponent,
    FandomsGalleryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ModalModule.forRoot(),
    QuillModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
