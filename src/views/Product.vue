<template>
  <v-container class="fullwidth">
    <v-content>
      <v-row class="text-center mt-1">
        <v-col cols="12" class="nopadding">
          <carousel-3d
            autoplay="true"
            width="1300"
            height="566"
            border="0"
            autoplayTimeout="4000"
          >
            <slide class="radio_image" :index="0">
              <v-img src="../assets/Product/p3_b01.jpg" contain></v-img>
            </slide>
            <slide class="radio_image" :index="1">
              <v-img src="../assets/Product/p3_b02.jpg" contain></v-img>
            </slide>
            <slide class="radio_image" :index="2">
              <v-img src="../assets/Product/p3_b03.jpg" contain></v-img>
            </slide>
            <slide class="radio_image" :index="3">
              <v-img src="../assets/Product/p3_b04.jpg" contain></v-img>
            </slide>
          </carousel-3d>
        </v-col>
      </v-row>

      <v-row>
        <v-col md="12" class="nopadding pt-12">
          <v-img src="../assets/Product/phone_simulation.jpg" height="90%">
            <div class="pl-15 pt-15 white--text">
              <v-row>
                <v-col md="4">
                  <div class="h2 font_Regular">客製化APP</div>
                  <div class="body-1">
                    移動裝置让您的帐户管理更加安全、快速，万款游戏，让您隨時透过手机、就能隨時隨地轻松娱乐，享受多元遊樂的快乐
                  </div>
                </v-col>
              </v-row>
            </div>
          </v-img>
        </v-col>
      </v-row>

      <v-row>
        <v-col md="12" class="nopadding mt-n10">
          <v-img src="../assets/Product/background.png" contain>
            <v-row>
              <v-col md="2" class="text-center">
                <v-img
                  src="../assets/Product/defensen_01.png"
                  contain
                  width="150"
                  style="margin: 0 auto 0 auto"
                  class="mb-6"
                />
                <div class="h6 blue--text text--darken-3 mb-2">资金安全</div>
                <div class="body-2 grey--text text--darken-1">
                  在Betwin渠道上，所有交易都是币对币的来往，跳脱以往第三方平台风控问题。
                </div>
              </v-col>
              <v-col md="2"></v-col>
              <v-col md="4" class="text-center">
                <div class="h3 primary--text text--darken-4 mb-n3">
                  高规格的防御系统
                </div>
                <div class="h5 primary--text text--darken-3">
                  Defense System
                </div>
                <div class="body-2 secondary--text text--darken-1">
                  强大的防御系统来保护您的数据、应用和伺服器，抵御多种安全攻击，提供高效的管理工具技术，来有效的监控和管理您的多种资源。
                </div>
              </v-col>
              <v-col md="2"></v-col>
              <v-col md="2" class="text-center">
                <v-img
                  src="../assets/Product/defensen_02.png"
                  contain
                  width="150"
                  style="margin: 0 auto 0 auto"
                  class="mb-6"
                />
                <div class="h6 blue--text text--darken-3 mb-2">
                  手机下载使用安全性加倍
                </div>
                <div class="body-2 grey--text text--darken-1">
                  单一登入控制，异常登入提醒，资讯整合于手机。
                </div>
              </v-col>
            </v-row>
            <v-row class="mt-n13">
              <v-col md="2"></v-col>
              <v-col md="2" class="text-center">
                <v-img
                  src="../assets/Product/defensen_03.png"
                  contain
                  width="150"
                  style="margin: 0 auto 0 auto"
                  class="mb-6"
                />
                <div class="h6 blue--text text--darken-3 mb-2">
                  币币兑换货币交换于弹指间
                </div>
                <div class="body-2 grey--text text--darken-1">
                  人民币：CGP币为1：1 支持：比特币BTC，以太坊ETH。
                </div>
              </v-col>
              <v-col md="4"> </v-col>
              <v-col md="2" class="text-center">
                <v-img
                  src="../assets/Product/defensen_04.png"
                  contain
                  width="150"
                  style="margin: 0 auto 0 auto"
                  class="mb-6"
                />
                <div class="h6 blue--text text--darken-3 mb-2">
                  系统自动上下分
                </div>
                <div class="body-2 grey--text text--darken-1">
                  系统提供上分，可依业主需求设定。
                </div>
              </v-col>
              <v-col md="2"></v-col>
            </v-row>
            <v-row class="mt-n13 mb-10">
              <v-col md="2"></v-col>
              <v-col md="2"> </v-col>
              <v-col md="2" class="text-center">
                <v-img
                  src="../assets/Product/defensen_05.png"
                  contain
                  width="150"
                  style="margin: 0 auto 0 auto"
                  class="mb-6"
                />
                <div class="h6 blue--text text--darken-3 mb-2">
                  免除帐户遭冻损失
                </div>
                <div class="body-2 grey--text text--darken-1">
                  Betwin支付以虚拟货币出入款，再也不怕帐户无端遭冻结。
                </div>
              </v-col>
              <v-col md="2" class="text-center">
                <v-img
                  src="../assets/Product/defensen_06.png"
                  contain
                  width="150"
                  style="margin: 0 auto 0 auto"
                  class="mb-6"
                />
                <div class="h6 blue--text text--darken-3 mb-2">
                  免管理机构监管
                </div>
                <div class="body-2 grey--text text--darken-1">
                  采用公开区块链技术，资料高度安全资讯隐匿。
                </div>
              </v-col>
              <v-col md="2"> </v-col>
              <v-col md="2"></v-col>
            </v-row>
          </v-img>
        </v-col>
      </v-row>
    </v-content>
  </v-container>
</template>

<script>
export default {
  name: "Product",
};
</script>
<style>
.radio_image {
  border-radius: 10px !important;
}
</style>
