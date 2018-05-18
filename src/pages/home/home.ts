import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { StorageNotesProvider } from '../../providers/storage-notes/storage-notes';
import {DetailNotePage} from '../detail-note/detail-note';
import {CreateNotePage} from '../create-note/create-note';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  notes: any[];
  
  constructor(public navCtrl: NavController, public storage:StorageNotesProvider) {
    
  }
  
  ionViewWillEnter(){
    this.storage.getAllNotes().then( resp =>{
      this.notes = resp;
    });
  }
  
  noteSelected(index){
    console.log(index);
    
    this.navCtrl.push(DetailNotePage, {idNote:index});
  }
  
  
  noteDelete(index){
    this.storage.delete(index);
    this.notes.splice(index,1);
  }

  addNote(){
    this.navCtrl.push(CreateNotePage);
  }
  
}
