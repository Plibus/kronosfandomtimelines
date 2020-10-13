import { Component, OnInit, Input } from '@angular/core';
import { CreateComponent } from '../../create.component';
import { FormBuilder } from '@angular/forms';
import { PostService } from '../../../../services/post.service'
import { ImageService } from '../../../../services/image.service'
import * as $ from 'jquery';
import {Router} from '@angular/router';

@Component({
  selector: 'map-create',
  templateUrl: './map-create.component.html',
  styleUrls: ['./map-create.component.css']
})
export class MapCreateComponent extends CreateComponent implements OnInit {

  @Input() id: number;
  @Input() fandomId: number;
  @Input() type: string;
  @Input() catagory: string;

  constructor (protected formBuilder: FormBuilder, protected http: PostService, protected imageService: ImageService, protected router: Router) {
    super(formBuilder, http, imageService, router);
  }

  ngOnInit(): void {
    this.postForm = this.formBuilder.group({
      pageTitle: ['insert title'],
      sections: this.formBuilder.array([]),
      references: this.formBuilder.array([])
    });
    if (this.id != -1) { 
      this.getData();
    }
  }

  getData() {
    this.http.fetch(this.id).subscribe(
      data=>{
        this.post = data[0][0];  
        this.postForm.patchValue({     
          theme: this.post['theme'],
          name: this.post['name'],
          description: this.post['description'],
          updator: this.post['updator'],
          creator: this.post['creator']
        })
        this.post.data['sections'].forEach(value => {
          this.loadSection('sections', value);
        });
      }
    );
  }
  
}
