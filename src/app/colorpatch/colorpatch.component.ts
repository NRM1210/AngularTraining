import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Colorpatch } from '../models/colorpatch'
import { ColorPatchPipe } from '../pipes/colorpatchPipe';

@Component({
  selector: 'app-colorpatch',
  templateUrl: './colorpatch.component.html',
  styleUrls: ['./colorpatch.component.css']
})
export class ColorpatchComponent {
  @Input() patch:Colorpatch = new Colorpatch(128,0,0,1, "black");
  @Output() update = new EventEmitter<Colorpatch>();

  //rgba?:string = this.patch.getRgba(); impliciet
  rgba?:string; //expliciet
  constructor(){}

  ngOnInit(): void{
    this.rgba = this.patch.getRgba();
    
  }

updatePatch(){
  this.update.emit(this.patch);
}

}


