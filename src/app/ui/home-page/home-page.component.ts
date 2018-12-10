import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
// If trying to impliment mouse parallax efffect again, add:
// 'ElementRef' to core import
import { Subscription, fromEvent } from 'rxjs';
import { MatDialog } from '@angular/material';
// import { TweenMax, Power2 } from 'gsap';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  subscription: Subscription;
  public caseStudy: any;

  constructor(public dialog: MatDialog) { }
  

  @ViewChild('scheduleMeeting') scheduleMeeting: TemplateRef<any>;
  // @ViewChild('hoverContainer') box: ElementRef;
  // @ViewChild('hoverLaptop') laptop: ElementRef;
  // @ViewChild('hoverIcon') icon: ElementRef;

  ngOnInit() {
    console.log(new Date("2018-07-01"));

    // this.subscription = fromEvent(this.box.nativeElement, 'mousemove')
    //   .subscribe(e => {
    //     console.log(e);
    //     this.callParallax(e);
    //   });
  }

  // callParallax(e){
    // console.log('called', e);
    // this.parallaxIt(e, this.laptop, -100);
    // this.parallaxIt(e, this.icon, -30);
  // }

  // public parallaxIt(e, target, movement) {
      // console.log(target);
    
      // var $box = target.nativeElement;
      // var relX = e.pageX - $box.offsetLeft;
      // var relY = e.pageY - $box.offsetTop;

      // console.log(relX);
      // console.log(relY);
      // console.log(target.nativeElement.offsetLeft);
      
      
      // TweenMax.to($box, 1, {
      //     offsetLeft: (relX - $box.offsetLeft / 2) / $box.offsetLeft * movement,
      //     offsetTop: (relY - $box.offsetTop / 2) / $box.offsetTop * movement,
      //     ease: Power2.easeOut
      // })
  // }

  viewCase(templateRef: TemplateRef<any>, project: any) {
    this.caseStudy = project;
    this.dialog.open(templateRef);
  }

  viewSchedule() {
    this.dialog.open(this.scheduleMeeting);
  }

  

  public caseStudies = [
    {
      "name": "Deep Blue Communications",
      "image": "/assets/images/deepblue.png",
      "url": null,
      "github": null,
      "colspan": 2,
      "rowspan": 1,
      "overview": "I worked as the Front End Developer on a team of two for Deep Blue's Helpdesk.",
      "context": "The Helpdesk was experiencing a lot of growth. We worked closely with management and staff to outline project criteria and create a series of tools that would serve the Helpdesk and tie in with other aspects of the company. We created the DBC Dashboard, a custom dashboard built with AngularJS powered by custom and 3rd party APIs.",
      // "strategy": "Previous teams have created similar tools, so we had the good fortune to see other perspectives on the problems that we were trying to solve.",
      "testimonial": null,
      "date_start": new Date("Sat May 1 2017 00:00:00 GMT-0400"),
      "date_end": new Date("Sat Jul 1 2018 00:00:00 GMT-0400"),
      "categories": ["Bootstrap 4", "AngularJS", "Chart.js", "Node.js", "Firebase", "Zendesk"],
    }, {
      "name": "Time Warner Cable",
      "image": "/assets/images/twc.png",
      "url": null,
      "colspan": 1,
      "rowspan": 1,
      "overview": null,
      "context": null,
      "strategy": null,
      "testimonial": null,
      "date_start": new Date("Sat May 1 2017 00:00:00 GMT-0400"),
      "date_end": new Date("Sat Jul 1 2018 00:00:00 GMT-0400"),
      "categories": ["Bootstrap 3", "AngularJS", "Node.js"],
    }, {
      "name": "Perseverance Wordpress Theme",
      "image": "/assets/images/perseverance.png",
      "url": null,
      "colspan": 1,
      "rowspan": 1,
      "overview": null,
      "context": null,
      "strategy": null,
      "testimonial": null,
      "date_start": null,
      "date_end": null,
      "categories": ["WordPress", "PHP", "jQuery", "Bootstrap 4", "Sass", "Theme Development", "Plugin Integration"],
    }, {
      "name": "Rescue Korea",
      "image": "/assets/images/rescuekorea.png",
      "url": "https://rescuekorea.org/",
      "colspan": 2,
      "rowspan": 1,
      "overview": null,
      "context": null,
      "strategy": null,
      "testimonial": null,
      "date_start": null,
      "date_end": null,
      "categories": ["Drupal 7", "PHP", "Linux Administration"],
    }, {
      "name": "AOC Empire Chapter",
      "image": "/assets/images/empireaoc.png",
      "url": "http://www.empireaoc.org/",
      "colspan": 2,
      "rowspan": 1,
      "overview": null,
      "context": null,
      "strategy": null,
      "testimonial": null,
      "date_start": null,
      "date_end": null,
      "categories": ["WordPress", "Theme Integration", "Page Design"],
    }, {
      "name": "Firestarter BS4 Theme",
      "image": "/assets/images/angularfirebase.png",
      "url": "https://firebootstarter.firebaseapp.com/",
      "colspan": 1,
      "rowspan": 1,
      "overview": null,
      "context": null,
      "strategy": null,
      "testimonial": null,
      "date_start": null,
      "date_end": null,
      "categories": ["Bootstrap", "Angular", "For Fun"],
    }, {
      "name": "You Vs Zezima",
      "image": "/assets/images/youvszez.png",
      "url": "https://codepen.io/geeksmarter/full/zEmWRp",
      "colspan": 1,
      "rowspan": 1,
      "overview": null,
      "context": null,
      "strategy": null,
      "testimonial": null,
      "date_start": null,
      "date_end": null,
      "categories": ["AngularJS", "For Fun"],
    }, {
      "name": "Vaporwave Series",
      "image": "/assets/images/asthetic.png",
      "url": "https://codepen.io/collection/nJZKBa/",
      "colspan": 2,
      "rowspan": 1,
      "overview": null,
      "context": null,
      "strategy": null,
      "testimonial": null,
      "date_start": null,
      "date_end": null,
      "categories": ["Sass", "For Fun"],
    },
    // {
    //   "name": "Geek Smarter",
    //   "image": "/assets/images/geeksmarter.png",
    //   "url": null,
    //   "colspan": 1,
    //   "rowspan": 1,
    //   "overview": "Case study overview. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam debitis beatae blanditiis ducimus ipsam, consequatur quod sequi a eum laudantium ex molestiae magni corporis accusamus soluta numquam incidunt repellat omnis.",
    //   "context": "Case study context. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam debitis beatae blanditiis ducimus ipsam, consequatur quod sequi a eum laudantium ex molestiae magni corporis accusamus soluta numquam incidunt repellat omnis.",
    //   "strategy": "Case study strategy. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam debitis beatae blanditiis ducimus ipsam, consequatur quod sequi a eum laudantium ex molestiae magni corporis accusamus soluta numquam incidunt repellat omnis.",
    //   "testimonial": ["Case study Quote. Lorem ipsum dolor sit amet consectetur adipisicing elit.", "Unknown"],
    //   "date_start": null,
    //   "date_end": null,
    //   "categories": [],
    // }, 
  ];

}
