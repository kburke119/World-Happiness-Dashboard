d3.json('http://127.0.0.1:5000/api/v1.0/happiness_weather').then(function(country_data) {

  let data = [{
    x: country_data.map(d => d.positive_affect),
    y: country_data.map(d => d.tavg),
    text: country_data.map(function(d) {return d.country + ' (' + d.year + ')'; }),
    mode: 'markers',
    marker: {
      color: country_data.map(d => d.tavg),
      colorscale: 'temps',
      size: 10,
      showlegend: false
    },
    type: 'scatter'
  }];

  let layout = {
    title: 'Positive Affect vs Average Temperature',
    xaxis: {
      title: 'Positive Affect'
    },
    yaxis: {
      title: 'Average Temp (C)'
    },
    hovermode: 'closest',
    dragmode: 'zoom',
    updatemenus: [{
      buttons: [{
        method: 'restyle',
        args: [{type: 'scatter'}],
        label: 'Scatter Plot'
      }],
      direction: 'left',
      showactive: false,
      type: 'buttons',
      x: 0.1,
      y: 1.15
    },{
      buttons: [{
        method: 'restyle',
        args: [{type: 'bar'}],
        label: 'Bar Chart'
      }],
      direction: 'left',
      showactive: false,
      type: 'buttons',
      x: 0.19,
      y: 1.15
      }]
  };

  Plotly.newPlot('scatter_plot', data, layout);

});
