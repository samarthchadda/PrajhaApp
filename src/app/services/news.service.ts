import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http:HttpClient) { }


  fetchAllNews()
  {
    return this.http.get('https://prajhaapp.herokuapp.com/api/all-news');
  }

<<<<<<< HEAD
  fetchSingleNews(id)
  {
    return this.http.get('https://prajhaapp.herokuapp.com/api/all-news/'+id);
  }

=======
>>>>>>> 572d478ea633d70c38dc8806b2b11c1f4e52bc2e
  postNews(data)
  {
    return this.http.post('https://prajhaapp.herokuapp.com/api/post-news',data);
  }

<<<<<<< HEAD
  editNews(data)
  {
    return this.http.post('https://prajhaapp.herokuapp.com/api/edit-news',data);
  }

  deleteNews(id)
  {
    return this.http.post('https://prajhaapp.herokuapp.com/api/delete-news',id);
  }

=======
>>>>>>> 572d478ea633d70c38dc8806b2b11c1f4e52bc2e
}
