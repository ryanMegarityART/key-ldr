import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css'],
})
export class TextComponent {
  fullText: string =
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry.';
  textToDisplay: string = '';
  currentChar: string = this.fullText.charAt(0);

  @HostListener('document:keydown', ['$event'])
  addKeyListeners(event: KeyboardEvent): void {
    if (event.key === this.currentChar) {
      this.textToDisplay += this.currentChar;
      this.currentChar = this.fullText.charAt(this.textToDisplay.length);
    }
  }
}
