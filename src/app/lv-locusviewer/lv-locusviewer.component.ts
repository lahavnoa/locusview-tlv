import {Component, OnInit} from '@angular/core';

export interface ILocusviewer {
  name: string;
  role: string;
  q1_1: string;
  q1_2?: string;
  q2_1: string;
  q2_2?: string;
}

@Component({
  selector: 'lv-locusviewer',
  templateUrl: './lv-locusviewer.component.html',
  styleUrls: ['./lv-locusviewer.component.scss']
})
export class LvLocusviewerComponent implements OnInit {
  public locusviewers: ILocusviewer[] = [];

  constructor() {
  }

  ngOnInit(): void {
    this.updateLocusviewers();
  }

  private updateLocusviewers() {
    this.locusviewers = [{
      name: 'Karin',
      role: 'Product Manager',
      q1_1: '“I chose Locusview because of the people and the good vibes!',
      q1_2: 'I remember my first interview, I instantly noticed the positive energy that the employees bring.”',
      q2_1: '“The company’s management is very accessible and transparent. As a Product Manager, it is highly important to me that the product is making a true impact.',
      q2_2: 'All of these make me wake up every morning with passion to do my job as best as I can.”'
    },
      {
        name: 'Idan',
        role: 'Frontend Web & Mobile Developer',
        q1_1: '“Besides the great people, our product is the leading solution in this field. I believe it has a bright future with a lot of new opportunities.”',
        q2_1: '“My ability as a Software Developer to evolve and work on various types of cutting-edge technologies.',
        q2_2: 'I was also amazed to witness how a single Software Developer can make an impact on a product. The company is always striving to take on new challenges.“'
      },
      {
        name: 'Chen',
        role: 'Frontend Developer',
        q1_1: '“The great people and the professional challenges Locusview offers.',
        q1_2: 'Every Sprint, every release is different than the previous one, which gives me the opportunity to develop new things".“',
        q2_1: '“As a mother of young children, a flexible work-life balance is important to me.',
        q2_2: 'At Locusview, my productivity isn\'t measured by hours, but by how I meet my goals. The thing I love the most is that the company supports gender equality, especially within the R&D Department.”'
      },
      // {
      //   name: 'Kiril',
      //   role: 'QA Engineer',
      //   q1_1: '“The product has huge potential due to its uniqueness.',
      //   q1_2: 'It\'s exciting for me to work on an existing product rather than just an idea.”',
      //   q2_1: '“I love the company’s stability, even during the Coronavirus pandemic, we kept moving forward since the product is used by vital industries.',
      //   q2_2: 'We might be called a Startup company, but Locusview is stable and profitable from day one.”'
      // },   {
      //   name: 'Elena',
      //   role: 'Automation Developer & team leader',
      //   q1_1: '“The biggest advantage for me was the product itself.',
      //   q1_2: 'There are a lot of different startups and products focused on sales and extra consumption, while our product provides solutions for Life Supporting industries.“',
      //   q2_1: '“I\'m proud to work for a company that makes human basic necessities managed in a modern and safer way. It\'s a product that will always be in demand.',
      //   q2_2: 'Locusview has a nearly zero employee turnover rate that proves that the company meets any employee expectations. We can work on new projects, bringing own ideas to the table, learn new things, and really developing our careers.”'
      // },
      {
        name: 'Ilana',
        role: 'Backend Developer',
        q1_1: '“It felt like home to me from the first interview, there was an instant connection with the team.',
        q2_1: '“My ability to improve and develop myself. I feel like I can always learn and grow as an employee and as a person.',
        q2_2: 'Also, working with people from other teams creates a dynamic and instructive environment.”'
      },   {
        name: 'Ran',
        role: 'Technical Project Manager',
        q1_1: '“The company’s potential business growth.',
        q1_2: 'It’s not a regular project management company, and it’s an Israeli Startup, which adds more value for me.“',
        q2_1: '“The way we treat our clients, business partners and employees.',
        q2_2: 'The atmosphere at the company is impact driven, growth oriented and always looking for the next challenge.”'
      }

    ];
  }

}
