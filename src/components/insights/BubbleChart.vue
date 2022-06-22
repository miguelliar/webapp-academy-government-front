<template>
  <figure class="highcharts-figure">
    <div class="bubble" id="bubble"></div>
  </figure>
</template>

<script>
import Vue from "vue";
import Highcharts from "highcharts";
import highchartsMore from "highcharts/highcharts-more";

highchartsMore(Highcharts);

export default Vue.extend({
  data() {
    return {
      selected: true,
      colors: [
        "#8B6391",
        "#53B9C9",
        "#D44A6F",
        "#FDCB5B",
        "#80C0A1",
        "#E67962",
        "#0086B2",
      ],
      counter: 0,
    };
  },
  props: {
    series: {
      content: Array({
        name: String,
        data: Array({
          name: String,
          value: Number,
        }),
      }),
    },
  },
  methods: {
    createChart() {
      Highcharts.chart("bubble", {
        chart: {
          type: "packedbubble",
          height: "90%",
          backgroundColor: "transparent",
          color: "white",
        },
        title: {
          text: "",
          style: {
            color: "#243D48",
            fontFamily: "Avenir, Helvetica, Arial, sans-serif",
            fontSize: "24px",
          },
        },
        legend: {
          enabled: false,
        },
        tooltip: {
          headerFormat:
            '<span style="font-size: 16px; font-weight: bolder ; color:#243D48;">{point.key}</span><br/>',
          style: {
            fontSize: 16,
          },
        },
        plotOptions: {
          packedbubble: {
            minSize: "45%",
            maxSize: "150%",
            layoutAlgorithm: {
              splitSeries: false,
              gravitationalConstant: 0.02,
            },
            dataLabels: {
              enabled: true,
              format: "{point.name}",
              style: {
                color: "#243D48",
                textOutline: "none",
                fontWeight: "normal",
                fontFamily: "Avenir, Helvetica, Arial, sans-serif",
                fontSize: "20px",
              },
            },
          },
        },
        series: this.series.content.reduce((totalSeries, serie) => {
          return [
            ...totalSeries,
            {
              name: serie.name, // Coffee series
              color: this.getColor(),
              data: serie.data,
            },
          ];
        }, []),
      });
    },
    getColor() {
      return this.colors[this.counter++];
    },
  },
  mounted() {
    this.createChart();
  },
});
</script>

<style scoped>
body {
  background-color: #e0e0e0;
  font: 14px Arial;
  padding: 15px;
}
select,
input {
  font: 14px Arial;
}
h3 {
  font-size: 16px;
  margin: 15px 0 4px 0;
  padding: 0;
}

.bubble {
  color: white;
}
.highcharts-figure {
  min-width: 320px;
  max-width: 1000px;
  margin: 1em auto;
  color: white;
}
</style>
