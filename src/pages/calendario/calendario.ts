import { Component } from '@angular/core';
import { NavController, NavParams, ModalController, AlertController } from 'ionic-angular';
import { TextToSpeech } from "@ionic-native/text-to-speech";
import { data } from "../../data/data";

@Component({
  selector: "page-calendario",
  templateUrl: "calendario.html"
})
export class CalendarioPage {
  public eventSource = [];

 dataeventos:any=[];



  selectedDay = new Date();
  calendar = {
    mode: "month",
    currentDate: this.selectedDay,
    locale: "en-GB"
  };

  loadEvents() {
    this.eventSource = this.createRandomEvents();
  }
  createRandomEvents() {
    var events = [];
this.dataeventos= data;







for (var i=0; i< this.dataeventos.length; i++){
 



  events.push({
    title: this.dataeventos[i].title,
    startTime: this.dataeventos[i].startTime,
    endTime: this.dataeventos[i].endTime,
    allDay: true
  });




}
   



    return events;
  }
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private modalclr: ModalController,
    private alertCtrl: AlertController,
    private tts: TextToSpeech
  ) {
    this.loadEvents();
  }

  onTimeSelected(env) {
    this.selectedDay = env.selectedTime;
  }

  ionViewDidLoad() {}

  onChange(event) {
    console.log(event); // For actual usage.
   // console.log(moment(event).format('DD-MM-YYYY')); // the statement you might think about
  }

  leer() {
    this.tts
      .speak("Hello World")
      .then(() => console.log("Success"))
      .catch((reason: any) => console.log(reason));
  }


}
