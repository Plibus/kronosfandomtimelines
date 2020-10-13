import { Component, OnInit, Input } from '@angular/core';
import { Slide } from '../../../../classes/model/slide';
import { FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { PostService } from '../../../../services/post.service'
import * as $ from 'jquery';

@Component({
  selector: 'timeline-create',
  templateUrl: './timeline-create.component.html',
  styleUrls: ['./timeline-create.component.css']
})
export class TimelineCreateComponent implements OnInit {

  @Input() protected id: number;

  selectedSlideType: number = 0;
  postForm: FormGroup;

  slideTypes: Slide[] = [new Slide('title slide', 0, 'title'), 
                        new Slide('event slide', 1, 'event'), 
                        new Slide('event span slide', 2, 'event'), 
                        new Slide('era slide', 3, 'era')];

  constructor(private formBuilder: FormBuilder, protected http: PostService) { }

  ngOnInit(): void {
  }

  timelineForm(data: any) {
    var temp: FormGroup = this.formBuilder.group({
      type:['timeline'],
      title: ['Insert timeline section title'],
      description: ['Insert timeline section text'],
      timeline: this.formBuilder.group({
        title: this.formBuilder.array([]),
        event: this.formBuilder.array([]),
        era: this.formBuilder.array([])
      })
    });
    if ( data == null ) {
      return temp;
    } else {
      data.timeline.title.forEach((value) => {
        (temp.get('timeline').get('title') as FormArray).push(this.getloadedSlideForm(value));
      });
      data.timeline.event.forEach((value) => {
        (temp.get('timeline').get('event') as FormArray).push(this.getloadedSlideForm(value));
      });
      data.timeline.era.forEach((value) => {
        (temp.get('timeline').get('era') as FormArray).push(this.getloadedSlideForm(value));
      });
    }
    return temp;
  }

  getSlideForm() {
    if (this.selectedSlideType == 0) {
      return this.slideTitleForm(null);
    }
    if (this.selectedSlideType == 1) {
      return this.slideEventForm(null);
    }
    if (this.selectedSlideType == 2) {
      return this.slideEventSpanForm(null);
    }
    if (this.selectedSlideType == 3) {
      return this.slideEraForm(null);
    }
    else {
      return this.formBuilder.group({})
    }
  }

  getloadedSlideForm( data ) {
    if (data.start_date) {
      if (data.end_date) {
        if (data.media) {
          return this.slideEventSpanForm(null);
        } else {
          return this.slideEraForm(null);
        }
      } else {
        return this.slideEventForm(null);
      }
    } else {
      return this.slideTitleForm(null);
    }
  }

  slideTitleForm(data) {
    if (data == null) {
      return this.formBuilder.group({
        text: this.formBuilder.group({
          headline:['slideTitleForm'],
          text:['']
        }),
        media: this.formBuilder.group({
          url:[''],
          caption:[''],
          credit:[''],
          thumbnail:[''],
          alt:[''],
          title:[''],
          link:[''],
          link_target:['']
        }),
        group:[''],
        background: this.formBuilder.group({
          url:[''],
          color:['']
        }),
      });
    } else {
      return this.formBuilder.group({
        text: this.formBuilder.group({
          headline:[data.headline],
          text:[data.text]
        }),
        media: this.formBuilder.group({
          url:[data.url],
          caption:[data.caption],
          credit:[data.credit],
          thumbnail:[data.thumbnail],
          alt:[data.alt],
          title:[data.title],
          link:[data.link],
          link_target:[data.link_target]
        }),
        group:[data.group],
        background: this.formBuilder.group({
          url:[data.url],
          color:[data.color]
        }),
      });
    }
  }

  slideEventForm(data) {
    if (data == null) {
      return this.formBuilder.group({
        start_date: this.formBuilder.group({
          date:[''],
          display_date:['']
        }),
        text: this.formBuilder.group({
          headline:['Event Title'],
          text:['']
        }),
        media: this.formBuilder.group({
          url:[''],
          caption:[''],
          credit:[''],
          thumbnail:[''],
          alt:[''],
          title:[''],
          link:[''],
          link_target:['']
        }),
        group:[''],
        background: this.formBuilder.group({
          url:[''],
          color:['']
        }),
        autolink:['']
      });
    } else {
      return this.formBuilder.group({
        start_date: this.formBuilder.group({
          date:[data.date],
          display_date:[data.display_date]
        }),
        text: this.formBuilder.group({
          headline:[data.headline],
          text:[data.text]
        }),
        media: this.formBuilder.group({
          url:[data.url],
          caption:[data.caption],
          credit:[data.credit],
          thumbnail:[data.thumbnail],
          alt:[data.alt],
          title:[data.title],
          link:[data.link],
          link_target:[data.link_target]
        }),
        group:[data.group],
        background: this.formBuilder.group({
          url:[data.url],
          color:[data.color]
        }),
        autolink:[data.autolink]
      });
    }
  }

  slideEventSpanForm(data) {
    if (data == null) {
      return this.formBuilder.group({
        start_date: this.formBuilder.group({
          date:[''],
          display_date:['']
        }),
        end_date: this.formBuilder.group({
          date:[''],
          display_date:['']
        }),
        text: this.formBuilder.group({
          headline:['Event span title'],
          text:['']
        }),
        media: this.formBuilder.group({
          url:[''],
          caption:[''],
          credit:[''],
          thumbnail:[''],
          alt:[''],
          title:[''],
          link:[''],
          link_target:['']
        }),
        group:[''],
        background: this.formBuilder.group({
          url:[''],
          color:['']
        }),
        autolink:['']
      });
    } else {
      return this.formBuilder.group({
        start_date: this.formBuilder.group({
          date:[data.date],
          display_date:[data.display_date]
        }),
        end_date: this.formBuilder.group({
          date:[data.date],
          display_date:[data.display_date]
        }),
        text: this.formBuilder.group({
          headline:[data.headline],
          text:[data.text]
        }),
        media: this.formBuilder.group({
          url:[data.url],
          caption:[data.caption],
          credit:[data.credit],
          thumbnail:[data.thumbnail],
          alt:[data.alt],
          title:[data.title],
          link:[data.link],
          link_target:[data.link_target]
        }),
        group:[data.group],
        background: this.formBuilder.group({
          url:[data.url],
          color:[data.color]
        }),
        autolink:[data.autolink]
      });
    }
  }
  
  slideEraForm(data) {
    if (data == null) {
      return this.formBuilder.group({
        start_date: this.formBuilder.group({
          date:[''],
          display_date:['']
        }),
        end_date: this.formBuilder.group({
          date:[''],
          display_date:['']
        }),
        text: this.formBuilder.group({
          headline:['slideEraForm'],
          text:['']
        }),
        group:[''],
        background: this.formBuilder.group({
          url:[''],
          color:['']
        }),
        autolink:['']
      });
    } else {
      return this.formBuilder.group({
        start_date: this.formBuilder.group({
          date:[data.date],
          display_date:[data.display_date]
        }),
        end_date: this.formBuilder.group({
          date:[data.date],
          display_date:[data.display_date]
        }),
        text: this.formBuilder.group({
          headline:[data.headline],
          text:[data.text]
        }),
        group:[data.group],
        background: this.formBuilder.group({
          url:[data.url],
          color:[data.color]
        }),
        autolink:[data.autolink]
      });
    }
  }

  getSlideArray(sectionIndex:number, type: string) {
    
  }

  addSlide(sectionIndex: number, type: string) {
    
  }

  loadSlide(sectionIndex: number, type: string, data) {
    
  }

  removeSlide(arrayIndex: number, sectionIndex:number, type:string) {
    
  }

}
