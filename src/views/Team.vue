<template>
  <div class='container'>
    {{ team}}
    <div v-if="team">
      <div v-for='info in team'>
      <div class='row'>
        <div class='col'>{{ info.Name }} - {{ info.Abbreviation }}</div>
        <div class='col'>{{ info.Conference }} - {{ info.Division }}</div>
        <div class='col'>{{ info.Stadium }} -  {{ info.StadiumType }} - {{ info.Surface }}</div>
      </div>
      
      
      </div>
    </div>
  </div>
</template>
<script>
  let teamid
  let team
  export default {
    team: {},
    data () {
      return {
        teamid: teamid,
        team: team
      }
    },
    created () {
      this.teamid = this.$route.params.id
      this.axios.get('nfl_teams.php?id=' + this.teamid).then((response) => {
        this.team = response.data
      })
    }
  }
</script>
