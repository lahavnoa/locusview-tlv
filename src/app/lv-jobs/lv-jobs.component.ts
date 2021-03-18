import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

export interface IJob {
  company_name: string;
  department: string;
  email: string;
  employment_type: string;
  experience_level: string;
  internal_use_custom_id: string;
  location: {
    arrival_instructions: string;
    city: string;
    country: string;
    is_remote: boolean;
    location_uid: string;
    name: string;
    postal_code: string;
    state: string;
    street_name: string;
    street_number: number;
    timezone: string;
  };
  city: string;
  country: string;
  is_remote: boolean;
  location_uid: string;
  name: string;
  postal_code: string;
  state: string;
  street_name: string;
  street_number: number;
  timezone: string;
  picture_url: string;
  position_url: string;
  time_updated: string;
  uid: string;
  url_active_page: string;
  url_comeet_hosted_page: string;
  url_detected_page: string;
}

@Component({
  selector: 'lv-jobs',
  templateUrl: './lv-jobs.component.html',
  styleUrls: ['./lv-jobs.component.scss'],
  providers: [HttpClient]
})
export class LvJobsComponent implements OnInit {
  public jobs: IJob[] = [];

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.updateJobs();
  }

  private async updateJobs() {
    this.http.get(
      'https://www.comeet.co/careers-api/2.0/company/25.002/positions?token=52219AA23EE148802E32F66148829100').subscribe((jobs) => {
      const results = jobs as IJob[];
      if (results?.length > 0) {
        this.jobs = results.filter(job => job.location.country === 'IL');
      }
    });
  }
}
