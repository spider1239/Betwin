<template>
  <v-container class="fullwidth">
    <v-content>
      <v-row class="text-center mt-1">
        <v-col cols="12" class="nopadding">
          <v-carousel
            :show-arrows="false"
            hide-delimiter-background
            delimiter-icon="mdi-minus"
            height="auto"
            class="hidden-sm-and-down"
          >
            <v-carousel-item src="../assets/Home/banner01.jpg">
            </v-carousel-item>
            <v-carousel-item src="../assets/Home/banner02.jpg">
            </v-carousel-item>
            <v-carousel-item src="../assets/Home/banner03.jpg">
            </v-carousel-item>
          </v-carousel>
          <v-carousel
            :show-arrows="false"
            hide-delimiter-background
            delimiter-icon="mdi-minus"
            height="auto"
            class="hidden-xs-only hidden-md-and-up mt-10"
          >
            <v-carousel-item src="../assets/Home/banner01.jpg">
            </v-carousel-item>
            <v-carousel-item src="../assets/Home/banner02.jpg">
            </v-carousel-item>
            <v-carousel-item src="../assets/Home/banner03.jpg">
            </v-carousel-item>
          </v-carousel>
          <v-carousel
            hide-delimiter-background
            hide-delimiters
            show-arrows-on-hover
            height="auto"
            class="hidden-sm-and-up"
          >
            <v-carousel-item src="../assets/Home/banner01.jpg">
            </v-carousel-item>
            <v-carousel-item src="../assets/Home/banner02.jpg">
            </v-carousel-item>
            <v-carousel-item src="../assets/Home/banner03.jpg">
            </v-carousel-item>
          </v-carousel>
        </v-col>
      </v-row>
      <v-row class="mt-8">
        <v-col md="12" class="text-center h5 primary--text text--darken-4">
          最牛包網
          <hr class="main_line mt-1" />
        </v-col>

        <v-row>
          <v-col md="3" class="text-center">
            <v-img
              src="../assets/Home/純原生APP.svg"
              contain
              height="90"
            ></v-img>
            <div class="h6 secondary--text text--darkent-3 mt-4">纯原生APP</div>
          </v-col>

          <v-col md="3" class="text-center">
            <v-img src="../assets/Home/客製化.svg" contain height="90"></v-img>
            <div class="h6 secondary--text text--darkent-3 mt-4">
              客制化视觉版面
            </div>
          </v-col>

          <v-col md="3" class="text-center">
            <v-img
              src="../assets/Home/跨平台額度.svg"
              contain
              height="90"
            ></v-img>
            <div class="h6 secondary--text text--darkent-3 mt-4">
              跨平台额度免转钱包
            </div>
          </v-col>

          <v-col md="3" class="text-center">
            <v-img src="../assets/Home/VIP升降.svg" contain height="90"></v-img>
            <div class="h6 secondary--text text--darkent-3 mt-4">
              VIP升降等系统
            </div>
          </v-col>

          <v-col md="3" class="text-center mt-10">
            <v-img
              src="../assets/Home/好友分享推荐系统.svg"
              contain
              height="90"
            ></v-img>
            <div class="h6 secondary--text text--darkent-3 mt-4">
              好友分享推荐系统
            </div>
          </v-col>

          <v-col md="3" class="text-center mt-10">
            <v-img src="../assets/Home/返水.svg" contain height="90"></v-img>
            <div class="h6 secondary--text text--darkent-3 mt-4">时时返水</div>
          </v-col>

          <v-col md="3" class="text-center mt-10">
            <v-img src="../assets/Home/大數據.svg" contain height="90"></v-img>
            <div class="h6 secondary--text text--darkent-3 mt-4">
              大数据分析管理后台
            </div>
          </v-col>

          <v-col md="3" class="text-center mt-10">
            <v-img
              src="../assets/Home/遊戲街口.svg"
              contain
              height="90"
            ></v-img>
            <div class="h6 secondary--text text--darkent-3 mt-4">
              游戏接口丰富
            </div>
          </v-col>
        </v-row>
      </v-row>

      <v-row class="my-15" justify="center">
        <v-col cols="12" class="text-center h5 primary--text text--darken-4">
          五大趨勢
          <hr class="main_line mt-1" />
        </v-col>

        <v-col md="2" sm="4" cols="6">
          <v-card elevation="0">
            <v-img
              src="../assets/Home/five/大数据分析管理后台.svg"
              contain
              class="text-center rounded-lg"
            >
              <v-overlay opacity=".35" absolute class="h5">
                大数据分析管理后台
              </v-overlay>
            </v-img>
          </v-card>
        </v-col>

        <v-col md="2" sm="4" cols="6">
          <v-card elevation="0">
            <v-img
              src="../assets/Home/five/高端攻防服务器.svg"
              contain
              class="text-center rounded-lg"
            >
              <v-overlay opacity=".35" absolute class="h5">
                高端攻防服务器
              </v-overlay>
            </v-img>
          </v-card>
        </v-col>

        <v-col md="2" sm="4" cols="6">
          <v-card elevation="0">
            <v-img
              src="../assets/Home/five/对接第三方支付.svg"
              contain
              class="text-center rounded-lg"
            >
              <v-overlay opacity=".35" absolute class="h5">
                对接第三方支付
              </v-overlay>
            </v-img>
          </v-card>
        </v-col>

        <v-col md="2" sm="4" cols="6">
          <v-card elevation="0">
            <v-img
              src="../assets/Home/five/客制化视觉版面.svg"
              contain
              class="text-center rounded-lg"
            >
              <v-overlay opacity=".35" absolute class="h5">
                客制化视觉版面
              </v-overlay>
            </v-img>
          </v-card>
        </v-col>

        <v-col md="2" sm="4" cols="6">
          <v-card elevation="0">
            <v-img
              src="../assets/Home/five/游戏API渠道完整建站.svg"
              contain
              class="text-center rounded-lg"
            >
              <v-overlay opacity=".35" absolute class="h5">
                游戏API渠道完整建站
              </v-overlay>
            </v-img>
          </v-card>
        </v-col>
      </v-row>
    </v-content>
  </v-container>
</template>

<script>
export default {
  name: "Home",
};
</script>
<style>
.main_line {
  width: 160px;
  border-top: 2px solid #2196f3;
  margin: 0 auto 0 auto;
}
.image-gradient {
  background-color: #212121;
  opacity: 30%;
}
</style>
