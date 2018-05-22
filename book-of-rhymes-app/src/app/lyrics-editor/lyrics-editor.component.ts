import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lyrics-editor',
  templateUrl: './lyrics-editor.component.html',
  styleUrls: ['./lyrics-editor.component.css']
})
export class LyricsEditorComponent implements OnInit {

  createLyrics = false;
  add = false;
  lyricsDetails = false;
  lyricsName = '';
  lyricsOptions = [
    { value: 'verse', rows: 16, columns: 100, lyricsName: '' },
    { value: 'chorus', rows: 4, columns: 100, lyricsName: '' },
    { value: 'intro', rows: 8, columns: 100, lyricsName: '' },
    { value: 'outro', rows: 8, columns: 100, lyricsName: '' }
  ];
  lyricsStructure = [];
  verseNum = 1;


  constructor() { }

  ngOnInit() {
  }

  createLyricsSection(option) {
    const structureOption = this.lyricsOptions.filter(lyricsOption =>  lyricsOption.value === option )[0];
    this.lyricsStructure.map( section => {
      if (section.value === 'verse') {
        console.log(this.verseNum)
        this.verseNum += 1;
      }
    });
    this.lyricsStructure.push(structureOption);
  }

  getLyricsName(event) {
    this.lyricsName = event.target.value;
    this.createLyrics = true;
    this.lyricsOptions.map( option => option.lyricsName = this.lyricsName);
  }

  addLyrics() {
    this.add = !this.add;
  }

  addLyricsDetails() {
    this.lyricsDetails = !this.lyricsDetails;
  }

}
