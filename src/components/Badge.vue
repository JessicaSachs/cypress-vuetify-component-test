<template>
  <v-container>
    <v-row justify="space-around">
      <div>
        <v-btn
          class="mx-1"
          color="primary"
          @click="messages++"
          data-test="increment-badge"
        >
          Send Message
        </v-btn>

        <v-btn
          class="mx-1"
          color="error"
          @click="messages = 0"
          data-test="clear-badge"
        >
          Clear Notifications
        </v-btn>
      </div>

      <v-badge
        data-test="badge"
        :content="messages"
        :value="messages"
        color="green"
        overlap
      >
        <v-icon large>mdi-email</v-icon>
      </v-badge>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        messages: 0,
        show: false,
      }
    },
  }
</script>
