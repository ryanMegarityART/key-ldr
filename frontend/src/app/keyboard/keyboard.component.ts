import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.css'],
})
export class KeyboardComponent {
  private context: CanvasRenderingContext2D = {} as CanvasRenderingContext2D;

  topKeys: string[] = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'];
  middleKeys: string[] = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'];
  bottomKeys: string[] = ['Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.'];


  @HostListener('document:keydown', ['$event'])
  onKeydown(event: KeyboardEvent): void {
    const keyToStyle = document.getElementById(
      `${event.key.toLocaleUpperCase()}-key-card`
    );
    if (!keyToStyle) {
      return;
    }
    keyToStyle.classList.add('key-pressed');
    setTimeout(() => {
      keyToStyle.classList.remove('key-pressed');
    }, 200);
  }

}
