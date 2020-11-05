import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appRainbowInputDirective]'
})
export class RainbowInputDirectiveDirective {
  @HostBinding ('style.color') text_color: string;
  @HostBinding ('style.borderColor') border_color: string;

  @HostListener ('keydown') letter_input(){
    let random_red = this.getRandomNumber();
    let random_green = this.getRandomNumber();
    let random_blue = this.getRandomNumber();

    if(random_red.length != 2){
      random_red = random_red + random_red;
    }
    if(random_green.length != 2){
      random_green = random_green + random_green;
    }
    if(random_blue.length != 2){
      random_blue = random_blue + random_blue;
    }

    let color_string = "#"+random_red+random_green+random_blue;

    console.log(color_string)

    this.text_color = color_string;
    this.border_color = color_string;
  }
  constructor() { }

  // get random number between 0 and 255
  getRandomNumber(){
    return Math.floor(Math.random()*255).toString(16)
  }

}
