let basemap = L.tileLayer(
    "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: 'Map data: &copy;'
});

let map = L.map("map", {
    center: [30, -15],
    zoom: 2.5,
})

basemap.addTo(map)

d3.json('http://127.0.0.1:5000/api/v1.0/happiness_weather').then(function(country_data) {
    console.log(country_data);
    for (var i = 0; i < country_data.length; i++) {
        var marker = L.marker([country_data[i].latitude, country_data[i].longitude])
            .bindPopup(`
            <b>Country:</b> ${country_data[i].country} <br>
            <b>Most Recent Year:</b> ${country_data[i].year} <br>
            <b>Life Ladder:</b> ${(country_data[i].life_ladder)} <br>
            <b>Log GDP Per Capita:</b> ${(country_data[i].log_dp_per_capita)} <br>
            <b>Social Support:</b> ${(country_data[i].social_support * 100).toFixed(2)}% <br>
            <b>Healthy Life Expectancy at Birth:</b> ${(country_data[i].healthy_life_expectancy_at_birth)}<br>
            <b>Freedom to Make Life Choices:</b> ${(country_data[i].freedom_to_make_life_choices * 100).toFixed(2)}% <br>
            <b>Generosity:</b> ${(country_data[i].generosity * 100).toFixed(2)}% <br>
            <b>Perceptions of Corruption:</b> ${(country_data[i].perceptions_of_corruption * 100).toFixed(2)}% <br>
            <b>Positive Affect:</b> ${(country_data[i].positive_affect * 100).toFixed(2)}% <br>
            <b>Negative Affect:</b> ${(country_data[i].negative_affect * 100).toFixed(2)}% <br>
   
            `);

        
           

            marker.addTo(map);
         }



});