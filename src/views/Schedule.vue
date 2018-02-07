<template>
  <div class='table-responsive'>
    
    
    <table class="table table-sm table-hover">
      <thead>
        <tr>
          <th>Week</th>
          <th>Day</th>
          <th>Date</th>
          <th>Winner</th>
          <th></th>
          <th>Loser</th>
          <th>Score</th>
          <th>Stadium</th>  
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>



          <tr v-for='game in nflschedule'>

            <th scope="row">{{ game.Week }}</th>
            <td>{{ game.Day }}</td>
            <td>{{ game.Date }}</td>
            <td><a :href="`/#/team/${game.WinnerTeamID}`">{{ game.Winner }}</a></td>
            <td>{{ game.Location }}</td>
            <td><a :href="`/#/team/${game.LoserTeamID}`">{{ game.Loser }}</a></td>
            <td>{{ game.PtsW }} - {{ game.PtsL }}</td>
            <td> {{ game.Stadium }}</td>
            <td> {{ game.StadiumType }}</td>
            <td> {{ game.Surface }}</td>


        </tr>
      </tbody>
    </table>
  </div>

    
</template>
<script>
let nflschedule
export default {
  name: 'schedule',
  nflschedule: {},
  data () {
    return {
      nflschedule: nflschedule
    }
  },
  created () {
    //  this.teamid = this.$route.params.id
    this.axios.get('nfl_schedule.php').then((response) => {
      this.nflschedule = response.data
      console.log(this.nflschedule)
    })
    this.axios.get('nfl_teams.php?match').then((response) => {
      this.teams = response.data
    })
  }
}
</script>
<style>
/* main {
  background-color: #151b1e;
  } */
</style>
