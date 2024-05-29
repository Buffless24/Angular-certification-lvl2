import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-image-showcase',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './image-showcase.component.html',
  styleUrl: './image-showcase.component.scss'
})
export class ImageShowcaseComponent {
  @Input() teslaCode?: string = ''
  @Input() teslaColorCode?: string = ''
}
