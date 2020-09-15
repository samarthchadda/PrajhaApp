import { Component, OnInit } from '@angular/core';
import { NewsService } from '../services/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  newsInfo = [];
  // images = [];

  constructor(private newsService:NewsService) { }

  ngOnInit(): void {

    this.newsService.fetchAllNews().subscribe(res=>{
      this.newsInfo = res["AllNews"]; 
      
      // this.newsInfo.forEach(n=>{        
      //   n.Image = "https://prajhaapp.herokuapp.com/"+n.Image
      // })

      });
    }

}
