d3.select("#new-note")
    .on('submit', function() {
      d3.event.preventDefault();
      d3.select(".active").property('value', "").classed("hide", true);
      var input = d3.select('input');
      d3.select("#notes")
        .append('p')
          .classed('note', true)
          .text(input.property('value'));
      input.property('value', '');
    });
d3.select("#clear").on("click", function(){
  d3.selectAll(".note").remove();
});

d3.select("#lucky").on("click", function(){
  d3.selectAll("p").style("font-size", function(){
    return Math.random()*40 + "px";
    })
  })
  
  var input = d3.select('input');
  var active = d3.select('.active');
  
  d3.select("input")
    .on('input', function() {
      var note_text = d3.event.target.value;
      active.text(note_text).classed("hide", note_text === "");
    });

    