import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import { StorageNotesProvider } from '../../providers/storage-notes/storage-notes';
import { AlertController } from 'ionic-angular';


/**
* Generated class for the CreateNotePage page.
*
* See https://ionicframework.com/docs/components/#navigation for more info on
* Ionic pages and navigation.
*/

@Component({
  selector: 'page-create-note',
  templateUrl: 'create-note.html',
})
export class CreateNotePage {
  
  form:FormGroup;
  idOldNote:number;
  oldNote:object;
  
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private formBuilder: FormBuilder,
    public storage:StorageNotesProvider,
    public alertCtrl: AlertController) {
      if(this.navParams.get('idOldNote')!== undefined){
        this.idOldNote = this.navParams.get('idOldNote');
        let old = this.navParams.get('oldNote') ;
        this.oldNote = old;
        this.form = this.formBuilder.group({
          title:[old.title,Validators.required],
          description:[old.description, Validators.required]
        });
        
      }else{
        this.form = this.formBuilder.group({
          title:['',Validators.required],
          description:['', Validators.required]
        });
      }
    }
    
    ionViewDidLoad() {
      console.log('ionViewDidLoad CreateNotePage');
    }
    
    createNote(){
      let newNote = this.form.value;
      let msg = '';
      if(this.oldNote!== undefined){

        this.storage.updateNote(newNote,this.idOldNote);
        msg = 'The note titled ' + newNote.title + ' has been updated';
      }else{
        this.storage.saveNote(newNote);
        msg = 'The note titled ' + newNote.title + ' has been saved';
      }

      this.showAlert(msg);
      this.navCtrl.popToRoot();
      
    }
    
    showAlert(msg) {
      let alert = this.alertCtrl.create({
        title: msg,
        subTitle: 'Your note is now on the list',
        buttons: ['dismiss']
      });
      alert.present();
    }
    
  }
  