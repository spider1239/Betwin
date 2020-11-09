<template>
  <v-app>
    <v-app-bar
      app
      color="white"
      elevation="2"
      height="90"
      hide-on-scroll
      class="hidden-xs-only"
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          contain
          src="./assets/header_logo.png"
          height="120"
        />
      </div>
      <v-spacer></v-spacer>
      <router-link to="/connection">
        <v-btn class="button" color="primary" rounded dence>
          传讯息给我们
        </v-btn>
      </router-link>
      <v-icon class="mx-4" color="primary darken-4" large> mdi-email </v-icon>
      <v-icon color="primary darken-4" large> mdi-skype </v-icon>
      <v-icon class="mx-4" color="primary darken-4" large>
        mdi-telegram
      </v-icon>

      <template v-slot:extension>
        <v-tabs grow v-model="tab" v-bind="props">
          <v-tab append>
            <router-link to="/" class="nodecoration">首页</router-link>
          </v-tab>
          <v-tab>
            <router-link to="/system" class="nodecoration">
              系统介绍
            </router-link>
          </v-tab>
          <v-tab>
            <router-link to="/product" class="nodecoration">
              产品簡介
            </router-link>
          </v-tab>
          <v-tab>
            <router-link to="/partner" class="nodecoration">
              合作伙伴
            </router-link>
          </v-tab>
          <v-tab>
            <router-link to="/connection" class="nodecoration">
              联络我们
            </router-link>
          </v-tab>
        </v-tabs>
      </template>
    </v-app-bar>

    <v-app-bar class="hidden-sm-and-up" color="white" fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>
        <v-img
          alt="Vuetify Logo"
          contain
          src="./assets/header_logo.png"
          height="40"
        />
      </v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list-item class="my-1">
        <v-img src="./assets/header_logo.png" contain></v-img>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item-group v-model="selectedItem">
          <router-link to="/" class="nodecoration">
            <v-list-item link>
              <v-list-item-content> 首页 </v-list-item-content>
            </v-list-item>
          </router-link>
          <router-link to="/system" class="nodecoration">
            <v-list-item link>
              <v-list-item-content> 系统介绍 </v-list-item-content>
            </v-list-item>
          </router-link>
          <router-link to="/product" class="nodecoration">
            <v-list-item link>
              <v-list-item-content> 产品簡介 </v-list-item-content>
            </v-list-item>
          </router-link>
          <router-link to="/partner" class="nodecoration">
            <v-list-item link>
              <v-list-item-content> 合作伙伴 </v-list-item-content>
            </v-list-item>
          </router-link>
          <router-link to="/connection" class="nodecoration">
            <v-list-item link>
              <v-list-item-content> 联络我们 </v-list-item-content>
            </v-list-item>
          </router-link>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <router-view />

    <v-footer color="grey lighten-5 hidden-sm-and-down" elevation="3">
      <v-row justify="center">
        <v-col md="12" class="h6 text-center">
          关于我们 <br />
          <hr class="footer_line mb-5" />
        </v-col>

        <v-col md="3" class="px-auto">
          <v-card class="text-center pt-5 mx-15" elevation="1" height="230">
            <v-icon size="40" color="blue darken-4"> mdi-phone </v-icon>
            <div class="h6 mt-3 mb-4">联络我们</div>
            <router-link to="/connection">
              <v-btn class="button" color="primary" rounded>
                传讯息给我们
              </v-btn>
            </router-link>
          </v-card>
        </v-col>

        <v-col md="3">
          <v-card class="text-center pt-5 mx-15" elevation="1" height="230">
            <v-icon size="40" color="blue darken-4"> mdi-email </v-icon>
            <div class="h6 mt-3 mb-4">Email</div>
            <div class="primary--text h6">btwgaming@btwoffice.com</div>
          </v-card>
        </v-col>

        <v-col md="3">
          <v-card class="text-center pt-5 mx-15" elevation="1" height="230">
            <v-icon size="40" color="blue darken-4"> mdi-skype </v-icon>
            <div class="h6 mt-3 mb-4">Skype</div>
            <div class="primary--text h6">live:.cid.e6563c0aec147b56</div>
          </v-card>
        </v-col>

        <v-col md="3">
          <v-card class="text-center pt-5 mx-15" elevation="1" height="230">
            <v-icon size="40" color="blue darken-4"> mdi-telegram </v-icon>
            <div class="h6 mt-3 mb-4">Telegram</div>
            <div class="primary--text h6">
              @BTWmanager <br />
              @BTWsales <br />
              @BTWsales888
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-footer>

    <v-footer
      padless
      color="blue darken-4"
      class="white--text body-2 py-1 px-5 hidden-sm-and-down"
    >
      <v-avatar tile class="mr-2">
        <v-img src="./assets/logo.png" contain height="30"></v-img>
      </v-avatar>
      Copyright© BETWIN Gaming All Rights Reserved.
    </v-footer>

    <v-row class="hidden-md-and-up">
      <v-col sm="12" class="nopadding">
        <v-footer elevation="3">
          <v-row justify-sm="center">
            <v-col sm="12" cols="12" class="h6 text-center">
              关于我们 <br />
              <hr class="footer_line mb-5" />
            </v-col>

            <v-col sm="3" cols="6">
              <v-card class="text-center py-5" elevation="1" height="200">
                <v-icon size="40" color="blue darken-4"> mdi-phone </v-icon>
                <div class="h6 mt-3 mb-4">联络我们</div>
                <router-link to="/connection">
                  <v-btn class="button" color="primary" rounded>
                    传讯息给我们
                  </v-btn>
                </router-link>
              </v-card>
            </v-col>

            <v-col sm="3" cols="6">
              <v-card class="text-center py-5 px-2" elevation="1" height="200">
                <v-icon size="40" color="blue darken-4"> mdi-email </v-icon>
                <div class="h6 mt-3 mb-4">Email</div>
                <div class="primary--text h6">btwgaming@btwoffice.com</div>
              </v-card>
            </v-col>

            <v-col sm="3" cols="6">
              <v-card class="text-center py-5 px-2" elevation="1" height="220">
                <v-icon size="40" color="blue darken-4"> mdi-skype </v-icon>
                <div class="h6 mt-3 mb-4">Skype</div>
                <div class="primary--text h6">live:.cid.e6563c0aec147b56</div>
              </v-card>
            </v-col>

            <v-col sm="3" cols="6">
              <v-card class="text-center py-5" elevation="1" height="220">
                <v-icon size="40" color="blue darken-4"> mdi-telegram </v-icon>
                <div class="h6 mt-3 mb-4">Telegram</div>
                <div class="primary--text h6">
                  @BTWmanager <br />
                  @BTWsales <br />
                  @BTWsales888
                </div>
              </v-card>
            </v-col>
          </v-row>
        </v-footer>
        <v-footer padless color="blue darken-4" class="white--text body-2 pl-6">
          <v-avatar tile class="mr-2">
            <v-img src="./assets/logo.png" contain height="30"></v-img>
          </v-avatar>
          Copyright© BETWIN Gaming All Rights Reserved.
        </v-footer>
      </v-col>
    </v-row>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    selectedItem: 0,
    drawer: false,
    group: null,
    //
  }),

  watch: {
    group() {
      this.drawer = false;
    },
  },
};
</script>
<style>
@import "./styles/Typography.css";
@import "./styles/card.css";
.components {
  max-width: 90%;
}
.fullwidth {
  max-width: 100% !important;
}

.footer_line {
  border: 2px solid #2196f3;
  width: 100px;
  margin: 0 auto 0 auto;
}

.nopadding {
  padding: 0 !important;
}

.background_grey {
  background-color: #fafafa !important;
}

.nodecoration {
  text-decoration: none;
}
</style>
