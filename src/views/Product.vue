<template>
  <v-container class="fullwidth">
    <v-content class="mt-sm-5 mt-md-5">
      <v-row class="text-center">
        <v-col cols="12" class="nopadding">
          <carousel-3d
            autoplay="true"
            width="1300"
            height="566"
            border="0"
            autoplayTimeout="3000"
            class="hidden-sm-and-down"
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

          <carousel-3d
            autoplay="true"
            width="600"
            height="300"
            border="0"
            autoplayTimeout="3000"
            class="hidden-md-and-up hidden-xs-only"
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

          <carousel-3d
            autoplay="true"
            width="300"
            height="150"
            border="0"
            autoplayTimeout="3000"
            class="hidden-sm-and-up"
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
        <v-col md="12" class="nopadding pt-sm-5 pt-0">
          <v-img src="../assets/Product/phone_simulation.jpg" height="90%">
            <div class="pl-sm-15 px-4 pt-md-15 pt-sm-10 white--text">
              <v-row>
                <v-col md="4" sm="5">
                  <div class="text-md-h3 text-sm-h4 h5 font_Regular pt-md-15">
                    客製化APP
                  </div>
                  <div class="body-1 text-sm-body2">
                    移動裝置让您的帐户管理更加安全、快速，万款游戏，让您隨時透过手机、就能隨時隨地轻松娱乐，享受多元遊樂的快乐
                  </div>
                </v-col>
              </v-row>
            </div>
          </v-img>
        </v-col>
      </v-row>

      <v-row>
        <v-col md="12" class="nopadding">
          <v-img
            src="../assets/Product/product.png"
            contain
            class="hidden-sm-and-down"
          >
          </v-img>
          <v-img
            src="../assets/Product/background.png"
            width="100%"
            contain
            class="hidden-md-and-up hidden-xs-only"
          >
            <v-row justify="center">
              <v-col class="text-center" sm="7">
                <div class="h5 primary--text text--darkent-4">
                  高规格的防御系统
                </div>
                <div class="subtitle1 primary--text text--darkent-3">
                  Defense System
                </div>
                <div class="secondary--text body-2">
                  强大的防御系统来保护您的数据、应用和伺服器，抵御多种安全攻击，提供高效的管理工具技术，来有效的监控和管理您的多种资源。
                </div>
              </v-col>
            </v-row>
          </v-img>

          <v-row
            class="text-center mt-sm-n15 hidden-md-and-up"
            justify="center"
          >
            <v-col sm="4" cols="6" class="nopadding mt-sm-0 mt-5">
              <v-img
                src="../assets/Product/defensen_01.png"
                contain
                height="160"
              ></v-img>
              <div class="subtitle1 text-sm-h6 primary--text text--darkent-3">
                资金安全
              </div>
              <div class="mx-5 grey--text text-sm-body1 body2 text--darken-1">
                在Betwin渠道上，所有交易都是币对币的来往，跳脱以往第三方平台风控问题。
              </div>
            </v-col>
            <v-col sm="4" cols="6" class="nopadding mt-sm-0 mt-5">
              <v-img
                src="../assets/Product/defensen_02.png"
                contain
                height="160"
              ></v-img>
              <div class="subtitle1 text-sm-h6 primary--text text--darkent-3">
                手机下载使用<br />安全性加倍
              </div>
              <div class="mx-5 grey--text text-sm-body1 body2 text--darken-1">
                单一登入控制，异常登入提醒，资讯整合于手机。
              </div>
            </v-col>
            <v-col sm="4" cols="6" class="nopadding mt-sm-0 mt-5">
              <v-img
                src="../assets/Product/defensen_03.png"
                contain
                height="160"
              ></v-img>
              <div class="subtitle1 text-sm-h6 primary--text text--darkent-3">
                币币兑换 <br />
                货币交换于弹指间
              </div>
              <div class="mx-5 grey--text text-sm-body1 body2 text--darken-1">
                人民币：CGP币为1：1 支持：比特币BTC，以太坊ETH。
              </div>
            </v-col>
            <v-col sm="4" cols="6" class="nopadding mt-sm-0 mt-5">
              <v-img
                src="../assets/Product/defensen_04.png"
                contain
                height="160"
              ></v-img>
              <div class="subtitle1 text-sm-h6 primary--text text--darkent-3">
                系统自动计分
              </div>
              <div class="mx-5 grey--text text-sm-body1 body2 text--darken-1">
                系统提供计分，可依业主需求设定。
              </div>
            </v-col>
            <v-col sm="4" cols="6" class="nopadding mt-sm-0 mt-5">
              <v-img
                src="../assets/Product/defensen_05.png"
                contain
                height="160"
              ></v-img>
              <div class="subtitle1 text-sm-h6 primary--text text--darkent-3">
                免除帐户遭冻损失
              </div>
              <div class="mx-5 grey--text text-sm-body1 body2 text--darken-1">
                Betwin支付以虚拟货币出入款，再也不怕帐户无端遭冻结。
              </div>
            </v-col>
            <v-col sm="4" cols="6" class="nopadding mt-sm-0 mt-5">
              <v-img
                src="../assets/Product/defensen_06.png"
                contain
                height="160"
              ></v-img>
              <div class="subtitle1 text-sm-h6 primary--text text--darkent-3">
                免管理机构监管
              </div>
              <div class="mx-5 grey--text text-sm-body1 body2 text--darken-1">
                采用公开区块链技术，资料高度安全资讯隐匿。
              </div>
            </v-col>
          </v-row>
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
