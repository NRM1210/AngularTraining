import { Component, OnInit, Input } from '@angular/core';
import { Colorpatch } from '../models/colorpatch';



@Component({
  selector: 'app-colorpatches',
  templateUrl: './colorpatches.component.html',
  styleUrls: ['./colorpatches.component.css']
})
export class ColorpatchesComponent implements OnInit{
  rgba?:string;
  currentPatch:Colorpatch = new Colorpatch(0,0,0,1,'black');

  patchArray:Colorpatch[] = [
    new Colorpatch(0,0,0,1,'black'),
    new Colorpatch(255,255,255,1,'white'),
    new Colorpatch(255,0,0,1,'red'),
    new Colorpatch(0,255,0,1,'green'),
    new Colorpatch(0,0,255,1,'blue'),
    new Colorpatch(0,255,255,1,'cyan'),
    new Colorpatch(255,0,255,1,'magenta'),
    new Colorpatch(255,255,0,1,'yellow')
  ]

  constructor(){
  }

  ngOnInit():void{ //lifecycle hook
  this.rgba = this.currentPatch.getRgba();
  this.currentPatch.r = 255;
  }

  updateColor(patch:Colorpatch){
    this.rgba = `rgba(${patch.r}, ${patch.g}, ${patch.b}, ${patch.a})`;
  }

  
}
