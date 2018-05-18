
import { Storage } from '@ionic/storage';
import { Injectable } from '@angular/core';

/*
Generated class for the StorageNotesProvider provider.

See https://angular.io/guide/dependency-injection for more info on providers
and Angular DI.
*/

const STORAGE_KEY = 'notes';

@Injectable()
export class StorageNotesProvider {
  
  constructor(public sto: Storage) {
    
  }
  
  getAllNotes(){
    return this.sto.get(STORAGE_KEY);
  }
  
  saveNote(newNote){
    return this.getAllNotes().then(result=>{
      if(result){
        result.push(newNote);
        this.sto.set(STORAGE_KEY,result);
      } else {
        this.sto.set(STORAGE_KEY,[newNote]);
      }
    });
  }
  
  delete(index){
    this.getAllNotes().then(result=>{
      if(result){
        result.splice(index,1);
        this.sto.set(STORAGE_KEY,result);
      }
    });
  }
  
  updateNote(updateNote, idOld){
    return this.getAllNotes().then(result=>{
      if(result){
        result[idOld] =updateNote;
        this.sto.set(STORAGE_KEY,result);
      }
    });
  }
  
  getNoteByIndex(index){
    return this.getAllNotes().then( result =>{
      if(result){
        return result[index];
      }
    });
  }
  
  
}
