<template>
  <div class="container-fluid">

    <div class='row p-3'>
    <div class='col-sm-*'><div class='p-1' style='width:100px'><img class='img-fluid' src="../../static/img/afc.png"></div></div>

    <div class='col'>
      <h5 class='text-dark'>West</h5>
      <ul v-if="afcWest"
          v-for="team in afcWest"
          :key='team.id'
          class='list-group'>
        <li class='list-group-item list-group-item-action list-group-item-dark'>
          <a :href="`/#/team/${team.ID}`">{{ team.Name }}</a></li>
      </ul>
    </div>
    <div class='col'>
      <h5 class='text-dark'>North</h5>
      <ul v-if="afcNorth"
          v-for="team in afcNorth"
          :key='team.id'
          class='list-group'>
        <li class='list-group-item list-group-item-action list-group-item-dark'>
          <a :href="`/#/team/${team.ID}`">{{ team.Name }}</a></li>
      </ul>
    </div>
    <div class='col'>
      <h5 class='text-dark'>East</h5>
      <ul v-if="afcEast"
          v-for="team in afcEast"
          :key='team.id'
          class='list-group'>
        <li class='list-group-item list-group-item-action list-group-item-dark'>
        <a :href="`/#/team/${team.ID}`">{{ team.Name }}</a></li>
      </ul>
    </div>


    <div class='col-sm-3'>
      <h5 class='text-dark'>South</h5>
      <ul v-if="afcSouth"
          v-for="team in afcSouth"
          :key='team.id'
          class='list-group'>
        <li class='list-group-item list-group-item-action list-group-item-dark'>
          <a :href="`/#/team/${team.ID}`">{{ team.Name }}</a></li>
      </ul>
    </div>

  </div>
    <div class='row border border-bottom-0 border-left-0 border-right-0 border-info p-3'>
    <div class='col-sm-*'><div class='p-1' style='width:100px'><img class='img-fluid' src="../../static/img/nfc.png"></div></div>


      <div class='col'>
      <h5 class='text-dark'>West</h5>
      <ul v-if="nfcWest"
          v-for="team in nfcWest"
          :key='team.id'
          class='list-group'>
        <li class='list-group-item list-group-item-action list-group-item-dark'>
        <a :href="`/#/team/${team.ID}`">{{ team.Name }}</a></li>

      </ul>
    </div>
    <div class='col'>
      <h5 class='text-dark'>North</h5>
      <ul v-if="nfcNorth"
          v-for="team in nfcNorth"
          :key='team.id'
          class='list-group'>
        <li class='list-group-item list-group-item-action list-group-item-dark'>
          <a :href="`/#/team/${team.ID}`">{{ team.Name }}</a></li>

      </ul>
    </div>
    <div class='col'>
      <h5 class='text-dark'>East</h5>
      <ul v-if="nfcEast"
          v-for="team in nfcEast"
          :key='team.id'
          :to="`/team/${team.id}`"
          class='list-group'>
        <li class='list-group-item list-group-item-action list-group-item-dark'>
        <a :href="`/#/team/${team.ID}`">{{ team.Name }}</a></li>

      </ul>
    </div>
    <div class='col'>
      <h5 class='text-dark'>South</h5>
      <ul v-if="nfcSouth"
          v-for="team in nfcSouth"
          :key='team.id'
          :to="`/team/${team.id}`"
          class='list-group'>
        <li class='list-group-item list-group-item-action list-group-item-dark'>
          <a :href="`/#/team/${team.ID}`">{{ team.Name }}</a></li>

      </ul>
  </div>

  </div>
  </div>
</template>

<script>
let teams
let afcWest = []
let afcEast = []
let afcNorth = []
let afcSouth = []
let nfcWest = []
let nfcEast = []
let nfcNorth = []
let nfcSouth = []
let afc = []
let nfc = []
export default {
  name: 'divisions',
  teams: {},
  afcWest: [],
  afcNorth: [],
  afcEast: [],
  afcSouth: [],
  nfcWest: [],
  nfcNorth: [],
  nfcEast: [],
  nfcSouth: [],
  afc: [],
  nfc: [],
  data () {
    return {
      teams: teams,
      afcWest: afcWest,
      afcEast: afcEast,
      afcNorth: afcNorth,
      afcSouth: afcSouth,
      nfcWest: nfcWest,
      nfcEast: nfcEast,
      nfcNorth: nfcNorth,
      nfcSouth: nfcSouth,
      afc: afc,
      nfc: nfc
    }
  },
  created () {
    this.axios.get('http://devtop:80/nfl_teams.php').then((response) => {
      this.teams = response.data
      this.teamSort()
    })
  },
  methods: {
    teamSort: function () {
      let teamlist = this.teams
      Object.keys(teamlist).forEach(key => {
        const team = teamlist[key]
        if (team.Conference === 'AFC') {
          this.afc.push(team)
          if (team.Division === 'West') {
            this.afcWest.push(team)
          }
          if (team.Division === 'East') {
            this.afcEast.push(team)
          }
          if (team.Division === 'North') {
            this.afcNorth.push(team)
          }
          if (team.Division === 'South') {
            this.afcSouth.push(team)
          }
        } else {
          this.nfc.push(team)
          if (team.Division === 'West') {
            this.nfcWest.push(team)
          }
          if (team.Division === 'East') {
            this.nfcEast.push(team)
          }
          if (team.Division === 'North') {
            this.nfcNorth.push(team)
          }
          if (team.Division === 'South') {
            this.nfcSouth.push(team)
          }
        }
      })
    }
  }
}
</script>
