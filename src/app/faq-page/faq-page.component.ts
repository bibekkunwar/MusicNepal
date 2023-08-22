import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq-page',
  templateUrl: './faq-page.component.html',
  styleUrls: ['./faq-page.component.css']
})
export class FaqPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const items = document.querySelectorAll(".accordion button");

    const toggleAccordion = (event: Event) => {
      const buttonElement = event.currentTarget as HTMLButtonElement;
      const itemToggle = buttonElement.getAttribute("aria-expanded");

      items.forEach((item) => item.setAttribute("aria-expanded", "false"));

      if (itemToggle === "false") {
        buttonElement.setAttribute("aria-expanded", "true");
      }
    };

    items.forEach((item) => item.addEventListener("click", toggleAccordion as EventListener));
  }

}
