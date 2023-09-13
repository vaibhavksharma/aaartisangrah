import { AfterViewChecked, AfterViewInit, Component, OnInit } from '@angular/core';
import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import allLocales from '@fullcalendar/core/locales-all';
import { ModalController } from '@ionic/angular';
import { DateDetailsComponent } from './dateDetails/dateDetails.component';
import { FormControl } from '@angular/forms';
import * as moment from 'moment';
import { CalendarCustomEvent, CalendarService } from './calendar.service';
@Component({
  selector: 'app-calender',
  templateUrl: './calender.page.html',
  styleUrls: ['./calender.page.scss'],
})



export class CalenderPage implements OnInit, AfterViewInit {

  eventData = [
    // {
    //   start: '2023-07-10T01:00:00',
    //   setAllDay: true,
    //   title: '☾ मेष',
    //   className: 'event-sec',
    //   priority: "b"
    // },
    // {
    //   start: '2023-07-10T00:00:00',
    //   setAllDay: true,
    //   title: 'दशमी शुक्ल',
    //   textColor: '#020202',
    //   className: 'event-main',
    //   priority: "a"
      
    // },
    // {
    //   start: '2023-07-10T00:00:00',
    //   setAllDay: true,
    //   title: 'अश्विनी 12:45',
    //   textColor: '#020202',
    //   className: 'event-tri',
    //   priority: "c"
      
    // },
  ];
  calendarApi: Calendar; 
  selectedDate = new FormControl(moment().toJSON());
  constructor(private modalCtrl: ModalController, private calendarService: CalendarService) { }

  
  ngAfterViewInit(): void {
    setTimeout(() => {
      const calendarEl = document.getElementById('calendar');      
      this.calendarApi = new Calendar(calendarEl, {
        plugins: [dayGridPlugin, interactionPlugin],
        locale: 'hi',
        dateClick: (param) => {          
          this.openDateModal(param.date.toLocaleDateString())
        },
        eventClick: (param) => {
          this.openDateModal(param.event.start.toLocaleDateString())
        },
        headerToolbar:false,
        eventOrder: "priority",
        events: this.eventData, 
      });
      this.calendarApi.render();
      this.updateEventValues(moment().format('MMMM'), moment().format('YYYY'));
    }, 200);
  }

  ngOnInit() {
   
  }

  confirm() {   
    if(this.selectedDate) {
      this.calendarApi.gotoDate(this.selectedDate.value)
      console.log({c:this.selectedDate.value});
      let seletedMonth = moment(this.selectedDate.value).format('MMMM');
      let seletedYear = moment(this.selectedDate.value).format('YYYY');      
      this.updateEventValues(seletedMonth, seletedYear)
    }
  }

  async openDateModal(date: string) {
    console.log({date});
    const modal = await this.modalCtrl.create({
      component: DateDetailsComponent,
      componentProps: {
        date
      }
    });
    modal.present();
  }

  async updateEventValues(month: string, year: string) {
    try {
      const dayEvents: CalendarCustomEvent[] = await this.calendarService.getCalendarValues(month.toLowerCase(), year);
      this.calendarApi.removeAllEvents();
      dayEvents.forEach((dayEvent) => {
        const events = dayEvent.title.split(',');
        events.forEach((e, index) => {
          this.calendarApi.addEvent({
            start: moment(dayEvent.date, 'YYYY-MM-DD').toDate(),
            setAllDay: true,
            title: e,
            className: index === 0 ? 'event-main': 'event-sec',
            priority: index + 1
          });
        })
      })
    } catch (error) {
      console.log({error});
    }
    
  }

 
 
  
}
