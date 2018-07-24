import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
@Component({
  selector: 'app-jumboton',
  templateUrl: './jumboton.component.html',
  styleUrls: ['./jumboton.component.css']
})
export class JumbotonComponent implements OnInit {
  header = ""
  body =""
  show = false
  constructor(private db:AngularFireDatabase) {
  }

  getData(){
    this.db.object("jumboton").valueChanges().subscribe((result)=>{
      console.log(result)
      this.header = result.header
      this.body = result.body
      this.show = true
    });
  }

  ngOnInit() {
    this.getData();
  }

}
