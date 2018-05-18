import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { StorageNotesProvider } from '../../providers/storage-notes/storage-notes';

import {CreateNotePage} from '../create-note/create-note';
/**
* Generated class for the DetailNotePage page.
*
* See https://ionicframework.com/docs/components/#navigation for more info on
* Ionic pages and navigation.
*/

@Component({
  selector: 'page-detail-note',
  templateUrl: 'detail-note.html',
})
export class DetailNotePage {
  
  idNote:number;
  note:object;
  
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public storage: StorageNotesProvider) {
      this.idNote = navParams.get('idNote');
      this.note = this.storage.getNoteByIndex(this.idNote);
    }
    
    
    ionViewDidEnter(){
      this.storage.getNoteByIndex(this.idNote).then((resp)=>{
        this.note = resp;
      }) ;
    }
    

    editNote(){
      this.navCtrl.push(CreateNotePage,{idOldNote:this.idNote,oldNote:this.note});
    }
    
    
  }
  