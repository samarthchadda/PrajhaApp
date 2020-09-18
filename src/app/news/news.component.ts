import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { Router } from '@angular/router';
=======
>>>>>>> 572d478ea633d70c38dc8806b2b11c1f4e52bc2e
import { NewsService } from '../services/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  newsInfo = [];
  // images = [];

<<<<<<< HEAD
  constructor(private newsService:NewsService, private routerBtn:Router) { }
=======
  constructor(private newsService:NewsService) { }
>>>>>>> 572d478ea633d70c38dc8806b2b11c1f4e52bc2e

  ngOnInit(): void {

    this.newsService.fetchAllNews().subscribe(res=>{
      this.newsInfo = res["AllNews"]; 
      
      // this.newsInfo.forEach(n=>{        
      //   n.Image = "https://prajhaapp.herokuapp.com/"+n.Image
      // })

      });
    }

<<<<<<< HEAD
    newNews()
    {
      this.routerBtn.navigate(['/news/create']);
    }

    editNews(id)
    {
      this.routerBtn.navigate(['/news/edit/'+id]);
    }

    deleteNews(id)
    {
      this.newsService.deleteNews({"id":+id}).subscribe(res=>{
        console.log(res);
        this.ngOnInit();
        
      })
     
    }

=======
>>>>>>> 572d478ea633d70c38dc8806b2b11c1f4e52bc2e
}
