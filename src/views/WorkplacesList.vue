<template>
  <v-main>
    <v-container>
      <v-row>
        <template v-for="(workplace, index) in workplaces">
          <v-responsive
            v-if="$vuetify.breakpoint.xs || index % 2 == 0"
            :key="`width-${index}`"
            width="100%"
          ></v-responsive>
          <v-col :key="workplace.id" cols="6">
            <WorkplaceCard :workplace="workplace" />
          </v-col>
        </template>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
import WorkplaceCard from '@/components/WorkplaceCard.vue'
export default {
  data() {
    return {
      workplaces: [
        {
          id: 1,
          label: 'war-hole',
          name: 'Зона муз. индустрии',
          image: 'wp1.webp',
          averageAttendance: this.getRandomInt(15, 32),
          shortDescription:
            'Morbi mattis ullamcorper velit.Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla.',
        },
        {
          id: 2,
          label: 'orange',
          name: 'Архитектура',
          image: 'wp2.jpg',
          averageAttendance: this.getRandomInt(15, 32),
          shortDescription:
            'Morbi mattis ullamcorper velit.Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla.',
        },
        {
          id: 12,
          label: 'stairs',
          name: 'Зона IT –индустрий',
          image: 'wp3.jpg',
          averageAttendance: this.getRandomInt(15, 32),
          shortDescription:
            'Morbi mattis ullamcorper velit.Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla.',
        },
        {
          id: 4,
          label: 'timetowork',
          name: 'Коворкинг',
          image: 'wp4.jpg',
          averageAttendance: this.getRandomInt(15, 32),
          shortDescription:
            'Morbi mattis ullamcorper velit.Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla.',
        },
        {
          id: 5,
          label: 'cubes',
          name: 'Дизайн интерьеров',
          image: 'wp5.jpg',
          averageAttendance: this.getRandomInt(15, 32),
          shortDescription:
            'Morbi mattis ullamcorper velit.Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla.',
        },
        {
          id: 6,
          label: 'cillinders',
          name: 'Зона ремесленничества',
          image: 'wp6.jpg',
          averageAttendance: this.getRandomInt(15, 32),
          shortDescription:
            'Morbi mattis ullamcorper velit.Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla.',
        },
      ],
    }
  },
  methods: {
    getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min) + min)
    },
  },
  components: {
    WorkplaceCard,
  },
}
</script>

<style lang="scss" scoped></style>
