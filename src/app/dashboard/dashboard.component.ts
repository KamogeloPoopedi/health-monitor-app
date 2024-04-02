import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  caloriesData: any; // Replace with your calorie data
  heartRateData: any; // Replace with your heart rate data
  stepsData: number =100; // Replace with your steps data
  sleepData: any; // Replace with your sleep data
  runningDistanceData: any; // Replace with your running distance data


  constructor() { }

  ngOnInit() {
    // Fetch or initialize static data here
    this.caloriesData = { labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'], data: [2000, 1800, 2500, 1900, 2200] };
    this.heartRateData = { labels: ['08:20', '08:21', '08:22', '08:23', '08:24'], data: [70, 72, 75, 78, 73] }; // Replace with actual heart rate data points
    this.stepsData = 8500;
    this.sleepData = { deep: 3, light: 4, rem: 2 };
    this.runningDistanceData = { distance: 5, route: [
      { location: "Start Point", latitude: 37.7749, longitude: -122.4194 },  // Example coordinates
      { location: "Park Entrance", latitude: 37.7783, longitude: -122.4231 },
      { location: "Finish Point", latitude: 37.7822, longitude: -122.4084 },
    ] }; // Replace with route data if available
  }
}