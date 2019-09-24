# Lynx Blue Line Schedule JSON

## Introduction

We want to produce a single JSON file that gives developers access to the raw schedule data for the Lynx Blue Line.

This project was started as a way for the original developer to build a mini train station platform sign for his desk that
would announce the next train time at the nearby station. The code is being shared publicly so developers can create their own
projects for themselves or the community. CATS unfortunately does not publish data like this to Charlotte's [Open Data Portal](https://data.charlottenc.gov)
and we would love to see that change in the near future. 

## Contributing 

There are four files (inbound and outbound for weekday and weekend), we want to combine these files into a single JSON file and export it. Future projects can include building an SDK or even a website that uses the finished JSON file. We can also publish it to an open data site.

There should be at least a weekly automated build of this project. If a breaking change is made to the schedule data we will be notified. In that event, contributions are welcome.

This project is intended to let developers work with the Lynx Blue Line station schedule. We will be tracking the times a train is scheduled to arrive at a station, not the individual stops of a train sequence. 

The [schedule site](http://wirelesscats.ridetransit.org/BusSchedules/Search/Index?source=lynx) for the Blue line uses JSON files like [this](http://wirelesscats.ridetransit.org/BusSchedules/Search/Schedule?routeCode=6750&routeDirection=Inbound&bookingId=82&routeType=Weekday) to populate its data. 

The resulting data structure should be something like this:

```
[
  {
    stationData: { name, order },
    schedules: {
      weekend: { inbound: [], outbound: [] },
      weekday: { inbound: [], outbound: [] }
    }
  }
]
```

For more information and development plans, visit the [project board](https://github.com/OpenCLTBrigade/blue-line-schedule-json/projects/1).