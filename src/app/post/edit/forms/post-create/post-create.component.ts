import { Component, OnInit, Input } from '@angular/core';
import { CreateComponent } from '../../create.component';
import { FormBuilder } from '@angular/forms';
import { PostService } from '../../../../services/post.service'
import { ImageService } from '../../../../services/image.service'
import * as $ from 'jquery';
import {Router} from '@angular/router';

@Component({
  selector: 'post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent extends CreateComponent implements OnInit {
  
  @Input() id: number;
  @Input() fandomId: number;
  @Input() type: string;
  @Input() catagory: string;
  images: any[];

  finished: string = 'Create';

  constructor (protected formBuilder: FormBuilder, protected http: PostService, protected imageService: ImageService, protected router: Router) {
    super(formBuilder, http, imageService, router);
  }

  ngOnInit(): void {
    console.log("id "+this.id)
    console.log("fandomId "+this.fandomId)
    console.log("type "+this.type)
    console.log("catagory "+this.catagory)
    this.postForm = this.formBuilder.group({
      fandomId: this.fandomId,
      type: [this.type],
      catagory: [this.catagory],
      theme: ['default'],
      name: ['insert title'],
      description: ['insert short descriptions'],
      sections: this.formBuilder.array([]),
      references: this.formBuilder.array([]),
      updator: 1,
      creator: 1
    });
    if (this.id != -1) { 
      this.finished = 'Update';
      this.getData();
    }
    this.imageService.fetchAllOfFandom(this.fandomId).subscribe(
      data => this.images = data
    );
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

  selectedImage(index, i) {
    $('#imagePreview' + i).attr('src', this.images[index].media);
    this.getSection('sections').at(i).patchValue({
      media: [this.images[index].media],
      mediaCaption: [this.images[index].mediaCaption],
      mediaAlt: [this.images[index].mediaAlt],
      mediaCredit: [this.images[index].mediaCredit]
    });
  }

  displayPopup(formId: string) {
    console.log(formId);
    document.getElementById(formId).style.display = "block";
  }

  closePopup(formId: string) {
    console.log(formId);
    document.getElementById(formId).style.display = "none";
  }

  onSubmit(value) {
    if (this.isNew()) {
      console.log("NEW: "+value)
      this.http.post(value).subscribe(
        response => this.router.navigate(['/post', response.fandomId, response.id, response.type, response.catagory, 0]),
        error=> console.log('error', error)
      );
    } else {
      console.log("UPDATE: "+value)
      this.http.put(value, this.id).subscribe(
        response => this.router.navigate(['/post', response.fandomId, response.id, response.type, response.catagory, 0]),
        error=> console.log('error', error)
      );
    }
  } 
}
