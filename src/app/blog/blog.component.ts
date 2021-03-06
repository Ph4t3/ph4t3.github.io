import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ThemeService } from '../services/theme.service';
import { Observable } from 'rxjs';

export interface Entry {
  name: string;
  date: string;
  link: string;
}

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  constructor(private themeService: ThemeService) {}

  isDarkTheme: Observable<boolean>;

  blogEntry: string;
  entries: Entry[] = [
    { name: 'redpwnCTF 2020 Writeup', date: '2020/05/25', link: 'redpwnCTF-2020' }
  ];

  ngOnInit(): void {
    this.isDarkTheme = this.themeService.isDarkTheme;
  }
}
