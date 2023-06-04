import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css']
})
export class TextComponent implements AfterViewInit {

  fullText: string = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.';
  textToDisplay: string = this.fullText.charAt(0);
  currentChar: string = this.fullText.charAt(0);

  ngAfterViewInit(): void {
    // this.addKeyListeners();
  }

  addKeyListeners(): void {
    console.log(this.currentChar);
    document.onkeydown = (event: KeyboardEvent) => {

      console.log(event.key);
      console.log(this.currentChar);

      if (event.key === this.currentChar) {
        this.textToDisplay += this.currentChar;
        this.currentChar = this.fullText.charAt(this.textToDisplay.length); 
      }
    
    };
  }
}
