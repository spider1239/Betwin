<template>
  <v-container class="fullwidth">
    <v-content>
      <v-row class="text-center mt-sm-7">
        <v-col md="12" class="nopadding mt-sm-9 hidden-xs-only">
          <v-img
            src="../assets/System/Banner.jpg"
            contain
            height="100%"
          ></v-img>
        </v-col>
        <v-col md="12" class="nopadding mt-n3 hidden-sm-and-up">
          <v-img
            src="../assets/System/Banner.jpg"
            contain
            height="100%"
          ></v-img>
        </v-col>
      </v-row>
      <sequential-entrance delay="2000">
        <v-row class="hidden-sm-and-down">
          <v-col cols="12" class="mt-md-8 nopadding">
            <v-img src="../assets/System/big_image.jpg" contain></v-img>
          </v-col>
        </v-row>
      </sequential-entrance>

      <v-row class="hidden-md-and-up">
        <v-col sm="4" cols="6" class="text-center">
          <v-card elevation="0">
            <v-img
              src="../assets/System/免備案高防CDN.png"
              height="160"
              contain
            ></v-img>
            <div>
              <v-chip
                class="white--text h6 py-2 px-4 mt-2"
                color="blue darkent-1"
                >免备案高防CDN</v-chip
              >
            </div>
          </v-card>
        </v-col>

        <v-col sm="4" cols="6" class="text-center">
          <v-card elevation="0">
            <v-img
              src="../assets/System/DDOS高防IP.png"
              height="160"
              contain
            ></v-img>
            <div>
              <v-chip
                class="white--text h6 py-2 px-4 mt-2"
                color="blue darkent-1"
                >DDOS高防IP</v-chip
              >
            </div>
          </v-card>
        </v-col>

        <v-col sm="4" cols="6" class="text-center">
          <v-card elevation="0">
            <v-img
              src="../assets/System/防劫持CDN.png"
              height="160"
              contain
            ></v-img>
            <div>
              <v-chip
                class="white--text h6 py-2 px-4 mt-2"
                color="blue darkent-1"
                >防劫持CDN</v-chip
              >
            </div>
          </v-card>
        </v-col>

        <v-col sm="4" cols="6" class="text-center">
          <v-card elevation="0">
            <v-img
              src="../assets/System/網站加速CDN.png"
              height="160"
              contain
            ></v-img>
            <div>
              <v-chip
                class="white--text h6 py-2 px-4 mt-2"
                color="blue darkent-1"
                >網站加速CDN</v-chip
              >
            </div>
          </v-card>
        </v-col>

        <v-col sm="4" cols="6" class="text-center">
          <v-card elevation="0">
            <v-img
              src="../assets/System/CDN雲WAF.png"
              height="160"
              contain
            ></v-img>
            <div>
              <v-chip
                class="white--text h6 py-2 px-4 mt-2"
                color="blue darkent-1"
                >CDN雲WAF</v-chip
              >
            </div>
          </v-card>
        </v-col>

        <v-col sm="4" cols="6" class="text-center">
          <v-card elevation="0">
            <v-img
              src="../assets/System/301跳轉CDN.png"
              height="160"
              contain
            ></v-img>
            <div>
              <v-chip
                class="white--text h6 py-2 px-4 mt-2"
                color="blue darkent-1"
                >301跳轉CDN</v-chip
              >
            </div>
          </v-card>
        </v-col>
      </v-row>

      <v-row class="my-10" justify="center">
        <v-col md="6" class="text-center mb-4 hidden-sm-and-down">
          <div class="h3 primary--text text--darken-4 mb-n3">全站基礎設施</div>
          <div class="h5 primary--text text--darken-3">Global Site</div>
          <div class="body-2 secondary--text text--darken-1">
            全球国内外上千节点线路，有效解决突发且大量随机查询攻击、递回穿透攻击、流量攻击..等，多种针对域名解析的请求攻击，配备完善的当机检测报警机制、完美防御DDoS以及CC攻击，提供最优质的线路环境，为网络安全保驾护航。
          </div>
        </v-col>
        <v-col md="12" class="hidden-sm-and-down">
          <v-lazy
            transition="scroll-y-reverse-transition"
            hide-on-leave
            :options="{
              threshold: 0.5,
            }"
          >
            <v-img
              src="../assets/System/global.png"
              contain
              height="500"
            ></v-img>
          </v-lazy>
        </v-col>

        <v-col sm="4" class="hidden-md-and-up">
          <div class="h4 primary--text text--darken-4 mb-n2">全站基礎設施</div>
          <div class="h5 primary--text text--darken-3 mb-2">Global Site</div>
          <div class="body-2 secondary--text text--darken-1">
            全球国内外上千节点线路，有效解决突发且大量随机查询攻击、递回穿透攻击、流量攻击..等，多种针对域名解析的请求攻击，配备完善的当机检测报警机制、完美防御DDoS以及CC攻击，提供最优质的线路
          </div>
        </v-col>
        <v-col sm="8" class="hidden-md-and-up">
          <v-img
            src="../assets/System/global.png"
            width="500"
            transition="scroll-y-transition"
            hide-on-leave
          ></v-img>
        </v-col>
      </v-row>
    </v-content>
  </v-container>
</template>

<script>
export default {
  name: "System",
};
</script>
<style></style>
