import { Section } from '../../classes/model/section';
import { FormGroup, FormArray, FormBuilder } from '@angular/forms';
import * as $ from 'jquery';
import { PostService } from '../../services/post.service';
import { ImageService } from '../../services/image.service'
import { Component, Input } from '@angular/core';
import { Post } from '../../models/Post'
import {Router} from '@angular/router';

@Component({
  selector: 'create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})

export class CreateComponent {
  
  @Input() id: number;

  sectionTypes: Section[] = [new Section('Select a section type', 0), 
                            new Section('text', 1), 
                            new Section('text with picture on the left', 2), 
                            new Section('text with picture on the right', 3)];

  post: Post;  
  selectedSectionType: number = 0;
  postForm: FormGroup;
  defaultImage: string = '../../../../assets/no-image.png';

  constructor (protected formBuilder: FormBuilder, protected http: PostService, protected imageService: ImageService, protected router: Router) {}

  isNew() {
    if (this.id == -1) {
      return true
    }
    return false
  }

  selectSectionOption(id: number) {
    this.selectedSectionType = id;
  }

  getSection(arrayName: string) {
    return this.postForm.get(arrayName) as FormArray;
  }

  addSection(arrayName: string) {
    if (this.selectedSectionType != 0) {
      this.getSection(arrayName).push(this.getSectionForm(null));
    }
  }

  loadSection(arrayName: string, value) {
    this.getSection(arrayName).push(this.getSectionForm(value));
  }

  removeSection(arrayName: string, i:number) {
    this.getSection(arrayName).removeAt(i);
  }

  addReference(id: number) {
    (this.postForm.get('references') as FormArray).push(this.getRefernce(id));
  }

  getRefernce(id) {
    return this.formBuilder.group({
      id:[id]
    });
  }

  getSectionForm(value) {
    if ( value == null ) {
      if (this.selectedSectionType == 1) {
        return this.textForm(null);
      }
      if (this.selectedSectionType == 2) {
        return this.textLPForm(null);
      }
      if (this.selectedSectionType == 3) {
        return this.textRPForm(null);
      }
      if (this.selectedSectionType == 4) {
        return this.tableForm(null);
      }
    } else {
      var type: string = value.type;
      if (type == 'text') {
        return this.textForm(value);
      }
      if (type == 'textLP') {
        return this.textLPForm(value);
      }
      if (type == 'textRP') {
        return this.textRPForm(value);
      }
      if (type == 'table') {
        return this.tableForm(value);
      }
    }
  }

  textForm(data) {
    if ( data == null ) {
      return this.formBuilder.group({
        type:['text'],
        sectionTitle: ['Insert textForm section title'],
        text: ['Insert textForm section text']
      });
    } else {
      return this.formBuilder.group({
        type:[data.type],
        sectionTitle: [data.sectionTitle],
        text: [data.text]
      });
    }
  }

  textLPForm(data) {
    console.log(data);
    if ( data == null ) {
      return this.formBuilder.group({
        type:['textLP'],
        sectionTitle: ['Insert textLP section title'],
        text: ['Insert textLP section text'],
        media: [''],
        mediaCaption: ['media caption'],
        mediaAlt: ['media alt'],
        mediaCredit: ['media credit']
      });
    } else {
      return this.formBuilder.group({
        type:[data.type],
        sectionTitle: [data.sectionTitle],
        text: [data.text],
        media: [data.media],
        mediaCaption: [data.mediaCaption],
        mediaAlt: [data.mediaAlt],
        mediaCredit: [data.mediaCredit]
      });
    }
  }

  textRPForm(data) {
    console.log(data);
    if ( data == null ) {
      return this.formBuilder.group({
        type:['textRP'],
        sectionTitle: ['Insert textRP section title'],
        text: ['Insert textRP section text'],
        media: [''],
        mediaCaption: ['media caption'],
        mediaAlt: ['media alt'],
        mediaCredit: ['media credit']
      });
    } else {
      return this.formBuilder.group({
        type:[data.type],
        sectionTitle: [data.sectionTitle],
        text: [data.text],
        media: [data.media],
        mediaCaption: [data.mediaCaption],
        mediaAlt: [data.mediaAlt],
        mediaCredit: [data.mediaCredit]
  
      });
    }
  }

  tableForm(data) {
    if ( data == null ) {
      return this.formBuilder.group({
        type:['table'],
        sectionTitle: ['Insert table section title'],
        text: ['Insert table section text']
      });
    } else {
      return this.formBuilder.group({
        type:[data.type],
        sectionTitle: [data.sectionTitle],
        text: [data.text]
      });
    }
  }

  previewImage(fileInput: any, location: string){
    if (fileInput.target.files && fileInput.target.files[0]) {
      var reader = new FileReader();
      reader.onload = function (e : any) {
        $(location).attr('src', e.target.result);
      }
      reader.readAsDataURL(fileInput.target.files[0]);
    }
  }

  onSubmit(value) {
    if (this.isNew()) {
      console.log("NEW: "+value)
      this.http.post(value).subscribe(
        response => console.log('success', response),
        error=> console.log('error', error)
      );
    } else {
      console.log("UPDATE: "+value)
      this.http.put(value, this.id).subscribe(
        response => console.log('success', response),
        error=> console.log('error', error)
      );
    }
  }
}