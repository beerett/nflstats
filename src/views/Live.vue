<template>
  <div class="container-fluid">
    <div v-if="liveSchedule">
      <div class="table-responsive">
        <table class="table table-md table-hover">
          <thead>
            <tr>
              <th>Matchup</th>
              <th>Network</th>
              <th>Time</th>
              <th>Low</th>
              <th>High</th>
              <th></th>
              <th></th>
              <th>Stadium</th>
              
              
            </tr>
          </thead>
          <tbody>
                <tr v-for="game in liveSchedule">
                <td>{{ game.homeTeam }} vs {{ game.awayTeam }}</td>
                <td>{{ game.tvStation }} </td>
                <td>{{ game.gameTimeET }}</td>
                <td class='text-primary'>{{ game.low }}°F</td>
                <td class='text-success'>{{ game.high }}°F</td>
                <td><img v-bind:src="`${game.smallImg}`" /></td>
                <td><img  v-if='game.isDome == 1' v-bind:src="`${game.domeImg}`"></td>
                <td>{{ game.stadium }}</td>
                </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>;

<script>
let liveSchedule
export default {
  liveSchedule: {},
  name: 'live',
  data () {
    return {
      liveSchedule: liveSchedule
    }
  },
  created () {
    this.axios.get('http://devtop:80/nfl_weather.php').then((response) => {
      this.liveSchedule = response.data
    })
  }
}
</script>
