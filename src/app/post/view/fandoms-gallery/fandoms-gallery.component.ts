import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ImageService } from '../../../services/image.service'
import * as $ from 'jquery';
import { ActivatedRoute } from '@angular/router';
import { Image } from '../../../models/Image'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-fandoms-gallery',
  templateUrl: './fandoms-gallery.component.html',
  styleUrls: ['./fandoms-gallery.component.css']
})
export class FandomsGalleryComponent implements OnInit {
  @ViewChild('fileInput', { static: false }) fileInput: ElementRef;
  selectedFile = null;
  uploadForm: FormGroup;
  defaultImage: string = '../../../../assets/no-image.png';
  fileName: File = null;
  fandomId: number;
  images$: Observable<Image[]>

  constructor(protected formBuilder: FormBuilder, protected http: ImageService, protected route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.fandomId = params.id;
      this.uploadForm = this.formBuilder.group({
        fandomId: [this.fandomId],
        media: [''],
        mediaCaption: ['media caption'],
        mediaAlt: ['media alt'],
        mediaCredit: ['media credit'],
        uploader: 1,
      });
    })
    this.images$ = this.http.fetchAllOfFandom(this.fandomId);
  }

  displayPopup(formId: string) {
    console.log(formId);
    document.getElementById(formId).style.display = "block";
  }

  closePopup(formId: string) {
    console.log(formId);
    document.getElementById(formId).style.display = "none";
  }

  onFileSelect(event){
    this.previewImage(event);
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.uploadForm.get('media').setValue(file);
    }
  }

  previewImage(fileInput: any){
    if (fileInput.target.files && fileInput.target.files[0]) {
      var reader = new FileReader();
      reader.onload = function (e : any) {
        $('#imagePreview').attr('src', e.target.result);
      }
      reader.readAsDataURL(fileInput.target.files[0]);
    }
  }

  public onSubmit() {
    const formData = new FormData();
    formData.append('media', this.uploadForm.get('media').value);
    formData.append('fandomId', this.uploadForm.get('fandomId').value);
    formData.append('mediaCaption', this.uploadForm.get('mediaCaption').value);
    formData.append('mediaAlt', this.uploadForm.get('mediaAlt').value);
    formData.append('mediaCredit', this.uploadForm.get('mediaCredit').value);
    formData.append('uploader', this.uploadForm.get('uploader').value);
    this.http.post(formData).subscribe(
      (res) => console.log(res),
      (err) => console.log(err)
    );   
  }
}