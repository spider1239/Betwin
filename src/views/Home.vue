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
      <v-row class="mt-8" align="center">
        <v-img src="../assets/Home/最牛包往底圖.jpg" height="auto">
          <v-col md="12" class="text-center h5 primary--text text--darken-4">
            最牛包網系统
            <hr class="main_line mt-1" />
          </v-col>

          <v-row justify="center">
            <v-col md="2" sm="2" class="text-center">
              <v-hover>
                <template v-slot:default="{ hover }">
                  <v-card
                    :class="`elevation-${hover ? 4 : 0}`"
                    class="py-3 rounded-xl transition-swing"
                    outlined
                    color="transparent"
                  >
                    <v-img
                      src="../assets/Home/純原生APP.svg"
                      contain
                      class="animated rotateInDownRight"
                      height="90"
                    ></v-img>
                    <div class="h6 secondary--text text--darkent-3 mt-4">
                      纯原生APP
                    </div>
                  </v-card>
                </template>
              </v-hover>
            </v-col>

            <v-col md="2" sm="2" class="text-center">
              <v-hover>
                <template v-slot:default="{ hover }">
                  <v-card
                    :class="`elevation-${hover ? 4 : 0}`"
                    class="py-3 rounded-xl transition-swing"
                    outlined
                    color="transparent"
                  >
                    <v-img
                      src="../assets/Home/客製化.svg"
                      contain
                      height="90"
                    ></v-img>
                    <div class="h6 secondary--text text--darkent-3 mt-4">
                      客制化视觉版面
                    </div>
                  </v-card>
                </template>
              </v-hover>
            </v-col>

            <v-col md="2" sm="2" class="text-center">
              <v-hover>
                <template v-slot:default="{ hover }">
                  <v-card
                    :class="`elevation-${hover ? 4 : 0}`"
                    class="py-3 rounded-xl transition-swing"
                    outlined
                    color="transparent"
                  >
                    <v-img
                      src="../assets/Home/跨平台額度.svg"
                      contain
                      height="90"
                    >
                    </v-img>
                    <div class="h6 secondary--text text--darkent-3 mt-4">
                      跨平台额度免转钱包
                    </div>
                  </v-card>
                </template>
              </v-hover>
            </v-col>

            <v-col md="2" sm="2" class="text-center">
              <v-hover>
                <template v-slot:default="{ hover }">
                  <v-card
                    :class="`elevation-${hover ? 4 : 0}`"
                    class="py-3 rounded-xl transition-swing"
                    outlined
                    color="transparent"
                  >
                    <v-img src="../assets/Home/VIP升降.svg" contain height="90">
                    </v-img>
                    <div class="h6 secondary--text text--darkent-3 mt-4">
                      VIP升降等系统
                    </div>
                  </v-card>
                </template>
              </v-hover>
            </v-col>

            <v-col md="2" sm="2" class="text-center">
              <v-hover>
                <template v-slot:default="{ hover }">
                  <v-card
                    :class="`elevation-${hover ? 4 : 0}`"
                    class="py-3 rounded-xl transition-swing"
                    outlined
                    color="transparent"
                  >
                    <v-img
                      src="../assets/Home/好友分享推荐系统.svg"
                      contain
                      height="90"
                    >
                    </v-img>
                    <div class="h6 secondary--text text--darkent-3 mt-4">
                      好友分享推荐系统
                    </div>
                  </v-card>
                </template>
              </v-hover>
            </v-col>
          </v-row>
          <v-row justify="center" class="mt-5">
            <v-col md="2" sm="2" class="text-center">
              <v-hover>
                <template v-slot:default="{ hover }">
                  <v-card
                    :class="`elevation-${hover ? 4 : 0}`"
                    class="py-3 rounded-xl transition-swing"
                    outlined
                    color="transparent"
                  >
                    <v-img
                      src="../assets/Home/返水.svg"
                      contain
                      height="90"
                    ></v-img>
                    <div class="h6 secondary--text text--darkent-3 mt-4">
                      时时返水
                    </div>
                  </v-card>
                </template>
              </v-hover>
            </v-col>

            <v-col md="2" sm="2" class="text-center">
              <v-hover>
                <template v-slot:default="{ hover }">
                  <v-card
                    :class="`elevation-${hover ? 4 : 0}`"
                    class="py-3 rounded-xl transition-swing"
                    outlined
                    color="transparent"
                  >
                    <v-img
                      src="../assets/Home/大數據.svg"
                      contain
                      height="90"
                    ></v-img>
                    <div class="h6 secondary--text text--darkent-3 mt-4">
                      大数据分析管理后台
                    </div>
                  </v-card>
                </template>
              </v-hover>
            </v-col>

            <v-col md="2" sm="2" class="text-center">
              <v-hover>
                <template v-slot:default="{ hover }">
                  <v-card
                    :class="`elevation-${hover ? 4 : 0}`"
                    class="py-3 rounded-xl transition-swing"
                    outlined
                    color="transparent"
                  >
                    <v-img
                      src="../assets/Home/遊戲街口.svg"
                      contain
                      height="90"
                    ></v-img>
                    <div class="h6 secondary--text text--darkent-3 mt-4">
                      游戏接口丰富
                    </div>
                  </v-card>
                </template>
              </v-hover>
            </v-col>

            <v-col md="2" sm="2" class="text-center">
              <v-hover>
                <template v-slot:default="{ hover }">
                  <v-card
                    :class="`elevation-${hover ? 4 : 0}`"
                    class="py-3 rounded-xl transition-swing"
                    outlined
                    color="transparent"
                  >
                    <v-img
                      src="../assets/Home/每日签到.svg"
                      contain
                      height="90"
                    ></v-img>
                    <div class="h6 secondary--text text--darkent-3 mt-4">
                      每日签到
                    </div>
                  </v-card>
                </template>
              </v-hover>
            </v-col>

            <v-col md="2" sm="2" class="text-center">
              <v-hover>
                <template v-slot:default="{ hover }">
                  <v-card
                    :class="`elevation-${hover ? 4 : 0}`"
                    class="py-3 rounded-xl transition-swing"
                    outlined
                    color="transparent"
                  >
                    <v-img
                      src="../assets/Home/抢红包.svg"
                      contain
                      height="90"
                    ></v-img>
                    <div class="h6 secondary--text text--darkent-3 mt-4">
                      抢红包
                    </div>
                  </v-card>
                </template>
              </v-hover>
            </v-col>
          </v-row>
        </v-img>
      </v-row>
      <sequential-entrance fromBottom>
        <v-row class="my-15" justify="center">
          <v-col cols="12" class="text-center h5 primary--text text--darken-4">
            五大趨勢
            <hr class="main_line mt-1" />
          </v-col>

          <v-col md="2" sm="4" cols="6">
            <v-hover>
              <template v-slot:default="{ hover }">
                <v-card
                  :class="`elevation-${hover ? 4 : 0}`"
                  class="rounded-lg transition-swing"
                >
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
              </template>
            </v-hover>
          </v-col>

          <v-col md="2" sm="4" cols="6">
            <v-hover>
              <template v-slot:default="{ hover }">
                <v-card
                  :class="`elevation-${hover ? 4 : 0}`"
                  class="rounded-lg transition-swing"
                >
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
              </template>
            </v-hover>
          </v-col>

          <v-col md="2" sm="4" cols="6">
            <v-hover>
              <template v-slot:default="{ hover }">
                <v-card
                  :class="`elevation-${hover ? 4 : 0}`"
                  class="rounded-lg transition-swing"
                >
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
              </template>
            </v-hover>
          </v-col>

          <v-col md="2" sm="4" cols="6">
            <v-hover>
              <template v-slot:default="{ hover }">
                <v-card
                  :class="`elevation-${hover ? 4 : 0}`"
                  class="rounded-lg transition-swing"
                >
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
              </template>
            </v-hover>
          </v-col>

          <v-col md="2" sm="4" cols="6">
            <v-hover>
              <template v-slot:default="{ hover }">
                <v-card
                  :class="`elevation-${hover ? 4 : 0}`"
                  class="rounded-lg transition-swing"
                >
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
              </template>
            </v-hover>
          </v-col>
        </v-row>
      </sequential-entrance>
    </v-content>
  </v-container>
</template>

<script>
export default {
  name: "Home",
  data: () => ({
    isActive: false,
  }),
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
