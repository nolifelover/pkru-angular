import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  title = "@nolifelover"
  /*menus = [
    {name: 'Home', link:'/'},
    {name: 'About', link:'/about'},
    {name: 'Google', link:'https://google.co.th'},
    {
      name: "Drop down",link:"#",
      id: "dropdown01",
      menus:[
        { name: "Action",link: "#"},
        { name: "Another Action",link: "#"},
      ]
    }
  ]*/
  menus = []
  constructor(private db:AngularFireDatabase) { }

  ngOnInit() {
    this.getMenus()
  }

  getMenus(){
    this.db.list("menus").valueChanges().subscribe((result)=>{
      console.log(result)
    })
  }

}
