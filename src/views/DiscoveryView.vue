<template>
  <div>
    <h1>Explora</h1>
    <p>Aquí verás todo lo que necesites de las subvenciones</p>
    <BubbleChart :series="getData"></BubbleChart>
    <WordCloud :series="getDataWordCloud"></WordCloud>
  </div>
</template>

<script>
import BubbleChart from "@/components/insights/BubbleChart";
import WordCloud from "@/components/insights/WordCloud";

export default {
  name: "DiscoveryView",
  components: { BubbleChart, WordCloud },
  computed: {
    getDataWordCloud() {
      return {
        content: [
          {
            name: "Genres",
            data: [
              {
                value: 9,
                name: "News",
              },
              {
                value: 1338,
                name: "Drama",
              },
              {
                value: 144,
                name: "Fantasy",
              },
              {
                value: 224,
                name: "Horror",
              },
              {
                value: 100,
                name: "Biography",
              },
              {
                value: 84,
                name: "Music",
              },
              {
                value: 71,
                name: "War",
              },
              {
                value: 332,
                name: "Crime",
              },
              {
                value: 59,
                name: "Western",
              },
              {
                value: 179,
                name: "Family",
              },
              {
                value: 318,
                name: "Adventure",
              },
              {
                value: 408,
                name: "Action",
              },
              {
                value: 96,
                name: "History",
              },
              {
                value: 159,
                name: "Mystery",
              },
              {
                value: 116,
                name: "Sci-Fi",
              },
              {
                value: 52,
                name: "Musical",
              },
              {
                value: 272,
                name: "Thriller",
              },
              {
                value: 14,
                name: "Film-Noir",
              },
            ],
          },
        ],
      };
    },
    getData() {
      return {
        content: [
          {
            name: "Genres",
            data: [
              {
                // name property is used for the datalabel
                // value property is used for the volume of the bubble
                value: 312,
                name: "Documentary",
              },
              {
                value: 351,
                name: "Short",
              },
            ],
          },
          {
            name: "Genres",
            data: [
              {
                value: 217,
                name: "Animation",
              },
              {
                value: 832,
                name: "Comedy",
              },
              {
                value: 349,
                name: "Romance",
              },
              {
                value: 46,
                name: "Sport",
              },
            ],
          },
          {
            name: "Genres",
            data: [
              {
                value: 9,
                name: "News",
              },
              {
                value: 1338,
                name: "Drama",
              },
              {
                value: 144,
                name: "Fantasy",
              },
              {
                value: 224,
                name: "Horror",
              },
              {
                value: 100,
                name: "Biography",
              },
              {
                value: 84,
                name: "Music",
              },
              {
                value: 71,
                name: "War",
              },
              {
                value: 332,
                name: "Crime",
              },
              {
                value: 59,
                name: "Western",
              },
              {
                value: 179,
                name: "Family",
              },
              {
                value: 318,
                name: "Adventure",
              },
              {
                value: 408,
                name: "Action",
              },
              {
                value: 96,
                name: "History",
              },
              {
                value: 159,
                name: "Mystery",
              },
              {
                value: 116,
                name: "Sci-Fi",
              },
              {
                value: 52,
                name: "Musical",
              },
              {
                value: 272,
                name: "Thriller",
              },
              {
                value: 14,
                name: "Film-Noir",
              },
            ],
          },
          {
            name: "Genres",
            data: [
              {
                value: 10,
                name: "Game-Show",
              },
              {
                value: 12,
                name: "Talk-Show",
              },
              {
                value: 32,
                name: "Reality-TV",
              },
            ],
          },
        ],
      };
    },
  },
};
</script>

<style scoped></style>
