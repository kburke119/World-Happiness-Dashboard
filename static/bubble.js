d3.json('http://127.0.0.1:5000/api/v1.0/happiness_weather').then(function(country_data) {
  console.log(country_data);

  let traceData = {
    x: country_data.map(function(d) { return d.log_dp_per_capita; }),
    y: country_data.map(function(d) { return d.healthy_life_expectancy_at_birth; }),
    text: country_data.map(function(d) { return d.country + ' (' + d.year + ')'; }),
    mode: 'markers',
    marker: {
      size: 10,
      color: country_data.map(function(d) { return d.social_support; }),
      colorscale: 'Earth',
      reversescale: true
    }
  };

  let data = [traceData];

  let layout = {
    title: 'GDP per Capita vs Life Expectancy',
    xaxis: {
      title: 'GDP per Capita'
    },
    yaxis: {
      title: 'Life Expectancy'
    },
    hovermode: 'closest',
    dragmode: 'zoom'
    
    
  };

  Plotly.newPlot('bubble_chart', data, layout);
});


  