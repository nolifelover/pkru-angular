import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  endPoint = "http://www.mocky.io/v2/5b52f5322f0000fb0a3bb672?mocky-delay=3000ms"
  datas = []
  loading = true;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get(this.endPoint).subscribe((result:any)=>{
      console.log(result)
      this.datas = result.datas;
      this.loading = false;
    })
  }

}
