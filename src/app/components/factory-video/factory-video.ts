import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-factory-video',
  standalone: true,
  imports: [],
  templateUrl: './factory-video.html',
  styleUrl: './factory-video.scss'
})
export class FactoryVideo {

  @ViewChild('factoryVideo')
  factoryVideo?: ElementRef<HTMLVideoElement>;

  isPlaying = false;

  toggleVideo(): void {
    const video = this.factoryVideo?.nativeElement;

    if (!video) {
      return;
    }

    if (video.paused) {
      video.play();
      this.isPlaying = true;
    } else {
      video.pause();
      this.isPlaying = false;
    }
  }

}